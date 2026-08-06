export default function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-apex-black text-white">
      <div className="absolute inset-0 bg-grit opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 0%, rgba(182,83,24,0.32), transparent 45%), rgba(20,20,20,0.6)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-apex-copper-bright">
          {kicker}
        </p>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-semibold uppercase leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
