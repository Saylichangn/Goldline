import { router } from 'expo-router';
import { GoldlineTopBar } from './GoldlineTopBar';

/**
 * Legacy import surface. Routes through the new GoldlineTopBar so older screens (`ScreenShell`,
 * `EmergencyStepShell`) keep their imports without a sweep.
 */
export function HudAppBar({
  showBack,
  onBack,
  showBrand,
  live,
}: {
  showBack?: boolean;
  onBack?: () => void;
  showBrand?: boolean;
  live?: boolean;
}) {
  void showBrand;
  void live;
  return (
    <GoldlineTopBar
      title="Goldline"
      showBack={showBack}
      onBack={onBack ?? (() => router.back())}
    />
  );
}
