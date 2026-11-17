import Link from 'next/link';
import { GoldlineLogo } from './GoldlineLogo';

export function AppShell({
  children,
  backHref,
  title,
}: {
  children: React.ReactNode;
  backHref?: string;
  title?: string;
}) {
  return (
    <div className="gold-grain relative min-h-dvh">
      <div className="gold-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex min-h-dvh max-w-lg flex-col px-4 pb-8 pt-6">
        <header className="mb-6 flex items-center justify-between">
          {backHref ? (
            <Link href={backHref} className="gold-btn-ghost -ml-2">
              ← Back
            </Link>
          ) : (
            <GoldlineLogo size="sm" />
          )}
          {title && <h1 className="text-sm font-medium text-[var(--gold-muted)]">{title}</h1>}
          {!backHref && <div className="w-16" />}
        </header>
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </div>
  );
}
