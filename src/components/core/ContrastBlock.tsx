import React from "react";
import SectionHeading from "./SectionHeading";

/**
 * Intended path:
 *   src/components/core/ContrastBlock.tsx
 *
 * Notes:
 * - Reusable comparison block for "this is / this is not",
 *   "without / with", or similar two-column contrasts.
 */

export type ContrastBlockProps = {
  title: string;
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  eyebrow?: string;
  subtitle?: string;
  sectionClassName?: string;
};

export default function ContrastBlock({
  title,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
  eyebrow,
  subtitle,
  sectionClassName = "section section-alt",
}: ContrastBlockProps): JSX.Element {
  return (
    <section className={sectionClassName}>
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>{leftTitle}</h3>
            <ul>
              {leftItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="comparison-card">
            <h3>{rightTitle}</h3>
            <ul>
              {rightItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
