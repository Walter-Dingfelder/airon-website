import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const whatTrainingMustBecome = [
  "Governed readiness tied to real operating truth",
  "Exact machine and process familiarization before live exposure",
  "Preserved institutional memory made usable at the moment of need",
  "Experience transfer that survives handoffs, absence, turnover, and disruption",
  "Identical training truth and operating truth so the system never teaches one thing and enforces another",
  "Continuous improvement of human-to-machine engagement, not a disconnected side program",
];

const whatTraditionalTrainingLoses = [
  "The expert leaves and the line starts over",
  "The binder stays perfect while reality changes underneath it",
  "The fill-in operator is certified, but not ready for live uncertainty",
  "The classroom truth and the machine truth drift apart",
  "The lesson is remembered selectively, politically, or not at all",
  "The most important learning arrives during the worst possible moment",
];

const offlineOnlineTruth = [
  "Offline A.I.R.O.N. uses exact OEM-style controls, sequences, prompts, and logic for rehearsal without consequence",
  "Online A.I.R.O.N. uses the same truth at the machine, under real timing, real conditions, and real consequence",
  "The operator should never have to choose between what training taught and what the plant now demands",
  "Training quality rises when muscle memory, judgment, and hazard recognition are formed on the same control truth later used in production",
  "Authorization and qualification still matter, but they do not equalize experience or erase substitution risk",
  "The system should preserve the lesson and return it when the shift tightens",
];

const handoffAndSubstitution = [
  "Identity is a measurable operating condition, not background noise",
  "A handoff is a Predictive Breakpoint in the human domain long before an alarm or injury appears",
  "When an unfamiliar or substitute operator steps in, A.I.R.O.N. can narrow the safe operating envelope, increase guidance, and surface the right warnings earlier",
  "Skill gaps should trigger support, not blame",
  "The line should not have to hope the expert is nearby when reality changes",
  "Training becomes live exactly where uncertainty begins",
];

const realTimeSkillTransfer = [
  "Capture expert actions, timings, interventions, and outcomes while real work is happening",
  "Translate mastery into prompts, pacing, limits, safe-work envelopes, and conditional guidance",
  "Project the best known operating behavior into the machine when the original expert is absent",
  "Preserve beneficial operator discoveries instead of losing them to luck, shift change, or politics",
  "Turn accepted human improvements into future setup truth, future prompts, and earlier Predictive Breakpoints",
  "Let the next operator inherit a stronger system than the last one had",
];

const trainingEngineApplications = [
  "Startup, shutdown, and changeover familiarization",
  "Role-based onboarding and cross-training",
  "Machine-specific rehearsal before live exposure",
  "Abnormal-event familiarization and calmer recovery behavior",
  "Live support during substitution, fill-ins, and uncertainty",
  "Continuous improvement feedback into future modules, prompts, and standards",
];

const whatHumansGain = [
  "Less burden to remember everything alone",
  "More capacity for judgment, creativity, mentorship, and leadership",
  "Safer learning under pressure",
  "Stronger handoffs and calmer substitutions",
];

const whatTheSystemPreserves = [
  "Exact control truth",
  "Best-known safe procedures",
  "Successful adaptations worth testing and promoting",
  "Hard-earned expertise that should never walk out the door",
];

const withoutPhilosophy = [
  "Training remains episodic, fragmented, and easy to outgrow",
  "Experience leaves with people faster than plants can replace it",
  "Handoffs and fill-ins become hidden risk multipliers",
  "Operators are forced to improvise sooner than they should",
  "The training room and the machine floor teach different truths",
];

const withPhilosophy = [
  "Training becomes part of the operating system",
  "Expertise remains available during live work, not just before it",
  "Identity shifts and skill gaps become early visible conditions",
  "The same truth is taught offline and enforced online",
  "Every accepted lesson can strengthen the next operator, next shift, and next standard",
];

