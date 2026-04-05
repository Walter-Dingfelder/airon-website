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
  external?: boolean;
  infoTitle?: string;
  infoBody?: string;
  infoNote?: string;
};

type HeaderProps = {
  currentPath?: string;
  showHeaderCTA?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/a-i-r-o-n" },
  { label: "Modules", href: "/a-i-r-o-n/modules" },
  { label: "Campus", href: "/a-i-r-o-n/industrial-campus" },
  {
    label: "Free OSHA & Safety Training",
    href: "https://training.dingfelder.co/",
    external: true,
    infoTitle: "Free OSHA & Safety Training",
    infoBody:
      "Launch the Dingfelder training site for free OSHA-focused learning today, with broader safety and workforce training expansion planned.",
    infoNote: "Opens training.dingfelder.co in a new tab.",
  },
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
                !item.external &&
                (currentPath === item.href ||
                  (item.href !== "/a-i-r-o-n" && currentPath.startsWith(item.href)));

              return (
                <li
                  key={item.href}
                  className={item.infoTitle ? "nav-item nav-item-has-panel" : "nav-item"}
                >
                  <a
                    href={item.href}
                    className={`nav-link${isActive ? " active" : ""}${item.href === "https://training.dingfelder.co/" ? " nav-link-training" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer noopener" : undefined}
                  >
                    {item.label}
                    {item.external ? <span className="nav-external-dot">↗</span> : null}
                  </a>

                  {item.infoTitle ? (
                    <div className="nav-hover-panel" role="note">
                      <p className="nav-hover-title">{item.infoTitle}</p>
                      <p className="nav-hover-body">{item.infoBody}</p>
                      {item.infoNote ? (
                        <p className="nav-hover-note">{item.infoNote}</p>
                      ) : null}
                    </div>
                  ) : null}
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
