import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const protectedItems = [
  "Human life and on-scene judgment",
  "Scene clarity under abnormal conditions",
  "Repair safety during breakdown recovery",
  "Continuity of truth from failure into repair",
  "Responder and technician handoff",
  "Usable institutional memory after the event",
];

const twoRoles = [
  "Protect people and preserve truth during abnormal events",
  "Guide safe, correct, and expeditious repairs during machine and process breakdowns",
];

const capabilities = [
  "Preserve and surface Last Known Snapshot truth",
  "Guide humans through abnormal-event decision paths when normal automation can no longer be trusted",
  "Surface relevant SOPs, documentation, CMMS records, and historical data from V.A.U.L.T.®",
  "Lead operators and technicians through structured recovery and repair steps",
  "Support safe, correct, and expeditious repair execution instead of improvised scrambling",
  "Document the instance and the repair process for later review and continuous improvement",
  "Help turn repeated troubleshooting into stronger sequential repair knowledge over time",
  "Protect people first while still helping the plant recover with discipline",
];

const repairWorkflow = [
  "Identify the abnormal condition and preserve bounded truth immediately",
  "Stabilize the scene and confirm human safety before repair activity begins",
  "Surface the correct procedures, history, and asset-specific documents from V.A.U.L.T.®",
  "Guide operators and technicians through the safest correct repair path available",
  "Record what was found, what was done, what changed, and what actually restored operation",
  "Use that record to improve future troubleshooting and repair sequencing",
];

const humanPriorityItems = [
  "Human safety is the first priority",
  "On-site command remains with the people at the scene",
  "Remote participation is supportive only",
  "Speed matters, but not at the expense of safe and correct action",
];

const relatedPages = [
  {
    title: "Safety / Tree of Knowledge",
    href: "/a-i-r-o-n/safety",
    description: "See the Experience / Truth / Memory doctrine behind safer action under pressure.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description: "See how custody, context, recall, and institutional memory strengthen repair and recovery.",
  },
  {
    title: "Better Days",
    href: "/a-i-r-o-n/better-days",
    description: "See how captured reality becomes routed improvement instead of another forgotten problem.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start a discovery conversation about abnormal-event protection and guided recovery.",
  },
];

