import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import HardPositionLines from "../../components/doctrine/HardPositionLines";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const notIndustry = [
  "A new label on an old weak system",
  "Buzzword automation without operating truth",
  "Dashboard theater pretending to be transformation",
  "Modern branding covering weak memory and fragile handoffs",
  "Version-number marketing treated as strategy",
];

const actualIndustry = [
  "Truth that stays anchored to evidence",
  "Memory that survives turnover and time",
  "Continuous Improvement that does not forget yesterday",
  "Governed startup, change, and recovery",
  "Predictive timing before consequence arrives",
  "Human protection tied to real operating conditions",
  "Continuity that holds when people, priorities, and conditions change",
];

const capabilityMarkers = [
  "Hold the baseline and detect drift before it becomes pain",
  "Preserve proof instead of relying on debate, memory, or politics",
  "Keep machine truth and human understanding connected",
  "Turn lessons learned into living operating memory",
  "Support customer IT, engineering, maintenance, and existing vendors from the same evidence trail",
  "Create action windows early enough to keep the customer operating",
  "Strengthen the plant without pretending the human no longer matters",
  "Build structure that survives shift change, turnover, and abnormal conditions",
];

const fragileOperation = [
  "Weak memory",
  "Tribal startup",
  "Political truth",
  "Late coordination",
  "Repeated avoidable pain",
  "Improvement that dies with the person who found it",
];

const resilientOperation = [
  "Custody, context, and recall",
  "Proof before progression",
  "Shared truth across roles",
  "Earlier coordination",
  "Safer response under uncertainty",
  "Improvement that persists after the shift ends",
];

const doctrineLines = [
  "Industry is not a slogan tier. It is the discipline of keeping truth, memory, protection, and continuity alive under consequence.",
  "Modernization that cannot remember, protect, or improve is still fragile.",
  "We are not trying to look industrial. We are Industry. Period.",
];

const relatedPages = [
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See the operating spine of A.I.R.O.N. and why improvement must stay tied to truth, proof, and memory.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how custody, context, recall, and IMP™ memory turn lessons into retained capability.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how converging truth becomes earlier timing, action windows, and predictive clarity.",
  },
  {
    title: "Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description:
      "See how workforce readiness, repetition, and governed familiarity strengthen the human side of the system.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start a grounded discovery conversation around the real operation, not the marketing layer.",
  },
];

export default function IndustryPeriodPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/industry-period"
      mainClassName="airon-positioning-page industry-period-page"
    >
      <HeroBlock
        eyebrow="We are Industry. Period."
        title="Industry. Period."
        subhead="Not a version number. A real operating capability."
        body={
          <>
            <p>
              A plant does not become advanced because somebody renamed it 4.0,
              5.0, or 6.0.
            </p>
            <p>
              It becomes stronger when it can hold truth, preserve memory, guide
              people safely through change, detect drift early, and improve
              without forgetting what it already learned.
            </p>
            <p>
              That is the standard A.I.R.O.N. is built to serve.
            </p>
          </>
        }
        primaryCTA={{
          label: "See the A.I.R.O.N. System",
          href: "/a-i-r-o-n",
        }}
        secondaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Marketing language</h3>
            <p>
              Talks about transformation without proving that the operation can
              remember, protect, or improve.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Industrial capability</h3>
            <p>
              Keeps truth, memory, continuity, and governed action alive while
              the real operation is under load.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What this page means"
        paragraphs={[
          "Industry. Period. is a position, not a trend label.",
          "It rejects the idea that industrial strength can be measured by fashionable numbering while memory is weak, handoffs are fragile, startup is tribal, and truth still depends on whoever argued last.",
          "A.I.R.O.N. exists to help the operation hold what matters: machine truth, human understanding, retained learning, governed action, and continuity that survives change.",
        ]}
      />

      <ContrastBlock
        title="This is not digital theater"
        leftTitle="This is not Industry. Period."
        leftItems={notIndustry}
        rightTitle="This is Industry. Period."
        rightItems={actualIndustry}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What real industrial strength looks like"
            subtitle="Not hype. Not cosmetics. A stronger operating structure."
            align="center"
          />
          <CapabilityGrid items={capabilityMarkers} compact />
          <p className="support-line center">
            The point is not to sound modern. The point is to keep the customer
            operating with stronger truth, better coordination, and fewer blind
            spots.
          </p>
        </div>
      </section>

      <ContrastBlock
        title="The number is marketing. The structure is what survives."
        leftTitle="A fragile operation"
        leftItems={fragileOperation}
        rightTitle="A resilient operation"
        rightItems={resilientOperation}
        sectionClassName="section"
      />

      <TextIntroBlock
        title="More advanced does not mean less human"
        paragraphs={[
          "Industry does not become more advanced by pretending the human is no longer needed.",
          "It becomes more advanced by carrying what the machine should carry: baseline, memory, drift recognition, timing, evidence, and retained lessons.",
          "That frees people to do what only people can do well: judge, teach, prioritize, coordinate, and improve.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>Continuous Improvement is not just one more part of A.I.R.O.N. It is the reason A.I.R.O.N. exists.</strong>
            </p>
            <p>
              SYSTEM-LIVE strengthens machine truth, baseline, drift, and proof.
              PLAYER-LIVE strengthens human understanding, judgment, engagement,
              and governed participation.
            </p>
            <p>
              Together, that is how industrial capability becomes real instead of
              decorative.
            </p>
          </div>
        </div>
      </section>

      <HardPositionLines title="Hard position lines" lines={doctrineLines} />

      <TextIntroBlock
        title="Why A.I.R.O.N. belongs here"
        paragraphs={[
          "A.I.R.O.N. is the nervous system that helps the operation sense reality, preserve memory, govern movement, and improve without depending on luck or heroics.",
          "The Doctors provide specialist truth. Fortune Teller™ provides predictive timing. V.A.U.L.T. preserves what must not be lost. Better Days carries improvement through response and accountability. The workforce pages strengthen the human side of the equation.",
          "That is not a slogan stack. That is industrial structure.",
        ]}
        sectionClassName="section"
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with the position, then move into the operating spine, memory, predictive timing, workforce development, or discovery."
      />

      <CTAFooterBand
        headline="Build the capability. Keep the truth. Forget the hype."
        primaryCTA={{
          label: "See the A.I.R.O.N. System",
          href: "/a-i-r-o-n",
        }}
        secondaryCTA={{
          label: "Explore the Modules",
          href: "/a-i-r-o-n/modules",
        }}
        supportingLine="We are Industry. Period."
      />
    </SiteLayout>
  );
}
