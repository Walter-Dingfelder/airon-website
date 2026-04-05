import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const whatTrainingIs = [
  "Governed workforce readiness",
  "Role-fit familiarization before live exposure",
  "Preserved institutional memory made usable",
  "Judgment development, not just content delivery",
  "Proof-oriented progression instead of checkbox completion",
  "Continuous improvement of human-to-machine engagement",
];

const whatTrainingIsNot = [
  "One-and-done compliance theater",
  "Memory-free onboarding that starts over with every new person",
  "A pile of disconnected videos, PDFs, and quizzes",
  "Training separated from startup, safety, maintenance, and process truth",
  "A replacement for human judgment",
  "An excuse to learn under live consequence",
];

const whyItMatters = [
  "People should not have to learn the most important lessons for the first time during a bad day",
  "Plants lose too much knowledge when experience leaves without transfer",
  "Weak familiarization slows startups, weakens handoffs, and increases avoidable exposure",
  "Training should help people recognize patterns, sequences, limits, and consequences before the moment tightens",
  "Structured readiness reduces dependence on whoever happens to be nearby when something starts going wrong",
  "A.I.R.O.N. keeps training tied to the system it is meant to support",
];

const philosophyStack = [
  "SYSTEM-LIVE preserves machine truth, baseline, drift, and proof",
  "PLAYER-LIVE strengthens human understanding, judgment, engagement, and governed participation",
  "V.A.U.L.T. preserves custody, context, recall, and IMP™ memory packets",
  "Better Days turns surfaced lessons into routed improvements instead of lost suggestions",
  "Industrial Campus creates governed familiarization before live consequence arrives",
  "PLAY YOUR WORK — WORK YOUR PLAY activates modern human skill in serious industrial form",
];

const progressionPoints = [
  "Observe the system in context",
  "Rehearse the sequence with guidance",
  "Demonstrate understanding before broader autonomy",
  "Retain evidence of what was learned and how it was proven",
  "Refresh when roles, equipment, or conditions change",
  "Feed new lessons back into memory and future training",
];

const operationalApplications = [
  "Startup and shutdown readiness",
  "Abnormal-event familiarization",
  "Role-based onboarding and cross-training",
  "Safer handoffs between experienced and newer personnel",
  "Machine-specific learning supported by Doctor modules and system truth",
  "Better continuity when staffing, equipment, or operating conditions change",
];

const withoutPhilosophy = [
  "Training becomes fragmented and forgettable",
  "Institutional knowledge walks out the door too easily",
  "People are pushed toward improvisation sooner than they should be",
  "Proof of readiness is weaker and less consistent",
];

const withPhilosophy = [
  "Training stays connected to reality-shaped system truth",
  "Readiness becomes more governed, repeatable, and defensible",
  "Lessons survive beyond the person who first learned them",
  "Human judgment gets stronger before live consequence arrives",
];

const relatedPages = [
  {
    title: "SYSTEM-LIVE / PLAYER-LIVE",
    href: "/a-i-r-o-n/system-live-player-live",
    description:
      "See the operating split between machine truth and governed human growth.",
  },
  {
    title: "Better Days",
    href: "/a-i-r-o-n/better-days",
    description:
      "See how surfaced lessons can be routed, preserved, and turned into future training.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how custody, context, recall, and IMP™ memory strengthen human readiness over time.",
  },
  {
    title: "Dingfelder Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description:
      "See the governed environment where rehearsal, familiarization, and skill transfer can happen before the shift.",
  },
  {
    title: "Live Training Site",
    href: "https://training.dingfelder.co/",
    description:
      "Open the active training environment for structured industrial learning and workforce readiness.",
  },
];

