const steps = [
  {
    number: "01",
    title: "Tell us about the project",
    body: "Submit the estimate form, call, or send photos and basic project details.",
  },
  {
    number: "02",
    title: "On-site evaluation",
    body: "We review access, conditions, materials, disposal requirements, and scope.",
  },
  {
    number: "03",
    title: "Clear estimate",
    body: "You receive a defined project scope and estimate before work begins.",
  },
  {
    number: "04",
    title: "Work and cleanup",
    body: "Apex completes the work and leaves the site ready for what's next.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="border-t border-black/10">
      {steps.map((step) => (
        <div
          key={step.number}
          className="grid grid-cols-[64px_1fr] gap-6 border-b border-black/10 py-7 sm:grid-cols-[95px_1fr] sm:gap-8"
        >
          <div className="font-display text-3xl leading-none text-apex-copper sm:text-5xl">
            {step.number}
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-tight sm:text-xl">
              {step.title}
            </h3>
            <p className="mt-2 max-w-xl leading-relaxed text-black/60">{step.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
