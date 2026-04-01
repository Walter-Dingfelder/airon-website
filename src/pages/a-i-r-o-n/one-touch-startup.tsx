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
 * A.I.R.O.N. One-Touch Startup source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/one-touch-startup.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const requirements = [
  "Verified prerequisites",
  "Approved recipe logic",
  "Command vs actual proof",
  "Hold / retry / abort logic",
  "Annunciation where needed",
  "Human permissives where risk or visual acceptance matters",
  "Startup truth capture for future learning",
];

const proofSources = [
  "Current",
  "Motion",
  "Position",
  "Flow",
  "Temperature",
  "Vibration",
  "Acoustic feedback",
  "Operator acceptance",
];

const capabilities = [
  "Launch approved startup recipes from authorized panels",
  "Issue plantwide or zone-based startup warning",
  "Verify prerequisites before first motion",
  "Require proof from current, motion, position, flow, temperature, vibration, acoustic, or operator acceptance",
  "Hold, retry, or abort safely when expected proof is missing",
  "Support restart, runout, clear, test, and controlled stop recipes",
  "Capture startup truth, signatures, delays, and quality for future learning",
];

const withoutOTS = [
  "Startup varies by person and shift",
  "Proof may be assumed instead of verified",
  "Delays and weak starts are harder to diagnose",
  "Startup knowledge stays trapped in individuals",
];

const withOTS = [
  "The sequence is governed",
  "Proof is visible",
  "Holds are easier to understand",
  "Startup truth becomes reusable",
];

const relatedPages = [
  {
    title: "Furnace Doctor™",
    href: "/a-i-r-o-n/furnace-doctor",
    description: "Hot-end truth and startup visibility.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description: "Predictive timing and startup degradation trends.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description: "Startup truth, history, and recoverable lessons.",
  },
  {
    title: "Dingfelder Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description: "Startup rehearsal and skill activation.",
  },
];

export default function AIRONOneTouchStartupPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/one-touch-startup" mainClassName="airon-module-page one-touch-startup-page">
      <HeroBlock
        eyebrow="One authorized start. Many verified steps. Zero guesswork."
        title="One-Touch Startup™"
        subhead="Startup should be controlled, provable, and repeatable."
        body={
          <>
            <p>One-Touch Startup turns tribal startup into governed startup.</p>
            <p>
              It replaces remembered, improvised, rushed startup behavior with
              structured sequencing, proof-based progression, annunciation, human
              permissives, and captured truth.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Startup Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="hero-image-placeholder">
          <span>Approved HMI / control-room / startup-sequence image goes here</span>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Governed startup, not blind automation"
        paragraphs={[
          "One-Touch Startup begins with prerequisite checks, operator authorization, startup annunciation, step-by-step release logic, proof-of-operation before progression, and human permissives where visual judgment or risk requires them.",
          "Every step advances because the process actually did what it was supposed to do — not because a timer expired, and not because someone hoped it was fine.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>One-Touch Startup is not:</h3>
            <ul>
              <li>One-button chaos</li>
              <li>Blind automation</li>
              <li>Startup by memory alone</li>
              <li>Timer-only sequencing</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What disciplined startup requires" />
          <CapabilityGrid items={requirements} />

          <SectionHeading title="Typical proof sources" />
          <CapabilityGrid items={proofSources} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="What One-Touch Startup can do" />
          <CapabilityGrid items={capabilities} />
        </div>
      </section>

      <TextIntroBlock
        title="If startup matters, proof matters"
        paragraphs={[
          "Weak startup behavior hides too much: uncertainty, tribal workarounds, fragile handoffs, missing confirmations, and rushed decisions.",
          "One-Touch Startup makes the sequence visible, teachable, and repeatable by requiring proof before progression.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>The startup sequence should always answer:</p>
            <ul>
              <li>Was the command issued?</li>
              <li>Did the device or process actually respond?</li>
              <li>Was the response acceptable?</li>
              <li>Is the next step safe to release?</li>
            </ul>
          </div>
        </div>
      </section>

      <ContrastBlock
        title="Bad startups cost more than time"
        leftTitle="Without One-Touch Startup"
        leftItems={withoutOTS}
        rightTitle="With One-Touch Startup"
        rightItems={withOTS}
      />

      <section className="section">
        <div className="container narrow">
          <p className="center narrow-text">
            Weak startup behavior creates equipment stress, operator uncertainty,
            nuisance downtime, weak product starts, hidden workarounds, and
            safety risk during handoffs and rushed decisions.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="Structure from the system. Judgment from the people."
        paragraphs={[
          "This is not blind automation.",
          "Humans still approve, confirm, judge, intervene, and govern the risky moments.",
          "The system provides structure. People provide judgment.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>If startup matters, proof matters.</strong>
            </p>
          </div>
        </div>
      </section>

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Start with startup discipline where the process begins. Expand into advisory, prediction, memory, and training when the system is ready."
        />
      </div>

      <CTAFooterBand
        headline="Make startup repeatable before the weak habits become normal."
        primaryCTA={{
          label: "Request a Startup Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="One startup sequence. One line. One process. Or the full operation."
      />
    </SiteLayout>
  );
}
