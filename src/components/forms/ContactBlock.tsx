import React from "react";

/**
 * Intended path:
 *   src/components/forms/ContactBlock.tsx
 *
 * Notes:
 * - Reusable direct-contact block for A.I.R.O.N. pages.
 * - Uses the locked Dingfelder Enterprises contact information.
 */

export type ContactBlockProps = {
  title?: string;
  supportingLine?: string;
  sectionClassName?: string;
};

export default function ContactBlock({
  title = "Contact Dingfelder Enterprises directly",
  supportingLine = "If you already know what you need to discuss, direct contact is welcome.",
  sectionClassName = "section",
}: ContactBlockProps): JSX.Element {
  return (
    <section className={sectionClassName} id="direct-contact">
      <div className="container narrow">
        <header className="section-heading">
          <h2>{title}</h2>
        </header>

        <div className="contact-card">
          <p><strong>Dingfelder Enterprises</strong></p>
          <p>Walter W. Dingfelder</p>
          <p>North East, PA 16428</p>
          <p>
            <a href="https://dingfelder.co">dingfelder.co</a>
          </p>
          <p>
            <a href="mailto:walter@dingfelder.co">walter@dingfelder.co</a>
          </p>
          <p>
            <a href="tel:+18144405753">(814) 440-5753</a>
          </p>
        </div>

        <p className="support-line">{supportingLine}</p>
      </div>
    </section>
  );
}
