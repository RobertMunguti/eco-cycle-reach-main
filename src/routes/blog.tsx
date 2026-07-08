import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Search } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog" },
      { name: "description", content: "Insights on e-waste, sustainability, data security, and corporate responsibility." },
    ],
  }),
  component: BlogPage,
});

const categories = ["All","E-Waste Management","Sustainability","Data Security","Recycling","Corporate Responsibility"];

const posts = [
  { title: "The hidden carbon cost of unused IT equipment", cat: "Sustainability", date: "Jun 2, 2026", read: "6 min", featured: true, excerpt: "How idle laptops and servers contribute to scope-3 emissions — and what to do about it." },
  { title: "NIST 800-88 vs DoD wipe: which standard fits your org?", cat: "Data Security", date: "May 28, 2026", read: "8 min", excerpt: "Comparing the dominant data sanitization standards and when each applies." },
  { title: "Inside a circular electronics facility", cat: "Recycling", date: "May 21, 2026", read: "5 min", excerpt: "A photo tour of how mixed e-waste becomes recovered materials and refurbished devices." },
  { title: "ESG reporting frameworks for ITAD programs", cat: "Corporate Responsibility", date: "May 12, 2026", read: "10 min", excerpt: "Mapping ITAD outcomes to GRI, SASB, and CDP disclosures." },
  { title: "What's actually inside your old smartphone?", cat: "E-Waste Management", date: "May 4, 2026", read: "4 min", excerpt: "A breakdown of recoverable materials in a typical retired device." },
  { title: "School e-waste drives: a practical playbook", cat: "Sustainability", date: "Apr 28, 2026", read: "7 min", excerpt: "Lessons from running 500+ collection events across the country." },
];

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const filtered = posts.filter((p) => (cat === "All" || p.cat === cat) && p.title.toLowerCase().includes(q.toLowerCase()));
  const featured = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p !== featured);

  return (
    <SiteLayout>
      <PageHero eyebrow="Blog" title="Ideas for a circular electronics future" subtitle="Research, guides, and stories from the front lines of e-waste management." />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles…" className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:outline-none" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${cat === c ? "bg-primary text-primary-foreground" : "border border-border bg-card text-muted-foreground hover:text-foreground"}`}>{c}</button>
              ))}
            </div>
          </div>

          {featured && (
            <article className="mt-10 grid gap-8 rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/30 p-8 shadow-soft lg:grid-cols-2 lg:p-10">
              <div className="grid h-64 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-brand-blue/20 lg:h-full">
                <span className="font-display text-6xl font-bold text-primary/40">Featured</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{featured.cat}</span>
                <h2 className="mt-3 text-3xl font-bold">{featured.title}</h2>
                <p className="mt-3 text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-4 text-sm text-muted-foreground">{featured.date} · {featured.read} read</div>
              </div>
            </article>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <article key={p.title} className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition hover:-translate-y-1 hover:shadow-elevated">
                <div className="h-44 bg-gradient-to-br from-primary/20 to-brand-blue/15 grid place-items-center">
                  <span className="font-display text-3xl font-bold text-primary/40">WEEECENTER</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">{p.cat}</span>
                  <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-auto pt-4 text-xs text-muted-foreground">{p.date} · {p.read} read</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
