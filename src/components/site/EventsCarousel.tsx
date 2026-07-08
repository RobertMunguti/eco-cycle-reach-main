import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Calendar, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { events } from "@/data/events";

export function EventsCarousel() {
  const [index, setIndex] = useState(0);
  const count = events.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => clearInterval(id);
  }, [count]);

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {events.map((e) => {
            const isConference = e.type === "Conference" || e.type === "Summit";
            return (
            <Link
              key={e.slug}
              to={isConference ? "/conferences" : "/events"}
              hash={e.slug}
              className="group grid w-full shrink-0 gap-0 md:grid-cols-2"
            >
              <div className="relative h-64 overflow-hidden md:h-full">
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
                  {e.type}
                </span>
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-10">
                <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" />{e.date}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{e.location}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl group-hover:text-primary transition-colors">
                  {e.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-muted-foreground">{e.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                  View details <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
            );
          })}
        </div>
      </div>

      <button
        aria-label="Previous event"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow-soft hover:bg-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next event"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 shadow-soft hover:bg-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-5 flex justify-center gap-2">
        {events.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to event ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
