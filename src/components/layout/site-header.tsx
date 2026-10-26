
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { brand } from "@/config/brand";
import { navigation } from "@/config/navigation";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    let frame = 0;

    const updateHeader = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setIsCompact(window.scrollY > 40);
      });
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("pageshow", updateHeader);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("pageshow", updateHeader);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${isCompact ? " site-header--compact" : ""}`}>
      <div className="site-header__inner">
        {/* Brand */}
        <Link
          href="/"
          className="brand-lockup"
          aria-label={brand.name}
          onClick={closeMenu}
        >
          <Image
            src="/images/digi-stakshi-glossy.png"
            alt="Digi Shatakshi logo"
            width={440}
            height={120}
            priority
            className="navbar-logo"
          />
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        {/* Primary navigation */}
        <nav
          id="primary-navigation"
          className={`site-nav${menuOpen ? " site-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="site-nav__link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          {/* Primary CTA */}
          <Link
            href="/#contact"
            className="button button--nav"
            onClick={closeMenu}
          >
            Book Now
            <span aria-hidden="true">{"\u2197"}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
