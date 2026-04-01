import React from "react";

/**
 * Intended path:
 *   src/components/core/RelatedLinksBlock.tsx
 *
 * Notes:
 * - Reusable related-pages / related-modules block.
 * - Replace <a> tags with framework-specific Link components if desired.
 */

export type RelatedLinkItem = {
  title: string;
  href: string;
  description: string;
};

export type RelatedLinksBlockProps = {
  title?: string;
  items: RelatedLinkItem[];
  supportingLine?: string;
};

export default function RelatedLinksBlock({
  title = "Related pages",
  items,
  supportingLine,
}: RelatedLinksBlockProps): JSX.Element {
  return (
    <section className="section">
      <div className="container">
        <header className="section-heading">
          <h2>{title}</h2>
        </header>

        <div className="related-links-grid">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="related-link-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>

        {supportingLine ? (
          <p className="support-line center">{supportingLine}</p>
        ) : null}
      </div>
    </section>
  );
}
