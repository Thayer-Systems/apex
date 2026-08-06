"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import clsx from "clsx";

export default function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-display text-base font-semibold uppercase tracking-wide sm:text-lg">
                {item.q}
              </span>
              <Plus
                size={20}
                className={clsx(
                  "shrink-0 text-apex-copper transition-transform duration-200",
                  isOpen && "rotate-45"
                )}
              />
            </button>
            {isOpen && (
              <p className="max-w-3xl pb-6 leading-relaxed text-black/60">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
