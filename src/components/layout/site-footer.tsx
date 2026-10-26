import Link from "next/link";
import { brand } from "@/config/brand";
import { navigation } from "@/config/navigation";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link href="/" className="brand-lockup" aria-label={`${brand.name} â€” home`}>
              <span className="brand-mark" aria-hidden="true">
                {brand.shortName}
                <span className="brand-mark__dot">.</span>
              </span>
              <span className="brand-lockup__copy">
                <span className="brand-lockup__name">{brand.shortName}</span>
                <span className="brand-lockup__descriptor">{brand.descriptor}</span>
              </span>
            </Link>
            <p>{brand.description}</p>
          </div>

          <div className="site-footer__links">
            <span className="eyebrow">Explore</span>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="site-footer__contact">
            <span className="eyebrow">Have a project in mind?</span>
            <Link href="/contact" className="footer-cta">
              Start a conversation <span aria-hidden="true">â†—</span>
            </Link>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>Â© {2026} {brand.name}.</span>
          <span>Built with purpose.</span>
        </div>
      </div>
    </footer>
  );
}