export default function AIRONCatastrophePage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/catastrophe" mainClassName="airon-module-page catastrophe-page">
      <HeroBlock
        eyebrow="Abnormal-event protection and guided recovery"
        title="C.A.T.A.S.T.R.O.P.H.E.™"
        supportingLine="Conditional Action Tree — Adapting Safe, Tactical, Responsible, Operational, Physical Human Engagement"
        subhead="A.I.R.O.N. redefines the word C.A.T.A.S.T.R.O.P.H.E. — from abnormal-event protection to disciplined repair guidance when the plant is down and the truth still matters."
        body={
          <>
            <p>
              C.A.T.A.S.T.R.O.P.H.E. is the abnormal-event protection and guided-recovery doctrine inside A.I.R.O.N.
            </p>
            <p>
              It protects people when systems degrade, communications fail, or automation can no longer be trusted. It also leads operators and technicians through safe, correct, and expeditious repairs using the preserved truth of the event and the stored knowledge already held inside V.A.U.L.T.®.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start a Safety / Recovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Pages",
          href: "#related-pages",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>When the event is live</h3>
            <p>
              Protect human beings, preserve truth, structure decision-making,
              and support the scene without pretending normal systems are still trustworthy.
            </p>
          </div>
          <div className="comparison-card">
            <h3>When repair begins</h3>
            <p>
              Guide safe, correct, and expeditious recovery using SOPs, documentation,
              CMMS history, and what the system already knows about this machine and this failure.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Two roles. One doctrine."
        paragraphs={[
          "C.A.T.A.S.T.R.O.P.H.E. is not only for the human-safety side of a high-consequence event. It also serves during breakdown recovery, when people need safe guidance, accurate history, and structured repair logic instead of panic and guesswork.",
          "That matters because a plant can be shut down by something as small as a three-dollar bearing. In that moment, the word catastrophe is not only about flames and sirens. It is also about whether the operation can recover safely, correctly, and fast enough to matter.",
          "A.I.R.O.N. redefines the word C.A.T.A.S.T.R.O.P.H.E. by treating abnormal events and repair recovery as part of the same truth-continuity problem.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>C.A.T.A.S.T.R.O.P.H.E. is not:</h3>
            <ul>
              <li>A detached tablet product</li>
              <li>A replacement for human judgment</li>
              <li>A replacement for emergency services</li>
              <li>Paperwork that starts only after the damage is done</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What C.A.T.A.S.T.R.O.P.H.E. protects"
            subtitle="People first, but not people only."
            align="center"
          />
          <CapabilityGrid items={protectedItems} compact />

          <SectionHeading
            title="Its two operating roles"
            subtitle="Protection during the event. Structured guidance during the recovery."
            align="center"
          />
          <CapabilityGrid items={twoRoles} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What it can do"
            subtitle="Not just hold the line during consequence, but help restore the operation with discipline."
            align="center"
          />
          <CapabilityGrid items={capabilities} />
        </div>
      </section>

      <TextIntroBlock
        title="Not an add-on. A native doctrine."
        paragraphs={[
          "C.A.T.A.S.T.R.O.P.H.E. is native to A.I.R.O.N. That means abnormal-event recognition, record creation, recovery guidance, and continuity all belong to the system itself.",
          "It does not begin after the event. It begins when the truth begins to break loose, and it remains useful until the repair is complete and the learning has been captured.",
          "Endpoints may display the doctrine. They do not define its authority.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>A tablet may show the system. It is not the system.</strong>
            </p>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="When live visibility collapses, truth still matters"
        paragraphs={[
          "C.A.T.A.S.T.R.O.P.H.E. uses Last Known Snapshot logic to preserve the rolling bounded truth leading up to and through an abnormal event.",
          "That includes equipment state, recent operating history, hazard context, surviving live state where available, and the conditions leading into the breakdown.",
          "If the plant goes dark, humans still need structured truth — and if the plant is down for repair, technicians still need that same truth carried forward into the work.",
        ]}
        sectionClassName="section"
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Guided repair with access to V.A.U.L.T.®"
            subtitle="The system should not ask people to recover blind."
            align="center"
          />
          <div className="doctrine-block">
            <p>
              During a breakdown, C.A.T.A.S.T.R.O.P.H.E. can reach into V.A.U.L.T.® for stored SOPs,
              documentation, CMMS records, historical data, prior troubleshooting outcomes, and other
              machine-specific knowledge needed to support safe and correct repair.
            </p>
            <p>
              That means the operator or technician is not starting from memory fragments, old printouts,
              or hallway folklore. They are starting from preserved system truth and governed institutional memory.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="From breakdown to better repair"
            subtitle="The instance should not disappear the moment the machine runs again."
            align="center"
          />
          <CapabilityGrid items={repairWorkflow} compact />
          <p className="support-line center">
            A.I.R.O.N. can document the breakdown and the repair process for review, so proper sequential
            instructions keep improving instead of forcing the next technician to rediscover the same path.
          </p>
        </div>
      </section>

      <TextIntroBlock
        eyebrow="Experience. Truth. Memory."
        title="The Tree of Knowledge is the growth doctrine behind the system"
        paragraphs={[
          "The Tree of Knowledge helps the system preserve real event history, root real-world failures permanently, improve through structured memory, and grow safer and smarter through lived consequence instead of repeating it.",
          "That same doctrine is what allows C.A.T.A.S.T.R.O.P.H.E. to improve repairs and troubleshooting over time rather than merely record damage after the fact.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="cta-row">
            <a className="btn btn-secondary" href="/a-i-r-o-n/safety">
              See the Safety Doctrine
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Human life first. Always." align="center" />
          <CapabilityGrid items={humanPriorityItems} compact />
          <p className="center narrow-text">
            C.A.T.A.S.T.R.O.P.H.E. exists to protect judgment under pressure and guide recovery under consequence,
            not replace the people responsible for the scene.
          </p>

          <div className="two-col top-gap">
            <div className="contrast-card">
              <h3>It does not:</h3>
              <ul>
                <li>Command the scene autonomously</li>
                <li>Replace trained responders</li>
                <li>Replace emergency services</li>
                <li>Remove human sovereignty from the event or the repair</li>
              </ul>
            </div>

            <div className="callout-card">
              <p>
                During abnormal events and during repair recovery, on-site human beings remain the authority.
                The system exists to strengthen truth, structure, and judgment around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="related-pages">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. pages"
          items={relatedPages}
          supportingLine="Start with protection where consequence is highest. Expand into memory, institutional knowledge, and routed improvement as the system matures."
        />
      </div>

      <CTAFooterBand
        headline="Protect the people. Preserve the truth. Recover the plant the right way."
        primaryCTA={{
          label: "Start a Safety / Recovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See V.A.U.L.T.®",
          href: "/a-i-r-o-n/vault",
        }}
        supportingLine="Knowledge before action. Truth before movement. People before everything."
      />
    </SiteLayout>
  );
}
