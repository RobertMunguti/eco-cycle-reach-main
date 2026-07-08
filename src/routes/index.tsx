import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, ShieldCheck, HardDrive, Recycle, Wrench, Coins, Building2, GraduationCap, Landmark, Hospital, HeartHandshake, Briefcase, Server, School, Leaf, TreePine, Cpu, Package, Factory } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Counter } from "@/components/site/Counter";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { EventsCarousel } from "@/components/site/EventsCarousel";
import heroImg from "@/assets/hero-recycling.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero8 from "@/assets/hero-8.jpg";
import WeeLogo from "@/assets/WeeCenter.png";
import MamaDoing from "@/assets/Mama-doing-good.png";
import Oracle from "@/assets/oracle.png";
import Rotary from "@/assets/rotary.svg";
import KKCF from "@/assets/kkcf.png";
import Giz from "@/assets/giz.png";
import Liquid from "@/assets/liquid.jpeg";
import Umicore from "@/assets/umicore.png";
import Carrefour from "@/assets/carrefour.png";
import IBM from "@/assets/ibm.png";
import ICRC from "@/assets/icrc.jpeg";
import Total from "@/assets/total.webp";
import Safaricom from "@/assets/safaricom.jpeg";
import Aecf from "@/assets/aecf.svg";
import UNDP from "@/assets/undp.svg";
import KCJF from "@/assets/kcjf.png";
import Huawei from "@/assets/huawei.png";
import MrGreen from "@/assets/mr-green-africa.png";
import Netfund from "@/assets/netfund.png";
import TakaTaka from "@/assets/takatakanimali.png";
import Elemental from "@/assets/elemental.png";
import NEMA from "@/assets/nema.png";
import Foreign from "@/assets/foreign-common-wealth.png";
import British from "@/assets/british-council.png";
import Yunus from "@/assets/yunus.svg";
import Ikea from "@/assets/ikea.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WEE CENTER — Managing e-Waste for a Safe Environment" },
      { name: "description", content: "We collect, recycle, refurbish, and responsibly dispose of electronic waste for businesses, institutions, and households." },
      { property: "og:title", content: "WEE CENTER" },
      { property: "og:description", content: "Managing e-Waste for a Safe Environment." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Truck, title: "E-Waste Collection", desc: "On-demand and scheduled pickup for any volume." },
  { icon: ShieldCheck, title: "Secure Data Destruction", desc: "NAID AAA-certified shredding and wiping." },
  { icon: HardDrive, title: "IT Asset Disposal (ITAD)", desc: "End-to-end ITAD with full chain of custody." },
  { icon: Recycle, title: "Electronics Recycling", desc: "R2-certified material recovery, zero landfill." },
  { icon: Wrench, title: "Refurbishment & Reuse", desc: "Devices restored and given a second life." },
  { icon: Coins, title: "Asset Recovery", desc: "Maximize residual value with revenue share." },
];

const stats = [
  { value: 25000, suffix: "+", label: "Devices Recycled" },
  { value: 1200, suffix: "+", label: "Corporate Clients" },
  { value: 500, suffix: "+", label: "Collection Drives" },
  { value: 14000, suffix: "+", label: "Tons Diverted" },
];

const process = ["Collection", "Sorting", "Data Destruction", "Refurbishment", "Material Recovery", "Recycling"];

const partners = [
  { name: "Mama Doing Good", logoUrl: MamaDoing },
  { name: "Oracle", logoUrl: Oracle },
  { name: "Rotary", logoUrl: Rotary },
  { name: "KKCF", logoUrl: KKCF },
  { name: "Giz", logoUrl: Giz },
  { name: "Liquid", logoUrl: Liquid },
  { name: "Umicore", logoUrl: Umicore },
  { name: "Carrefour", logoUrl: Carrefour },
  { name: "IBM", logoUrl: IBM },
  { name: "ICRC", logoUrl: ICRC },
  { name: "Total", logoUrl: Total },
  { name: "Safaricom", logoUrl: Safaricom },
  { name: "AECF", logoUrl: Aecf },
  { name: "UNDP", logoUrl: UNDP },
  { name: "KCJF", logoUrl: KCJF },
  { name: "Huawei", logoUrl: Huawei },
  { name: "Mr.Green", logoUrl: MrGreen },
  { name: "Netfund", logoUrl: Netfund },
  { name: "TakaTaka", logoUrl: TakaTaka },
  { name: "Elemental", logoUrl: Elemental },
  { name: "NEMA", logoUrl: NEMA },
  { name: "Foreign", logoUrl: Foreign },
  { name: "British Council", logoUrl: British },
  { name: "Yunus", logoUrl: Yunus },
  { name: "Ikea", logoUrl: Ikea },
];

