import React from "react";
import SectionHeading from "./SectionHeading";

/**
 * Intended path:
 *   src/components/core/TextIntroBlock.tsx
 *
 * Notes:
 * - Reusable intro section for pages that need a heading plus one or more
 *   paragraphs of explanatory copy.
 * - Uses SectionHeading for consistency.
 */

export type TextIntroBlockProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  paragraphs: Array<string | React.ReactNode>;
  align?: "left" | "center";
  narrow?: boolean;
  sectionClassName?: string;
};

export default function TextIntroBlock({
  eyebrow,
  title,
  subtitle,
  paragraphs,
  align = "left",
  narrow = true,
  sectionClassName = "section",
}: TextIntroBlockProps): JSX.Element {
  const containerClassName = narrow ? "container narrow" : "container";
  const paragraphClassName = align === "center" ? "center narrow-text" : "";

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align={align}
        />

        {paragraphs.map((paragraph, index) => (
          <p
            key={typeof paragraph === "string" ? paragraph : index}
            className={paragraphClassName}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
