import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const ciExpressionPoints = [
  "Controls & Automation is Continuous Improvement applied to machine behavior, sequence, and governed action",
  "Safety is Continuous Improvement applied to uncertainty, handoffs, and human protection",
  "V.A.U.L.T.® is Continuous Improvement applied to memory, proof, revision, and retrieval",
  "Predictive intelligence is Continuous Improvement applied to drift before alarms",
  "Training is Continuous Improvement applied to skill persistence and live readiness",
  "Better Days is Continuous Improvement applied to participation, routing, and front-line insight",
  "SYSTEM-LIVE / PLAYER-LIVE is Continuous Improvement applied to the whole human-to-machine relationship",
  "C.A.T.A.S.T.R.O.P.H.E.™ is Continuous Improvement preserved during disruption, recovery, and abnormal conditions",
];

const stewardshipPoints = [
  "Humans can own responsibility, judgment, ethics, leadership, and care",
  "A.I.R.O.N. owns the baseline, the drift, and the proof",
  "No human can monitor every signal, preserve every lesson, and survive every reorganization forever",
  "A living system can steward implemented truth across shifts, turnover, disruption, and catastrophe",
  "Continuous Improvement becomes permanent only when memory survives the people who created it",
  "The goal is not control over people. The goal is custody of truth so reality is not lost",
];

const livingStandardsPoints = [
  "Standards are living baselines, not museum artifacts",
  "Hold the baseline so the known-good state remains defendable",
  "Hunt drift before erosion becomes outage, scrap, injury, or politics",
  "Challenge the baseline safely when a better repeatability is proven",
  "Promote the winners and retire the losers with evidence, not ego",
  "Bound failure with governed transitions instead of panic, blame, and reinvention",
];

const continuousRealityPoints = [
  "A.I.R.O.N. listens while reality happens instead of waiting for reports after the fact",
  "Machine state, load, timing, energy, motion, environment, identity, and human input become living truth",
  "Faults, recoveries, overrides, workarounds, and stabilization events are captured as experience, not only outcomes",
  "Lucky wins do not evaporate when no one had time to champion them",
  "Quiet losses do not hide between meetings just because no threshold screamed",
  "Continuous Improvement moves from intermittent observation to continuous reality capture",
];

const baselineDriftProofPoints = [
  "Baseline — the known-good state",
  "Drift — slow deviation before obvious failure",
  "Proof — verified cause-and-effect anchored to evidence",
  "Without baseline, drift has nothing to lean away from",
  "Without drift, failure arrives looking like a surprise",
  "Without proof, Continuous Improvement becomes opinion, memory, and politics",
];

const fourMAPoints = [
  "When performance shifts, A.I.R.O.N. begins with classification, not blame",
  "Man — attention, fatigue, pacing, handoffs, skill, interventions",
  "Method — sequence, setup, timing, procedure, work as actually performed",
  "Material — lot, chemistry, moisture, thickness, hardness, contamination, behavior at point of use",
  "Machine — wear, alignment, vibration, calibration, load, temperature, lubrication, controls",
  "Atmosphere — temperature, humidity, dust, pressure, air quality, condensation, static, thermal behavior",
];

const identitySkillPoints = [
  "Identity substitution is a measurable operating condition, not background noise",
  "Handoffs are Predictive Breakpoints in the human domain because certainty thins before harm appears",
  "A.I.R.O.N. records expert actions, timings, interventions, and outcomes so the best operator can be projected into the machine in real time",
  "Training truth and operating truth stay identical so the plant never teaches one reality and enforces another",
  "When experience drops, the operating window narrows and guidance rises before visible error appears",
  "When a human discovers a better way safely, the system preserves it so improvement survives the shift",
];

const truthGovernancePoints = [
  "Truth filtered through people becomes politics when budgets, pride, pressure, and reputation get involved",
  "A.I.R.O.N. time-aligns signals, identity, action, and outcome so the system can determine what moved first",
  "Evidence liberates people because it replaces blame with sequence, causality, and recoverable lessons",
  "A.S.S.U.R.E.™ binds pre-event conditions, captures what formed, and preserves who was notified, when, and how",
  "A.I.R.O.N. governs itself through six permanent incentives: human safety, machine safety, quality, waste reduction, Continuous Improvement, and preservation of the Continuous Improvement itself",
  "Governance begins before failure becomes negotiable",
];

