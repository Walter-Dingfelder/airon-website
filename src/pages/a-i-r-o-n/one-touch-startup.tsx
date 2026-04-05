import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const requirements = [
  "Authorized startup recipe selection",
  "Verified prerequisites before first release",
  "Command-versus-actual proof at each critical step",
  "Annunciation where people need time to respond",
  "Human permissives where visual judgment or risk matters",
  "Hold, retry, and abort logic with visible reason",
  "Truth capture for future startup learning",
];

const proofSources = [
  "Current and power response",
  "Motion and position proof",
  "Flow and pressure confirmation",
  "Temperature and thermal readiness",
  "Vibration and mechanical stability",
  "Acoustic confirmation where sound matters",
  "Panel state and control acknowledgement",
  "Operator visual acceptance when the system should not guess",
];

const architecturePoints = [
  "One-Touch Startup™ is not one-button chaos; it is governed release logic",
  "A start command should not be enough by itself to release the next step",
  "Each critical step should prove that the process actually responded acceptably",
  "If proof is missing, the system should hold, retry, or abort for a visible reason",
  "Where the process needs human judgment, the human stays in the loop",
  "Startup truth should be captured so the next startup is smarter than the last one",
];

const capabilityPoints = [
  "Launch approved startup recipes from authorized panels",
  "Warn the affected area before motion, heat, flow, or transfer begins",
  "Verify prerequisites before the first release",
  "Require proof before progression instead of trusting timers alone",
  "Support restart, runout, clear, test, and controlled stop recipes",
  "Expose weak starts, repeated holds, nuisance retries, and fragile steps",
  "Capture startup timing, delays, proofs, and exceptions for review",
  "Turn tribal startup knowledge into governed, teachable structure",
];

const operationalResults = [
  "Fewer rushed handoffs and fewer assumed confirmations",
  "Clearer visibility into why startup slowed, held, or failed",
  "Less equipment stress from weak or premature release",
  "Stronger quality at the beginning of production",
  "Better training because startup logic becomes visible and reviewable",
  "Reusable proof for maintenance, controls, operations, and leadership",
];

const withoutOTS = [
  "Startup varies by person, shift, and memory",
  "Proof is assumed more often than it is verified",
  "Weak starts hide until they become downtime, damage, or quality loss",
  "The lesson stays trapped in whoever happened to be there",
];

const withOTS = [
  "The sequence is governed",
  "Proof is visible before progression",
  "Holds and retries are easier to understand",
  "Startup truth becomes reusable instead of disposable",
];

const relatedPages = [
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how startup drift, repeated delays, and weak starts become predictive timing instead of recurring surprise.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how startup truth, exception history, and recoverable lessons are retained instead of lost.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See why proof, annunciation, and human permissives matter most when consequence can begin at startup.",
  },
  {
    title: "Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description:
      "See how governed startup structure supports rehearsal, workforce development, and operational confidence.",
  },
];

export default function OneTouchStartupPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/one-touch-startup"
      mainClassName="airon-module-page one-touch-startup-page"
    >
      <HeroBlock
        eyebrow="One authorized start. Many verified steps. Zero guesswork."
        title="One-Touch Startup™"
        supportingLine="Governed startup before motion, heat, flow, and risk outrun understanding."
        subhead="One-Touch Startup™ turns startup from tribal memory and hopeful sequencing into structured release, visible proof, and captured truth."
        body={
          <>
            <p>
              Startup is where small assumptions become equipment stress, quality loss,
              rushed decisions, and unsafe handoffs. It is also where weak habits can
              become normal if nobody structures the sequence.
            </p>
            <p>
              One-Touch Startup™ replaces improvised startup behavior with governed
              startup logic: prerequisite checks, annunciation, human permissives,
              command-versus-actual proof, and hold/retry/abort decisions that stay
              visible instead of hidden inside timing and guesswork.
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
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Command issued</h3>
            <p>
              The system knows the requested step, the approved recipe, and the
              prerequisites that must exist before anything moves forward.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Response proven</h3>
            <p>
              The next step releases only when the process actually responds in an
              acceptable way, or the system holds with a visible reason.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Governed startup, not blind automation"
        paragraphs={[
          "One-Touch Startup™ is not about making startup reckless, automatic, or detached from the people who understand the process. It is about giving startup structure before speed creates confusion.",
          "A disciplined startup sequence should know what must already be true, what proof must arrive next, what warnings must be issued, when the human must confirm, and what should happen when proof does not show up.",
          "That is how startup becomes repeatable without becoming careless.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>One-Touch Startup™ is not:</h3>
            <ul>
              <li>One-button chaos</li>
              <li>Blind automation</li>
              <li>Timer-only sequencing</li>
              <li>Startup by memory alone</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What disciplined startup requires"
            subtitle="The start should be authorized once. The proof should be earned step by step."
            align="center"
          />
          <CapabilityGrid items={requirements} compact />

          <SectionHeading
            title="Typical proof sources"
            subtitle="The process should advance because it actually responded, not because time simply passed."
            align="center"
          />
          <CapabilityGrid items={proofSources} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="The startup doctrine"
            subtitle="Structure from the system. Judgment from the people."
            align="center"
          />
          <CapabilityGrid items={architecturePoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What One-Touch Startup™ can do"
            subtitle="Govern the release, prove the response, and keep the lesson."
            align="center"
          />
          <CapabilityGrid items={capabilityPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="If startup matters, proof matters"
        paragraphs={[
          "Weak startup behavior hides too much: uncertainty, tribal workarounds, missing confirmations, delayed feedback, rushed release, and fragile handoffs.",
          "One-Touch Startup™ makes startup visible, teachable, and reviewable by requiring proof before progression and by preserving the truth of what actually happened during the sequence.",
          "That truth becomes useful later for training, troubleshooting, controls refinement, maintenance planning, and predictive timing.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>The startup sequence should always answer:</p>
            <ul>
              <li>Was the command issued by an authorized path?</li>
              <li>Did the device or process actually respond?</li>
              <li>Was the response acceptable?</li>
              <li>Is the next release safe and justified?</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Why this matters operationally"
            subtitle="Bad startups cost more than time."
            align="center"
          />
          <CapabilityGrid items={operationalResults} compact />
          <p className="support-line center">
            Startup discipline protects equipment, strengthens confidence, improves
            quality, and keeps the operation from normalizing weak habits.
          </p>
        </div>
      </section>

      <ContrastBlock
        title="Startup can be governed without becoming rigid"
        leftTitle="Without One-Touch Startup™"
        leftItems={withoutOTS}
        rightTitle="With One-Touch Startup™"
        rightItems={withOTS}
      />

      <TextIntroBlock
        title="Captured startup truth makes the next startup stronger"
        paragraphs={[
          "The sequence should not disappear once the line is running. Startup truth should feed memory, review, training, and future improvement.",
          "Repeated holds, weak responses, nuisance retries, and fragile step transitions are not noise. They are evidence.",
          "When that evidence is preserved, A.I.R.O.N. can help the operation move from repeated startup pain to governed startup confidence.",
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
          supportingLine="Start where the process begins. Expand into prediction, memory, safety, and training as the system matures."
        />
      </div>

      <CTAFooterBand
        headline="Make startup repeatable before weak habits become normal."
        primaryCTA={{
          label: "Request a Startup Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="One line. One machine family. One process. Or the full operation."
      />
    </SiteLayout>
  );
}
