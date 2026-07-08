import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { Leaf, Recycle, TreePine, Users, Target, Cpu } from "lucide-react";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability" },
      { name: "description", content: "Circular economy, environmental dashboard, community programs, and impact goals." },
    ],
  }),
  component: SustainabilityPage,
});

const stages = ["Design","Use","Collect","Refurbish","Recycle","Recover"];

const goals = [
  { label: "Net-zero operations", target: "2030", progress: 62 },
  { label: "100% renewable facilities", target: "2027", progress: 78 },
  { label: "1M devices refurbished", target: "2028", progress: 41 },
  { label: "Zero landfill guarantee", target: "Ongoing", progress: 100 },
];

const impact = [
  { icon: Leaf, label: "CO₂ Prevented (t)", value: 4800 },
  { icon: TreePine, label: "Trees Saved", value: 32000 },
  { icon: Cpu, label: "Devices Refurbished", value: 8400 },
  { icon: Recycle, label: "Materials Recovered (t)", value: 920 },
];

function SustainabilityPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Sustainability" title="Circular by design, accountable by default" subtitle="Our environmental, social, and operational commitments — measured and published." />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">The circular economy in action</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Each stage feeds the next — keeping value, materials, and energy in continuous flow.</p>
          <div className="relative mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {stages.map((s, i) => (
              <div key={s} className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground font-display font-bold">{i + 1}</span>
                <p className="mt-3 text-sm font-semibold">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Environmental impact dashboard</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impact.map((m) => (
              <div key={m.label} className="rounded-2xl border border-border bg-card p-6">
                <m.icon className="h-7 w-7 text-primary" />
                <p className="mt-4 text-3xl font-bold gradient-text"><Counter end={m.value} /></p>
                <p className="text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold">Quarterly recovery breakdown</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              {[["Aluminum",62,"oklch(0.62 0.18 145)"],["Copper",78,"oklch(0.55 0.22 260)"],["Plastics",45,"oklch(0.72 0.15 60)"],["Precious metals",30,"oklch(0.45 0.15 155)"]].map(([label,pct,color]) => (
                <div key={label as string}>
                  <div className="flex justify-between text-sm"><span className="font-semibold">{label as string}</span><span className="text-muted-foreground">{pct as number}%</span></div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color as string }}/>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Sustainability goals</h2>
              <div className="mt-8 space-y-5">
                {goals.map((g) => (
                  <div key={g.label}>
                    <div className="flex items-center justify-between text-sm"><span className="font-semibold">{g.label}</span><span className="text-muted-foreground">{g.target}</span></div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${g.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Community outreach</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Users, title: "School Drives", desc: "500+ collection drives in K-12 and universities." },
                  { icon: Target, title: "Device Donations", desc: "8,400+ refurbished devices donated to NGOs." },
                  { icon: Leaf, title: "Workshops", desc: "Sustainability training for 200+ organizations." },
                  { icon: Recycle, title: "Repair Cafés", desc: "Monthly free repair events open to the public." },
                ].map((b) => (
                  <div key={b.title} className="rounded-2xl border border-border bg-card p-5">
                    <b.icon className="h-6 w-6 text-primary" />
                    <h4 className="mt-3 font-bold">{b.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
