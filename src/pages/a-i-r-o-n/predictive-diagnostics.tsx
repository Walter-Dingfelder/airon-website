import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const doctorExamplePoints = [
  "Furnace Doctor™",
  "Servo Doctor™",
  "Motor Doctor™",
  "Crane Doctor™",
  "Press Doctor™",
  "Baghouse Doctor™",
  "Cooling Tower Doctor™",
];

const doctorStructurePoints = [
  "Doctor modules are created specifically for the user's device, component, subsystem, or process",
  "A Doctor can be assigned to an entire machine or only to the portion of a process that needs the closest care",
  "Each Doctor filters out unrelated I/O so the diagnostic view stays specialized and useful",
  "Doctor modules are not a closed catalog; they are built to match the real equipment and process need",
  "Furnace Doctor™ is presented here as one example of what can be created for any component that needs special attention in your system",
  "Fortune Teller™ receives truth from every relevant Doctor module and weighs the pattern above them",
];

const fortunePoints = [
  "Current and voltage behavior",
  "Power factor and command versus actual response",
  "Vibration and acoustic patterns",
  "Environmental conditions and material behavior",
  "Operator and panel inputs",
  "Historical similarity and prior event context",
  "Outputs from every relevant Doctor module",
];

const breakpointPoints = [
  "A Predictive Breakpoint® is not just a warning light",
  "It is a forecasted future threshold where operating condition is expected to change meaningfully",
  "It can represent a control-quality loss, maintenance opportunity, instability threshold, efficiency decline, or safety-boundary approach",
  "It is built from machine evidence, shaped by history, and strengthened by human context",
  "The goal is not noise — the goal is usable future timing",
  "Prediction becomes valuable when it creates an action window while good options still exist",
];

const ghostPoints = [
  "Intermittent making and breaking signals",
  "Nuisance trips and unstable-state transitions",
  "Random drops and fleeting contact problems",
  "Phantom behaviors that vanish when someone arrives to observe them",
  "Evidence capture when the fault finally shows itself",
  "Technician notification by the customer's chosen method, such as phone or email",
];

const modelPoints = [
  "Doctor modules tell the truth now in their specialized domain",
  "Ghost Busting catches the intermittent event that is otherwise invisible or unrepeatable",
  "Fortune Teller™ weighs recurrence, timing, confidence, and future risk",
  "Predictive & Diagnostics separates diagnosis, intermittent capture, and future prediction instead of collapsing them into one noisy system",
  "PB® origin clarity helps show where the problem is forming and which role should care first",
  "The system should not only warn — it should orient",
];

const canDoPoints = [
  "Recognize early warning signs before damage is done",
  "Compare current conditions to prior breakdowns and near-misses",
  "Convert drift into timing windows",
  "Classify recommended action by urgency and consequence",
  "Reduce false-alarm fatigue",
  "Prioritize intervention before damage accelerates",
  "Turn guesswork into known timing",
  "Turn fear into informed maintenance",
  "Preserve intermittent fault evidence that would otherwise disappear",
];

const relatedPages = [
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See how governed control and real machine behavior connect to diagnosis, intermittent capture, and future action timing.",
  },
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See why Predictive & Diagnostics is Continuous Improvement applied to drift recognition, timing, and action windows.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how preserved event history, IMP™ records, and fault memory strengthen prediction and diagnosis.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start a conversation about Doctor modules, Ghost Busting, Predictive Breakpoint® logic, and predictive review scope.",
  },
];

export default function PredictiveDiagnosticsPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/predictive-diagnostics"
      mainClassName="airon-predictive-diagnostics-page"
    >
      <HeroBlock
        eyebrow="Not one signal. The whole pattern."
        title="PREDICTIVE & DIAGNOSTICS"
        supportingLine="See the breakpoint before the breakdown."
        subhead="Predictive & Diagnostics is where A.I.R.O.N. turns drift, pattern change, and operating evidence into earlier clarity."
        body={
          <>
            <p>
              This family helps the system answer two different questions:
              what is happening now, and what is likely next, and when should we act?
            </p>
            <p>
              That is why this family naturally holds Doctor modules, Ghost Busting,
              Fortune Teller™, and the logic of the Predictive Breakpoint®.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Predictive Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "/a-i-r-o-n/modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Diagnosis</h3>
            <p>
              Domain-specific Doctor modules tell the truth now in the exact part
              of the machine or process that needs special care.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Prediction</h3>
            <p>
              Fortune Teller™ receives truth from every relevant Doctor module and
              helps answer where drift is heading, when it will matter, and what
              action window still exists.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What Predictive & Diagnostics means"
        paragraphs={[
          "Most systems wait for something obvious to fail. A.I.R.O.N. is built to recognize weak signals before they become instability, downtime, quality loss, maintenance escalation, or a harder decision later.",
          "This family does not ask only what alarm is active. It asks what is drifting, what pattern is forming, whether the condition is intermittent or stable, what future threshold is likely, and what should be done before consequence arrives.",
          "This is not about theater. It is about earlier clarity, better timing, and fewer surprises.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Doctor modules are built for the customer, not from a closed catalog"
            subtitle="Doctors are purpose-built specialist modules created for the user’s device, component, subsystem, or process."
            align="center"
          />
          <CapabilityGrid items={doctorStructurePoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              Example Doctor modules may include {doctorExamplePoints.join(", ")}.
              These are examples, not limits.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Fortune Teller™ looks at"
            subtitle="Prediction starts where isolated signals stop."
            align="center"
          />
          <CapabilityGrid items={fortunePoints} compact />
          <p className="support-line center">
            This page should feel industrial, structured, and evidence-based — never mystical.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What a Predictive Breakpoint® really is"
            subtitle="Not just a warning. A usable future threshold."
            align="center"
          />
          <CapabilityGrid items={breakpointPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Ghost Busting"
            subtitle="Ghost Busting hunts the fault that never happens when the technician is watching."
            align="center"
          />
          <CapabilityGrid items={ghostPoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              The technician cannot fix what is not happening when he is present,
              and he cannot spend all day babysitting a machine waiting for the fault
              to show itself. Ghost Busting captures the event when the ghost is real,
              preserves the evidence, and notifies the right technician when it appears.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Doctor truth, Ghost Busting, Fortune Teller™"
            subtitle="A strong architecture separates diagnosis, intermittent capture, and future prediction."
            align="center"
          />
          <CapabilityGrid items={modelPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Human judgment stays central"
        paragraphs={[
          "Predictive & Diagnostics does not replace human judgment. It protects human judgment by giving people earlier evidence, better timing, more confidence, less guesswork, and more structured action windows.",
          "This family should never sound like prophecy. It should sound like disciplined industrial foresight.",
          "The value is not perfect prediction. The value is earlier clarity, smarter timing, more credible action, and fewer surprises.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Predictive & Diagnostics can do"
            subtitle="This family turns drift into timing, intermittent evidence, and action windows."
            align="center"
          />
          <CapabilityGrid items={canDoPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why it matters"
        paragraphs={[
          "Most systems wait until the evidence is obvious. By then, options are fewer, stress is higher, the cost is worse, and the decision is harder.",
          "Predictive & Diagnostics is about surfacing meaningful future breakpoints while good options still exist.",
          "It is not an investment in noise or more dashboards. It is an investment in fewer surprises, better timing, smarter intervention, preserved evidence, and never forgetting what the process already taught the system.",
        ]}
        sectionClassName="section section-alt"
      />

      <TextIntroBlock
        title="Position statement"
        paragraphs={[
          "Predictive & Diagnostics is where A.I.R.O.N. stops merely reporting what already happened and starts helping people act while the future is still negotiable.",
          "This is where Doctor modules tell the truth now, Ghost Busting catches the fault that never happens when someone is watching, Fortune Teller™ weighs the pattern and future risk, and the Predictive Breakpoint® becomes a usable decision surface instead of a late surprise.",
        ]}
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Diagnosis. Intermittent capture. Prediction. Timing. Fewer surprises."
      />

      <CTAFooterBand
        headline="From drift to timing. From timing to action."
        primaryCTA={{
          label: "Request a Predictive Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "/a-i-r-o-n/modules",
        }}
        supportingLine="This is where A.I.R.O.N. helps industry act while the future is still negotiable."
      />
    </SiteLayout>
  );
}
