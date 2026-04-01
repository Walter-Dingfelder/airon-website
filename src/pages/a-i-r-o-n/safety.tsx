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
 * A.I.R.O.N. Safety / Tree of Knowledge source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/safety.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const threeRoots = [
  <><h3>Experience</h3><p>What people learned the hard way.</p></>,
  <><h3>Truth</h3><p>What the process, machines, and events actually showed.</p></>,
  <><h3>Memory</h3><p>What must still be there tomorrow when today’s expert is gone.</p></>,
];

const livingSystemItems = [
  "Handoffs matter",
  "Substitutions matter",
  "Drifting conditions matter",
  "Rising uncertainty matters",
  "No improvement is allowed to endanger the person creating it",
];

const practicalSupports = [
  "Better handoffs",
  "Clearer abnormal-event thinking",
  "Stronger incident review",
  "Stronger onboarding",
  "Better continuity between people and systems",
];

const withoutDoctrine = [
  "Memory fragments",
  "Handoffs weaken",
  "Urgency outruns understanding",
  "Avoidable pain repeats",
];

const withDoctrine = [
  "Truth stays closer to the decision",
  "Memory survives the shift",
  "Safety stays tied to the work",
  "The system learns from consequence instead of repeating it",
];

const relatedPages = [
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description: "Abnormal-event guidance and human protection.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description: "Truth retention and continuity.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description: "Startup discipline and proof logic.",
  },
  {
    title: "A.I.R.O.N. Home",
    href: "/a-i-r-o-n",
    description: "See the full system overview.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start the next conversation.",
  },
];

export default function AIRONSafetyPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/safety" mainClassName="airon-branch-page safety-page">
      <HeroBlock
        eyebrow="Experience. Truth. Memory."
        title="The Tree of Knowledge™"
        supportingLine="SAFETY"
        subhead="Safety is not a department. It is a living system property."
        body={
          <>
            <p>
              The Tree of Knowledge is the doctrine anchor for safety that lives
              inside real operation — not just policy binders, posters, or
              after-the-fact reporting.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start a Safety Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See C.A.T.A.S.T.R.O.P.H.E.",
          href: "/a-i-r-o-n/catastrophe",
        }}
      >
        <div className="hero-image-placeholder">
          <span>Approved Tree of Knowledge / calm serious safety image goes here</span>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Safety that stays connected to reality"
        paragraphs={[
          "The Tree of Knowledge is not just a symbol.",
          "It is the doctrine that ties experience, truth, and memory into a safety posture that stays alive during actual operation.",
          "It is safety kept connected to what the system, the people, and the environment are actually doing.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>It is not:</h3>
            <ul>
              <li>Safety as paperwork only</li>
              <li>Safety as poster-only culture</li>
              <li>Safety separated from live operating conditions</li>
              <li>Safety that depends on memory after the fact</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="The three roots of the doctrine" />
          <CapabilityGrid items={threeRoots} compact />
          <p className="support-line center">
            When these three stay connected, safety becomes stronger than policy alone.
            When they disconnect, people start relying on luck, speed, and incomplete knowledge.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Safety must live inside the operation" />
          <p className="center narrow-text">
            A.I.R.O.N. does not treat safety as a binder on a shelf. It treats
            safety as something that must be sensed, updated, protected, and
            reinforced while the operation is alive.
          </p>
          <CapabilityGrid items={livingSystemItems} compact />
          <p className="support-line center">
            Safety does not get stronger by being disconnected from the work.
            It gets stronger by staying tied to the truth of the work.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What the doctrine asks people and systems to do" />
          <div className="container narrow">
            <div className="doctrine-block">
              <ul>
                <li>Do not move before understanding</li>
                <li>Do not improvise where truth is available</li>
                <li>Do not repeat avoidable pain</li>
                <li>Do not let memory die at shift change</li>
                <li>Do not separate safety from reality</li>
              </ul>
            </div>
          </div>

          <SectionHeading title="In practice, this supports" />
          <CapabilityGrid items={practicalSupports} compact />
        </div>
      </section>

      <TextIntroBlock
        title="When systems fail, the doctrine matters even more"
        paragraphs={[
          "When normal systems fail, communication breaks, or conditions go dark, the Tree of Knowledge becomes even more important.",
          "That is where C.A.T.A.S.T.R.O.P.H.E. extends the doctrine to guide people safely, preserve truth, structure decisions, protect life, and support recovery without reckless movement.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <div className="cta-row">
            <a className="btn btn-secondary" href="/a-i-r-o-n/catastrophe">
              See C.A.T.A.S.T.R.O.P.H.E.
            </a>
          </div>
        </div>
      </section>

      <ContrastBlock
        title="Most safety programs are strongest on normal days"
        leftTitle="Without a living safety doctrine"
        leftItems={withoutDoctrine}
        rightTitle="With the Tree of Knowledge"
        rightItems={withDoctrine}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <p className="center narrow-text">
            Injuries often happen during handoffs, substitutions, jams,
            uncertainty, guessing, and when the operation outruns the
            understanding.
          </p>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with the doctrine if you need the philosophy. Move into abnormal-event logic, continuity, or startup discipline when the path is clearer."
      />

      <CTAFooterBand
        headline="Knowledge Before Action. Truth Before Movement. People Before Everything."
        primaryCTA={{
          label: "Start a Safety Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See C.A.T.A.S.T.R.O.P.H.E.",
          href: "/a-i-r-o-n/catastrophe",
        }}
        supportingLine="Experience. Truth. Memory."
      />
    </SiteLayout>
  );
}
