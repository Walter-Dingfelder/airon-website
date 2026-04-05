import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import HardPositionLines from "../../components/doctrine/HardPositionLines";

const protectedItems = [
  "Human life and responder safety",
  "Scene clarity under pressure",
  "Truth continuity when systems degrade",
  "Structured handoff between crews and responders",
  "Decision discipline during abnormal events",
  "Usable memory after the event instead of panic reconstruction",
];

const preservedTruthItems = [
  "Last Known Snapshot machine and process state",
  "Recent operating conditions leading into the event",
  "Relevant alarms, trips, and state transitions",
  "Hazard context and surviving live visibility where available",
  "Responder notes, checkpoints, and handoff context",
  "The event trail needed for memory, learning, and improvement afterward",
];

const capabilityItems = [
  "Preserve and surface bounded truth before and during an abnormal event",
  "Guide humans through structured action paths when normal control assumptions fail",
  "Separate urgent action from reckless action",
  "Support hold, withdraw, isolate, escalate, and communicate decisions",
  "Help continuity survive crew change, responder arrival, and degraded communications",
  "Create memory that can strengthen safety and doctrine after the event is over",
];

const supportItems = [
  "Notify customer-designated contacts when an abnormal condition demands escalation",
  "Support customer IT, engineering, maintenance, and leadership from the same preserved truth trail",
  "Work with existing vendors and manufacturers when their equipment is involved",
  "Enable remote support where authorized, while keeping scene command with the people on site",
  "Build fast local support paths where possible so the customer is not left waiting on confusion",
  "Keep the purpose where it belongs: protect people first and help keep the customer operating",
];

const withoutCatastrophe = [
  "Abnormal events fragment into calls, guesses, and partial memory",
  "The scene loses continuity as people arrive, leave, or inherit incomplete context",
  "Speed is confused with clarity",
  "The event must be reconstructed later from panic, politics, and missing truth",
];

const withCatastrophe = [
  "Human command stays centered while truth continuity stays intact",
  "Protected action paths help people move without blind improvisation",
  "Responder handoff improves because the event already has context",
  "The operation can learn from the event instead of only surviving it",
];

const hardLines = [
  "A tablet may show the system. It is not the system.",
  "Human life is the first priority and on-site command remains with the people at the scene.",
  "Knowledge Before Action. Truth Before Movement. People Before Everything.",
];

const relatedPages = [
  {
    title: "Safety / Tree of Knowledge",
    href: "/a-i-r-o-n/safety",
    description:
      "See the Experience / Truth / Memory doctrine that strengthens protection before, during, and after consequence.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how custody, context, recall, and IMP™ memory packets preserve usable truth.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description:
      "See how governed progression and proof-before-movement reduce risk before abnormal events begin.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start the next conversation about high-consequence protection and response continuity.",
  },
];

