import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import DiscoveryForm from "../../components/forms/DiscoveryForm";
import ContactBlock from "../../components/forms/ContactBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

/**
 * A.I.R.O.N. contact / discovery source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/contact.tsx
 *
 * Notes:
 * - Example page using shared layout and shared form/contact components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const relatedPages = [
  {
    title: "A.I.R.O.N. Home",
    href: "/a-i-r-o-n",
    description: "See the full system overview.",
  },
  {
    title: "Modules Overview",
    href: "/a-i-r-o-n/modules",
    description: "Choose the right module by problem.",
  },
  {
    title: "Furnace Doctor",
    href: "/a-i-r-o-n/furnace-doctor",
    description: "Start with hot-end truth.",
  },
  {
    title: "Fortune Teller",
    href: "/a-i-r-o-n/fortune-teller",
    description: "See the predictive layer.",
  },
  {
    title: "Dingfelder Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description: "Explore workforce activation and readiness.",
  },
  {
    title: "Industry. Period.",
    href: "/a-i-r-o-n/industry-period",
    description: "Read the strategic position.",
  },
];

export default function AIRONContactPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/contact" mainClassName="airon-contact-page">
      <HeroBlock
        eyebrow="Start the right conversation"
        title="Request a Discovery Conversation"
        subhead="Tell us what you are looking at, what is hurting, and where you want to begin."
        body={
          <>
            <p>
              Whether the issue is a furnace, a startup problem, a recurring
              drift, an abnormal-event concern, a workforce readiness gap, or a
              full-line architecture question, this page is the place to start.
            </p>
          </>
        }
        primaryCTA={{
          label: "Send Your Request",
          href: "#discovery-form",
        }}
        secondaryCTA={{
          label: "Contact Dingfelder Enterprises",
          href: "#direct-contact",
        }}
      >
        <div className="hero-image-placeholder">
          <span>Clean contact / discovery visual or restrained brand image goes here</span>
        </div>
      </HeroBlock>

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="What are you here to discuss?" />
          <p>
            Use this page to start the right conversation. You do not need a
            perfect technical description to begin.
          </p>

          <div className="intent-grid">
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="furnace-hot-end" />
              <span>Furnace / hot-end issue</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="startup-shutdown" />
              <span>Startup / shutdown issue</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="predictive-drift" />
              <span>Predictive maintenance / drift</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="memory-truth-history" />
              <span>Memory / truth / event history</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="safety-abnormal-event" />
              <span>Safety / abnormal-event architecture</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="workforce-campus-training" />
              <span>Workforce / campus / training</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="full-system-overview" />
              <span>Full-system overview</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="something-else" />
              <span>Something else</span>
            </label>
          </div>
        </div>
      </section>

      <DiscoveryForm />

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="What happens after you send this" />
          <ol className="numbered-list">
            <li>We review the request.</li>
            <li>We determine the best next conversation.</li>
            <li>
              We reply to schedule a discovery discussion or request a few useful details.
            </li>
            <li>
              If appropriate, we identify the best entry point: module review,
              machine estimate, architecture discussion, or scope-development conversation.
            </li>
          </ol>
          <p className="support-line">
            The goal is clarity first — not unnecessary friction.
          </p>
        </div>
      </section>

      <ContactBlock />

      <RelatedLinksBlock
        title="Need more context first?"
        items={relatedPages}
        supportingLine="You can explore the system first, then come back when you are ready."
      />

      <CTAFooterBand
        headline="Start where the problem is. Expand when the system is ready."
        primaryCTA={{
          label: "Request Discovery",
          href: "#discovery-form",
        }}
        secondaryCTA={{
          label: "Explore the Modules",
          href: "/a-i-r-o-n/modules",
        }}
      />
    </SiteLayout>
  );
}
