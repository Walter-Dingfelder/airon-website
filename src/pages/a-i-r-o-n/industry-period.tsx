import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import ContrastBlock from "../../components/core/ContrastBlock";
import HardPositionLines from "../../components/doctrine/HardPositionLines";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const numberGame = [
  "Version-number theater",
  "Digital wallpaper sold as transformation",
  "Automation without memory",
  "Metrics without preserved truth",
  "Modern branding covering brittle operations",
  "Software language without industrial discipline",
];

const industrialCulture = [
  "Continuous reality capture",
  "Preserved baseline, drift, and proof",
  "Human safety above speed",
  "Machine safety above convenience",
  "Product quality protected under pressure",
  "Governed change instead of reactive scrambling",
  "Living memory that survives turnover and disruption",
];

const oldModel = [
  "Continuous intent with intermittent observation",
  "Standards that go stale while reality moves",
  "Truth filtered through meetings, memory, and politics",
  "Training truth separated from operating truth",
  "Handoffs that reset confidence and increase risk",
  "Improvement that disappears when the right person leaves",
];

const livingModel = [
  "A plant that can feel reality while it happens",
  "A plant that remembers what worked and what failed safely",
  "A plant that protects people during uncertainty",
  "A plant that projects skill when the expert is absent",
  "A plant that keeps improving without losing control",
  "A plant whose culture survives disruption because truth survives disruption",
];

const cultureLines = [
  "A.I.R.O.N. is an industrial culture, not a number.",
  "Automation without memory is still blind.",
  "Truth filtered through people becomes politics. Truth anchored to evidence becomes continuity.",
  "The goal is not to sound advanced. The goal is to become structurally harder to break.",
  "If improvement disappears when one person leaves, it was never owned. It was borrowed.",
];

const relatedPages = [
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See how A.I.R.O.N. listens continuously, respects local authority, and governs through protected boundaries rather than fragile entanglement.",
  },
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See why baseline, drift, and proof must live in the system if improvement is going to survive disruption and turnover.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how preserved truth, institutional memory, and searchable evidence become part of the operating culture instead of archived clutter.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See why safety is a living system property, not a department-only function that wakes up after uncertainty is already rising.",
  },
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how specialist Doctors extend the same culture into machine, process, subsystem, and component-level care.",
  },
];

export default function IndustryPeriodPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/industry-period"
      mainClassName="airon-positioning-page industry-period-page"
    >
      <HeroBlock
        eyebrow="Stop chasing numbers. Build something that can live."
        title="Industry. Period."
        supportingLine="A.I.R.O.N. is an industrial culture, not a number."
        subhead="The real question is not whether someone calls a plant 4.0, 5.0, or 6.0. The real question is whether it can feel reality, preserve truth, protect people, and keep improving when conditions change."
        body={
          <>
            <p>
              A plant does not become advanced because it bought new hardware,
              installed another dashboard, or learned a new version label.
            </p>
            <p>
              It becomes advanced when safety, machine care, product quality,
              truth, memory, and improvement remain intact under handoffs,
              substitution, disruption, and pressure.
            </p>
            <p>
              That is why A.I.R.O.N. matters. Not because it sounds modern.
              Because it makes industry harder to confuse, harder to weaken, and
              harder to drag backward.
            </p>
          </>
        }
        primaryCTA={{
          label: "See the A.I.R.O.N. System",
          href: "/a-i-r-o-n",
        }}
        secondaryCTA={{
          label: "Explore the Modules",
          href: "/a-i-r-o-n/modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Numbers describe eras</h3>
            <p>
              They can be useful shorthand, but they do not guarantee structural
              maturity, preserved truth, or human protection.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Culture determines survival</h3>
            <p>
              A.I.R.O.N. turns sensing, memory, governance, and improvement into
              a living operating culture that does not disappear when conditions
              get ugly.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="The number is not the achievement"
        paragraphs={[
          "Industry 4.0, 5.0, and 6.0 can be useful lenses, but they are not the prize. The prize is a plant that can hold the baseline, hunt drift, preserve proof, and respond with discipline before uncertainty turns into injury, damage, or loss.",
          "A.I.R.O.N. is not trying to help a facility win a vocabulary contest. It is trying to help the facility become structurally capable of remembering, protecting, learning, and improving without depending on luck, politics, or heroics.",
          "That is why A.I.R.O.N. should be understood first as a culture and a nervous system. The number only matters if the behavior behind it is real.",
        ]}
      />

      <ContrastBlock
        title="What A.I.R.O.N. rejects"
        leftTitle="Not this"
        leftItems={numberGame}
        rightTitle="This instead"
        rightItems={industrialCulture}
      />

      <ContrastBlock
        title="What industry looks like before and after living memory"
        leftTitle="Without living continuity"
        leftItems={oldModel}
        rightTitle="With A.I.R.O.N. in the nervous system"
        rightItems={livingModel}
        sectionClassName="section"
      />

      <TextIntroBlock
        title="Continuous improvement is not a slogan if the plant can actually remember"
        paragraphs={[
          "Most factories have long claimed to pursue Continuous Improvement. The problem was never intent. The problem was blindness between snapshots. Reports, audits, meetings, and reviews captured the story after the fact while reality was still moving underneath them.",
          "A.I.R.O.N. changes that condition. It listens while the process lives. It binds state, identity, timing, deviation, intervention, and outcome into preserved operational truth. That turns Continuous Improvement from periodic human effort into living industrial behavior.",
          "That is why A.I.R.O.N. is an industrial culture, not a number. The culture is what remains when shifts change, experts leave, leadership rotates, and the factory still needs to stay safe, productive, and honest.",
        ]}
        sectionClassName="section section-alt"
      />

      <TextIntroBlock
        title="A plant should not have to choose between modern and human"
        paragraphs={[
          "A.I.R.O.N. does not make the human less important. It removes the burdens that should never have rested on the human in the first place: remembering every variation, policing every drift manually, defending truth through politics, and relearning the same lesson after every turnover.",
          "When the system carries memory, evidence, and continuity properly, people are freed to do what only people can do: judge, mentor, imagine, decide, lead, and improve with purpose.",
          "That is not anti-human industry. That is industry finally becoming worthy of the people inside it.",
        ]}
        sectionClassName="section"
      />

      <TextIntroBlock
        title="The real maturity test"
        paragraphs={[
          "A mature industrial system does not prove itself on a calm day. It proves itself when the expert is absent, the line substitutes personnel, the process starts to drift, the pressure is rising, and truth still survives intact.",
          "If the baseline holds, if drift is seen early, if safety tightens before harm, if the machine is protected before damage, and if the lesson is preserved afterward, that plant is moving in the right direction whether anyone calls it 4.0, 5.0, 6.0, or nothing at all.",
          "That is the maturity A.I.R.O.N. is built to deliver.",
        ]}
        sectionClassName="section section-alt"
      />

      <HardPositionLines title="Hard position lines" lines={cultureLines} />

      <RelatedLinksBlock
        title="Where this culture becomes visible"
        items={relatedPages}
        supportingLine="Start with the position, then move into the system behaviors that make the position real."
      />

      <CTAFooterBand
        headline="Build the culture. Forget the version theater."
        primaryCTA={{
          label: "See the A.I.R.O.N. System",
          href: "/a-i-r-o-n",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="Industry. Period."
      />
    </SiteLayout>
  );
}
