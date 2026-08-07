import { site } from "@/lib/site";

export default function LocationMap() {
  const query = encodeURIComponent(`${site.address.line1}, ${site.address.line2}`);

  return (
    <div className="aspect-[4/3] w-full overflow-hidden border border-black/10">
      <iframe
        title={`Map to ${site.name}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
