import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

/**
 * A.I.R.O.N. C.A.T.A.S.T.R.O.P.H.E. source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/catastrophe.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const protectedItems = [
  "Human life",
  "Scene clarity",
  "Decision structure",
  "Continuity of truth",
  "Responder handoff",
  "Usable memory after the event",
];

const capabilities = [
  "Preserve and surface Last Known Snapshot truth",
  "Guide humans through abnormal-event decision paths",
  "Separate urgent action from reckless action",
  "Support responder handoff with preserved context",
  "Provide structured prompts when communication and automation degrade",
  "Help keep people safe when normal systems cannot be trusted",
];

const humanPriorityItems = [
  "Human safety is the first priority",
  "On-site command remains with the people at the scene",
  "Remote participation is supportive only",
  "Clarity matters more than speed without understanding",
];

const relatedPages = [
  {
    title: "Safety / Tree of Knowledge",
    href: "/a-i-r-o-n/safety",
    description: "Safety doctrine and Experience / Truth / Memory.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description: "Truth retention and continuity.",
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

export default function AIRONCatastrophePageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/catastrophe" mainClassName="airon-module-page catastrophe-page">
      <HeroBlock
        eyebrow="Abnormal-event human protection"
        title="C.A.T.A.S.T.R.O.P.H.E.™"
        supportingLine="Conditional Action Tree — Adapting Safe, Tactical, Responsible, Operational, Physical Human Engagement"
        subhead="When everything else goes silent, protect your people."
        body={
          <>
            <p>
              C.A.T.A.S.T.R.O.P.H.E. is the abnormal-event human protection
              layer inside A.I.R.O.N.
            </p>
            <p>
              It is built for the moment when systems degrade, communications
              fail, automation can no longer be trusted, and humans are still
              standing in the middle of consequence.
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
        <div className="hero-image-placeholder">
          <span>Approved rugged emergency tablet / serious safety image goes here</span>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="A decision system, not an alarm"
        paragraphs={[
          "C.A.T.A.S.T.R.O.P.H.E. is built for the moment when normal systems are degraded or gone, but consequence remains live.",
          "It is a native doctrine inside A.I.R.O.N. for high-consequence abnormal events. Its first job is not productivity. Its first job is protection.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>C.A.T.A.S.T.R.O.P.H.E. is not:</h3>
            <ul>
              <li>A bolt-on app</li>
              <li>A detached tablet product</li>
              <li>A replacement for human judgment</li>
              <li>A replacement for emergency services</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What C.A.T.A.S.T.R.O.P.H.E. protects" />
          <CapabilityGrid items={protectedItems} compact />

          <SectionHeading title="What it can do" />
          <CapabilityGrid items={capabilities} />
        </div>
      </section>

      <TextIntroBlock
        title="Not an add-on. A native doctrine."
        paragraphs={[
          "C.A.T.A.S.T.R.O.P.H.E. is native to A.I.R.O.N.",
          "That means incident recognition, escalation, record creation, and continuity belong to the system itself.",
          "Endpoints may display the doctrine. They do not define its authority.",
        ]}
        sectionClassName="section"
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
          "That means it can help retain equipment state, recent operating history, hazard context, surviving live state where available, and the conditions leading into the event.",
          "If the plant goes dark, humans still need structured truth — not reconstruction by panic.",
        ]}
        sectionClassName="section section-alt"
      />

      <TextIntroBlock
        eyebrow="Experience. Truth. Memory."
        title="The Tree of Knowledge is the growth doctrine behind the system"
        paragraphs={[
          "The Tree of Knowledge helps the system preserve real event history, root real-world events permanently, improve through structured memory, and grow safer through lived consequence instead of repeating it.",
        ]}
        sectionClassName="section"
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
          <SectionHeading title="Human life first. Always." />
          <CapabilityGrid items={humanPriorityItems} compact />
          <p className="center narrow-text">
            C.A.T.A.S.T.R.O.P.H.E. exists to protect judgment under pressure,
            not replace it.
          </p>

          <div className="two-col top-gap">
            <div className="contrast-card">
              <h3>It does not:</h3>
              <ul>
                <li>Command the scene autonomously</li>
                <li>Replace trained responders</li>
                <li>Replace emergency services</li>
                <li>Remove human sovereignty from the event</li>
              </ul>
            </div>

            <div className="callout-card">
              <p>
                During abnormal events, human life is the first priority and
                on-site command remains with the people at the scene.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="related-pages">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. pages"
          items={relatedPages}
          supportingLine="Start with protection where consequence is highest. Expand into memory, doctrine, and system architecture when the path is clear."
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
