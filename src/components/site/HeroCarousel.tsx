import { useEffect, useState } from "react";

export function HeroCarousel({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="relative w-full">
      <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
      <div className="relative h-full min-h-[350x] md:min-h-[480px] w-full overflow-hidden rounded-3xl shadow-elevated ring-1 ring-white/20">
        {images.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={1600}
            height={1200}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-2000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
