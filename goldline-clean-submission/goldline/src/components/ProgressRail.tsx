'use client';

const STEPS = ['Locate', 'Triage', 'Route', 'Packet', 'Relay'] as const;

export type EmergencyStep = (typeof STEPS)[number];

export function ProgressRail({ current }: { current: EmergencyStep }) {
  const idx = STEPS.indexOf(current);
  return (
    <nav aria-label="Emergency progress" className="mb-6">
      <ol className="flex items-center justify-between gap-1">
        {STEPS.map((step, i) => {
          const done = i < idx;
          const active = i === idx;
          return (
            <li key={step} className="flex flex-1 flex-col items-center gap-1">
              <span
                className={`flex h-2 w-full max-w-[40px] rounded-full transition ${
                  done
                    ? 'bg-[var(--gold-amber)]'
                    : active
                      ? 'bg-[var(--gold-amber)] animate-pulse-ring'
                      : 'bg-[var(--gold-border)]'
                }`}
              />
              <span
                className={`text-[10px] font-medium uppercase tracking-wider ${
                  active ? 'text-[var(--gold-amber)]' : 'text-[var(--gold-muted)]'
                }`}
              >
                {step}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