export default function CatastrophePage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/catastrophe"
      mainClassName="airon-module-page catastrophe-page"
    >
      <HeroBlock
        eyebrow="When normal control is no longer normal."
        title="C.A.T.A.S.T.R.O.P.H.E.™"
        supportingLine="Conditional Action Tree for Adapting Safe, Tactical, Responsible, Operational, Physical Human Engagement"
        subhead="Built for the abnormal event — when automation degrades, visibility collapses, consequence stays live, and human beings still have to act."
        body={
          <>
            <p>
              C.A.T.A.S.T.R.O.P.H.E.™ is the abnormal-event human protection layer inside
              A.I.R.O.N.
            </p>
            <p>
              It is not built for normal production comfort. It is built for the hard
              moment when communications fail, assumptions break, automation can no
              longer be trusted, and people are still standing in the middle of
              consequence.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start a Safety / Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Pages",
          href: "#related-pages",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>First priority</h3>
            <p>
              Protect people, preserve scene clarity, and keep action governed when the
              normal operating model breaks.
            </p>
          </div>
          <div className="comparison-card">
            <h3>What survives</h3>
            <p>
              Truth continuity, responder handoff, and usable memory after the event —
              not just alarm noise and hindsight.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="A decision doctrine, not an alarm"
        paragraphs={[
          "C.A.T.A.S.T.R.O.P.H.E.™ is for the moment normal control assumptions have become unsafe or incomplete, but consequence is still active.",
          "Its first job is not productivity. Its first job is protection — structured human protection under abnormal conditions.",
          "That is why it belongs inside A.I.R.O.N. itself rather than as a disconnected afterthought.",
        ]}
      />

      <ContrastBlock
        title="Not another emergency gadget"
        leftTitle="C.A.T.A.S.T.R.O.P.H.E.™ is not"
        leftItems={[
          "A generic safety app",
          "A replacement for trained responders",
          "A command system that overrules the people on site",
          "An excuse to remove human judgment",
        ]}
        rightTitle="C.A.T.A.S.T.R.O.P.H.E.™ is"
        rightItems={[
          "A native abnormal-event doctrine inside A.I.R.O.N.",
          "A structure for protected human action under pressure",
          "A continuity layer for truth, handoff, and memory",
          "A serious response system for moments when normal automation cannot be trusted",
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What C.A.T.A.S.T.R.O.P.H.E.™ protects"
            subtitle="Before the event is over, after the plant goes dark, and during the handoff in between."
            align="center"
          />
          <CapabilityGrid items={protectedItems} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Native to the system, not bolted onto the scene"
        paragraphs={[
          "C.A.T.A.S.T.R.O.P.H.E.™ is not defined by the device displaying it. A rugged tablet may show the doctrine, but the tablet is not the doctrine.",
          "Because it lives inside A.I.R.O.N., event recognition, escalation, preserved truth, and continuity can stay tied to the same operational nervous system instead of scattering across separate tools and partial memories.",
          "That matters most when people need structure immediately and cannot afford to invent it in the middle of consequence.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What must still be preserved when visibility collapses"
            subtitle="If the plant goes dark, truth still matters."
            align="center"
          />
          <CapabilityGrid items={preservedTruthItems} compact />
          <p className="support-line center">
            Last Known Snapshot logic helps preserve the bounded truth leading into and
            through the abnormal event so people are not forced to rebuild reality from
            panic after the fact.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What it can do"
            subtitle="Protect action quality when uncertainty and consequence arrive together."
            align="center"
          />
          <CapabilityGrid items={capabilityItems} compact />
        </div>
      </section>

      <TextIntroBlock
        eyebrow="Human life first. Always."
        title="Human sovereignty remains at the scene"
        paragraphs={[
          "During abnormal events, on-site command remains with the people at the scene. C.A.T.A.S.T.R.O.P.H.E.™ exists to support judgment under pressure, not replace it.",
          "Remote participation is supportive only. It can strengthen clarity, continuity, and coordination where authorized, but it must never erase human sovereignty from the event.",
          "The point is not speed without understanding. The point is protected action with enough truth to move responsibly.",
        ]}
        sectionClassName="section"
      />

      <ContrastBlock
        title="Abnormal-event difference"
        leftTitle="Without structured abnormal-event doctrine"
        leftItems={withoutCatastrophe}
        rightTitle="With C.A.T.A.S.T.R.O.P.H.E.™"
        rightItems={withCatastrophe}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="How support stays responsible"
            subtitle="Serious support without stealing the scene."
            align="center"
          />
          <CapabilityGrid items={supportItems} compact />
        </div>
      </section>

      <TextIntroBlock
        eyebrow="Experience. Truth. Memory."
        title="The Tree of Knowledge strengthens what comes after"
        paragraphs={[
          "C.A.T.A.S.T.R.O.P.H.E.™ does not end when the scene stabilizes. The event still has to be remembered, rooted, learned from, and converted into stronger future protection.",
          "That is where the Tree of Knowledge matters. Experience, Truth, and Memory turn consequence into preserved learning instead of one more story that fades with turnover.",
          "When the system can remember clearly, safety doctrine becomes stronger, startup becomes safer, and abnormal events stop teaching the same lesson over and over again.",
        ]}
        sectionClassName="section section-alt"
      />

      <HardPositionLines title="Hard position lines" lines={hardLines} sectionClassName="section" />

      <div id="related-pages">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. pages"
          items={relatedPages}
          supportingLine="Start with the protection layer where consequence is highest. Then move into doctrine, memory, and governed operating structure."
        />
      </div>

      <CTAFooterBand
        headline="Protect the people before the system has to explain itself later."
        primaryCTA={{
          label: "Start a Safety / Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Safety Doctrine",
          href: "/a-i-r-o-n/safety",
        }}
        supportingLine="Knowledge Before Action. Truth Before Movement. People Before Everything."
      />
    </SiteLayout>
  );
}
