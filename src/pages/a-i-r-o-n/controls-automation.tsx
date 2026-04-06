import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const sensoryRealityPoints = [
  "Listen to PLCs, drives, VFDs, control loops, sensors, switches, encoders, counters, and operator acknowledgements as they happen",
  "Treat power, current, voltage, motion, pressure, temperature, flow, vibration, and energy signatures as operating reality rather than paperwork about reality",
  "Use continuous reality capture instead of waiting for reports, audits, meetings, or alarms to describe what already happened",
  "Correlate machine behavior, operator action, environmental influence, and process response at machine speed",
  "Keep acoustic layers advisory and proof-supportive so microphones strengthen visibility without pretending to replace primary instrumentation",
  "Turn every cycle, state change, deviation, recovery, override, and stabilization event into usable operational truth",
];

const deploymentBoundaryPoints = [
  "Deploy with no rip-and-replace mentality and no demand that the plant reorganize itself around software",
  "Work beside legacy controls, inherited logic, hybrid environments, and customer-preferred PLC structures where appropriate",
  "Read data without steering equipment when the correct answer is visibility first and control authority stays local",
  "Use V.A.U.L.T.® as the protected edge memory and buffer layer for structured visibility, retention, and support continuity",
  "Use one Starlink per facility as the communications backbone for off-site support, messaging, corporate data pulls, and C.A.T.A.S.T.R.O.P.H.E.™ support behavior",
  "Operate without tying A.I.R.O.N. into corporate networks while preserving secure visibility and local control authority",
  "Require battery backup / UPS so the system remains supported when plant power is unstable or lost",
  "Scale from one machine to broader facility coverage without starting over every time another system comes online",
];

const truthCapturePoints = [
  "Use A.S.S.U.R.E.™ to create system-authored truth at the point of work instead of relying on reconstructive reporting later",
  "Bind pre-event conditions to the record so drift, escalation, and consequence stay connected as one truthful timeline",
  "Write confirmations, timestamps, notable conditions, and progression steps directly into the active operating record when procedures demand it",
  "Preserve notification traceability: who was notified, how, when, and whether acknowledgment occurred",
  "Keep records useful for operations, handoff, review, recovery, and improvement instead of treating them as after-the-fact blame material",
  "Sharpen future detection and guidance using the same truth stream that documented the event in the first place",
];

const causal4MAPoints = [
  "Treat performance shifts as physics events, not committee topics",
  "Interrogate Man, Method, Material, Machine, and Atmosphere whenever performance changes",
  "Use Predictive Breakpoint® logic to escalate early, while control is still calm, safe, and achievable",
  "Classify whether the shift belongs to the human domain, the sequence, the input, the asset, or the environment — then act accordingly",
  "Elevate atmosphere as a first-class operating force because temperature, humidity, dust, pressure, and air quality reshape the entire system",
  "Preserve the lesson as a living standard so the next disruption is managed earlier and more intelligently",
];

const startupGovernancePoints = [
  "Treat startup, shutdown, purge, runout, empty-down, and restart as governed events instead of memory-based rituals",
  "Use proof-based advancement instead of timer-only faith",
  "Enforce annunciation, local awareness, and clear communication before motion begins",
  "Keep local command authority clear while allowing structured remote support and messaging where authorized",
  "Narrow the operating window automatically when experience thins, risk rises, or abnormal conditions form",
  "Preserve machine behavior, human behavior, and system truth through degraded, restricted, and recovery paths",
];

const trainingContinuityPoints = [
  "Keep training truth and operating truth identical so the plant never teaches one reality and enforces another",
  "Use exact OEM-style control replicas and SOP-driven sequences in offline preparation without consequence",
  "Use the same prompts, sequences, safety envelopes, and Predictive Breakpoints online when the machine is live",
  "Treat identity substitution as an operating condition, not background noise",
  "Capture expert actions, timings, interventions, and outcomes so the best operator can be projected into the machine in real time",
  "Preserve skill through handoffs, absences, fill-ins, and disruption so expertise stays available when it is needed most",
];

