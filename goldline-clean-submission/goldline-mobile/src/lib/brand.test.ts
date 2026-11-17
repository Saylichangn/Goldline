import {
  APP_DISPLAY_NAME,
  APP_TAGLINE,
  GHP_HASH_PREFIX,
  GHP_SMS_HEADER,
  LEGACY_GHP_HEADERS,
  TEAM_DISPLAY_NAME,
  permissionCopy,
} from './brand';

test('display name is Goldline', () => {
  expect(APP_DISPLAY_NAME).toBe('Goldline');
});

test('team display name is Team Goldline', () => {
  expect(TEAM_DISPLAY_NAME).toBe('Team Goldline');
});

test('tagline is set', () => {
  expect(APP_TAGLINE).toContain('path');
});

test('GHP SMS header uses Goldline', () => {
  expect(GHP_SMS_HEADER).toBe('GOLDLINE GHP');
});

test('hash prefix is mg', () => {
  expect(GHP_HASH_PREFIX).toBe('mg');
});

test('legacy GHP headers include Goldline', () => {
  expect(LEGACY_GHP_HEADERS).toContain('GOLDLINE GHP');
});

test('location permission mentions Goldline', () => {
  expect(permissionCopy.locationWhenInUse()).toContain('Goldline');
});

test('camera permission mentions Goldline', () => {
  expect(permissionCopy.camera()).toContain('Goldline');
});

test('microphone permission mentions Goldline', () => {
  expect(permissionCopy.microphone()).toContain('Goldline');
});
