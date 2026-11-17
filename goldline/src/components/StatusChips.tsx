'use client';

import { Signal, SignalZero, Database, Battery } from 'lucide-react';

export function StatusChips({
  offline,
  packReady = true,
  batterySaver = false,
}: {
  offline?: boolean;
  packReady?: boolean;
  batterySaver?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="status">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-surface)] px-2.5 py-1 text-xs font-medium text-[var(--gold-muted)]">
        {offline ? (
          <SignalZero className="h-3.5 w-3.5 text-[var(--gold-amber)]" aria-hidden />
        ) : (
          <Signal className="h-3.5 w-3.5 text-[var(--gold-cyan)]" aria-hidden />
        )}
        {offline ? 'Offline mode' : 'Online'}
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--gold-border)] bg-[var(--gold-surface)] px-2.5 py-1 text-xs font-medium text-[var(--gold-muted)]">
        <Database className="h-3.5 w-3.5" aria-hidden />
        {packReady ? 'Corridor pack ready' : 'Pack missing'}
      </span>
      {batterySaver && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--gold-amber)]/30 bg-[var(--gold-amber)]/10 px-2.5 py-1 text-xs font-medium text-[var(--gold-amber)]">
          <Battery className="h-3.5 w-3.5" aria-hidden />
          Battery saver
        </span>
      )}
    </div>
  );
}