const governancePoints = [
  "Human safety",
  "Machine safety",
  "Quality",
  "Waste reduction",
  "Continuous Improvement",
  "Preservation of the Continuous Improvement itself",
];

const motionAutonomyPoints = [
  "Support robotics, multi-axis motion, material handling, governed recipes, and complex machine sequencing where the work demands it",
  "Free people from repetitive burden so inspections, awareness, housekeeping, coaching, and judgment get more room instead of less",
  "Use automation to remove uncertainty and wasted motion, not human value",
  "Treat autonomy as governed industrial trust, not novelty",
  "Build controls that remember what works, what failed safely, and what should never be repeated",
  "Create a controls layer that helps industry hold the baseline, hunt drift, and raise the baseline safely over time",
];

const notThisPoints = [
  "A rip-and-replace software religion",
  "A dashboard pretending to be control",
  "A black box inside the customer’s network",
  "A one-signal alarm philosophy",
  "A training room truth that differs from floor truth",
  "A system that asks people to carry continuous improvement by memory alone",
];

const thisIsPoints = [
  "A living controls, sensing, guidance, and truth layer at the point of work",
  "A non-intrusive industrial nervous system that respects existing plant rhythm and local authority",
  "A structure that records, guides, teaches, and improves while the operation is still moving",
  "A machine-speed discipline for baseline, drift, and proof",
  "An industrial culture, not a version number",
  "A.I.R.O.N. at the point where machine behavior becomes real",
];

const relatedPages = [
  {
    title: "Modules",
    href: "/a-i-r-o-n/modules",
    description:
      "See the architecture map, base hardware stack, OT / IT boundary, expansion logic, and where the control layer fits inside the larger system.",
  },
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See why Continuous Improvement is the operating spine of A.I.R.O.N. and how controls become stewardship of baseline, drift, and proof.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description:
      "See startup, shutdown, proof-based progression, annunciation, and governed transitions in a dedicated page.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See why uncertainty, handoffs, and live change are safety events — and why A.I.R.O.N. treats them that way before harm appears.",
  },
  {
    title: "Training Philosophy",
    href: "/a-i-r-o-n/training-philosophy",
    description:
      "See how offline truth and online truth stay aligned so skill survives disruption, substitution, and real-world pressure.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start a conversation around controls architecture, guided deployment, truth capture, startup governance, or broader facility rollout.",
  },
];

