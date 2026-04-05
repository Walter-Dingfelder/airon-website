import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const watchedSignals = [
  "Melt availability, furnace readiness, and thermal continuity",
  "Sand-system stability, moisture discipline, and return condition",
  "Molding-line pace, stoppage patterns, and flow interruption",
  "Core readiness, core demand, and downstream fit pressure",
  "Pour timing, ladle flow, and coordination between hot end and line demand",
  "Cooling, shakeout, finishing, and downstream backlog formation",
  "Dust collection, baghouse behavior, airflow integrity, and environmental drift",
  "Cranes, conveyance, utilities, and support-system constraints",
  "Quality loss, scrap clustering, and recurring defect signatures",
  "Maintenance response patterns, repeat repairs, and weak recurring causes",
  "Startup recovery, abnormal-event continuity, and re-stabilization behavior",
  "Human intervention patterns that reveal buried process strain",
];

const capabilities = [
  "See the foundry as one living organism instead of isolated machines",
  "Expose where one weak subsystem is creating linewide operational consequence",
  "Connect upstream and downstream symptoms into one evidence trail",
  "Help operations, maintenance, engineering, and leadership work from the same truth",
  "Reveal where the real bottleneck lives instead of where frustration is loudest",
  "Tighten troubleshooting by showing sequence, dependency, and consequence together",
  "Support safer, faster startup and restart decisions after disruption",
  "Feed V.A.U.L.T.® with real foundry memory instead of fragmented anecdotes",
  "Strengthen Fortune Teller™ by giving prediction cleaner whole-foundry truth",
  "Turn recurring foundry pain into structured continuous improvement",
];

const bestFit = [
  "Foundries where melt, sand, molding, pouring, cooling, finishing, and utilities are tightly linked",
  "Operations where one recurring stoppage can echo across the entire plant",
  "Sites with repeat startup losses, repeat constraints, or repeat repair frustration",
  "Plants where quality, throughput, maintenance, and energy cannot be understood in isolation",
  "Facilities that need one operational truth layer above multiple cabinets, HMIs, and departments",
  "Organizations that want foundry-wide continuity instead of machine-by-machine storytelling",
];

const withoutFoundryDoctor = [
  "Departments protect their own local story",
  "Bottlenecks appear to move depending on who is speaking",
  "Repeat failures get repaired without repairing the sequence that created them",
  "Foundry-wide consequence gets recognized later than it should",
  "Prediction stays weaker because truth stays fragmented",
];

const withFoundryDoctor = [
  "The foundry can be read as one connected operating organism",
  "Local issues can be traced to whole-foundry consequence earlier",
  "Recurring pain points become structured, reviewable, and improvable",
  "Operations and maintenance can coordinate from shared truth instead of parallel opinions",
  "Prediction, recovery, and continuous improvement all start from cleaner evidence",
];

const relatedPages = [
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how Foundry Doctor™ fits inside the broader specialist architecture.",
  },
  {
    title: "Furnace Doctor™",
    href: "/a-i-r-o-n/furnace-doctor",
    description:
      "See the narrower hot-end specialist that can operate inside the wider foundry view.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how specialist truth becomes future timing, action windows, and predictive clarity.",
  },
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See how foundry pain becomes structured learning instead of repeat frustration.",
  },
];

