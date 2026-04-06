import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const priorityPoints = [
  "Human Safety comes first — always",
  "Machine Safety comes second so recovery does not create a larger failure",
  "Product Quality comes third so the response does not stabilize the process by quietly making bad output",
  "Stabilization, waste attack, and recovery happen only inside that priority stack",
  "Every action is tied to assigned roles so the team moves with discipline instead of chaos",
  "Every event becomes preserved learning so the next response starts earlier and cleaner",
];

const liveResponsePoints = [
  "High-speed Continuous Improvement response when the issue cannot wait for the normal CI process",
  "Happens live at the machine or process with the operator still in the loop",
  "Uses assigned roles so safety, system truth, action, and communication stay separated but coordinated",
  "Moves with A.I.R.O.N. truth already in hand instead of burning time gathering context under pressure",
  "Treats the event as a bounded operational problem to conquer, not a meeting topic to revisit later",
  "Closes the loop between A.I.R.O.N. insight and physical action on the floor",
];

const rolePoints = [
  "Operator — the live human closest to the machine truth and process behavior",
  "Safety lead — protects people and controls hazard boundaries before speed takes over",
  "System interface — carries live A.I.R.O.N. state, baselines, hazards, and best-known procedure",
  "Machine / process stabilizer — works the mechanical, controls, or setup side of the problem",
  "Recorder / continuity handoff — preserves what was seen, done, and learned for review and future guidance",
  "Additional specialists join only as needed, but the response always moves with explicit role clarity",
];

const fieldInterfacePoints = [
  "Live system state and current condition summary",
  "Hazard overlays and protective limits",
  "Best-known procedures and recovery steps",
  "Historical baselines, recent drift, and prior similar events",
  "C.A.T.A.S.T.R.O.P.H.E. support when the issue is abnormal, urgent, or expanding",
  "Shared awareness for the whole response team instead of guesswork, memory, and shouted updates",
];

const responseLoopPoints = [
  "A.I.R.O.N. surfaces the drift, waste, risk, or instability first",
  "S.W.A.T. forms at the machine with assigned roles and the operator included",
  "The team acts inside the priority order of Human Safety, Machine Safety, and Product Quality",
  "The response is guided by best-known procedure, current system truth, and visible hazard boundaries",
  "The event, actions, outcome, and lessons are preserved in V.A.U.L.T.® and the broader CI system",
  "The next response starts sooner, safer, and with better evidence than the last one",
];

const withoutSwat = [
  "Urgent issues wait for the normal CI cycle even when the process cannot wait",
  "Teams converge without clear roles, shared truth, or priority discipline",
  "The operator carries too much of the burden alone under live pressure",
  "Recovery, safety, and quality compete instead of being ordered correctly",
];

const withSwat = [
  "High-speed CI happens live at the machine when waiting would cost too much",
  "The operator is supported, not isolated",
  "Roles are assigned before motion accelerates",
  "Human Safety, Machine Safety, and Product Quality stay in the right order while the team conquers the issue",
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
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See why baseline, drift, proof, and living standards must survive politics, turnover, and disruption.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how records, procedures, baselines, and memory stay available when response speed matters most.",
  },
  {
    title: "Better Days",
    href: "/a-i-r-o-n/better-days",
    description:
      "See how front-line observations and preserved learning feed the next stronger response.",
  },
];

export default function SwatPage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/swat" mainClassName="airon-module-page swat-page">
      <HeroBlock
        eyebrow="Human Safety. Machine Safety. Product Quality."
        title="S.W.A.T. — Swift Waste Attack Team"
        supportingLine="High-speed Continuous Improvement at the machine."
        subhead="S.W.A.T. is the assigned-role response layer of A.I.R.O.N. that happens live at the machine or process with the operator when the issue cannot wait for the normal CI process."
        body={
          <>
            <p>
              A.I.R.O.N. can detect drift, danger, instability, and opportunity. It can preserve truth,
              surface risk, and frame what condition is forming. It cannot physically conquer the issue on the floor.
              That is why S.W.A.T. exists.
            </p>
            <p>
              S.W.A.T. is not reckless speed and it is not theater. It is disciplined live intervention with
              assigned roles, guided by real system truth, and constrained by the right priority order before motion accelerates.
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
              Moves with that truth at machine speed so urgent problems are conquered before normal CI would even convene.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What S.W.A.T. really is"
        paragraphs={[
          "S.W.A.T. stands for Swift Waste Attack Team, but that does not mean it is only a waste-removal concept. It is high-speed Continuous Improvement response with assigned roles that happens live at the machine or process with the operator when the issue cannot wait.",
          "It exists because the normal CI process is still essential, but some conditions are already forming under live consequence. When that happens, the plant needs disciplined intervention now, not a meeting later.",
          "That is why S.W.A.T. belongs on the public site. It makes visible that A.I.R.O.N. is an industrial culture, not a number: the system sees, the team acts, and the learning remains.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="The priority stack never changes"
            subtitle="S.W.A.T. moves fast, but never out of order."
            align="center"
          />
          <CapabilityGrid items={priorityPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="When S.W.A.T. is used"
            subtitle="This is the live-response layer for issues that cannot wait for normal CI cadence."
            align="center"
          />
          <CapabilityGrid items={liveResponsePoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Assigned roles keep the response disciplined"
            subtitle="S.W.A.T. is not a pile-on. It is a role-defined response with the operator included."
            align="center"
          />
          <CapabilityGrid items={rolePoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="The A.I.R.O.N. field interface"
            subtitle="One S.W.A.T. member carries the live interface between system truth and field action."
            align="center"
          />
          <CapabilityGrid items={fieldInterfacePoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              C.A.T.A.S.T.R.O.P.H.E. is embedded in every A.I.R.O.N. terminal. Optional tablets do not create the system.
              They free humans from fixed stations when response speed matters most.
            </p>
          </div>
        </div>
      </section>

      <ContrastBlock
        title="This is where urgent CI becomes disciplined field action"
        leftTitle="Without S.W.A.T."
        leftItems={withoutSwat}
        rightTitle="With S.W.A.T."
        rightItems={withSwat}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="How the loop closes"
            subtitle="A.I.R.O.N. does not just reveal the problem. S.W.A.T. helps conquer it, and the system remembers how."
            align="center"
          />
          <CapabilityGrid items={responseLoopPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why S.W.A.T. matters"
        paragraphs={[
          "Some issues can wait for the normal CI process. Some cannot. When the process is live, the operator is involved, and the cost of delay is already rising, S.W.A.T. is how A.I.R.O.N. turns truth into disciplined motion.",
          "That is why S.W.A.T. should never be misunderstood as reckless speed. It is high-speed CI under assigned roles, bounded priorities, visible truth, and preserved learning.",
          "Human Safety, Machine Safety, and Product Quality stay first. Then the team stabilizes, removes waste, restores confidence, and preserves the lesson for the next time.",
        ]}
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="S.W.A.T. is strongest when abnormal recovery, safety, preserved memory, front-line contribution, and governed improvement are all connected."
      />

      <CTAFooterBand
        headline="See how high-speed CI becomes disciplined action on the floor."
        primaryCTA={{ label: "Start Discovery", href: "/a-i-r-o-n/contact" }}
        secondaryCTA={{ label: "Open Modules", href: "/a-i-r-o-n/modules" }}
        supportingLine="A.I.R.O.N. sees. Humans act. S.W.A.T. closes the loop."
      />
    </SiteLayout>
  );
}
