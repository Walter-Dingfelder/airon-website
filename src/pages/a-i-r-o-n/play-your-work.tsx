import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const whatThisReallyMeans = [
  "Professional simulation tied to real industrial consequence",
  "Guided repetition that turns exposure into usable readiness",
  "Role-based learning instead of generic one-size-fits-all training",
  "Interactive familiarization before live field pressure arrives",
  "Structured feedback that helps good habits form earlier",
  "Skill transfer from modern interactive cognition into disciplined plant performance",
];

const existingHumanStrengths = [
  "Reading changing conditions in real time",
  "Tracking multiple signals at once",
  "Learning by iteration instead of one-pass exposure",
  "Navigating maps, systems, zones, and objectives",
  "Coordinating under pressure with defined roles",
  "Recognizing patterns, timing, and consequence quickly",
  "Improving through immediate feedback loops",
  "Staying engaged when the environment responds to good judgment",
];

const activationMethods = [
  "Role-based guided practice",
  "System familiarization before field exposure",
  "Startup, shutdown, and handoff rehearsal",
  "Abnormal-event readiness with controlled consequence",
  "Progression tied to demonstrated judgment, not only attendance",
  "Preserved memory that helps training stay connected to real plant truth",
  "Faster onboarding without unsafe improvisation",
  "Confidence growth before live consequence arrives",
];

const withoutTranslation = [
  "Potential stays disconnected from industrial reality",
  "Training feels separate from the way people actually learn",
  "Knowledge transfer depends too much on whoever happens to be nearby",
  "Readiness often arrives late, unevenly, or not at all",
];

const withTranslation = [
  "Modern learning instincts get translated into disciplined plant behavior",
  "Readiness begins earlier and progresses more consistently",
  "People rehearse judgment before the real consequence shows up",
  "System memory and guided structure help good performance stick",
];

const relatedPages = [
  {
    title: "Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description:
      "See the governed environment where industrial familiarization, repetition, and readiness can develop before live consequence arrives.",
  },
  {
    title: "Training Philosophy",
    href: "/a-i-r-o-n/training-philosophy",
    description:
      "See how PLAYER-LIVE, proof-based progression, and preserved memory shape A.I.R.O.N. training doctrine.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description:
      "See how governed startup, annunciation, and proof-before-progression reinforce real-world readiness.",
  },
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description:
      "See how abnormal-event readiness and human protection connect to serious consequence training.",
  },
];

export default function PlayYourWorkPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/play-your-work"
      mainClassName="airon-branch-page play-your-work-page"
    >
      <HeroBlock
        eyebrow="A modern workforce already knows how to learn. Industry needs to translate the skill."
        title="PLAY YOUR WORK — WORK YOUR PLAY"
        supportingLine="Professional skill activation for the generation already trained by interactivity."
        subhead="This is not play replacing work. It is guided industrial familiarization, repetition, and consequence-aware training built in a form modern people already know how to engage."
        body={
          <>
            <p>
              PLAY YOUR WORK — WORK YOUR PLAY begins with a simple reality: many
              people entering industry already know how to read changing conditions,
              learn by iteration, react under pressure, and stay engaged inside
              interactive systems.
            </p>
            <p>
              The opportunity is not to trivialize work. The opportunity is to
              translate those existing human strengths into disciplined industrial
              readiness, governed practice, and better performance before live
              consequence arrives.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start a Workforce Activation Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Industrial Campus",
          href: "/a-i-r-o-n/industrial-campus",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Not childish gamification</h3>
            <p>
              This is not entertainment layered on top of industry. It is serious
              professional skill activation built around guided repetition,
              system response, and real consequence logic.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Human-to-machine engagement</h3>
            <p>
              This is PLAYER-LIVE in practice: the continuous improvement of human
              understanding, judgment, engagement, and governed participation.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="The workforce is not starting from zero"
        paragraphs={[
          "Too much industrial training still assumes people arrive as blank slates who must first be taught how to think inside dynamic systems. That assumption is increasingly wrong.",
          "Many already understand timing, response, progression, scanning, coordination, and feedback because interactive systems trained those habits long before the plant ever did.",
          "The real failure is not that the workforce lacks capacity. The real failure is that industry too often fails to translate that capacity into disciplined plant performance.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What this approach really is"
            subtitle="A serious industrial doctrine, not a novelty layer."
            align="center"
          />
          <CapabilityGrid items={whatThisReallyMeans} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Human strengths that already exist"
            subtitle="The gamer is already in the plant. The question is whether industry knows what to do with that reality."
            align="center"
          />
          <CapabilityGrid items={existingHumanStrengths} compact />
          <p className="support-line center">
            These strengths do not replace trade skill, plant knowledge, or experience.
            They make earlier readiness more reachable when the training environment is built correctly.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="From interaction to industrial readiness"
        paragraphs={[
          "A.I.R.O.N. does not assume that engagement is the enemy of seriousness. It assumes the opposite: attention, response, repetition, and visible system consequence are some of the strongest vehicles for serious learning.",
          "When guided correctly, interactive environments help people move from curiosity to familiarity, from familiarity to judgment, and from judgment to repeatable performance.",
          "That is why PLAY YOUR WORK — WORK YOUR PLAY belongs inside the broader A.I.R.O.N. doctrine instead of living as a detached culture slogan.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>The progression is intentional:</p>
            <ul>
              <li>Exposure becomes familiarity</li>
              <li>Familiarity becomes confidence</li>
              <li>Confidence becomes better judgment</li>
              <li>Better judgment becomes repeatable performance</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="How the activation works"
            subtitle="A good environment does more than present information. It responds, guides, and proves readiness over time."
            align="center"
          />
          <CapabilityGrid items={activationMethods} compact />
        </div>
      </section>

      <ContrastBlock
        title="Translation changes the outcome"
        leftTitle="Without translation"
        leftItems={withoutTranslation}
        rightTitle="With translation"
        rightItems={withTranslation}
      />

      <TextIntroBlock
        title="Why this matters to industry"
        paragraphs={[
          "Plants lose time, money, and confidence when onboarding is too slow, knowledge stays trapped in individuals, and readiness only begins when the real shift pressure is already present.",
          "PLAY YOUR WORK — WORK YOUR PLAY helps close that gap by putting serious familiarization, structured repetition, and governed response where they belong: before the live consequence, not after it.",
          "This is not about making work look like a game. It is about accepting that modern people already know how to learn through interaction, and using that truth responsibly.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>
                Gaming did not weaken the workforce. Industry failed to translate the skill.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with the human side of readiness. Expand into campus, training doctrine, startup structure, and abnormal-event preparation as the system matures."
      />

      <CTAFooterBand
        headline="Build readiness around the people already entering the system."
        primaryCTA={{
          label: "Start a Workforce Activation Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Industrial Campus",
          href: "/a-i-r-o-n/industrial-campus",
        }}
        supportingLine="Be safe. Level up. Play your work. Work your play."
      />
    </SiteLayout>
  );
}
