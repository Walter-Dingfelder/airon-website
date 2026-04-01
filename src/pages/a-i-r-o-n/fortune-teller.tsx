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
 * A.I.R.O.N. Fortune Teller source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/fortune-teller.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const signalSources = [
  "Power factor",
  "Current",
  "Voltage",
  "Vibration",
  "Acoustics",
  "Environment",
  "Materials",
  "Command vs actual behavior",
  "Operator and panel inputs",
  "Learned event history",
  "Historical pattern similarity",
];

const capabilities = [
  "Recognize early warning signs before damage is done",
  "Compare current conditions to past breakdowns and near-misses",
  "Convert predictive storylines into repair-timing windows",
  "Classify action windows by cost, risk, and urgency",
  "Show not just when a breakpoint may arrive, but why the timing matters",
  "Help operators, maintenance, scheduling, and leadership act from the same truth",
  "Support proactive decisions instead of reactive scrambling",
];

const withoutFortuneTeller = [
  "Timing stays reactive",
  "Drift stays fragmented",
  "Action windows shrink",
  "Maintenance and operations align later than they should",
];

const withFortuneTeller = [
  "Converging patterns become visible earlier",
  "Timing becomes clearer",
  "Action windows become easier to plan",
  "Decisions can start before consequence arrives",
];

const relatedPages = [
  {
    title: "Furnace Doctor™",
    href: "/a-i-r-o-n/furnace-doctor",
    description: "Hot-end truth and advisory visibility.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description: "Truth, memory, and recoverable lessons.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description: "Structured startup and proof logic.",
  },
  {
    title: "Doctor Family",
    href: "/a-i-r-o-n/doctor-family",
    description: "Specialist architecture overview.",
  },
];

export default function AIRONFortuneTellerPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/fortune-teller" mainClassName="airon-module-page fortune-teller-page">
      <HeroBlock
        eyebrow="Not one signal. The whole pattern."
        title="Fortune Teller™"
        subhead="See the breakpoint before the breakdown."
        body={
          <>
            <p>Fortune Teller is A.I.R.O.N.’s predictive layer.</p>
            <p>
              It does not predict from one alarm, one tag, or one sensor crossing
              a limit. It builds predictive confidence by analyzing converging
              patterns across a process, asset, or operating state and turning
              those patterns into <strong>Predictive Breakpoints®</strong> and live{" "}
              <strong>Windows of Opportunity™</strong> for action.
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
        <div className="hero-image-placeholder">
          <span>Approved predictive / process / signal image goes here</span>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Prediction grounded in operating truth"
        paragraphs={[
          "Fortune Teller is the A.I.R.O.N. layer that converts drift into future-action timing.",
          "It is built to identify when a meaningful future breakpoint is forming and to show where the useful action window still exists.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Fortune Teller is not:</h3>
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
          <SectionHeading title="What Fortune Teller weighs" />
          <CapabilityGrid items={signalSources} />
          <p className="support-line center">
            It does not trust one signal by itself, and it does not ignore human
            signaling just because it is not a conventional sensor stream.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="What a Predictive Breakpoint really is"
        paragraphs={[
          "A Predictive Breakpoint is not one number crossing one line.",
          "It is the point where converging evidence indicates that a process, asset, or operating state is moving toward instability, control degradation, maintenance need, quality risk, or operational consequence.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              Predictive Breakpoints are generated by analyzing converging
              patterns across multiple feedback sources tied to a single process,
              asset, or operating state.
            </p>
            <p>
              A.I.R.O.N. weighs electrical, mechanical, acoustic,
              environmental, material, command-response, human, and historical
              signals together to determine when a meaningful future breakpoint
              is forming.
            </p>
          </div>
          <p className="support-line">The goal is not magic. The goal is earlier clarity.</p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What Fortune Teller can do" />
          <CapabilityGrid items={capabilities} />
        </div>
      </section>

      <ContrastBlock
        title="Earlier clarity. Better timing. Fewer surprises."
        leftTitle="Without Fortune Teller"
        leftItems={withoutFortuneTeller}
        rightTitle="With Fortune Teller"
        rightItems={withFortuneTeller}
      />

      <section className="section">
        <div className="container narrow">
          <p className="center narrow-text">
            Most systems wait for something obvious to fail. Fortune Teller is
            designed to surface meaningful future breakpoints while there are
            still good options.
          </p>
          <p className="center narrow-text">
            Its value is not perfect prophecy. Its value is earlier clarity,
            better timing, fewer surprises, stronger decision windows, and
            better coordination between operations, maintenance, and leadership.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="Predictive, not theatrical"
        paragraphs={[
          "Fortune Teller does not force action, pretend certainty where there is none, or replace human judgment.",
          "It produces predictive timing, confidence, and action windows so humans can decide what smart move to make before consequence arrives.",
        ]}
        sectionClassName="section section-alt"
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
          supportingLine="Start with prediction where timing matters most. Expand into advisory, memory, and startup structure when the system is ready."
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
        supportingLine="One process. One asset. One pattern. Or the full operation."
      />
    </SiteLayout>
  );
}