export default function ControlsAutomationPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/controls-automation"
      mainClassName="airon-controls-automation-page"
    >
      <HeroBlock
        eyebrow="Industrial culture, not a version number."
        title="CONTROLS & AUTOMATION"
        supportingLine="Where A.I.R.O.N. becomes living machine behavior."
        subhead="A.I.R.O.N. is not a dashboard laid on top of industry. It is a disciplined controls, sensing, memory, guidance, and governance layer built to work beside real machines, real people, and real risk."
        body={
          <>
            <p>
              This is where A.I.R.O.N. meets the actual machine brain of industry:
              PLCs, HMIs, drives, VFDs, remote expansion, interlocks, startup logic,
              shutdown logic, recipes, robotics, proof-supportive sensors, and
              governed autonomous operations.
            </p>
            <p>
              A.I.R.O.N. is an industrial culture, not a number. It exists to make
              controls more truthful, safer, more teachable, and more capable of
              holding the baseline, hunting drift, and raising the baseline safely
              over time.
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
            <h3>Observe</h3>
            <p>
              Continuous reality capture across machine, process, environment,
              identity, and operator interaction so the system knows what is really
              forming before a meeting is ever called.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Guide</h3>
            <p>
              Governed startup, skill projection, safe envelopes, structured
              recovery, and truth capture at the point of work so better behavior is
              available while the operation is still moving.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What we mean by controls"
        paragraphs={[
          "Controls are where the machine becomes behavior. They determine what starts, what stops, what waits, what alarms, what interlocks, what sequences, what protects, and what is allowed to happen next.",
          "Before A.I.R.O.N., Continuous Improvement was often continuous intent applied through intermittent observation. Controls & Automation is where that blind spot ends. The system listens while reality happens.",
          "A.I.R.O.N. does not only understand reports about the machine. It understands the structure underneath them.",
        ]}
        sectionClassName="section section-alt"
      />

      <ContrastBlock
        title="What this page is really about"
        subtitle="The difference between machine control as software theater and machine control as living industrial stewardship."
        leftTitle="Not this"
        leftItems={notThisPoints}
        rightTitle="This is"
        rightItems={thisIsPoints}
        sectionClassName="section"
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="The sensory layer and continuous reality capture"
            subtitle="A.I.R.O.N. does not wait for reports. It listens while the plant is alive."
            align="center"
          />
          <CapabilityGrid items={sensoryRealityPoints} compact />
          <p className="support-line center">
            These signals are not paperwork about reality. They are reality.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Deployment boundary, OT discipline, and facility backbone"
            subtitle="Serious controls work respects local authority, existing infrastructure, and the customer’s security posture."
            align="center"
          />
          <CapabilityGrid items={deploymentBoundaryPoints} compact />
          <p className="support-line center">
            The goal is to keep the customer operating — not profit from their pain,
            not entangle their operation, and not make them dependent on the wrong
            network boundary.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Automated truth at the point of work"
            subtitle="A.S.S.U.R.E.™ turns control events, guided procedures, and real operating conditions into usable truth while the work is still happening."
            align="center"
          />
          <CapabilityGrid items={truthCapturePoints} compact />
          <p className="support-line center">
            If the record has to be reconstructed later, too much of the truth is
            already gone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="4M + A causality and Predictive Breakpoint® discipline"
            subtitle="When performance shifts, A.I.R.O.N. does not begin with blame. It begins with classification."
            align="center"
          />
          <CapabilityGrid items={causal4MAPoints} compact />
          <p className="support-line center">
            A performance shift is not a discussion topic. It is a physics event.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Governed startup, shutdown, annunciation, and local authority"
            subtitle="Startup is a communication event, a safety event, and a truth event — not just a timer sequence."
            align="center"
          />
          <CapabilityGrid items={startupGovernancePoints} compact />
          <p className="support-line center">
            People need to know what is about to move, where it is about to move,
            and why. Remote support must never be confused with remote command.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Training truth, identity, and live skill projection"
            subtitle="The plant should never teach one truth in training and enforce another on the floor."
            align="center"
          />
          <CapabilityGrid items={trainingContinuityPoints} compact />
          <p className="support-line center">
            Training authorizes operation. Experience stabilizes it. A.I.R.O.N.
            exists so experience does not disappear every time a person steps away.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="The constitutional engine behind the controls layer"
            subtitle="A.I.R.O.N. does not improvise its priorities. It enforces them."
            align="center"
          />
          <CapabilityGrid items={governancePoints} compact />
          <p className="support-line center">
            These are not preferences. They are the incentives that govern every
            alert, prompt, restriction, escalation, and recommended action.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Motion, autonomy, and the human work that remains"
            subtitle="A.I.R.O.N. frees people from repetitive burden so human judgment, leadership, and care have room to matter more."
            align="center"
          />
          <CapabilityGrid items={motionAutonomyPoints} compact />
          <p className="support-line center">
            Automation without memory is still blind. Automation without human
            value is still incomplete.
          </p>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Controls architecture. Startup discipline. Automated truth. Skill continuity. Safer machine behavior. Better industry."
      />

      <CTAFooterBand
        headline="A.I.R.O.N. makes control honest."
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore Modules",
          href: "/a-i-r-o-n/modules",
        }}
        supportingLine="The point is not more software. The point is stronger industrial behavior under real conditions."
      />
    </SiteLayout>
  );
}
