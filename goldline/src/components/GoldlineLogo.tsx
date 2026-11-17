export function GoldlineLogo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const s = size === 'sm' ? 'text-lg' : 'text-2xl';
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--gold-amber)] font-bold text-[#0a0e14] ${size === 'sm' ? 'h-7 w-7 text-sm' : ''}`}
        aria-hidden
      >
        G
      </span>
      <span className={`font-display font-bold tracking-tight ${s}`}>
        Goldline
      </span>
    </div>
  );
}
