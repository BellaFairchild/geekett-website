import { Link } from "@tanstack/react-router";
import { siteNav, STUDIO_EMAIL, TAGLINE } from "@/lib/geekett/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2">
        <div>
          <p className="font-display text-xl font-bold tracking-tight">Geekett</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/70">
            One-woman studio + Builder Bot Bobby. {TAGLINE}
          </p>
          <p className="mt-4 text-sm text-cream/70">
            <a className="hover:text-cream" href={`mailto:${STUDIO_EMAIL}`}>
              {STUDIO_EMAIL}
            </a>
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-3 space-y-2 text-sm text-cream/75">
            {siteNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/project-brief" className="hover:text-cream">
                Project Brief
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-cream/50 sm:px-8">
          © {new Date().getFullYear()} Geekett · Bella · Canadian
          studio
        </p>
      </div>
    </footer>
  );
}