const impact = [
  { icon: Leaf, label: "CO₂ Prevented", value: 14000, suffix: " t" },
  { icon: TreePine, label: "Trees Saved", value: 20000, suffix: "+" },
  { icon: Cpu, label: "Devices Refurbished", value: 8400, suffix: "" },
  { icon: Package, label: "Materials Recovered", value: 10.6, suffix: " $" },
  { icon: Factory, label: "Landfill Diverted", value: 10000, suffix: " t" },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-5 rounded-3xl bg-white/10 px-7 py-5 shadow-elevated ring-1 ring-white/20 backdrop-blur">
              <span className="grid h-25 w-25 place-items-center rounded-4xl bg-white text-primary shadow-elevated sm:h-28 sm:w-28">
                {/* <Recycle className="h-14 w-14 sm:h-16 sm:w-16" /> */}
                <img src={WeeLogo}/>
              </span>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold leading-none tracking-tight text-red-500 sm:text-4xl lg:text-5xl">
                  WEEE <span className="text-[oklch(0.85_0.18_140)] text-red-500">CENTRE</span>
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-sm">
                  Managing e-Waste for a Safe Environment
                </span>
              </div>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Responsible E-Waste Management for a <span className="text-[oklch(0.85_0.18_140)]">Sustainable Future</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              We collect, recycle, refurbish, and responsibly dispose of electronic waste for businesses, institutions, and households.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/schedule-pickup" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elevated transition hover:opacity-90">
                Schedule Pickup <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/15">
                Request Quote
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap items-center gap-4">
             <span className="px-5 py-2 text-base md:text-lg font-bold text-white bg-white/15 rounded-full border-2 border-white/25 backdrop-blur-md shadow-md tracking-wide">
               ISO 9001:2015
              </span>
              <span className="px-5 py-2 text-base md:text-lg font-bold text-white bg-white/15 rounded-full border-2 border-white/25 backdrop-blur-md shadow-md tracking-wide">
                 ISO 14001:2015
              </span>
            </div>
          </div>
          <div className="relative animate-fade-up h-full flex flex-col">
            <HeroCarousel
              images={[
                { src: hero5, alt: "Technician refurbishing a laptop" },
                { src: heroImg, alt: "Electronics recycling facility" },
                { src: hero2, alt: "Workers sorting e-waste on conveyor belts" },
                { src: hero3, alt: "Hard drives prepared for secure data destruction" },
                { src: hero4, alt: "Technician refurbishing a laptop" },
                { src: hero6, alt: "Technician refurbishing a laptop" },
                { src: hero7, alt: "Technician refurbishing a laptop" },
                { src: hero8, alt: "Technician refurbishing a laptop" },
              ]}
            />
            <div className="absolute -bottom-4 -right-4 z-20 hidden rounded-2xl bg-white p-4 shadow-elevated sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary"><Recycle className="h-5 w-5"/></span>
                <div>
                  <p className="text-xs text-muted-foreground">Zero landfill</p>
                  <p className="text-sm font-bold text-foreground">100% Responsibly Processed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-none bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-10 text-center">
              <p className="font-display text-4xl font-bold gradient-text sm:text-5xl">
                <Counter end={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Events & Conferences</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Meet us in person</h2>
              <p className="mt-3 text-muted-foreground">Join our community drives, conferences, and workshops driving the circular electronics economy.</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <Link to="/events" className="inline-flex items-center gap-1.5 text-primary hover:gap-2.5 transition-all">
                All events <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/conferences" className="inline-flex items-center gap-1.5 text-primary hover:gap-2.5 transition-all">
                All conferences <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <EventsCarousel />
          </div>
        </div>
      </section> */}

      {/* SERVICES */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our Services</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">End-to-end electronics lifecycle management</h2>
            <p className="mt-4 text-muted-foreground">Certified, secure, and sustainable services for every stage of your hardware's journey.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:shadow-elevated">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">How It Works</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A transparent, traceable process</h2>
          </div>
          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 lg:block" />
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
              {process.map((step, i) => (
                <li key={step} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground shadow-elevated">
                    {i + 1}
                  </span>
                  <p className="mt-4 text-sm font-semibold">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Sustainability Impact</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Real numbers. Real planet.</h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {impact.map((m) => (
              <div key={m.label} className="rounded-2xl border border-border bg-gradient-to-br from-card to-secondary/30 p-6 shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary"><m.icon className="h-5 w-5"/></span>
                <p className="mt-4 text-3xl font-bold gradient-text"><Counter end={m.value} suffix={m.suffix} /></p>
                <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-3/4 rounded-full bg-primary" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {/* <p className="text-sm font-semibold uppercase tracking-widest text-primary">Industries We Serve</p> */}
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Our Partners</h2>
          </div>
          {/* <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-8">
            {industries.map((i) => (
              <div key={i.label} className="group flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center transition hover:border-primary hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <i.icon className="h-6 w-6" />
                </span>
                <p className="mt-3 text-sm font-semibold">{i.label}</p>
              </div>
            ))}
          </div> */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {partners.map((partner) => (
        <div 
          key={partner.name} 
          className="group flex h-28 items-center justify-center rounded-2xl border border-border bg-card p-6 text-center transition duration-300 hover:border-primary hover:shadow-soft"
        >
          <img 
            src={partner.logoUrl} 
            alt={`${partner.name} logo`} 
            className="max-h-full max-w-full object-contain filter grayscale transition duration-300 group-hover:grayscale-0"
          />
        </div>
      ))}
    </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="gradient-hero relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white shadow-elevated sm:px-16">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to recycle responsibly?</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">Schedule a pickup or talk to our team about enterprise programs.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/schedule-pickup" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:opacity-90">Schedule Pickup</Link>
              <Link to="/contact" className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
