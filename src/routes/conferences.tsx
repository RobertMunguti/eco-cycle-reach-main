import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { events } from "@/data/events";

export const Route = createFileRoute("/conferences")({
  head: () => ({
    meta: [
      { title: "Conferences & Summits" },
      { name: "description", content: "Join WEE CENTRE at upcoming sustainability conferences and industry summits driving the circular electronics economy." },
      { property: "og:title", content: "Conferences & Summits" },
      { property: "og:description", content: "Industry-leading conferences hosted and attended by WEE CENTRE" },
    ],
  }),
  component: ConferencesPage,
});

function ConferencesPage() {
  const conferences = events.filter((e) => e.type === "Conference" || e.type === "Summit");
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Conferences & Summits"
        title="Industry conferences & summits"
        subtitle="Where sustainability leaders, ITAD professionals, and policymakers gather to shape the circular electronics economy."
      />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
          {conferences.map((e) => (
            <article
              key={e.slug}
              id={e.slug}
              className="scroll-mt-24 grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-soft md:grid-cols-[2fr_3fr]"
            >
              <div className="relative h-64 bg-slate-950 md:h-full flex items-center justify-center">
                <img src={e.image} alt={e.title} className="h-full w-full object-contain" />
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
                <div className="mt-7 flex flex-wrap gap-3">
                  {/* <Link to="/event-registration" search={{ event: e.slug }} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"> */}
                  <a 
              href="https://luma.com/africa-ewaste-2026" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >  
                    Register now <ArrowRight className="h-4 w-4" />
                  {/* </Link> */}
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold hover:bg-accent">
                    Become a sponsor
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
