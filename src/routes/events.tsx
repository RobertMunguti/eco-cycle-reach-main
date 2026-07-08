import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { events } from "@/data/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Conferences" },
      { name: "description", content: "Join WEE CENTRE at upcoming e-waste conferences, community recycling drives, and sustainability summits." },
      { property: "og:title", content: "Events & Conferences" },
      { property: "og:description", content: "Upcoming sustainability and e-waste events hosted or attended by WEE CENTRE." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const communityEvents = events.filter((e) => e.type !== "Conference" && e.type !== "Summit");
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Events"
        title="Community drives & workshops"
        subtitle="Join our local recycling drives, workshops, and webinars. Looking for conferences? Visit our Conferences page."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
          {communityEvents.map((e) => (
            <article
              key={e.slug}
              id={e.slug}
              className="scroll-mt-24 grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft md:grid-cols-[2fr_3fr]"
            >
              <div className="relative h-64 md:h-full">
                <img src={e.image} alt={e.title} className="h-full w-full object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-soft">
                  {e.type}
                </span>
              </div>
              <div className="p-7 sm:p-9">
                <h2 className="font-display text-2xl font-bold sm:text-3xl">{e.title}</h2>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4 text-primary" />{e.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" />{e.time}</span>
                  <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" />{e.location}</span>
                  <span className="inline-flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" />{e.audience}</span>
                </div>
                <p className="mt-5 text-muted-foreground">{e.description}</p>
                {e.highlights && (
                  <ul className="mt-5 space-y-2 text-sm">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />{h}</li>
                    ))}
                  </ul>
                )}
                {/* <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/event-registration" search={{ event: e.slug }} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                    Register now <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/schedule-pickup" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent">
                    Schedule a pickup
                  </Link>
                </div> */}
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
