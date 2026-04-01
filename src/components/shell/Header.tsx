import React from "react";

/**
 * Intended path:
 *   src/components/shell/Header.tsx
 *
 * Notes:
 * - Framework-agnostic React component.
 * - Replace <a> tags with framework-specific Link components if desired.
 * - Keep nav restrained and stable across all A.I.R.O.N. pages.
 */

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  currentPath?: string;
  showHeaderCTA?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/a-i-r-o-n" },
  { label: "Modules", href: "/a-i-r-o-n/modules" },
  { label: "Campus", href: "/a-i-r-o-n/industrial-campus" },
  { label: "Industry", href: "/a-i-r-o-n/industry-period" },
  { label: "Safety", href: "/a-i-r-o-n/safety" },
  { label: "Contact", href: "/a-i-r-o-n/contact" },
];

export default function Header({
  currentPath = "",
  showHeaderCTA = true,
}: HeaderProps): JSX.Element {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <a className="brand-lockup" href="/a-i-r-o-n" aria-label="A.I.R.O.N. home">
          <span className="brand-name">A.I.R.O.N.™</span>
          <span className="brand-support">Pronounced “Iron”</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive =
                currentPath === item.href ||
                (item.href !== "/a-i-r-o-n" && currentPath.startsWith(item.href));

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={isActive ? "nav-link active" : "nav-link"}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {showHeaderCTA ? (
          <a className="btn btn-primary header-cta" href="/a-i-r-o-n/contact">
            Start Discovery
          </a>
        ) : null}
      </div>
    </header>
  );
}
