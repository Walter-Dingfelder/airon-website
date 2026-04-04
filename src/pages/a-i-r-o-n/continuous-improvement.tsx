import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const ciExpressionPoints = [
  "Controls & Automation is CI applied to machine behavior",
  "Safety is CI applied to human protection",
  "V.A.U.L.T. is CI applied to memory and proof",
  "Predictive Intelligence is CI applied to drift and prevention",
  "Training is CI applied to skill growth",
  "Better Days is CI applied to participation",
  "SYSTEM-LIVE / PLAYER-LIVE is CI applied to human-to-machine engagement",
  "C.A.T.A.S.T.R.O.P.H.E. is CI applied under abnormal conditions",
];

const baselinePoints = [
  "Baseline — the known-good state",
  "Drift — slow deviation from that state",
  "Proof — verified cause and effect",
  "Continuous Improvement protects all three",
  "Without them, improvement becomes politics or guesswork",
  "With them, improvement becomes disciplined and repeatable",
];

const languagePoints = [
  "Translate the same truth into machine, process, constraint, and risk language",
  "Do not force operators to translate upward into executive jargon to be respected",
  "Protect signal quality by protecting human dignity",
  "Improve the movement of truth between people, not just the machine itself",
  "Meet different generations and different roles on common ground",
  "Keep human engagement teachable, repeatable, and productive",
];

const betterDaysPoints = [
  "Better Days gives Continuous Improvement a front door",
  "Safety concerns, reliability suggestions, and operator ideas can be captured securely",
  "Contributions can be routed to the right departments and preserved in V.A.U.L.T.",
  "Front-line insight no longer depends on title, volume, or who happened to be in the meeting",
  "Approved lessons can become future training content",
  "Participation becomes part of the system instead of a side activity",
];

const trainingPoints = [
  "Training preserves what good operators actually do",
  "Cross-shift knowledge transfer becomes intentional instead of accidental",
  "Role-fit development becomes part of the CI structure",
  "Lessons can be stored, reused, and sharpened over time",
  "New hires get a governed path into real industrial capability",
  "Tomorrow gets built on purpose, not only repaired after a bad day",
];

const realPoints = [
  "R.E.A.L. — Rapidly Evaluate, Adjust, Learn",
  "Detect when a system shifts from stability to drift",
  "Identify why the shift happened",
  "Prescribe the next disciplined adjustment",
  "Store the lesson so the same failure does not have to teach itself twice",
  "A.I.R.O.N. is built to improve continuously itself",
];

const workforcePoints = [
  "Industry keeps paying to teach safety awareness from zero",
  "Industry keeps paying to teach quality discipline from zero",
  "Industry keeps paying to teach continuous-improvement behavior from zero",
  "A.I.R.O.N. bridges digital instinct to safe, purposeful industrial performance",
  "CI becomes the way machines, people, and memory keep improving together",
  "The industrial human standard can be raised without losing dignity",
];

const ciLooksLikePoints = [
  "A system that never stops sensing",
  "A memory that does not retire",
  "A baseline that can be defended",
  "A drift signal that can be seen early",
  "A proof trail that survives politics",
  "A contribution path for front-line insight",
  "A training path that preserves lessons",
  "A safer way to improve without destroying trust",
];

const relatedPages = [
  {
    title: "SYSTEM-LIVE / PLAYER-LIVE",
    href: "/a-i-r-o-n/system-live-player-live",
    description: "See Continuous Improvement applied to machine truth and human engagement together.",
  },
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description: "See Continuous Improvement applied to machine behavior, sequencing, startup, and governed control.",
  },
  {
    title: "Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description: "See how workforce activation and governed learning fit into the A.I.R.O.N. philosophy.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start a conversation around Continuous Improvement, participation, training, and system architecture.",
  },
];

