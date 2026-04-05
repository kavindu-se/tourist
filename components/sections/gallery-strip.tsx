import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
];

export function GalleryStrip() {
  return (
    <section className="mx-auto w-[min(1180px,92vw)]">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {galleryImages.map((img, i) => (
          <div key={img} className="relative h-40 overflow-hidden rounded-2xl md:h-52">
            <Image
              src={img}
              alt={`Sri Lanka gallery ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
