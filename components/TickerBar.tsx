import { site } from "@/lib/site";

const items = [
  `Free Estimates — Call ${site.phone} Now`,
  "Residential & Commercial",
  "Licensed & Insured",
  "Serving the Greater Dayton Area",
];

export default function TickerBar() {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-black/10 bg-apex-copper text-white">
      <div className="flex w-max animate-marquee py-3">
        {loop.map((text, i) => (
          <span
            key={i}
            className="font-display mx-6 flex items-center gap-6 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.1em]"
          >
            {text}
            <span className="text-white/50">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
