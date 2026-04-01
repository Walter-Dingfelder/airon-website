import React from "react";

/**
 * Intended path:
 *   src/components/doctrine/SystemPlayerBlock.tsx
 *
 * Notes:
 * - Reusable doctrine block for human/system authority language.
 * - Best used on homepage, startup, campus, and similar pages.
 */

export type SystemPlayerBlockProps = {
  systemText?: string;
  playerText?: string;
  title?: string;
};

export default function SystemPlayerBlock({
  systemText = "SYSTEM holds truth, timing, structure, and repeatability.",
  playerText = "PLAYER retains human judgment, approval, ethics, and physical authority.",
  title = "A.I.R.O.N. does not replace human judgment. It protects it.",
}: SystemPlayerBlockProps): JSX.Element {
  return (
    <section className="section section-alt">
      <div className="container narrow">
        <header className="section-heading">
          <h2>{title}</h2>
        </header>

        <div className="doctrine-block">
          <p>
            <strong>SYSTEM</strong> {systemText.replace(/^SYSTEM\s*/i, "")}
          </p>
          <p>
            <strong>PLAYER</strong> {playerText.replace(/^PLAYER\s*/i, "")}
          </p>
        </div>
      </div>
    </section>
  );
}
