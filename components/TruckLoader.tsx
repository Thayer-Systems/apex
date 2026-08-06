export default function TruckLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 text-center">
      <div className="relative h-20 w-full overflow-hidden">
        <div className="absolute bottom-2 left-0 h-px w-full bg-black/10" />
        <div className="animate-truck-drive absolute bottom-2 left-0">
          <svg width="96" height="52" viewBox="0 0 96 52" fill="none" aria-hidden="true">
            <rect x="2" y="18" width="52" height="20" rx="2" fill="var(--apex-copper)" />
            <path d="M54 24H78L88 34V38H54V24Z" fill="var(--apex-black)" />
            <rect x="58" y="27" width="14" height="9" rx="1" fill="var(--apex-cream)" />
            <g className="animate-wheel-spin" style={{ transformOrigin: "16px 42px" }}>
              <circle cx="16" cy="42" r="7" fill="var(--apex-black)" />
              <circle cx="16" cy="42" r="2.5" fill="var(--apex-cream)" />
            </g>
            <g className="animate-wheel-spin" style={{ transformOrigin: "74px 42px" }}>
              <circle cx="74" cy="42" r="7" fill="var(--apex-black)" />
              <circle cx="74" cy="42" r="2.5" fill="var(--apex-cream)" />
            </g>
          </svg>
          <span className="animate-dust-puff absolute -left-2 bottom-1 h-2 w-2 rounded-full bg-black/20" />
          <span
            className="animate-dust-puff absolute -left-4 bottom-1 h-1.5 w-1.5 rounded-full bg-black/15"
            style={{ animationDelay: "0.15s" }}
          />
        </div>
      </div>
      <p className="font-display text-sm font-semibold uppercase tracking-[0.1em] text-black/60">
        Sending your request&hellip;
      </p>
    </div>
  );
}