export default function TrainingPhilosophyPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/training-philosophy"
      mainClassName="airon-branch-page training-philosophy-page"
    >
      <HeroBlock
        eyebrow="PLAYER-LIVE is the continuous improvement of human-to-machine engagement."
        title="Training Philosophy"
        supportingLine="Train judgment before consequence."
        subhead="A.I.R.O.N. training exists to build governed readiness, preserve institutional memory, and improve human-to-machine engagement before the shift is on top of people."
        body={
          <>
            <p>
              Training should not be a disconnected side activity that lives far
              away from the machine, the process, the lesson, or the memory.
            </p>
            <p>
              Under A.I.R.O.N., training is part of the operating system. It is
              where preserved truth, guided rehearsal, role development, and
              continuous improvement begin strengthening human judgment before
              live consequence arrives.
            </p>
          </>
        }
        primaryCTA={{
          label: "Open Live Training",
          href: "https://training.dingfelder.co/",
        }}
        secondaryCTA={{
          label: "Start a Training Conversation",
          href: "/a-i-r-o-n/contact",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>What training should do</h3>
            <p>
              Build familiarity, judgment, pattern recognition, sequence
              discipline, and usable confidence before the person is under live
              pressure.
            </p>
          </div>
          <div className="comparison-card">
            <h3>What training should prevent</h3>
            <p>
              Cold starts, accidental relearning, weak handoffs, avoidable
              improvisation, and the loss of hard-earned knowledge every time
              people or conditions change.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What A.I.R.O.N. means by training"
        paragraphs={[
          "A.I.R.O.N. training is not just about transferring information. It is about building governed readiness that stays tied to the actual system, the actual role, and the actual consequence profile of the work.",
          "That means training must preserve memory, respect context, strengthen human judgment, and stay connected to the machine truth the person will eventually have to interpret.",
          "The point is not just to complete a lesson. The point is to make the person more ready, more aware, and more defensible in real operation.",
        ]}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What this training philosophy is"
            subtitle="It is part of the operating system, not a detached side program."
            align="center"
          />
          <CapabilityGrid items={whatTrainingIs} compact />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>What it is not</h3>
            <ul>
              {whatTrainingIsNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Why this matters operationally"
            subtitle="Weak training does not stay in the classroom. It shows up in the shift."
            align="center"
          />
          <CapabilityGrid items={whyItMatters} compact />
          <p className="support-line center">
            Training quality affects startup quality, handoff quality, recovery
            quality, and the strength of human response when the system becomes less forgiving.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="The philosophy stack"
            subtitle="Training gets stronger when memory, improvement, rehearsal, and truth stay connected."
            align="center"
          />
          <CapabilityGrid items={philosophyStack} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Governed progression"
            subtitle="Readiness should be developed, demonstrated, preserved, and refreshed."
            align="center"
          />
          <CapabilityGrid items={progressionPoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              Readiness should not be assumed just because material was shown.
            </p>
            <p>
              It should become more visible through guided exposure, proof,
              retention, and refresh as the system, role, and operating conditions evolve.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Where this philosophy applies"
            subtitle="Training belongs wherever human judgment and machine consequence meet."
            align="center"
          />
          <CapabilityGrid items={operationalApplications} compact />
        </div>
      </section>

      <ContrastBlock
        title="Training should strengthen the system, not sit beside it"
        leftTitle="Without a governed training philosophy"
        leftItems={withoutPhilosophy}
        rightTitle="With an A.I.R.O.N. training philosophy"
        rightItems={withPhilosophy}
      />

      <TextIntroBlock
        title="Preserve the lesson. Improve the person. Protect the shift."
        paragraphs={[
          "Training should absorb hard-earned experience, translate it into usable guidance, and return it to the workforce in a form that people can actually carry into operation.",
          "That is why A.I.R.O.N. keeps training connected to memory, safety, startup, improvement, and guided human development instead of treating it as a disconnected obligation.",
          "We are Industry. Period.",
        ]}
        sectionClassName="section"
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with the training philosophy. Expand into system truth, preserved memory, improvement routing, and governed rehearsal as the path becomes more specific."
      />

      <CTAFooterBand
        headline="Train the human side of the system with the same seriousness as the machine side."
        primaryCTA={{
          label: "Open Live Training",
          href: "https://training.dingfelder.co/",
        }}
        secondaryCTA={{
          label: "Start a Training Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="Preserve the lesson. Strengthen the judgment. Improve the engagement."
      />
    </SiteLayout>
  );
}
