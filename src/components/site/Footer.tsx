import { Link } from "@tanstack/react-router";
import { Recycle, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import RecycleLogo from "../../assets/Recycle.png";

const socialLinks = [
  { icon: Facebook, url: "https://web.facebook.com/WEEECentre?_rdc=2&_rdr" },
  { icon: Twitter, url: "https://x.com/weeecentre?s=11" },
  { icon: Linkedin, url: "https://www.linkedin.com/company/weeecentre/ " },
  { icon: Instagram, url: "https://www.instagram.com/weeecentre?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-[oklch(0.18_0.04_250)] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                {/* <Recycle className="h-5 w-5" /> */}
                <img src={RecycleLogo}/>
              </span>
              <span className="font-display text-lg font-bold text-red-500">WEEE CENTRE</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              We collect, recycle, refurbish, and responsibly dispose of electronic waste — building
              a circular economy for a sustainable future.
            </p>
            <form className="mt-6 flex max-w-md gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-primary focus:outline-none"
              />
              <button className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex gap-3">
  {socialLinks.map(({ icon: Icon, url }, i) => (
    <a 
      key={i} 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:bg-primary hover:text-primary-foreground"
    >
      <Icon className="h-4 w-4" />
    </a>
  ))}
</div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[["/about","About"],["/sustainability","Sustainability"],["/blog","Blog"],["/case-studies","Projects"],["/events","Events"],["/contact","Contact"]].map(([to,l]) => (
                <li key={to}><Link to={to} className="hover:text-primary">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["E-Waste Collection","Secure Data Destruction","IT Asset Disposal","Electronics Recycling","Refurbishment","Asset Recovery"].map((s) => (
                <li key={s}><Link to="/services" className="hover:text-primary">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary"/>+254 701 819 559</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5 text-primary"/>info@weeecentre.com</li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary"/>Mihango', Embakasi, Off the Eastern By-pass</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} WEEE CENTRE. Managing e-Waste for a Safe Environment.</p>
          <p>· ISO 14001:2015 · ISO 9001:2015</p>
        </div>
      </div>
    </footer>
  );
}