export default function FoundryDoctorPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/foundry-doctor"
      mainClassName="airon-module-page foundry-doctor-page"
    >
      <HeroBlock
        eyebrow="A.I.R.O.N.'s foundry-wide specialist"
        title="Foundry Doctor™"
        supportingLine="Whole-foundry truth before whole-foundry consequence."
        subhead="Foundry Doctor™ is the broader Doctor example — built to read melt, sand, molding, pouring, utilities, maintenance, quality, and recovery as one connected industrial organism."
        body={
          <>
            <p>
              Some Doctors need to sit tightly on one machine, one cabinet, or one
              process block. Foundry Doctor™ exists to prove the opposite is also true.
            </p>
            <p>
              A foundry can behave like one living battlefield. One weak bearing, one sand
              problem, one airflow issue, one delay in pouring, or one unstable restart can
              ripple through the entire operation. Foundry Doctor™ is built to see that wider truth.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Foundry Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Narrow specialist</h3>
            <p>
              A Doctor can sit on one subsystem when one process slice needs the closest care.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Wider battlefield</h3>
            <p>
              Foundry Doctor™ sits wider so the operation can be understood as one connected organism.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="doctrine-block">
            <p className="eyebrow">Part of the Doctor Family™</p>
            <p>
              Foundry Doctor™ is one specialist inside the larger Doctor Family™ architecture.
              It proves that a Doctor can be built not only for one asset, but also for a wider
              operational organism when that is the level where the real truth lives.
            </p>
            <div className="cta-row">
              <a className="btn btn-secondary" href="/a-i-r-o-n/doctor-family">
                See the Doctor Family™
              </a>
            </div>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Built for foundry-wide operational continuity"
        paragraphs={[
          "Foundry Doctor™ is not a generic factory dashboard. It is a specialist layer shaped for the way foundries really behave: linked departments, shared utilities, hard physical dependencies, recurring abnormal conditions, and downstream consequence that often appears far from the true origin.",
          "That is why Foundry Doctor™ is one of the strongest examples of the Doctor Family™. It shows that A.I.R.O.N. can specialize narrowly when needed and also widen correctly when one process must be understood as a whole living system.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Foundry Doctor™ is not:</h3>
            <ul>
              <li>A replacement for certified control or safety systems</li>
              <li>A one-screen promise that every foundry is identical</li>
              <li>A substitute for human judgment, maintenance craft, or process ownership</li>
              <li>A decorative KPI wall that leaves the real bottleneck hidden</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Foundry Doctor™ watches"
            subtitle="Not one machine. The operational chain that makes a foundry live or stall."
            align="center"
          />
          <CapabilityGrid items={watchedSignals} compact />
          <p className="support-line center">
            The point is not to collect more signals. The point is to weight the right foundry signals together so one department's symptom can be connected to the real source of consequence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Foundry Doctor™ can do"
            subtitle="Translate a connected foundry into usable operational truth."
            align="center"
          />
          <CapabilityGrid items={capabilities} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Best where the foundry behaves like one organism"
            subtitle="Some problems start small and still become whole-plant pain."
            align="center"
          />
          <div className="two-col">
            <div>
              <ul>
                {bestFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="callout-card">
              <p>
                If the operation cannot be understood correctly one machine at a time,
                Foundry Doctor™ becomes one of the strongest entry points into A.I.R.O.N.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Where Foundry Doctor™ sits relative to other Doctors"
        paragraphs={[
          "Furnace Doctor™ remains the homepage-facing concrete example because it is a clear hot-end specialist. Foundry Doctor™ widens the public story by showing that some Doctors must sit above one machine and read the larger operational battlefield.",
          "That is exactly why the Doctor Family™ matters. A.I.R.O.N. does not force every real-world process into one generic view. It creates the right specialist at the right level of truth.",
          "And when that truth needs to become predictive timing, Fortune Teller™ sits above the Doctor Family™ and weighs what that whole-foundry truth means next.",
        ]}
        sectionClassName="section"
      />

      <ContrastBlock
        title="A foundry rarely suffers from only one local problem. It suffers from consequence moving through a connected organism."
        leftTitle="Without Foundry Doctor™"
        leftItems={withoutFoundryDoctor}
        rightTitle="With Foundry Doctor™"
        rightItems={withFoundryDoctor}
      />

      <TextIntroBlock
        title="Operational memory matters here"
        paragraphs={[
          "Foundry Doctor™ becomes more valuable as it learns what the foundry has already lived through: repeat stoppages, weak repairs, startup losses, environmental drift, recurring defect patterns, utility instability, and the real sequence behind whole-plant frustration.",
          "That memory belongs in V.A.U.L.T.® and in Continuous Improvement. The goal is not simply to survive one bad shift. The goal is to stop teaching the same painful lesson over and over.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>When the foundry speaks as one organism, Foundry Doctor™ listens at the right scale.</strong>
            </p>
          </div>
        </div>
      </section>

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Start with whole-foundry truth. Expand into narrower specialists, predictive timing, and permanent improvement memory as the system grows."
        />
      </div>

      <CTAFooterBand
        headline="See the whole foundry before the whole foundry pays for one buried problem."
        primaryCTA={{
          label: "Request a Foundry Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="One foundry. One subsystem. One chronic bottleneck. Or the full operating battlefield."
      />
    </SiteLayout>
  );
}
