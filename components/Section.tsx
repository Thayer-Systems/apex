import { ReactNode } from "react";
import clsx from "clsx";

export function Section({
  children,
  className,
  tight,
  id,
}: {
  children: ReactNode;
  className?: string;
  tight?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className={clsx(tight ? "py-14 md:py-16" : "py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}

export function Kicker({ children, dark }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={clsx(
        "font-display mb-3 text-xs font-semibold uppercase tracking-[0.22em]",
        dark ? "text-apex-copper-bright" : "text-apex-copper"
      )}
    >
      {children}
    </p>
  );
}
