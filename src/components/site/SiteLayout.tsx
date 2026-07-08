import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="gradient-hero relative overflow-hidden text-white">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/85">{subtitle}</p>}
      </div>
    </section>
  );
}
