import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import playYourWorkHero from "../../assets/play-your-work-work-your-play-hero.webp";

/**
 * A.I.R.O.N. PLAY YOUR WORK source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/play-your-work.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const whatItIs = [
  "Professional simulation",
  "Industrial familiarization",
  "Live skill activation",
  "Guided role development",
  "Serious consequence training",
  "Faster confidence without unsafe improvisation",
];

const workforceSkills = [
  "Scanning changing conditions",
  "Reading live status",
  "Reacting to dynamic events",
  "Learning by iteration",
  "Understanding maps, systems, and zones",
  "Coordinating under pressure",
  "Improving through immediate feedback",
];

const supportAreas = [
  "Workforce familiarization before field exposure",
  "Faster onboarding",
  "Role-based guided learning",
  "Startup and shutdown rehearsal",
  "Abnormal-event readiness",
  "Expert knowledge transfer",
  "Stronger confidence under real operating pressure",
];

const withoutActivation = [
  "Learning stays slower and less sticky",
  "Readiness often starts too late",
  "Weaker habits survive longer",
  "Onboarding depends too much on who happens to be nearby",
];

const withActivation = [
  "Readiness builds earlier",
  "Guided learning becomes more repeatable",
  "Confidence rises before live consequence arrives",
  "System memory supports human growth instead of replacing it",
];

const relatedPages = [
  {
    title: "Dingfelder Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description: "Professional industrial readiness infrastructure.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description: "Startup rehearsal, structure, and proof logic.",
  },
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description: "Abnormal-event readiness and human protection.",
  },
  {
    title: "A.I.R.O.N. Home",
    href: "/a-i-r-o-n",
    description: "See the full system overview.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start the next conversation.",
  },
];

export default function AIRONPlayYourWorkPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/play-your-work-work-your-play" mainClassName="airon-branch-page play-your-work-page">
      <HeroBlock
        eyebrow="Modern workforce. Real industry. Live skill transfer."
        title="PLAY YOUR WORK — WORK YOUR PLAY"
        subhead="The gamer is already in your plant. The opportunity is to activate their skill."
        body={
          <>
            <p>
              PLAY YOUR WORK — WORK YOUR PLAY is the bridge between modern
              interactive cognition and real industrial performance.
            </p>
            <p>
              It connects serious simulation, guided repetition, live feedback,
              procedural discipline, and governed operational truth to the way
              modern people already learn.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start a Workforce Activation Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Campus Vision",
          href: "/a-i-r-o-n/industrial-campus",
        }}
      >
        <div className="hero-demo-visual">
          <img
            src={playYourWorkHero}
            alt=""
            loading="eager"
            decoding="async"
          />
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Not games at work. Professional skill activation."
        paragraphs={[
          "PLAY YOUR WORK — WORK YOUR PLAY is not childish entertainment, shallow gamification, or novelty for novelty’s sake.",
          "It is professional simulation, industrial familiarization, live skill activation, guided role development, serious consequence training, and faster confidence without unsafe improvisation.",
          "The point is not entertainment. The point is transfer.",
        ]}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What this approach is" />
          <CapabilityGrid items={whatItIs} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="The workforce is already here" />
          <p className="center narrow-text">
            Modern workers often already know how to read changing conditions,
            react to live status, learn by iteration, and coordinate across
            systems. Those abilities do not disappear when they enter industry.
          </p>
          <CapabilityGrid items={workforceSkills} />
          <p className="support-line center">
            The opportunity is to recognize, acknowledge, activate, and enable the skill already present.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="What skill activation looks like"
        paragraphs={[
          "This approach helps translate existing human ability into industrial readiness through guided repetition, safe rehearsal, operational familiarization, role-based learning, consequence-aware simulation, structured feedback, and preserved system memory.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>The goal is to help people move from:</p>
            <ul>
              <li>Curiosity to familiarity</li>
              <li>Familiarity to confidence</li>
              <li>Confidence to competent action</li>
              <li>Competent action to repeatable performance</li>
            </ul>
          </div>
        </div>
      </section>

      <ContrastBlock
        title="Industry still loses too much knowledge too quickly"
        leftTitle="Without skill activation"
        leftItems={withoutActivation}
        rightTitle="With skill activation"
        rightItems={withActivation}
      />

      <section className="section">
        <div className="container narrow">
          <p className="center narrow-text">
            Plants lose time and money because expertise is trapped in people,
            onboarding is too slow, fill-in operators are under-supported,
            procedures are remembered differently than they are performed, and
            training happens before the shift while reality happens during it.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What this approach supports" />
          <CapabilityGrid items={supportAreas} />
          <p className="support-line center">
            This is where human skill, system memory, and guided structure begin
            working together.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="Not to play. To perform."
        paragraphs={[
          "A.I.R.O.N. does not remove the human. It removes the burden of carrying everything alone.",
          "When the system remembers, guides, and protects, people are free to do what only people can do: think, judge, improve, teach, and lead.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>Gaming did not weaken the workforce. Industry can recognize, activate, and enable the skill already present.</strong>
            </p>
          </div>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with the human side of readiness. Expand into campus, startup, safety, and system architecture when the path is clear."
      />

      <CTAFooterBand
        headline="Build readiness around the people already in the system."
        primaryCTA={{
          label: "Start a Workforce Activation Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Campus Vision",
          href: "/a-i-r-o-n/industrial-campus",
        }}
        supportingLine="Be Safe. Level Up. Play Your Work. Work Your Play."
      />
    </SiteLayout>
  );
}
