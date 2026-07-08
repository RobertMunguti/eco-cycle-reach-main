import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Truck, ShieldCheck, HardDrive, Recycle, Wrench, Coins, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services" },
      { name: "description", content: "Collection, secure data destruction, ITAD, recycling, refurbishment and asset recovery." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Truck, title: "E-Waste Collection & Logistics", desc: "Scheduled and on-demand pickup with full chain of custody documentation. We handle volumes from a single laptop to multi-truck decommissions.", features: ["Collection of end-of-life electrical and electronic equipment.","Corporate and institutional e-waste take-back programs","Corporate and institutional e-waste take-back programs."] },
  { icon: HardDrive, title: "IT Asset Disposal (ITAD)", desc: "Complete lifecycle management of retired IT equipment with reporting and recovery value.", features: ["Serial-level reporting","Value recovery share","Compliance audit trail","Multi-site coordination"] },
  { icon: ShieldCheck, title: "Data Destruction & Asset Disposal", desc: "On-site or in-facility shredding, degaussing, and certified wiping aligned to NIST 800-88.", features: ["Secure data wiping and destruction services.","Certified destruction of hard drives and storage devices","IT asset disposition (ITAD) services. "] },
  { icon: Recycle, title: "E-Waste Recycling", desc: "R2-certified downstream processing recovering ferrous, non-ferrous, precious metals, and plastics.", features: ["Environmentally sound dismantling and recycling.","Recovery of valuable materials and components. ","Safe handling of hazardous fractions."] },
  { icon: Wrench, title: "Refurbishment & Reuse", desc: "Technicians restore and warranty devices for resale or donation to schools and NGOs.", features: ["Cosmetic & functional","90-day warranty","Donation programs","Bulk B2B refurbishment"] },
  { icon: Coins, title: "Asset Recovery", desc: "Transparent valuation and remarketing to maximize residual value of retired assets.", features: ["Market-based pricing","Revenue share","Global remarketing","Real-time reporting"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Services" title="Certified e-waste services, end to end" subtitle="From a single device to a full data center decommission — secure, compliant, sustainable." />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {services.map((s, i) => (
            <div key={s.title} className={`grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft lg:grid-cols-2 lg:p-12 ${i % 2 ? "lg:[&>:first-child]:order-2" : ""}`}>
              <div>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary"><s.icon className="h-7 w-7"/></span>
                <h2 className="mt-5 text-3xl font-bold">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm"><Check className="h-4 w-4 mt-0.5 text-primary"/>{f}</li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  search={{ subject: `Quote request: ${s.title}` }}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
                >
                  Get a quote <ArrowRight className="h-4 w-4"/>
                </Link>
              </div>
              <div className="grid place-items-center rounded-2xl bg-gradient-to-br from-primary/10 via-accent to-brand-blue/10 p-10">
                <s.icon className="h-32 w-32 text-primary/70" strokeWidth={1.25} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
