import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import SystemPlayerBlock from "../../components/doctrine/SystemPlayerBlock";

const campusWhatItIs = [
  "A governed industrial familiarization environment",
  "A serious readiness and repetition platform",
  "A workforce activation and skill-transfer system",
  "A place to rehearse startup, operations, and abnormal events before live consequence",
  "A bridge between preserved system truth and human development",
  "A Continuous Improvement environment where learning can be practiced instead of discussed",
];

const campusWhatItSolves = [
  "Slow onboarding that depends too heavily on whoever happens to be nearby",
  "Weak familiarization before real equipment, real pressure, and real consequence",
  "Knowledge loss when experienced people leave or role coverage gets thin",
  "Fill-in operators being forced to learn too late under live operating pressure",
  "Procedures that are read one way, remembered another way, and performed a third way",
  "Improvement ideas that never become repeated human behavior",
];

const campusExperiences = [
  "Role-based guided learning tied to real operating context",
  "Startup, shutdown, and transition rehearsal before live consequence arrives",
  "Safety, abnormal-event, and consequence-aware scenario exposure",
  "Guided process familiarization across system flow, zones, and dependencies",
  "Cross-training and handoff strengthening across departments and responsibilities",
  "Practical repetition that builds confidence without teaching recklessness",
  "System memory and preserved lessons made visible to the people who need them",
  "A place where the next worker can inherit more than a binder and a warning",
];

const campusDomains = [
  "Foundry and melt operations",
  "Process manufacturing and utilities",
  "Oil and gas operations",
  "Storage, transfer, and distribution systems",
  "Maintenance familiarization and troubleshooting flow",
  "Continuous Improvement rehearsal and workforce development",
  "Safety and abnormal-event scenario training",
  "Any environment where readiness matters before live consequence arrives",
];

const withoutCampus = [
  "Readiness starts too late",
  "Confidence depends too much on individual luck and tribal coverage",
  "Turnover strips away familiarity faster than plants can rebuild it",
  "People encounter consequence before they encounter enough repetition",
];

const withCampus = [
  "Familiarity starts earlier",
  "Repetition becomes governed and more repeatable",
  "Human growth stays connected to system truth and preserved memory",
  "Plants can build confidence before the shift turns expensive or unsafe",
];

const leadershipValue = [
  "Reduce the cost of weak familiarization",
  "Shorten the path from curiosity to competence",
  "Preserve knowledge across shifts, turnover, and role changes",
  "Support workforce development without waiting for the next live problem to teach the lesson",
  "Create a more durable pipeline between training, operations, maintenance, and improvement",
  "Treat readiness as infrastructure instead of hoping it appears on its own",
];

const relatedPages = [
  {
    title: "Training Philosophy",
    href: "/a-i-r-o-n/training-philosophy",
    description:
      "See how PLAYER-LIVE, preserved memory, governed readiness, and proof-oriented development fit together.",
  },
  {
    title: "PLAY YOUR WORK — WORK YOUR PLAY",
    href: "/a-i-r-o-n/play-your-work",
    description:
      "See the workforce activation layer that connects modern interactive skill to real industrial performance.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description:
      "See how governed startup, proof-before-progression, and human permissives fit into campus rehearsal.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See how experience, truth, and preserved memory protect people before and during abnormal conditions.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start the conversation around your environment, workforce, and readiness priorities.",
  },
];

