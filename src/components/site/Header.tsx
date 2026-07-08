import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Recycle } from "lucide-react";
import RecycleLogo from "../../assets/Recycle.png";
import WeeeLogo from "../../assets/WEEE_Centre_logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  // { to: "/what-we-accept", label: "What We Accept" },
  // { to: "/corporate", label: "Corporate" },
  // { to: "/sustainability", label: "Sustainability" },
  // { to: "/blog", label: "Blog" },
  { to: "/case-studies", label: "Projects" },
  { to: "/events", label: "Events" },
  { to: "/conferences", label: "Conferences" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 shrink-0 py-1">
            <img src={WeeeLogo} alt="WEEE Centre Logo" className="h-12 md:h-14 w-auto object-contain transition-all"/>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/schedule-pickup"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 md:inline-flex"
          >
            Schedule Pickup
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-2 text-sm font-semibold text-primary bg-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/schedule-pickup"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Schedule Pickup
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
