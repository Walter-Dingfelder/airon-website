import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

/**
 * A.I.R.O.N. V.A.U.L.T. source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/vault.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const preservedItems = [
  "Operational truth",
  "Baseline memory",
  "Drift signatures",
  "Root-cause evidence",
  "Startup and shutdown history",
  "Learned event patterns",
  "Operator-confirmed lessons",
  "Institutional memory packets",
  "Decision timing and outcomes",
];

const memoryModes = [
  "Weighted memory",
  "Baseline memory",
  "Institutional memory",
  "Context-based recall",
];

const capabilities = [
  "Preserve accurate records through failure and recovery",
  "Keep history intact for learning and prevention",
  "Support honest review without reconstruction or guesswork",
  "Protect evidence-grade records and continuity of context",
  "Surface the right memory at the right time",
  "Turn lived experience into reusable operating intelligence",
];

const withoutVault = [
  "History fragments",
  "Lessons disappear with turnover",
  "Reviews rely too much on memory and opinion",
  "The plant pays again for old mistakes",
];

const withVault = [
  "Truth stays intact",
  "Continuity survives change",
  "Learning compounds",
  "Context is easier to recover when it matters",
];

const relatedPages = [
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description: "Predictive timing and action windows.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description: "Startup truth and repeatable sequencing.",
  },
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description: "Abnormal-event continuity and Last Known Snapshot logic.",
  },
  {
    title: "Doctor Family",
    href: "/a-i-r-o-n/doctor-family",
    description: "Specialist architecture overview.",
  },
];

export default function AIRONVaultPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/vault" mainClassName="airon-module-page vault-page">
      <HeroBlock
        eyebrow="Truth stored. Memory preserved. Lessons never lost."
        title="V.A.U.L.T.®"
        supportingLine="Versatile AI Utility & Learning Terminal"
        subhead="If it mattered once, it should still matter later."
        body={
          <>
            <p>
              V.A.U.L.T. is A.I.R.O.N.’s protected memory layer for truth,
              history, context, and recoverable lessons.
            </p>
            <p>
              It preserves what the process showed, what the system learned, and
              how humans responded — not as a dead archive, but as usable memory.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Memory Architecture Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="hero-image-placeholder">
          <span>Approved darker structured memory / archive image goes here</span>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Memory with custody, context, and recall"
        paragraphs={[
          "V.A.U.L.T. is protected, structured memory designed to help plants stop losing what they already paid to learn.",
          "V.A.U.L.T. is where operational truth stays intact long enough to become useful again.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>V.A.U.L.T. is not:</h3>
            <ul>
              <li>Surveillance</li>
              <li>A dead archive</li>
              <li>Endless raw telemetry</li>
              <li>Memory without structure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What V.A.U.L.T. preserves" />
          <CapabilityGrid items={preservedItems} />
          <p className="support-line center">
            What matters is not only what happened — but whether the plant can
            still use that truth later.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Not every memory should weigh the same" />
          <CapabilityGrid items={memoryModes} compact />
          <div className="two-col top-gap">
            <div>
              <ul>
                <li>Bad days do not rewrite good standards</li>
                <li>One-off abnormalities do not become the new normal</li>
                <li>Useful history appears when it actually matters</li>
              </ul>
            </div>
            <div>
              <p>Memory should support continuity instead of becoming noise.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What V.A.U.L.T. can do" />
          <CapabilityGrid items={capabilities} />
        </div>
      </section>

      <ContrastBlock
        title="Plants do not only lose production. They lose memory."
        leftTitle="Without V.A.U.L.T."
        leftItems={withoutVault}
        rightTitle="With V.A.U.L.T."
        rightItems={withVault}
      />

      <section className="section">
        <div className="container narrow">
          <p className="center narrow-text">
            When people rotate, retire, transfer, or leave, hard-earned pattern
            recognition can disappear with them.
          </p>
          <p className="center narrow-text">
            V.A.U.L.T. keeps the lessons that cost too much to relearn and makes
            them available again when today starts to look like a day the system
            has seen before.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="Protected memory, not surveillance theater"
        paragraphs={[
          "V.A.U.L.T. is not built to watch people for its own sake.",
          "It is built to preserve truth, protect continuity, strengthen recovery, support learning, and keep the right memory available when it matters most.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>Data remembers. V.A.U.L.T. learns.</strong>
            </p>
          </div>
        </div>
      </section>

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Start with memory where continuity is weak. Expand into prediction, startup, and abnormal-event protection when the system is ready."
        />
      </div>

      <CTAFooterBand
        headline="Keep the lessons that cost too much to lose."
        primaryCTA={{
          label: "Request a Memory Architecture Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="Truth should survive turnover, drift, and disruption."
      />
    </SiteLayout>
  );
}
