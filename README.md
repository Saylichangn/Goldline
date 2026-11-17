<p align="center">
  <strong>Team Goldline</strong> · <strong>IIT Madras Road Safety Hackathon 2026</strong> · <strong>RoadSoS</strong>
</p>

<p align="center">
  <a href="https://github.com/Saylichangn/Goldline"><img alt="GitHub" src="https://img.shields.io/badge/GitHub-Saylichangn%2FGoldline-1a1814?style=flat-square&logo=github&logoColor=f3f1ea" /></a>
  <a href="https://roadsafetyhackathon-six.vercel.app"><img alt="Live brief" src="https://img.shields.io/badge/brief-live-ff2d1a?style=flat-square" /></a>
  <img alt="Expo SDK 54" src="https://img.shields.io/badge/mobile-Expo%20SDK%2054-1a1814?style=flat-square&logo=expo&logoColor=f3f1ea" />
</p>

Offline-first road-safety HUD and emergency SOS. Built for the stretch after a crash, when the network is already gone.

**Sayli Changan** · [github.com/Saylichangn/Goldline](https://github.com/Saylichangn/Goldline)

| | |
|---|---|
| **Mobile app** | [goldline-mobile](goldline-mobile/) |
| **Live brief** | [roadsafetyhackathon-six.vercel.app](https://roadsafetyhackathon-six.vercel.app) |
| **Package** | `com.goldline.app` · deep link `goldline://` |

## What it does

Hold SOS, pick the incident, and the app keeps a path open without a connection: ICE and 108 SMS intents, nearest trauma point, a trauma HUD with a timer and torch, START triage, and a bystander QR. Naari Shakti is a separate lane for a women's safety portal.

SMS and calls go through the phone's own intents. The person still taps Send or Call.

## Run it

```bash
cd goldline-mobile
npm install --legacy-peer-deps
npx expo install react-native-worklets babel-preset-expo
cp .env.example .env
npm test
npm run android
```

Expo Go, same Wi-Fi:

```bash
cd goldline-mobile
npm run start:lan
```

Optional web prototype:

```bash
cd goldline
npm install
npm run dev
```

## Layout

```
goldline-mobile/     Expo SDK 54 app
goldline/            Next.js prototype and Sarthi API routes
supabase/             migrations
scripts/              corridor ingest
```

[MIT](LICENSE) · Team Goldline · IIT Madras RoadSoS 2026
