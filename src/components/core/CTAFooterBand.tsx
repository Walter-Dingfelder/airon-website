import React from "react";

/**
 * Intended path:
 *   src/components/core/CTAFooterBand.tsx
 *
 * Notes:
 * - Reusable end-of-page CTA block.
 * - Keep action choices restrained.
 */

type CTAFooterBandProps = {
  headline: string;
  supportingLine?: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
};

export default function CTAFooterBand({
  headline,
  supportingLine,
  primaryCTA,
  secondaryCTA,
}: CTAFooterBandProps): JSX.Element {
  return (
    <section className="section section-cta">
      <div className="container narrow center">
        <h2>{headline}</h2>

        <div className="cta-row center">
          <a className="btn btn-primary" href={primaryCTA.href}>
            {primaryCTA.label}
          </a>

          {secondaryCTA ? (
            <a className="btn btn-secondary" href={secondaryCTA.href}>
              {secondaryCTA.label}
            </a>
          ) : null}
        </div>

        {supportingLine ? <p className="support-line">{supportingLine}</p> : null}
      </div>
    </section>
  );
}
