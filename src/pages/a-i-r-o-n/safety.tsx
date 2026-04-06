import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const treeRoots = [
  "Experience — what people learned the hard way and what should never have to be relearned through pain",
  "Truth — what the machine, the process, the environment, and the event actually showed",
  "Memory — what must still be there tomorrow when today’s expert, supervisor, or witness is gone",
];

const uncertaintyPoints = [
  "Uncertainty is the most dangerous condition in any factory because people begin compensating before they fully understand what changed",
  "Handoffs are safety events because knowledge, muscle memory, and hazard awareness are being transferred under live conditions",
  "Identity substitution is a measurable operating condition, not background noise, because the same line behaves differently when the person at the controls changes",
  "Change itself is a safety event because improvement, adjustment, and recovery create the exact moments where jams, burns, catches, and unsafe improvisation appear",
  "Abnormal operation compresses time, attention, and judgment, which is why safety must already be inside the operating system before the bad moment arrives",
  "Departments can write rules and investigate incidents, but only a living system can detect live risk while the work is still moving",
];

const livingSafetyPoints = [
  "Continuously evaluate operator identity, process stability, hazard state, and environmental risk to keep a live safety envelope around the work",
  "Treat Predictive Breakpoints® in the safety domain as pre-conditions that appear before injury, damage, or panic",
  "Narrow the operating window when experience drops, uncertainty rises, or conditions degrade",
  "Increase verification, surface hazard warnings, and project the best known safe practices before visible error occurs",
  "Preserve safety truth through drift, substitution, disruption, and recovery instead of waiting for after-the-fact reporting",
  "Keep people alive without forcing the operation to choose between safety and useful throughput",
];

const protectedExperimentationPoints = [
  "No improvement is allowed to endanger the person creating it",
  "When the system changes, safety monitoring rises before instability is allowed to spread",
  "When skill is missing, protection appears first — not blame",
  "When experience is present, the system preserves it so safer better practice survives the shift",
  "When a workaround forms, A.I.R.O.N. captures the condition, the risk, and the outcome before politics can distort the lesson",
  "When catastrophe forms, C.A.T.A.S.T.R.O.P.H.E.™ extends the same doctrine under compressed, high-consequence conditions",
];

const trainingTruthPoints = [
  "Training truth and operating truth must be identical so the plant never teaches one reality and enforces another",
  "Offline preparation should use the same logic, sequences, prompts, and hazard context the operator will encounter online",
  "Real-time guidance should arrive when expertise is least accessible, not after the shift when the danger has already passed",
  "The best operator’s safe practice should remain available during fill-ins, substitutions, and handoffs",
  "Safety gets stronger when the system remembers who was present, what changed, and what procedure actually worked",
  "A.I.R.O.N. protects humans during change so they can still think, judge, and improve instead of guessing under pressure",
];

const doctrineAsks = [
  "Do not move before understanding",
  "Do not confuse speed with control",
  "Do not let handoffs happen without support",
  "Do not improvise where truth is available",
  "Do not treat atmosphere, identity, or fatigue as invisible",
  "Do not let memory die at the end of the shift",
];

const withoutLivingSafety = [
  "Safety weakens at every handoff",
  "Uncertainty rises faster than understanding",
  "Improvement and production start fighting each other",
  "Heroics replace governed response",
  "Memory fragments after abnormal events",
  "The same avoidable pain gets relearned the hard way",
];

const withLivingSafety = [
  "Risk is surfaced while it is still calm and bounded",
  "Handoffs tighten control instead of dissolving it",
  "Improvement happens inside a protected envelope",
  "Truth stays connected to the work, the people, and the timeline",
  "Recovery is guided instead of improvised",
  "Knowledge Before Action becomes real operating behavior",
];

const relatedPages = [
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description:
      "See how abnormal-event protection, guided recovery, Savior-On-Site, and live incident records extend the same safety doctrine under pressure.",
  },
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See how the living safety envelope is created through sensing, guidance, truth capture, and governed machine behavior.",
  },
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See how baseline, drift, proof, and living standards keep safety from becoming static paperwork.",
  },
  {
    title: "Training Philosophy",
    href: "/a-i-r-o-n/training-philosophy",
    description:
      "See why training truth and operating truth must match, and how skill survives substitution, disruption, and live pressure.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how experience, truth, memory, and institutional recall preserve safety knowledge beyond people, shifts, and incidents.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start a conversation around living safety, uncertainty reduction, protected experimentation, and abnormal-event readiness.",
  },
];

