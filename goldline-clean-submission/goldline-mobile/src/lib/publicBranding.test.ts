import { findPublicBrandingViolation } from './publicBranding';

describe('publicBranding', () => {
  it('allows Goldline in public copy', () => {
    expect(findPublicBrandingViolation('Welcome to Goldline app')).toBeNull();
  });

  it('allows legacy section after heading', () => {
    const body = `# Goldline\n\n## Legacy compatibility\n\nGOLDLINE GHP is still parsed.\n`;
    expect(findPublicBrandingViolation(body)).toBeNull();
  });

  it('allows Team Goldline credit on banners', () => {
    expect(
      findPublicBrandingViolation(
        'Team Goldline · IIT Madras · Goldline — When signal drops, the path still holds.',
      ),
    ).toBeNull();
  });
});
