import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const contributionPoints = [
  "Improvement ideas",
  "Safety concerns",
  "Reliability suggestions",
  "Photo-supported observations",
  "Front-line process insight",
  "Signals worth preserving before they disappear",
];

const processPoints = [
  "Capture the signal",
  "Route it to the right department or response path",
  "Review it in the right context",
  "Prove what works",
  "Preserve what matters in V.A.U.L.T.",
  "Turn approved lessons into usable training and guidance",
];

const audiencePoints = [
  "Operators",
  "Mechanics",
  "Maintenance personnel",
  "Engineering",
  "Supervisors",
  "Reliability teams",
  "Plant leadership",
  "Trainees who see something worth preserving",
  "Anyone carrying a legitimate improvement, safety, or reliability signal",
];

const dignityPoints = [
  "Let people contribute truth without forcing them to become somebody else first",
  "Protect signal quality by protecting human dignity",
  "Do not let good information die in hallway conversations",
  "Do not let useful truth depend on title or volume",
  "Give front-line insight a real path into the system",
  "Turn respect into usable operational signal quality",
];

const memoryPoints = [
  "Approved Better Days inputs can be preserved in V.A.U.L.T.",
  "Useful lessons can become future training content",
  "Participation becomes part of the system instead of a side activity",
  "A good idea becomes more than a moment",
  "A saved lesson becomes more than a story",
  "A proven change becomes part of the operating memory",
];

const protectAgainstPoints = [
  "Lost front-line observations",
  "Practical safety warnings that never reached the right ears",
  "Repeatable fixes trapped inside one shift",
  "Small ideas that prevent larger failures",
  "Photo-supported field truth that disappears",
  "Knowledge that dies when the person goes home",
];

const relatedPages = [
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See Better Days in its proper place as a human front door into the A.I.R.O.N. CI spine.",
  },
  {
    title: "V.A.U.L.T.",
    href: "/a-i-r-o-n/vault",
    description:
      "See how preserved ideas, proof, and lessons become part of long-term system memory.",
  },
  {
    title: "Training",
    href: "https://training.dingfelder.co/",
    description:
      "See how approved lessons can become structured training instead of accidental learning.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start a conversation about contribution capture, routing, CI structure, and real participation.",
  },
];

export default function BetterDaysPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/better-days"
      mainClassName="airon-better-days-page"
    >
      <HeroBlock
        eyebrow="Continuous Improvement with a front door."
        title="BETTER DAYS"
        supportingLine="Where people enter the system."
        subhead="Better Days is how A.I.R.O.N. turns front-line insight into real, structured improvement."
        body={
          <>
            <p>
              It is not a forgotten suggestion box. It is not a complaint bin.
              It is not a place where good ideas go to die.
            </p>
            <p>
              Better Days is a governed contribution path where operators,
              mechanics, engineering, maintenance, leadership, and other plant
              personnel can submit improvement ideas, safety concerns,
              reliability observations, and photo-supported findings in a way
              that can actually be routed, reviewed, preserved, and used.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore Continuous Improvement",
          href: "/a-i-r-o-n/continuous-improvement",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Capture</h3>
            <p>
              Give useful truth a real entry point before it disappears into
              memory, frustration, or hallway conversation.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Preserve</h3>
            <p>
              Route what matters, prove what works, and carry lessons forward
              into V.A.U.L.T. and training.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What Better Days means"
        paragraphs={[
          "Better Days is one of the clearest expressions of A.I.R.O.N. Continuous Improvement because it gives people a real entry point into the system.",
          "Continuous Improvement fails when only a few voices have a path into it. Better Days is where the live feedback loop becomes humanly usable.",
          "This is where improvement stops being something discussed around people and starts becoming something built with them.",
        ]}
        sectionClassName="section section-alt"
      />

      <TextIntroBlock
        title="Why plants need a front door for improvement"
        paragraphs={[
          "Most plants already contain more intelligence than their systems know how to use. The operator sees the drift first. The mechanic hears the change first. Maintenance notices the pattern first. Engineering often sees the structural cause. Leadership sees the operational cost.",
          "But without a real front door, those signals scatter. Some become hallway conversations. Some become frustration. Some become tribal knowledge. Some disappear when the shift changes.",
          "Better Days exists so those signals have somewhere to go before they are lost.",
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Not a suggestion box. A governed contribution engine."
            subtitle="Better Days is structured, trackable, preservable, and meant to move."
            align="center"
          />
          <CapabilityGrid items={contributionPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="How Better Days works"
            subtitle="Capture. Route. Review. Prove. Preserve. Teach."
            align="center"
          />
          <CapabilityGrid items={processPoints} compact />
          <p className="support-line center">
            Better Days belongs inside A.I.R.O.N. because it is part of the
            larger Continuous Improvement loop, not a side program.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Who Better Days is for"
            subtitle="Good ideas do not always arrive from titles."
            align="center"
          />
          <CapabilityGrid items={audiencePoints} compact />
          <p className="support-line center">
            Sometimes the best signal in the plant comes from the person who had
            to live with the problem most directly. Better Days gives that
            signal dignity.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Better Days and human dignity"
            subtitle="This is not softness. This is signal preservation."
            align="center"
          />
          <CapabilityGrid items={dignityPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Better Days, V.A.U.L.T., and memory"
            subtitle="A contribution only matters long-term if it can be found again."
            align="center"
          />
          <CapabilityGrid items={memoryPoints} compact />
          <p className="support-line center">
            A good idea is no longer just a moment. A saved lesson is no longer
            just a story. A proven change becomes part of the system.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="Better Days and training"
        paragraphs={[
          "Better Days is also a training engine in disguise. When a contribution reveals a better method, a safer sequence, a cleaner inspection path, or a smarter recovery step, that lesson can become training material for the next person.",
          "That is one of the most powerful A.I.R.O.N. ideas: the person doing the work today can quietly improve the readiness of the person doing the work tomorrow.",
          "That is Continuous Improvement preserved on purpose.",
        ]}
        sectionClassName="section section-alt"
      />

      <TextIntroBlock
        title="Better Days and real CI"
        paragraphs={[
          "Better Days is where Continuous Improvement becomes visible — not as a slogan, not as a monthly meeting, and not as a management program.",
          "It is a living path where people can improve the operation without waiting for the perfect committee, the perfect title, or the perfect moment.",
          "That is why Better Days belongs under Continuous Improvement, not off to the side.",
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Better Days protects against"
            subtitle="Without a system like this, plants lose signals they can never fully get back."
            align="center"
          />
          <CapabilityGrid items={protectAgainstPoints} compact />
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Participation. Routing. Proof. Preservation. Better work tomorrow."
      />

      <CTAFooterBand
        headline="We are Industry. Period."
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "View Continuous Improvement",
          href: "/a-i-r-o-n/continuous-improvement",
        }}
        supportingLine="Better Days is about honoring useful truth early enough to act on it."
      />
    </SiteLayout>
  );
}
