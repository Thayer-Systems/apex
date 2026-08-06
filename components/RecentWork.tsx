import Image from "next/image";

const photos = [
  { src: "/photos/gallery-excavation-hole.jpg", alt: "Foundation excavation for a new home" },
  { src: "/photos/gallery-foundation.jpg", alt: "Poured footings ready for construction" },
  { src: "/photos/gallery-crew.jpg", alt: "Apex crew setting up a concrete patio pour" },
  { src: "/photos/gallery-paver-patio.jpg", alt: "Finished paver patio installation" },
  { src: "/photos/gallery-dump-truck.jpg", alt: "Apex hauling and material delivery truck" },
];

export default function RecentWork() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="relative aspect-[3/4] overflow-hidden border border-white/10"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 768px) 20vw, 50vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
