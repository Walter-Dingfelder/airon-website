import React from "react";
import SectionHeading from "../core/SectionHeading";

/**
 * Intended path:
 *   src/components/doctrine/HardPositionLines.tsx
 *
 * Notes:
 * - Reusable doctrine/manifesto block for short high-emphasis statements.
 * - Best used on Industry. Period., safety, and architecture pages.
 */

export type HardPositionLinesProps = {
  title?: string;
  eyebrow?: string;
  lines: string[];
  sectionClassName?: string;
};

export default function HardPositionLines({
  title = "Hard position lines",
  eyebrow,
  lines,
  sectionClassName = "section section-alt",
}: HardPositionLinesProps): JSX.Element {
  return (
    <section className={sectionClassName}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} />

        <div className="doctrine-lines-grid">
          {lines.map((line) => (
            <div key={line} className="doctrine-line-card">
              <p>{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
