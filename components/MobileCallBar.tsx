import Link from "next/link";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 bg-apex-black py-4 text-sm font-semibold uppercase tracking-wide text-white"
      >
        <Phone size={16} className="text-apex-copper-bright" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center bg-apex-copper py-4 text-sm font-semibold uppercase tracking-wide text-white"
      >
        Free Estimate
      </Link>
    </div>
  );
}