export default function ContinuousImprovementPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/continuous-improvement"
      mainClassName="airon-continuous-improvement-page"
    >
      <HeroBlock
        eyebrow="Not a meeting. Not a slogan. Not a department."
        title="CONTINUOUS IMPROVEMENT"
        supportingLine="The operating spine of A.I.R.O.N."
        subhead="Continuous Improvement is not just one more part of A.I.R.O.N. It is the reason A.I.R.O.N. exists."
        body={
          <>
            <p>
              A.I.R.O.N. was built to keep improvement alive: sensing drift,
              preserving baseline, capturing wins, protecting people, and
              raising the standard safely and purposefully.
            </p>
            <p>
              Continuous Improvement is the central discipline that connects the
              machine, the people, the memory, the proof, and the next better
              way of operating.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore Modules",
          href: "/a-i-r-o-n/modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Machine Truth</h3>
            <p>
              Continuous Improvement applied to baseline, drift, proof,
              structure, and repeatable machine behavior.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Human Engagement</h3>
            <p>
              Continuous Improvement applied to understanding, judgment,
              language, participation, and governed human interaction.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Continuous Improvement is the spine, not a side module"
        paragraphs={[
          "Every major A.I.R.O.N. function is Continuous Improvement expressed in a different industrial form.",
          "Controls & Automation is CI applied to machine behavior. Safety is CI applied to human protection. V.A.U.L.T. is CI applied to memory and proof. Predictive Intelligence is CI applied to drift and prevention. Training is CI applied to skill growth. Better Days is CI applied to participation.",
          "That is why Continuous Improvement cannot be treated as background texture. It is the operating spine of the whole system.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="CI expressed through every major A.I.R.O.N. family"
            subtitle="Continuous Improvement is the common discipline underneath the visible modules."
            align="center"
          />
          <CapabilityGrid items={ciExpressionPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why no human can own Continuous Improvement"
        paragraphs={[
          "Humans can own responsibility, targets, ethics, and safety decisions. But no human can own a living improvement system by themselves.",
          "Processes drift. Machines wear. Materials shift. Suppliers vary. People rotate. The best lesson in the plant often leaves with the best person unless the system is built to hold it.",
          "A.I.R.O.N. does not replace the warriors of Continuous Improvement. It carries their legacy forward by taking the burden of drift detection, memory, and baseline protection off human shoulders so people can do what they do best: exercise judgment, ensure safety, teach, lead, and improve.",
        ]}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Baseline. Drift. Proof."
            subtitle="To own Continuous Improvement, the system has to protect the known-good state, recognize change, and preserve verified cause and effect."
            align="center"
          />
          <CapabilityGrid items={baselinePoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="SYSTEM-LIVE / PLAYER-LIVE: Continuous Improvement of the whole relationship"
        paragraphs={[
          "SYSTEM-LIVE is Continuous Improvement applied to machine truth. PLAYER-LIVE is Continuous Improvement applied to human understanding, judgment, engagement, and governed participation.",
          "Together, they create Continuous Improvement of the whole industrial relationship.",
          "PLAYER-LIVE is not entertainment. It is the continuous improvement of human-to-machine engagement.",
        ]}
      />

      <TextIntroBlock
        title="CI lives where the work lives"
        paragraphs={[
          "A.I.R.O.N. does not drag improvement away from reality and turn it into theater.",
          "Live machines, live data, live people, and live questions are preferred over presentations. Point-of-work truth beats deferred discussion.",
          "Too much improvement dies in conference rooms. A.I.R.O.N. brings the system to the work so reality speaks first.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Language matching, dignity, and human signal quality"
            subtitle="Continuous Improvement fails when people have to translate themselves upward into someone else’s language just to be taken seriously."
            align="center"
          />
          <CapabilityGrid items={languagePoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Better Days: Continuous Improvement with a front door"
            subtitle="Participation needs a real entry point if front-line insight is going to survive and become usable."
            align="center"
          />
          <CapabilityGrid items={betterDaysPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Training is Continuous Improvement preserved on purpose"
            subtitle="Skill growth, cross-shift transfer, and role-fit development belong inside the improvement structure."
            align="center"
          />
          <CapabilityGrid items={trainingPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="R.E.A.L. and self-sharpening intelligence"
            subtitle="Continuous Improvement is not only something A.I.R.O.N. helps plants do. It is something A.I.R.O.N. is built to do itself."
            align="center"
          />
          <CapabilityGrid items={realPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Safety, quality, and CI: the three habits industry keeps paying to teach"
            subtitle="A.I.R.O.N. matters beyond any one plant or one machine because it helps raise the industrial human standard safely and purposefully."
            align="center"
          />
          <CapabilityGrid items={workforcePoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Continuous Improvement looks like inside A.I.R.O.N."
            subtitle="This is how the philosophy becomes a living operating environment instead of a poster on the wall."
            align="center"
          />
          <CapabilityGrid items={ciLooksLikePoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              This is why Continuous Improvement is not one page among many. It
              is the philosophy that powers every page.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Baseline. Drift. Proof. Participation. Training. Memory. Better work."
      />

      <CTAFooterBand
        headline="We are Industry. Period."
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See SYSTEM-LIVE / PLAYER-LIVE",
          href: "/a-i-r-o-n/system-live-player-live",
        }}
        supportingLine="Continuous Improvement is the living discipline of seeing, remembering, learning, protecting, and improving without losing human dignity."
      />
    </SiteLayout>
  );
}
