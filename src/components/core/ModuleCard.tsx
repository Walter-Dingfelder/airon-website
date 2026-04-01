import React from "react";

/**
 * Intended path:
 *   src/components/core/ModuleCard.tsx
 *
 * Notes:
 * - Reusable card for homepage module bands and modules overview grids.
 * - Replace <a> tags with framework-specific Link components if desired.
 */

export type ModuleCardProps = {
  name: string;
  href: string;
  description: string;
  eyebrow?: string;
  linkLabel?: string;
};

export default function ModuleCard({
  name,
  href,
  description,
  eyebrow,
  linkLabel = "Learn more →",
}: ModuleCardProps): JSX.Element {
  return (
    <a href={href} className="module-card">
      {eyebrow ? <p className="module-eyebrow">{eyebrow}</p> : null}
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="module-link">{linkLabel}</span>
    </a>
  );
}
