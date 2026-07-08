import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import { Target, Eye, Heart, Award, Leaf, Users } from "lucide-react";
// import teamAmelia from "@/assets/team-amelia.jpg";
// import teamDavid from "@/assets/team-david.jpg";
// import teamPriya from "@/assets/team-priya.jpg";
// import teamLukas from "@/assets/team-lukas.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us" },
      { name: "description", content: "Our story, mission, values, and commitment to responsible electronics recycling." },
      { property: "og:title", content: "About WEE CENTER" },
      { property: "og:description", content: "Mission, vision, leadership, and sustainability commitment." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Leaf, title: "Sustainability", desc: "Advancing environmentally responsible solutions. " },
  { icon: Award, title: "Innovation", desc: "Driving new approaches to circular economy challenges." },
  { icon: Users, title: "Collaboration", desc: "Building partnerships for greater impact. " },
  { icon: Heart, title: "Impact", desc: "Creating measurable environmental, social, and economic benefits. ." },
];

// const team = [
//   { name: "Bonnie Mbithi", role: "CEO", image: teamDavid },
//   { name: "Catherine Masiola", role: "Chief Operations Officer", image: teamAmelia },
//   { name: "Joseph Oliech", role: "General Manager", image: teamLukas },
//   { name: "Joyce Ruto", role: "WEEE Center Manager", image: teamPriya },
// ];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Pioneering the circular electronics economy" subtitle="Founded in 2012, WEE CENTRE has grown into a trusted partner for organizations who refuse to send hardware to landfill." />

      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 items-start">
          {/* Left Side: Clean, non-repetitive unified narrative */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Who We Are</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Pioneering E-Waste Management</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              The Waste Electrical and Electronic Equipment (WEEE) Centre is a leading e-waste management organization in East Africa, dedicated to providing sustainable solutions for the collection, refurbishment, recycling, and environmentally sound disposal of electrical and electronic waste.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Established to address the growing challenge of e-waste, the Centre works closely with governments, private sector organizations, producers, development partners, educational institutions, and communities. Through innovation, capacity building, research, and advocacy, we support the transition towards a circular economy while protecting human health and advancing responsible resource recovery across Africa.
            </p>
          </div>
          
          {/* Right Side: Clean grid cards matching height perfectly */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col justify-between">
              <div>
                <Target className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-bold text-lg">Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  To provide innovative, environmentally sound, and socially responsible solutions for the collection, refurbishment, recycling, and management of electronic waste while promoting circular economy practices, creating green jobs, and protecting the environment.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col justify-between">
              <div>
                <Eye className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-bold text-lg">Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  A world where electrical and electronic waste is transformed into resources for sustainable development through circular economy principles.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:col-span-2">
              <Leaf className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-bold text-lg">Sustainability Commitment</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Net-zero operations by 2030, 100% renewable energy at all facilities, and a guaranteed zero-landfill policy on every contract.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Our core values</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <v.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* 
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Leadership team</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((t) => (
              <div key={t.name} className="overflow-hidden rounded-2xl border border-border bg-card text-center shadow-soft">
                <div className="aspect-square w-full overflow-hidden bg-secondary">
                  <img src={t.image} alt={`Portrait of ${t.name}, ${t.role}`} width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold">{t.name}</h3>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Certifications & licenses</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {["ISO 14001:2015","ISO 9001:2015"].map((c) => (
              <div key={c} className="rounded-xl border border-border bg-card p-5 text-center text-sm font-semibold">{c}</div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
