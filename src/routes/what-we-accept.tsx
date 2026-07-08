import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Laptop, Monitor, Smartphone, Tablet, Printer, Router, Battery, Server } from "lucide-react";

export const Route = createFileRoute("/what-we-accept")({
  head: () => ({
    meta: [
      { title: "What We Accept" },
      { name: "description", content: "Computers, mobile devices, office equipment, networking gear, batteries, and more." },
    ],
  }),
  component: AcceptPage,
});

const categories = [
  { title: "Computers", icon: Laptop, items: ["Laptops","Desktops","Servers","Monitors"] },
  { title: "Mobile Devices", icon: Smartphone, items: ["Smartphones","Tablets","Wearables","Accessories"] },
  { title: "Office Equipment", icon: Printer, items: ["Printers","Scanners","Copiers","Fax machines"] },
  { title: "Networking", icon: Router, items: ["Routers","Switches","Firewalls","Access points"] },
  { title: "Power Equipment", icon: Battery, items: ["UPS systems","Batteries","Power supplies","Inverters"] },
  { title: "Data Center", icon: Server, items: ["Rack servers","Storage arrays","Tape libraries","Network gear"] },
  { title: "Displays", icon: Monitor, items: ["LCD/LED monitors","TVs","Projectors","Touch panels"] },
  { title: "Tablets & Misc.", icon: Tablet, items: ["iPads","Android tablets","E-readers","Cables"] },
];

function AcceptPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="What We Accept" title="If it plugs in, we probably take it" subtitle="A non-exhaustive list of devices and equipment we collect, recycle, and refurbish." />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title} className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-elevated">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-6 w-6"/>
                </span>
                <h3 className="mt-5 text-lg font-bold">{c.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  {c.items.map((i) => <li key={i} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary"/>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-border bg-secondary/40 p-8 text-sm text-muted-foreground">
            <strong className="text-foreground">Not sure about an item?</strong> Reach out — if we can't process it directly, we'll route it to a certified partner. We do not accept appliances with refrigerants, smoke detectors, or items with biological contamination.
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
