import React from "react";

/**
 * Intended path:
 *   src/components/core/HeroBlock.tsx
 *
 * Notes:
 * - Reusable page hero block for A.I.R.O.N. pages.
 * - Visual is passed as children so pages can supply an image, illustration, or placeholder.
 */

type HeroBlockProps = {
  eyebrow?: string;
  title: string;
  supportingLine?: string;
  subhead?: string;
  body?: React.ReactNode;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  children?: React.ReactNode;
};

export default function HeroBlock({
  eyebrow,
  title,
  supportingLine,
  subhead,
  body,
  primaryCTA,
  secondaryCTA,
  children,
}: HeroBlockProps): JSX.Element {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1>{title}</h1>
          {supportingLine ? <p className="pronunciation">{supportingLine}</p> : null}
          {subhead ? <p className="hero-subhead">{subhead}</p> : null}
          {body ? <div className="hero-body">{body}</div> : null}

          <div className="cta-row">
            {primaryCTA ? (
              <a className="btn btn-primary" href={primaryCTA.href}>
                {primaryCTA.label}
              </a>
            ) : null}
            {secondaryCTA ? (
              <a className="btn btn-secondary" href={secondaryCTA.href}>
                {secondaryCTA.label}
              </a>
            ) : null}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          {children ?? (
            <div className="hero-image-placeholder">
              <span>Approved hero visual goes here</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
