'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AppShell } from '@/components/AppShell';

export default function SettingsPage() {
  const [largeText, setLargeText] = useState(false);
  const [batterySaver, setBatterySaver] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    setLargeText(localStorage.getItem('goldline-large') === '1');
    setBatterySaver(localStorage.getItem('goldline-battery') === '1');
    setLang(localStorage.getItem('goldline-lang') ?? 'en');
    document.documentElement.style.setProperty(
      '--font-scale',
      localStorage.getItem('goldline-large') === '1' ? '1.15' : '1'
    );
  }, []);

  function toggleLarge(v: boolean) {
    setLargeText(v);
    localStorage.setItem('goldline-large', v ? '1' : '0');
    document.documentElement.style.setProperty('--font-scale', v ? '1.15' : '1');
  }

  function toggleBattery(v: boolean) {
    setBatterySaver(v);
    localStorage.setItem('goldline-battery', v ? '1' : '0');
  }

  return (
    <AppShell backHref="/" title="Settings">
      <h2 className="mb-6 text-xl font-semibold font-[family-name:var(--font-display)]">
        Accessibility & battery
      </h2>

      <div className="gold-card divide-y divide-[var(--gold-border)]">
        <label className="flex items-center justify-between p-4">
          <span className="text-sm font-medium">Large text</span>
          <input
            type="checkbox"
            checked={largeText}
            onChange={(e) => toggleLarge(e.target.checked)}
            className="h-5 w-5 accent-[var(--gold-amber)]"
          />
        </label>
        <label className="flex items-center justify-between p-4">
          <span className="text-sm font-medium">Battery saver</span>
          <input
            type="checkbox"
            checked={batterySaver}
            onChange={(e) => toggleBattery(e.target.checked)}
            className="h-5 w-5 accent-[var(--gold-amber)]"
          />
        </label>
        <div className="p-4">
          <span className="text-sm font-medium">Language</span>
          <select
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
              localStorage.setItem('goldline-lang', e.target.value);
            }}
            className="mt-2 w-full rounded-xl border border-[var(--gold-border)] bg-[var(--gold-bg)] px-3 py-3 text-sm"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
            <option value="ta">தமிழ்</option>
          </select>
        </div>
      </div>

      <p className="mt-4 text-xs text-[var(--gold-muted)]">
        Battery saver: single GPS read, no live map, text-first triage.
      </p>
      <Link href="/" className="gold-btn-ghost mt-8 block text-center">
        Back to home
      </Link>
    </AppShell>
  );
}
