import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Building2, FileCheck, Lock, BarChart3, Link2, ShieldCheck, Leaf, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/corporate")({
  head: () => ({
    meta: [
      { title: "Corporate Solutions" },
      { name: "description", content: "Enterprise programs, ESG reporting, ITAD, chain of custody, and compliance." },
    ],
  }),
  component: CorporatePage,
});

const blocks = [
  { icon: Building2, title: "Enterprise Collection Programs", desc: "Multi-site, multi-region collection logistics with SLAs and dedicated account management." },
  { icon: FileCheck, title: "Asset Tracking", desc: "Per-asset reporting with serial numbers, condition grading, and disposition outcome." },
  { icon: BarChart3, title: "ESG Reporting", desc: "Quarterly impact reports aligned to GRI, SASB, and CDP frameworks." },
  { icon: ShieldCheck, title: "Compliance Reporting", desc: "Audit-ready documentation for HIPAA, SOX, GDPR, and industry mandates." },
  { icon: Link2, title: "Chain of Custody", desc: "Tamper-evident transport, GPS tracking, and a complete documented chain end-to-end." },
  { icon: Lock, title: "Secure Data Destruction", desc: "On-site or in-facility shredding, degaussing, NIST 800-88 wiping, NAID AAA certified." },
  { icon: Leaf, title: "Sustainability Reporting", desc: "Materials recovered, CO₂ avoided, devices reused — visualized in your dashboard." },
];

function CorporatePage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Corporate Solutions" title="Built for enterprise compliance" subtitle="Comprehensive programs for Fortune 500s, banks, hospitals, and government agencies." />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blocks.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-elevated">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue"><b.icon className="h-6 w-6"/></span>
                <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-card via-secondary/30 to-card p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold sm:text-3xl">Client portal preview</h3>
                <p className="mt-3 text-muted-foreground">Real-time visibility into collections, processing status, recovered value, and environmental impact — all in one dashboard.</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">Request demo <ArrowRight className="h-4 w-4"/></Link>
              </div>
              <div className="rounded-2xl bg-foreground p-6 text-white">
                <p className="text-xs uppercase tracking-widest text-white/60">Q4 Snapshot</p>
                <div className="mt-4 space-y-3">
                  {[["Devices collected","2,431"],["Data destroyed","1.2 PB"],["Recovered value","$48,210"],["CO₂ avoided","186 t"]].map(([k,v]) => (
                    <div key={k} className="flex items-center justify-between border-b border-white/10 pb-2 text-sm">
                      <span className="text-white/60">{k}</span><span className="font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
