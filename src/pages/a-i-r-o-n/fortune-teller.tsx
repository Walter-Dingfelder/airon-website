import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const signalSources = [
  "Outputs from every relevant Doctor module",
  "Command versus actual machine behavior",
  "Current, voltage, and power-factor change",
  "Vibration, resonance, and acoustic drift",
  "Environmental and material-condition change",
  "Operator inputs and panel behavior",
  "Maintenance findings and historical event memory",
  "Recurring signatures tied to prior near-misses, faults, and recoveries",
];

const architecturePoints = [
  "Doctor modules tell the truth now in their specialist domain",
  "Ghost Busting preserves the intermittent event that would otherwise disappear",
  "Fortune Teller™ sits above the Doctor family as the predictive layer",
  "Fortune Teller™ receives information from every relevant Doctor module",
  "Prediction strengthens when machine evidence, human context, and history converge",
  "A.I.R.O.N. is not guessing from one alarm. It is weighing the whole pattern",
];

const breakpointPoints = [
  "A Predictive Breakpoint® is a meaningful future threshold, not a decorative warning",
  "It forms where converging evidence indicates increasing instability, risk, or operating consequence",
  "It can point to maintenance need, control degradation, quality loss, energy inefficiency, or safety-boundary approach",
  "It matters because it creates timing while good options still exist",
  "It should explain why the timing matters, not only that something might happen",
  "It should orient the right role to the right action window before the breakdown arrives",
];

const capabilityPoints = [
  "Recognize weak predictive patterns before visible failure",
  "Compare current drift to prior faults, recoveries, and near-misses",
  "Convert converging signals into usable action timing",
  "Classify action windows by urgency, consequence, and cost of delay",
  "Reduce false-alarm fatigue by weighing the pattern instead of one isolated signal",
  "Give operations, maintenance, engineering, and leadership the same predictive story",
  "Show when to watch, when to intervene, and when to escalate",
  "Turn prediction into earlier clarity instead of reactive scrambling",
];

const actionWindowPoints = [
  "Notify customer-designated contacts when a meaningful predictive condition is forming",
  "Support customer IT, engineering, maintenance, and existing vendors from the same evidence trail",
  "Build fast local support paths where possible so action does not stall",
  "Equip trained customer hands with the software and access needed to work with us remotely",
  "Where authorized, initiate remote support and notify vendors or manufacturers when their equipment is involved",
  "Keep the goal where it belongs: keep the customer operating, not profit from their pain",
];

const withoutFortuneTeller = [
  "Timing stays reactive",
  "Drift stays fragmented across people and screens",
  "Action windows shrink before anyone agrees on what is happening",
  "Maintenance, operations, and leadership align later than they should",
];

const withFortuneTeller = [
  "Converging patterns become visible earlier",
  "Future timing becomes clearer and more defensible",
  "Good options remain available longer",
  "People can coordinate from the same predictive truth before consequence arrives",
];

const relatedPages = [
  {
    title: "Predictive & Diagnostics",
    href: "/a-i-r-o-n/predictive-diagnostics",
    description:
      "See the full family relationship between Doctor modules, Ghost Busting, Fortune Teller™, and Predictive Breakpoint® logic.",
  },
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how specialist Doctor modules generate the domain truth that Fortune Teller™ weighs above them.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how custody, context, recall, and IMP™ memory strengthen prediction over time.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description:
      "See how predictive timing and governed startup structure fit together when consequence begins before full production.",
  },
];

