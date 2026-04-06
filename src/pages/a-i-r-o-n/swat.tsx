import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const attackPoints = [
  "Wasted motion that steals minutes all shift long",
  "Lost time hidden inside handoffs, searching, waiting, and recovery",
  "Unsafe conditions that are rising before someone gets hurt",
  "Unstable setups that keep forcing operators to compensate",
  "Hidden defects and rework paths that quietly eat profit",
  "Forgotten knowledge that should have been preserved the first time",
];

const fieldInterfacePoints = [
  "Live system state from A.I.R.O.N.",
  "Hazard overlays and protection cues",
  "Best-known procedures and recovery steps",
  "Historical baselines and recent drift context",
  "Real-time guidance tied to the actual condition forming now",
  "C.A.T.A.S.T.R.O.P.H.E. support when response speed matters most",
];

const teamPoints = [
  "Safety guardian",
  "Process stabilizer",
  "Knowledge carrier",
  "Waste eliminator",
  "Human response layer of the industrial nervous system",
  "Visible proof that intelligence and action now move together",
];

const loopPoints = [
  "A.I.R.O.N. detects the drift, waste, hazard, or opportunity first",
  "S.W.A.T. moves with shared awareness instead of guesswork",
  "Field actions are tied to best-known procedure and current system truth",
  "The event, response, and outcome are preserved as future memory",
  "Better Days, V.A.U.L.T.®, and living standards all get sharper afterward",
  "The next response starts earlier, cleaner, and safer than the last one",
];

const withoutSwat = [
  "Waste is found late and attacked inconsistently",
  "Response depends on who happens to be nearby",
  "The team spends time gathering context instead of acting",
  "Safety, recovery, and improvement compete with each other",
];

const withSwat = [
  "Safety, skill, and intelligence arrive together",
  "The right human actions move faster because the truth is already present",
  "Waste removal and hazard control happen in the same moment",
  "Every response becomes better future guidance instead of lost experience",
];

const relatedPages = [
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description:
      "See how abnormal events, safe recovery, Savior-On-Site, and guided action stay grounded in live truth.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See why safety is a property of a living system and why uncertainty is the most dangerous factory condition.",
  },
  {
    title: "Better Days",
    href: "/a-i-r-o-n/better-days",
    description:
      "See how front-line observations, ideas, and concerns become routed action instead of disappearing into silence.",
  },
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See why baseline, drift, and proof must survive politics, turnover, and disruption.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how records, procedures, baselines, and memory stay available when response speed matters most.",
  },
];

export default function SwatPage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/swat" mainClassName="airon-module-page swat-page">
      <HeroBlock
        eyebrow="A.I.R.O.N. sees. Humans act."
        title="S.W.A.T. — Swift Waste Attack Team"
        supportingLine="The human response layer of A.I.R.O.N."
        subhead="S.W.A.T. is where safety, skill, and intelligence converge to eliminate waste and protect life in real time."
        body={
          <>
            <p>
              A.I.R.O.N. can sense drift, detect danger, surface opportunity, and preserve truth.
              It cannot turn a wrench, move the team, or physically stabilize the condition.
              That is why S.W.A.T. exists.
            </p>
            <p>
              S.W.A.T. is not enforcement theater and it is not a police-force metaphor.
              It is the rapid-response human layer that closes the loop between industrial
              intelligence and physical action on the floor.
            </p>
          </>
        }
        primaryCTA={{ label: "Start Discovery", href: "/a-i-r-o-n/contact" }}
        secondaryCTA={{ label: "See C.A.T.A.S.T.R.O.P.H.E.™", href: "/a-i-r-o-n/catastrophe" }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>A.I.R.O.N.</h3>
            <p>
              Sees the loss, detects the risk, frames the condition, and preserves the truth.
            </p>
          </div>
          <div className="comparison-card">
            <h3>S.W.A.T.</h3>
            <p>
              Moves with that truth in hand so safety, stabilization, and waste attack happen now.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What S.W.A.T. really is"
        paragraphs={[
          "Swift Waste Attack Team is the human response layer of A.I.R.O.N. It exists because intelligence without action is incomplete, and action without intelligence is expensive, dangerous, and slow.",
          "S.W.A.T. gives the plant a disciplined way to move when drift, waste, danger, instability, or opportunity has already been surfaced by the industrial nervous system.",
          "This is how A.I.R.O.N. becomes industrial culture rather than just another number or software label: the system sees, the team acts, and both get better together.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What S.W.A.T. attacks"
            subtitle="Wherever A.I.R.O.N. detects loss, S.W.A.T. moves."
            align="center"
          />
          <CapabilityGrid items={attackPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Every S.W.A.T. member is a safety system"
            subtitle="The team does not move as separate functions. It moves as one response force."
            align="center"
          />
          <CapabilityGrid items={teamPoints} compact />
          <p className="support-line center">
            Everyone’s lock goes on. Everyone comes home.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="The A.I.R.O.N. field interface"
            subtitle="One S.W.A.T. member serves as the live interface between system truth and field action."
            align="center"
          />
          <CapabilityGrid items={fieldInterfacePoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              C.A.T.A.S.T.R.O.P.H.E. is embedded in every A.I.R.O.N. terminal. Optional tablets do
              not create the system. They free humans from fixed stations when response speed matters most.
            </p>
          </div>
        </div>
      </section>

      <ContrastBlock
        title="This is where Lean stops waiting"
        leftTitle="Without S.W.A.T."
        leftItems={withoutSwat}
        rightTitle="With S.W.A.T."
        rightItems={withSwat}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="How the loop closes"
            subtitle="A.I.R.O.N. does not just reveal waste. S.W.A.T. removes it, and the system remembers how."
            align="center"
          />
          <CapabilityGrid items={loopPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why this belongs on the public site"
        paragraphs={[
          "A.I.R.O.N. is not only a sensing layer, a memory layer, or a predictive layer. It is also a response culture. S.W.A.T. is where that culture becomes visible on the plant floor.",
          "When catastrophe forms, when waste accelerates, when the setup is unstable, or when an operator needs shared awareness instead of guesswork, S.W.A.T. is how intelligence becomes motion.",
          "That is why A.I.R.O.N. is an industrial culture, not a number. The system does not stop at observation. It closes the loop with human action that is safer, faster, and more informed than the old way.",
        ]}
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="S.W.A.T. becomes strongest when safety, abnormal recovery, front-line contribution, preserved memory, and governed improvement are all connected."
      />

      <CTAFooterBand
        headline="See how intelligence becomes action on the floor."
        primaryCTA={{ label: "Start Discovery", href: "/a-i-r-o-n/contact" }}
        secondaryCTA={{ label: "Open Modules", href: "/a-i-r-o-n/modules" }}
        supportingLine="A.I.R.O.N. sees. Humans act. S.W.A.T. closes the loop."
      />
    </SiteLayout>
  );
}