export default function IndustrialCampusPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/industrial-campus"
      mainClassName="airon-branch-page industrial-campus-page"
    >
      <HeroBlock
        eyebrow="Readiness should not begin at the moment of consequence."
        title="Industrial Campus"
        supportingLine="Governed industrial familiarization. Live skill transfer. Real readiness."
        subhead="Industrial Campus is where A.I.R.O.N. connects workforce development, guided repetition, system truth, and preserved memory before the live environment becomes the teacher."
        body={
          <>
            <p>
              Industrial Campus is not a game world and it is not digital theater.
              It is a governed industrial environment built to help people learn
              faster, prepare better, and enter live work with more familiarity,
              more confidence, and less guesswork.
            </p>
            <p>
              The goal is simple: reduce the cost of weak unfamiliarity before
              weak unfamiliarity shows up as delay, error, damage, or exposed people.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start a Campus Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Training Philosophy",
          href: "/a-i-r-o-n/training-philosophy",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Before the field</h3>
            <p>
              Build familiarity, repetition, and governed confidence before the
              real environment is forced to absorb every first lesson.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Connected to reality</h3>
            <p>
              Keep human development tied to process flow, operating structure,
              startup logic, safety boundaries, and preserved plant memory.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What Industrial Campus is"
        paragraphs={[
          "Industrial Campus is the readiness layer for human development inside the broader A.I.R.O.N. system.",
          "It gives plants a governed place to transfer skill, rehearse consequence-aware work, preserve hard-won familiarity, and help the next worker inherit more than a warning and a binder.",
          "This is where PLAYER-LIVE becomes practical: human understanding, judgment, engagement, and governed participation can improve before the shift turns expensive.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Industrial Campus is built to do"
            subtitle="Make readiness more deliberate, more repeatable, and less dependent on luck."
            align="center"
          />
          <CapabilityGrid items={campusWhatItIs} compact />
          <div className="contrast-card top-gap">
            <h3>It is not:</h3>
            <ul>
              <li>Childish entertainment</li>
              <li>Decorative virtual fluff</li>
              <li>Shallow gamification with no operational spine</li>
              <li>A replacement for the real plant</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What problem it solves"
            subtitle="Most plants still ask the live environment to teach too much, too late."
            align="center"
          />
          <CapabilityGrid items={campusWhatItSolves} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What people can do inside the campus"
            subtitle="Guided repetition, role clarity, and consequence-aware familiarity."
            align="center"
          />
          <CapabilityGrid items={campusExperiences} compact />
          <p className="support-line center">
            The point is not novelty. The point is governed repetition that helps
            the right habits arrive before the live system demands them.
          </p>
        </div>
      </section>

      <ContrastBlock
        title="Why it matters"
        leftTitle="Without Industrial Campus"
        leftItems={withoutCampus}
        rightTitle="With Industrial Campus"
        rightItems={withCampus}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="One campus. Many industrial environments."
            subtitle="The model scales across the environments where familiarity matters."
            align="center"
          />
          <CapabilityGrid items={campusDomains} compact />
        </div>
      </section>

      <SystemPlayerBlock
        title="Governed by A.I.R.O.N."
        systemText="holds structure, flow, preserved memory, operating logic, and repeatable exposure so readiness does not depend on improvisation alone."
        playerText="retains judgment, awareness, ethics, teachability, and the human authority to interpret, improve, and lead."
      />

      <TextIntroBlock
        title="Continuous Improvement should be practiced, not just announced"
        paragraphs={[
          "Continuous Improvement is not just one more part of A.I.R.O.N. It is the reason A.I.R.O.N. exists.",
          "That means improvement should not live only in reports, postmortems, meetings, or slogans. It should be rehearsed, learned, tested, and carried forward in human behavior.",
          "Industrial Campus gives improvement a place to become repeatable human practice instead of one more idea that fades after the meeting ends.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why leadership should care"
            subtitle="Readiness is infrastructure. Weak familiarization is a cost center."
            align="center"
          />
          <CapabilityGrid items={leadershipValue} compact />
          <p className="support-line center">
            Industrial Campus helps plants build a better handoff between training,
            operations, maintenance, and improvement instead of forcing each group
            to relearn the same lessons alone.
          </p>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with human readiness where consequence begins. Then move deeper into training doctrine, workforce activation, startup structure, and safety architecture."
      />

      <CTAFooterBand
        headline="Build readiness before the live environment sends the invoice."
        primaryCTA={{
          label: "Start a Campus Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Training Philosophy",
          href: "/a-i-r-o-n/training-philosophy",
        }}
        supportingLine="Governed industrial familiarization for the modern workforce."
      />
    </SiteLayout>
  );
}
