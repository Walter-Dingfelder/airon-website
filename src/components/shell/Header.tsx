import React, { useEffect, useMemo, useRef, useState } from "react";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  infoTitle?: string;
  infoBody?: string;
  infoNote?: string;
};

type QuickJumpLink = {
  label: string;
  href: string;
  description: string;
  external?: boolean;
};

type QuickJumpTone = "safety" | "uptime" | "system" | "training" | "doctor";

type QuickJumpGroup = {
  title: string;
  intro: string;
  tone: QuickJumpTone;
  links: QuickJumpLink[];
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

const quickJumpGroups: QuickJumpGroup[] = [
  {
    title: "Protect people and respond fast",
    tone: "safety",
    intro: "Start here when the priority is human safety, abnormal response, or disciplined escalation.",
    links: [
      {
        label: "Safety",
        href: "/a-i-r-o-n/safety",
        description: "See the Tree of Knowledge™ safety architecture and how experience, truth, and memory stay connected.",
      },
      {
        label: "C.A.T.A.S.T.R.O.P.H.E.™",
        href: "/a-i-r-o-n/catastrophe",
        description: "Protect life, carry truth, and guide recovery when automation is degraded or gone.",
      },
      {
        label: "S.W.A.T.",
        href: "/a-i-r-o-n/swat",
        description: "See the human response layer where safety, skill, and intelligence converge to eliminate waste in real time.",
      },
      {
        label: "Better Days",
        href: "/a-i-r-o-n/better-days",
        description: "Route ideas, concerns, and accountability so issues are seen, tracked, and answered.",
      },
      {
        label: "Contact / Discovery",
        href: "/a-i-r-o-n/contact",
        description: "Get a direct path to the team when you need a human conversation.",
      },
    ],
  },
  {
    title: "Keep equipment running",
    tone: "uptime",
    intro: "Use these pages when the goal is prediction, startup discipline, controls, and machine continuity.",
    links: [
      {
        label: "Predictive & Diagnostics",
        href: "/a-i-r-o-n/predictive-diagnostics",
        description: "See how Doctor modules, Ghost Busting, and predictive timing work together.",
      },
      {
        label: "Fortune Teller™",
        href: "/a-i-r-o-n/fortune-teller",
        description: "See the breakpoint before the breakdown and act while good options still exist.",
      },
      {
        label: "One-Touch Startup™",
        href: "/a-i-r-o-n/one-touch-startup",
        description: "Govern startup with proof before progression, clear holds, and restart discipline.",
      },
      {
        label: "Controls & Automation",
        href: "/a-i-r-o-n/controls-automation",
        description: "Understand how A.I.R.O.N. connects to controls, operators, and machine truth.",
      },
      {
        label: "Furnace Doctor™",
        href: "/a-i-r-o-n/furnace-doctor",
        description: "See the homepage-facing example of a Doctor built around one critical machine domain.",
      },
    ],
  },
  {
    title: "Understand the whole system",
    tone: "system",
    intro: "Use these pages when you need the architecture, the doctrine, or the reason the system exists.",
    links: [
      {
        label: "Modules",
        href: "/a-i-r-o-n/modules",
        description: "Browse the architecture map and understand how the major families fit together.",
      },
      {
        label: "SYSTEM-LIVE / PLAYER-LIVE",
        href: "/a-i-r-o-n/system-live-player-live",
        description: "See how machine truth and human engagement stay structurally connected.",
      },
      {
        label: "Continuous Improvement",
        href: "/a-i-r-o-n/continuous-improvement",
        description: "Understand the operating spine behind drift, proof, and governed improvement.",
      },
      {
        label: "V.A.U.L.T.®",
        href: "/a-i-r-o-n/vault",
        description: "See custody, context, recall, and institutional memory working as one system.",
      },
      {
        label: "Industry. Period.",
        href: "/a-i-r-o-n/industry-period",
        description: "Read the cultural hard position behind the whole build.",
      },
    ],
  },
  {
    title: "Training and workforce readiness",
    tone: "training",
    intro: "Use these pages when the goal is readiness, familiarization, guided repetition, and skill activation.",
    links: [
      {
        label: "Industrial Campus",
        href: "/a-i-r-o-n/industrial-campus",
        description: "See the live industrial environment where people learn systems before live consequence.",
      },
      {
        label: "Play Your Work - Work Your Play",
        href: "/a-i-r-o-n/play-your-work-work-your-play",
        description: "See how existing human skill can be recognized, activated, and redirected into industry.",
      },
      {
        label: "Training Philosophy",
        href: "/a-i-r-o-n/training-philosophy",
        description: "Understand the doctrine behind governed readiness, proof, and preserved learning.",
      },
      {
        label: "Free OSHA & Safety Training",
        href: "https://training.dingfelder.co/",
        external: true,
        description: "Launch the external training portal for free OSHA-focused learning and broader safety growth.",
      },
    ],
  },
  {
    title: "Specialist machine help",
    tone: "doctor",
    intro: "Start here when you know the issue needs a Doctor, even if you do not know which one yet.",
    links: [
      {
        label: "Doctor Family™",
        href: "/a-i-r-o-n/doctor-family",
        description: "See the larger specialist architecture and choose the right machine-level path.",
      },
      {
        label: "Foundry Doctor™",
        href: "/a-i-r-o-n/foundry-doctor",
        description: "Read the foundry as one connected organism instead of isolated machines.",
      },
      {
        label: "Motor Doctor™",
        href: "/a-i-r-o-n/motor-doctor",
        description: "Focus on motor truth, drift, loading behavior, and failure development.",
      },
      {
        label: "Servo Doctor™",
        href: "/a-i-r-o-n/servo-doctor",
        description: "Focus on motion precision, commanded versus actual behavior, and control drift.",
      },
      {
        label: "VFD Doctor™",
        href: "/a-i-r-o-n/vfd-doctor",
        description: "Focus on variable-frequency drive behavior, protection states, and operating stability.",
      },
      {
        label: "Crane Doctor™",
        href: "/a-i-r-o-n/crane-doctor",
        description: "Focus on lifting, travel, safety margins, and operator-visible crane truth.",
      },
      {
        label: "Press Doctor™",
        href: "/a-i-r-o-n/press-doctor",
        description: "Focus on stroke behavior, sequencing, force, and abnormal cycle development.",
      },
      {
        label: "Baghouse Doctor™",
        href: "/a-i-r-o-n/baghouse-doctor",
        description: "Focus on dust collection truth, restriction, differential behavior, and capture integrity.",
      },
      {
        label: "Cooling Tower Doctor™",
        href: "/a-i-r-o-n/cooling-tower-doctor",
        description: "Focus on water-side cooling performance, drift, thermal stability, and system continuity.",
      },
    ],
  },
];

function isActivePath(currentPath: string, href: string, external?: boolean): boolean {
  if (external) return false;
  if (currentPath === href) return true;
  if (href !== "/a-i-r-o-n" && currentPath.startsWith(href)) return true;

  if (
    href === "/a-i-r-o-n/play-your-work-work-your-play" &&
    currentPath === "/a-i-r-o-n/play-your-work"
  ) {
    return true;
  }

  return false;
}

export default function Header({
  currentPath = "",
  showHeaderCTA = true,
}: HeaderProps): JSX.Element {
  const [isQuickJumpOpen, setIsQuickJumpOpen] = useState(false);
  const quickJumpRef = useRef<HTMLDivElement | null>(null);
  const quickJumpButtonRef = useRef<HTMLButtonElement | null>(null);

  const quickJumpLinks = useMemo(
    () => quickJumpGroups.flatMap((group) => group.links),
    [],
  );

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent): void {
      const target = event.target as Node | null;
      if (!target) return;

      if (
        quickJumpRef.current?.contains(target) ||
        quickJumpButtonRef.current?.contains(target)
      ) {
        return;
      }

      setIsQuickJumpOpen(false);
    }

    function handleEscape(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setIsQuickJumpOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
              const isActive = isActivePath(currentPath, item.href, item.external);

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

            <li className="nav-item nav-item-quick-jump">
              <button
                ref={quickJumpButtonRef}
                type="button"
                className={`nav-link nav-link-button nav-link-quick-jump-callout${isQuickJumpOpen ? " active" : ""}`}
                aria-expanded={isQuickJumpOpen}
                aria-controls="quick-jump-panel"
                onClick={() => setIsQuickJumpOpen((open) => !open)}
              >
                Quick Jump
                <span className={`quick-jump-caret${isQuickJumpOpen ? " open" : ""}`}>⌄</span>
              </button>
            </li>
          </ul>
        </nav>

        {showHeaderCTA ? (
          <a className="btn btn-primary header-cta" href="/a-i-r-o-n/contact">
            Start Discovery
          </a>
        ) : null}
      </div>

      {isQuickJumpOpen ? (
        <div className="container quick-jump-shell">
          <div
            ref={quickJumpRef}
            id="quick-jump-panel"
            className="quick-jump-panel"
            role="dialog"
            aria-label="Quick Jump"
          >
            <div className="quick-jump-topbar">
              <div>
                <p className="quick-jump-eyebrow">No maze required</p>
                <h2 className="quick-jump-title">Find what you need</h2>
                <p className="quick-jump-intro">
                  Start by intent, not terminology. Choose the outcome you need,
                  then jump straight to the right part of A.I.R.O.N.
                </p>
              </div>

              <button
                type="button"
                className="quick-jump-close"
                aria-label="Close Quick Jump"
                onClick={() => setIsQuickJumpOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="quick-jump-scroll">
              {quickJumpGroups.map((group) => (
                <section
                  key={group.title}
                  className={`quick-jump-group quick-jump-group-${group.tone}`}
                >
                  <div className="quick-jump-group-head">
                    <h3 className="quick-jump-group-title">{group.title}</h3>
                    <p className="quick-jump-group-intro">{group.intro}</p>
                  </div>

                  <div className="quick-jump-grid">
                    {group.links.map((link) => {
                      const isActive = isActivePath(currentPath, link.href, link.external);

                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          className={`quick-jump-link quick-jump-link-${group.tone}${isActive ? " active" : ""}`}
                          target={link.external ? "_blank" : undefined}
                          rel={link.external ? "noreferrer noopener" : undefined}
                          onClick={() => setIsQuickJumpOpen(false)}
                        >
                          <span className="quick-jump-link-title-row">
                            <span className="quick-jump-link-title">{link.label}</span>
                            {link.external ? (
                              <span className="quick-jump-link-external">↗</span>
                            ) : null}
                          </span>
                          <span className="quick-jump-link-description">
                            {link.description}
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            <div className="quick-jump-footer">
              <p className="quick-jump-footer-copy">
                {quickJumpLinks.length} direct paths, grouped by intent.
              </p>
              <a className="btn btn-secondary quick-jump-footer-cta" href="/a-i-r-o-n/modules">
                Open Full Modules Map
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