const ciInfrastructurePoints = [
  "V.A.U.L.T.® keeps improvement from dying by preserving memory, proof, revision history, and institutional recall",
  "Better Days gives front-line insight a real front door instead of forcing improvement to depend on title or meeting access",
  "Training and Industrial Campus carry lessons forward before the next disruption demands them",
  "S.W.A.T. closes the loop when intelligence needs human action at the point of work",
  "C.A.T.A.S.T.R.O.P.H.E.™ keeps truth, protection, and guided recovery alive when abnormal conditions compress time and judgment",
  "Continuous Improvement stops being a department program and becomes a living property of the operation",
];

const intermittentItems = [
  "Improvement appears in bursts between periods of blindness",
  "Standards age quietly while reality changes underneath them",
  "Truth depends on memory, narrative, and who survived the meeting",
  "Lucky wins disappear unless someone champions them",
  "Handoffs reset confidence, skill, and risk visibility",
  "Politics and pressure blur what really moved first",
];

const livingItems = [
  "Improvement remains active while the plant is moving",
  "Standards stay alive because baseline, drift, and proof remain connected",
  "Truth is anchored to evidence instead of recall alone",
  "Useful deviation is harvested, tested, and preserved",
  "Skill survives substitution because experience is projected into the moment of work",
  "The operation keeps climbing even when leadership, staffing, and conditions change",
];

const relatedPages = [
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See how living controls, continuous reality capture, training truth, and constitutional governance behave at machine level.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how memory, proof, document retrieval, and institutional recall preserve Continuous Improvement beyond people and shifts.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See why uncertainty, handoffs, and live change are safety events and why protection must emerge from the system itself.",
  },
  {
    title: "Training Philosophy",
    href: "/a-i-r-o-n/training-philosophy",
    description:
      "See how offline truth, online truth, identity, substitution, and skill projection support real Industrial readiness.",
  },
  {
    title: "Better Days",
    href: "/a-i-r-o-n/better-days",
    description:
      "See how front-line insight, suggestion routing, and contribution tracking become part of the living improvement structure.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start a conversation around living standards, truth capture, training continuity, and facility-scale Continuous Improvement architecture.",
  },
];

