## v1.5.0 — Goldline rebrand

### Highlights

- **New identity:** Goldline (Care Path) — royal blue and orange design system from the heart/path logo.
- **Native app:** `com.goldline.app`, URL scheme `goldline://`, white splash, Goldline wordmark across tabs and onboarding.
- **Golden Hour packets:** SMS header `GOLDLINE GHP`, hash prefix `mg-`; QR format unchanged (`ND1:`).

### Upgrade notes

- Install as a **new app** on device (package ID changed to `com.goldline.app`).
- Run `npx expo prebuild --clean` before building APK.
- Optional: replace `goldline-mobile/assets/icon.png` from `goldline-logo-source.png` (see `assets/GOLDLINE_ASSETS.md`).

### Verification

```bash
cd goldline-mobile && npm test && npm run typecheck
```
