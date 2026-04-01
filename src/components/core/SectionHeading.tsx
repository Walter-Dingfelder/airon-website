import React from "react";

/**
 * Intended path:
 *   src/components/core/SectionHeading.tsx
 *
 * Notes:
 * - Reusable heading block for page sections.
 * - Keeps eyebrow/title/subtitle structure consistent across the site.
 */

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps): JSX.Element {
  const className =
    align === "center"
      ? "section-heading section-heading-center"
      : "section-heading";

  return (
    <header className={className}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </header>
  );
}