export default function ContinuousImprovementPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/continuous-improvement"
      mainClassName="airon-continuous-improvement-page"
    >
      <HeroBlock
        eyebrow="An industrial culture, not a meeting cadence."
        title="CONTINUOUS IMPROVEMENT"
        supportingLine="The operating spine of A.I.R.O.N."
        subhead="Continuous Improvement is not just one more part of A.I.R.O.N. It is the reason A.I.R.O.N. exists."
        body={
          <>
            <p>
              A.I.R.O.N. was built to keep improvement alive: sensing drift,
              preserving baseline, capturing wins, protecting people, and
              raising the standard safely and purposefully.
            </p>
            <p>
              Continuous Improvement is not a department program, a quarterly
              event, or a binder on a shelf. It is the living discipline that
              connects machine truth, human judgment, institutional memory,
              evidence, and the next better way of operating.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore Modules",
          href: "/a-i-r-o-n/modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Custody of Truth</h3>
            <p>
              A.I.R.O.N. keeps the baseline, the drift, and the proof connected
              so implemented truth does not retire, transfer, or disappear under
              pressure.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Human Elevation</h3>
            <p>
              People stay essential, but they are no longer asked to carry
              Continuous Improvement by memory alone while the operation keeps
              moving.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Continuous Improvement is the spine, not a side module"
        paragraphs={[
          "Every major A.I.R.O.N. function is Continuous Improvement expressed in a different industrial form.",
          "Controls & Automation is CI applied to machine behavior. Safety is CI applied to uncertainty and human protection. V.A.U.L.T.® is CI applied to memory and proof. Predictive intelligence is CI applied to drift and prevention. Training is CI applied to skill persistence. Better Days is CI applied to participation.",
          "That is why Continuous Improvement cannot be treated as background texture. It is the operating spine of the whole system.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="CI expressed through every major A.I.R.O.N. family"
            subtitle="Continuous Improvement is the common discipline underneath the visible modules."
            align="center"
          />
          <CapabilityGrid items={ciExpressionPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why no human can own Continuous Improvement"
        paragraphs={[
          "Humans can own responsibility, targets, ethics, safety decisions, and leadership. But no human can own a living improvement system by themselves.",
          "Machines wear. Processes drift. Materials shift. People rotate. Leaders change. The best lesson in the plant often leaves with the best person unless the system is built to hold it.",
          "A.I.R.O.N. does not replace the warriors of Continuous Improvement. It carries their implemented truth forward so people can do what only humans can do: judge, mentor, create, lead, and decide.",
        ]}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Stewardship, not command"
            subtitle="Continuous Improvement becomes permanent only when someone — or something — can hold the baseline, the drift, and the proof across time."
            align="center"
          />
          <CapabilityGrid items={stewardshipPoints} compact />
        </div>
      </section>

      <ContrastBlock
        title="From intermittent improvement to living stewardship"
        subtitle="The difference is not effort. The difference is whether the system can keep learning alive while the factory is still moving."
        leftTitle="Intermittent CI"
        leftItems={intermittentItems}
        rightTitle="Living CI"
        rightItems={livingItems}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Living standards"
            subtitle="Standards are not cages. They are launchpads — protected until a better repeatability is proven."
            align="center"
          />
          <CapabilityGrid items={livingStandardsPoints} compact />
          <p className="support-line center">
            Hold the baseline. Detect drift. Challenge the baseline safely.
            Promote the winners. Retire the losers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Continuous reality capture"
            subtitle="Before A.I.R.O.N., Continuous Improvement was often continuous intent applied through intermittent observation."
            align="center"
          />
          <CapabilityGrid items={continuousRealityPoints} compact />
          <p className="support-line center">
            Continuous Improvement lives where the work lives.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Baseline. Drift. Proof."
            subtitle="To own Continuous Improvement, the system has to protect the known-good state, recognize change early, and preserve verified cause and effect."
            align="center"
          />
          <CapabilityGrid items={baselineDriftProofPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="4M + A causality"
            subtitle="When performance shifts, A.I.R.O.N. does not begin with debate. It begins with classification."
            align="center"
          />
          <CapabilityGrid items={fourMAPoints} compact />
          <p className="support-line center">
            A performance shift is not a discussion topic. It is a physics event.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Identity, handoffs, and skill projection"
            subtitle="A living CI system treats human substitution as a measurable operating condition — then keeps the best expertise available anyway."
            align="center"
          />
          <CapabilityGrid items={identitySkillPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Automated truth and constitutional governance"
            subtitle="Evidence beats ego only when truth stays anchored to reality and the system’s incentives cannot be negotiated away."
            align="center"
          />
          <CapabilityGrid items={truthGovernancePoints} compact />
          <p className="support-line center">
            Truth filtered through people becomes politics. Truth anchored to
            evidence becomes improvement.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="The infrastructure that keeps CI alive"
            subtitle="Continuous Improvement survives because memory, participation, training, response, and abnormal-event continuity all remain connected."
            align="center"
          />
          <CapabilityGrid items={ciInfrastructurePoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="A.I.R.O.N. is an industrial culture, not a number"
        paragraphs={[
          "Continuous Improvement is not made permanent by giving it a newer label. It becomes permanent when sensing, memory, proof, protection, participation, and response all stay alive together.",
          "That is what A.I.R.O.N. is built to do. It does not ask people to be infinite. It gives the operation a living structure that can remember, learn, and hold the line while people stay human.",
          "That is why A.I.R.O.N. is not a dashboard, not a slogan, and not a number. It is an industrial culture made operational.",
        ]}
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Continuous Improvement is the common discipline. These pages show how that discipline expresses itself through control, memory, safety, training, participation, and discovery."
      />

      <CTAFooterBand
        headline="Build Continuous Improvement that survives shifts, turnover, disruption, and time."
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore Modules",
          href: "/a-i-r-o-n/modules",
        }}
        supportingLine="Baseline. Drift. Proof. Memory. Participation. Protection. All connected."
      />
    </SiteLayout>
  );
}
