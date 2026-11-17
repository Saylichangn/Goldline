import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const SKIP_DIRS = new Set([
  'node_modules',
  '.git',
  '.expo',
  'android',
  'ios',
  'dist',
  '.next',
]);

const SKIP_PATH_PREFIXES = [
  'docs/VERSION_HISTORY.md',
  'docs/design/refs/',
  'goldline-mobile/src/lib/brand.ts',
  'goldline-mobile/src/lib/brand.test.ts',
];

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const rel = path.relative(repoRoot, full).replace(/\\/g, '/');
    if (SKIP_DIRS.has(name)) continue;
    if (SKIP_PATH_PREFIXES.some((p) => rel.startsWith(p))) continue;
    const st = statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (/\.(md|html|yml|yaml|tsx|ts|svg|json|mjs|js)$/.test(name)) acc.push(full);
  }
  return acc;
}

function transform(body, rel) {
  let out = body;
  out = out.replace(/\bGoldline\b/g, 'Goldline');
  out = out.replace(/GOLDLINE/g, 'GOLDLINE');
  out = out.replace(/GOLDLINE_MASTER_BRIEF/g, 'GOLDLINE_MASTER_BRIEF');
  out = out.replace(/GOLDLINE_FINAL_IMPLEMENTATION_PLAN/g, 'GOLDLINE_FINAL_IMPLEMENTATION_PLAN');
  out = out.replace(/GOLDLINE_REFINEMENT_PLAN/g, 'GOLDLINE_REFINEMENT_PLAN');
  out = out.replace(/GOLDLINE_STITCH_FINAL_IMPLEMENTATION_PLAN/g, 'GOLDLINE_STITCH_FINAL_IMPLEMENTATION_PLAN');
  out = out.replace(/GOLDLINE_V2_IMPLEMENTATION_PLAN/g, 'GOLDLINE_V2_IMPLEMENTATION_PLAN');
  out = out.replace(/GOLDLINE_GOLDLINE_MASTER_ENCYCLOPEDIA/g, 'GOLDLINE_MASTER_ENCYCLOPEDIA');
  out = out.replace(/GOLDLINE_TEAM_GUIDE/g, 'GOLDLINE_TEAM_GUIDE');
  out = out.replace(/GOLDLINE_COMPLETE_UI_BRIEF/g, 'GOLDLINE_COMPLETE_UI_BRIEF');
  out = out.replace(/GOLDLINE_COMPLETE_PROJECT/g, 'GOLDLINE_COMPLETE_PROJECT');
  out = out.replace(/goldline-complete\.html/g, 'goldline-complete.html');
  if (!rel.includes('VERSION_HISTORY') && !rel.includes('brand.ts') && !rel.includes('brand.test')) {
    out = out.replace(/GOLDLINE GHP/g, 'GOLDLINE GHP');
    out = out.replace(/\bGOLDLINE\b/g, 'GOLDLINE');
  }
  out = out.replace(/GovTech navy/gi, 'Care Path royal blue');
  out = out.replace(/com\.goldline\.app/g, 'com.goldline.app');
  out = out.replace(/goldline:\/\//g, 'goldline://');
  return out;
}

let changed = 0;
for (const file of walk(repoRoot)) {
  const rel = path.relative(repoRoot, file).replace(/\\/g, '/');
  if (rel === 'scripts/goldline-doc-sweep.mjs') continue;
  if (rel === 'goldline-mobile/scripts/verify-public-branding.mjs') continue;
  if (rel === 'goldline-mobile/src/lib/publicBranding.ts') continue;
  const before = readFileSync(file, 'utf8');
  const after = transform(before, rel);
  if (after !== before) {
    writeFileSync(file, after, 'utf8');
    changed++;
  }
}

console.log(`Updated ${changed} files`);