export default function SafetyPage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/safety" mainClassName="airon-safety-page">
      <HeroBlock
        eyebrow="Uncertainty is the most dangerous condition in any factory."
        title="SAFETY / THE TREE OF KNOWLEDGE™"
        supportingLine="Knowledge Before Action."
        subhead="Safety is not a department. It is a property of a living system that protects people during change, handoffs, uncertainty, and improvement while the operation is still moving."
        body={
          <>
            <p>
              The Tree of Knowledge™ is the doctrine anchor for A.I.R.O.N. safety:
              experience, truth, and memory held together so the next decision does
              not depend on panic, politics, or the availability of one specific
              person at the worst possible moment.
            </p>
            <p>
              A.I.R.O.N. is an industrial culture, not a number. On the safety side,
              that means protection is built into the living operating system itself —
              not outsourced to binders, posters, or hindsight.
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
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Before harm</h3>
            <p>
              A.I.R.O.N. watches uncertainty, substitution, hazard state, and drift
              while correction is still calm, bounded, and teachable.
            </p>
          </div>
          <div className="comparison-card">
            <h3>During change</h3>
            <p>
              As experience thins or conditions shift, the operating window narrows,
              guidance rises, and safety gets tighter before visible error appears.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="The Tree of Knowledge is not a symbol only"
        paragraphs={[
          "The Tree of Knowledge™ exists because safety dies quietly when experience, truth, and memory separate from one another.",
          "Experience without truth becomes folklore. Truth without memory gets relearned through pain. Memory without live operating context becomes paperwork nobody trusts under pressure.",
          "A.I.R.O.N. keeps the three roots connected so protection remains active when conditions change, when substitutes take over, and when reality refuses to wait for a meeting.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="The three roots of living safety"
            subtitle="Experience. Truth. Memory. Break one root and the safety posture weakens."
            align="center"
          />
          <CapabilityGrid items={treeRoots} compact />
          <p className="support-line center">
            This is why the doctrine says <strong>Knowledge Before Action</strong>.
            Action without one of these roots is where avoidable pain begins.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Why safety programs fail when reality arrives"
            subtitle="Normal-day paperwork does not automatically protect abnormal-day operation."
            align="center"
          />
          <CapabilityGrid items={uncertaintyPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Safety as a living system property"
            subtitle="Protection emerges from live awareness, not from policy alone."
            align="center"
          />
          <CapabilityGrid items={livingSafetyPoints} compact />
          <p className="support-line center">
            Safety does not get stronger by being disconnected from the work. It gets
            stronger by staying tied to the truth of the work.
          </p>
        </div>
      </section>

      <ContrastBlock
        title="From department-owned safety to system-lived safety"
        subtitle="The difference is not intention. The difference is whether protection remains active when uncertainty forms."
        leftTitle="Without a living safety system"
        leftItems={withoutLivingSafety}
        rightTitle="With the Tree of Knowledge"
        rightItems={withLivingSafety}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Protected experimentation and guided recovery"
            subtitle="Improvement and abnormal recovery are the moments where safety must become tighter, not looser."
            align="center"
          />
          <CapabilityGrid items={protectedExperimentationPoints} compact />
          <div className="container narrow top-gap">
            <div className="doctrine-block">
              <p>
                <strong>Safety Voice:</strong> Every substitution increases risk. Every
                live change deserves protection. No improvement is allowed to endanger
                the person creating it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Training truth and operating truth must match"
            subtitle="If the plant teaches one truth and enforces another, uncertainty is guaranteed."
            align="center"
          />
          <CapabilityGrid items={trainingTruthPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionHeading
            title="What the doctrine asks of people and systems"
            subtitle="Simple, hard rules that keep safety connected to reality."
            align="center"
          />
          <div className="doctrine-block">
            <ul>
              {doctrineAsks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="When systems thin, the doctrine matters even more"
        paragraphs={[
          "When communication breaks, when a jam forms, when a fill-in operator takes over, when abnormal conditions compress time, or when a small failure starts reaching beyond its size, the Tree of Knowledge matters more — not less.",
          "That is where C.A.T.A.S.T.R.O.P.H.E.™ extends the same doctrine into live protection, guided recovery, Savior-On-Site, mobile continuity, incident truth, and structured handoff.",
          "The point is not to create fear. The point is to keep humans alive, keep truth intact, and keep the next action governed by knowledge instead of urgency alone.",
        ]}
        sectionClassName="section section-alt"
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with living safety doctrine here. Move into controls, training, abnormal-event guidance, memory, or discovery when the path becomes clearer."
      />

      <CTAFooterBand
        headline="Experience. Truth. Memory. People before everything."
        primaryCTA={{
          label: "Start a Safety Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See C.A.T.A.S.T.R.O.P.H.E.",
          href: "/a-i-r-o-n/catastrophe",
        }}
        supportingLine="Knowledge Before Action. The Tree of Knowledge™ keeps safety alive while reality is still unfolding."
      />
    </SiteLayout>
  );
}
