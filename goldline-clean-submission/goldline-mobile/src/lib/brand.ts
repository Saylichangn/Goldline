/** Single source for Goldline product identity strings. */

export const APP_DISPLAY_NAME = 'Goldline';

/** Hackathon team credit (product name remains Goldline). */
export const TEAM_DISPLAY_NAME = 'Team Goldline';

/** Dashboard header line under Goldline. */
export const TEAM_ATTRIBUTION_LINE = 'BY TEAM GOLDLINE';

export const APP_TAGLINE = 'When signal drops, the path still holds.';

export const GHP_SMS_HEADER = 'GOLDLINE GHP';

export const GHP_HASH_PREFIX = 'mg';

export const LEGACY_GHP_HEADERS = ['GOLDLINE GHP'] as const;

export const permissionCopy = {
  locationWhenInUse: () =>
    'Goldline uses your location during an active journey to route emergencies and build the Golden Hour Packet.',
  camera: () => 'Goldline uses the camera to scan bystander relay QR codes.',
  microphone: () =>
    'Goldline records short emergency audio during Naari Shakti distress activation and may listen for distress sounds during an active journey.',
  photoLibrary: () => 'Goldline uses your photo library so you can choose a profile picture.',
};
