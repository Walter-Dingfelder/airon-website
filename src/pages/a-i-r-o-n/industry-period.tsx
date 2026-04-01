import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import ContrastBlock from "../../components/core/ContrastBlock";
import HardPositionLines from "../../components/doctrine/HardPositionLines";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

/**
 * A.I.R.O.N. Industry. Period. source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/industry-period.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core/doctrine components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const notThis = [
  "Dashboard theater",
  "AI wallpaper",
  "Buzzword automation",
  "Fake digital transformation",
  "Modern branding covering weak structure",
];

const thisIs = [
  "Real truth capture",
  "Governed change",
  "System memory",
  "Drift detection",
  "Predictive timing",
  "Human protection",
  "Industrial continuity",
];

const weakPlant = [
  "Weak memory",
  "Stale standards",
  "Tribal startup",
  "Political truth",
  "Fragile handoffs",
  "No continuity of learning",
];

const strongPlant = [
  "Remembers",
  "Preserves proof",
  "Captures reality in motion",
  "Protects people under uncertainty",
  "Makes improvement persistent",
];

const doctrineLines = [
  "Automation without memory is still blind.",
  "Truth filtered through people becomes politics. Truth anchored to evidence becomes continuity.",
  "Industry is not a version number. It is a system that can remember, protect, and improve.",
];

const relatedPages = [
  {
    title: "A.I.R.O.N. Home",
    href: "/a-i-r-o-n",
    description: "See the full system overview.",
  },
  {
    title: "Modules Overview",
    href: "/a-i-r-o-n/modules",
    description: "See the specialist layers under the system.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description: "See predictive timing in action.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description: "See memory and continuity infrastructure.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start the next conversation.",
  },
];

export default function AIRONIndustryPeriodPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/industry-period" mainClassName="airon-positioning-page industry-period-page">
      <HeroBlock
        eyebrow="Throw away the number."
        title="Industry. Period."
        subhead="Stop chasing version numbers. Build memory, structure, truth, and continuity."
        body={
          <>
            <p>
              What matters is not whether someone calls your plant 4.0, 5.0, or 6.0.
            </p>
            <p>
              What matters is whether it can stay safe, hold truth, preserve
              memory, protect continuity, improve without forgetting, and keep
              working when people, priorities, and conditions change.
            </p>
          </>
        }
        primaryCTA={{
          label: "See the A.I.R.O.N. System",
          href: "/a-i-r-o-n",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
      >
        <div className="hero-image-placeholder">
          <span>Restrained A.I.R.O.N. brand image or executive-safe industrial visual goes here</span>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Structure matters more than slogans"
        paragraphs={[
          "Industry is not advanced because it bought new hardware.",
          "It is advanced when it can sense reality while it is happening, hold the baseline, detect drift early, preserve hard-won learning, guide humans during change, and improve without depending on luck, heroes, or politics.",
          "That is why A.I.R.O.N. matters.",
        ]}
      />

      <ContrastBlock
        title="Not digital theater"
        leftTitle="This is not"
        leftItems={notThis}
        rightTitle="This is"
        rightItems={thisIs}
      />

      <ContrastBlock
        title="The number is marketing. The structure is what survives."
        leftTitle="A plant with weak structure"
        leftItems={weakPlant}
        rightTitle="A plant moving in the right direction"
        rightItems={strongPlant}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <p className="support-line center">
            A plant with weak memory, stale standards, tribal startup, political truth,
            fragile handoffs, and no continuity of learning is not advanced because it
            bought new software.
          </p>
          <p className="support-line center">
            A plant that remembers, preserves proof, captures reality in motion,
            protects people under uncertainty, and makes improvement persistent is
            already moving correctly whether anyone calls it 4.0, 5.0, 6.0, or nothing at all.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="A persistent operational nervous system"
        paragraphs={[
          "A.I.R.O.N. turns sensors into nerves, data into memory, memory into continuity, drift into action, and expertise into something the plant can keep.",
          "That is the real shift. Not a number. A capability.",
        ]}
        sectionClassName="section section-alt"
      />

      <TextIntroBlock
        title="More advanced does not mean less human"
        paragraphs={[
          "Industry does not become more advanced by removing the human.",
          "It becomes more advanced by removing the burdens that crush the human: carrying all the memory, spotting every drift manually, defending truth through politics, and relearning the same lessons after every turnover.",
          "A.I.R.O.N. carries what the machine should carry so people can do what only people can do: think, judge, lead, teach, and improve.",
        ]}
        sectionClassName="section"
      />

      <HardPositionLines
        title="Hard position lines"
        lines={doctrineLines}
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with the position. Then move into the system, the modules, or the next conversation."
      />

      <CTAFooterBand
        headline="Build the capability. Forget the hype."
        primaryCTA={{
          label: "See the A.I.R.O.N. System",
          href: "/a-i-r-o-n",
        }}
        secondaryCTA={{
          label: "Explore the Modules",
          href: "/a-i-r-o-n/modules",
        }}
        supportingLine="Industry. Period."
      />
    </SiteLayout>
  );
}