const relatedPages = [
  {
    title: "Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description:
      "See the governed environment where familiarization, rehearsal, and machine-specific learning can happen before live consequence arrives.",
  },
  {
    title: "PLAY YOUR WORK — WORK YOUR PLAY",
    href: "/a-i-r-o-n/play-your-work-work-your-play",
    description:
      "See how modern human skill can be activated, redirected, and strengthened for serious industrial readiness.",
  },
  {
    title: "Safety / Tree of Knowledge™",
    href: "/a-i-r-o-n/safety",
    description:
      "See why uncertainty, handoffs, and live change are safety events — and why training truth must match operating truth.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how custody, context, recall, and preserved operational memory keep lessons alive beyond the person who first learned them.",
  },
  {
    title: "Free OSHA & Safety Training",
    href: "https://training.dingfelder.co/",
    description:
      "Open the public training portal for OSHA-first safety training today, with broader safety and workforce expansion ahead.",
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
        supportingLine="Teach the same truth the plant will enforce."
        subhead="A.I.R.O.N. training exists to preserve hard-earned expertise, project it into live operation when needed, and build governed readiness before uncertainty turns into injury, loss, or improvisation."
        body={
          <>
            <p>
              Training should not be a side room full of material that goes stale
              the moment reality changes. It should be part of the operating
              system — connected to the actual controls, the actual hazards, the
              actual handoffs, and the actual memory of what works.
            </p>
            <p>
              Under A.I.R.O.N., the goal is not just permission to touch a
              machine. The goal is readiness, safer substitution, preserved
              expertise, and stronger judgment when the shift gets loud, tight,
              and less forgiving.
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
            <h3>What training must preserve</h3>
            <p>
              Exact machine truth, safe procedure, expert timing, and the real
              lessons people learned under live consequence.
            </p>
          </div>
          <div className="comparison-card">
            <h3>What training must prevent</h3>
            <p>
              Cold starts, memory resets, weak handoffs, unsafe improvisation,
              and the quiet loss of expertise every time a role changes hands.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Training is not a classroom artifact"
        paragraphs={[
          "A.I.R.O.N. treats training as a live industrial function, not a disconnected compliance exercise. That means the lesson, the machine, the hazard, the memory, and the future standard must stay connected.",
          "The strongest training systems do not just show material. They preserve what expert operators actually do, compare it to the outcomes it produces, and return that knowledge at the exact moment someone else needs it.",
          "That is why A.I.R.O.N. training is built to strengthen judgment before consequence, not just check a box before the shift.",
        ]}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What training must become"
            subtitle="Governed readiness connected to machine truth, human judgment, and preserved memory."
            align="center"
          />
          <CapabilityGrid items={whatTrainingMustBecome} compact />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>What traditional training keeps losing</h3>
            <ul>
              {whatTraditionalTrainingLoses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Offline truth and online truth must match"
            subtitle="If a system teaches one truth and enforces another, it cannot be controlled."
            align="center"
          />
          <CapabilityGrid items={offlineOnlineTruth} compact />
          <p className="support-line center">
            Training becomes credible when the controls, prompts, sequences,
            safe-work logic, and consequence model remain the same from
            rehearsal to live operation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Handoffs and substitutions are training events"
            subtitle="The most important learning often begins exactly when uncertainty enters the line."
            align="center"
          />
          <CapabilityGrid items={handoffAndSubstitution} compact />
          <div className="doctrine-block top-gap">
            <p>
              A trained person is still not the same as an experienced person.
            </p>
            <p>
              A.I.R.O.N. treats identity transition as a real operating
              condition so support can appear before the slowdown, error,
              injury, or blame spiral fully forms.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Real-time skill transfer"
            subtitle="The best operator should remain available even when they are not standing there."
            align="center"
          />
          <CapabilityGrid items={realTimeSkillTransfer} compact />
          <p className="support-line center">
            The expert does not disappear. Their mastery becomes usable system
            intelligence that can support the next person immediately.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Where the training engine applies"
            subtitle="Wherever human judgment, machine behavior, and real consequence meet."
            align="center"
          />
          <CapabilityGrid items={trainingEngineApplications} compact />
        </div>
      </section>

      <ContrastBlock
        title="Preserve the lesson. Strengthen the person. Protect the shift."
        leftTitle="Without an A.I.R.O.N. training philosophy"
        leftItems={withoutPhilosophy}
        rightTitle="With an A.I.R.O.N. training philosophy"
        rightItems={withPhilosophy}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What humans gain when the system carries the weight"
            subtitle="The human becomes more important, not less."
            align="center"
          />
          <div className="comparison-grid">
            <div className="comparison-card">
              <h3>Humans gain</h3>
              <ul>
                {whatHumansGain.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="comparison-card">
              <h3>The system preserves</h3>
              <ul>
                {whatTheSystemPreserves.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="A.I.R.O.N. is an industrial culture, not a number"
        paragraphs={[
          "Training under A.I.R.O.N. is not a pile of modules sitting beside the operation. It is the way a living industrial culture protects hard-earned expertise, multiplies it, and keeps it available when conditions are less than ideal.",
          "That is why the goal is not only to teach. The goal is to preserve what matters, project it into the next moment of need, and keep tomorrow’s operator from having to bleed to learn what the last one already knew.",
          "We are Industry. Period.",
        ]}
        sectionClassName="section"
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with training truth. Expand into campus familiarization, live workforce activation, safety logic, preserved memory, and the public training portal."
      />

      <CTAFooterBand
        headline="Build judgment before consequence. Keep expertise alive after the handoff."
        primaryCTA={{
          label: "Open Live Training",
          href: "https://training.dingfelder.co/",
        }}
        secondaryCTA={{
          label: "Start a Training Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="Exact truth. Live guidance. Preserved skill. Stronger humans in a stronger system."
      />
    </SiteLayout>
  );
}