export default function FortuneTellerPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/fortune-teller"
      mainClassName="airon-module-page fortune-teller-page"
    >
      <HeroBlock
        eyebrow="Not one signal. The whole pattern."
        title="Fortune Teller™"
        supportingLine="See the breakpoint before the breakdown."
        subhead="Fortune Teller™ is the predictive layer above the Doctor family — built to turn converging machine truth into earlier clarity, better timing, and usable action windows."
        body={
          <>
            <p>
              Fortune Teller™ does not predict from one alarm, one sensor crossing,
              or one isolated event. It weighs converging evidence across a process,
              asset, or operating state and turns that pattern into a Predictive Breakpoint®.
            </p>
            <p>
              The Doctors tell the truth now. Ghost Busting captures the intermittent
              event. Fortune Teller™ helps answer what that truth means next, when it
              will matter, and how much useful time still remains before consequence arrives.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Predictive Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Truth now</h3>
            <p>
              Doctor modules tell the truth now in the exact machine, component,
              subsystem, or process slice that needs specialist care.
            </p>
          </div>
          <div className="comparison-card">
            <h3>What comes next</h3>
            <p>
              Fortune Teller™ weighs those truths together and turns drift into
              future timing, action windows, and earlier decision clarity.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Where Fortune Teller™ sits"
        paragraphs={[
          "Fortune Teller™ is not a replacement for the Doctor family. It sits above the Doctor family as the predictive layer that receives information from every relevant Doctor module.",
          "That architecture matters because prediction gets stronger when specialist truth, intermittent evidence, historical memory, and human context are kept connected instead of flattened into one generic dashboard.",
          "The result is disciplined industrial foresight — not theater, not mysticism, and not prediction without evidence.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Fortune Teller™ is not:</h3>
            <ul>
              <li>A crystal ball</li>
              <li>A single-threshold alarm</li>
              <li>An excuse to remove human judgment</li>
              <li>Prediction without evidence</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Fortune Teller™ weighs"
            subtitle="Prediction starts where isolated signals stop."
            align="center"
          />
          <CapabilityGrid items={signalSources} compact />
          <p className="support-line center">
            It does not trust one signal by itself, and it does not ignore human
            signaling simply because it is not a conventional sensor stream.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="The predictive stack"
            subtitle="Diagnosis, intermittent capture, and future timing should stay distinct but connected."
            align="center"
          />
          <CapabilityGrid items={architecturePoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What a Predictive Breakpoint® really is"
            subtitle="Not one number crossing one line. A usable future threshold."
            align="center"
          />
          <CapabilityGrid items={breakpointPoints} compact />
          <div className="doctrine-block top-gap">
            <p>The goal is not magic. The goal is earlier clarity.</p>
            <p>
              Prediction becomes valuable when it creates time for the right people
              to act before the breakdown, quality loss, or forced decision is already on top of them.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Fortune Teller™ can do"
            subtitle="Turn converging patterns into practical timing and stronger decisions."
            align="center"
          />
          <CapabilityGrid items={capabilityPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="How prediction becomes action"
            subtitle="A useful predictive layer helps the right people move at the right time."
            align="center"
          />
          <CapabilityGrid items={actionWindowPoints} compact />
          <p className="support-line center">
            The point is not to create another screen full of anxiety. The point is to keep the customer operating.
          </p>
        </div>
      </section>

      <ContrastBlock
        title="Earlier clarity. Better timing. Fewer surprises."
        leftTitle="Without Fortune Teller™"
        leftItems={withoutFortuneTeller}
        rightTitle="With Fortune Teller™"
        rightItems={withFortuneTeller}
      />

      <TextIntroBlock
        title="Predictive, not theatrical"
        paragraphs={[
          "Fortune Teller™ does not force action, pretend certainty where there is none, or replace human judgment.",
          "It produces predictive timing, confidence, and action windows so human beings can make the smart move before consequence arrives.",
          "The value is not perfect prophecy. The value is earlier clarity, better timing, stronger coordination, and fewer surprises.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>From patterns to prediction. From drift to decision.</strong>
            </p>
          </div>
        </div>
      </section>

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Start with predictive timing where consequence matters most. Expand into specialist truth, memory, and governed startup structure as the system grows."
        />
      </div>

      <CTAFooterBand
        headline="See the breakpoint while there is still time to act."
        primaryCTA={{
          label: "Request a Predictive Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="One process. One asset. One family of Doctors. Or the full operation."
      />
    </SiteLayout>
  );
}
