import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const preservePoints = [
  "Operational truth",
  "Baseline memory",
  "Drift signatures",
  "Root-cause evidence",
  "Startup and shutdown history",
  "Learned event patterns",
  "Operator-confirmed lessons",
  "Institutional memory packets",
  "Decision timing and outcomes",
];

const memoryWeightPoints = [
  "Weighted memory",
  "Baseline memory",
  "Institutional memory",
  "Context-based recall",
  "Good days do not get erased by one bad abnormality",
  "Useful history appears when it actually matters",
];

const retentionPoints = [
  "Instant Memory for live high-resolution operational data",
  "Functional Memory for shift-scale patterns and action timing",
  "Knowledge Memory for reusable signatures, risk history, and validated outcomes",
  "Institutional Memory for long-term learning and culture retention",
  "Archive what compounds in value, not just whatever was easy to store",
  "Separate what is transient from what becomes wisdom",
];

const impPoints = [
  "Searchable",
  "Verifiable",
  "Machine-readable",
  "Human-teachable",
  "Permanently accessible through V.A.U.L.T.",
  "Prepared for reuse instead of trapped in raw history",
];

const faultLibraryPoints = [
  "Plain-language repair guidance instead of cryptic fault strings",
  "Historical documents, engineering notes, and OEM references brought forward when needed",
  "Context narrowed by confirmed signals and operating patterns",
  "Live support for technicians when the plant needs help right now",
  "The most relevant lived history appears when today starts to resemble a known problem",
  "The system brings memory to the work instead of making people hunt for it",
];

const trustPoints = [
  "Protected custody of important records",
  "History preserved the way it actually happened",
  "Records available through failure and recovery",
  "Not surveillance",
  "Not unchecked control over records",
  "Not rewriting the story after the fact",
];

const loopPoints = [
  "Better Days captures the signal",
  "V.A.U.L.T. preserves the truth",
  "Training teaches the lesson",
  "Fault Library helps recover from what the system has seen before",
  "Useful knowledge compounds instead of disappearing with shift change",
  "The next associate learns it on purpose instead of by accident",
];

const capabilityPoints = [
  "Preserve accurate records through failure and recovery",
  "Keep history intact for learning and prevention",
  "Support honest review without reconstruction or guesswork",
  "Protect evidence-grade records and continuity of context",
  "Surface the right memory at the right time",
  "Turn lived experience into reusable operating intelligence",
];

const relatedPages = [
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See why preserved truth and retained learning are part of the A.I.R.O.N. operating spine.",
  },
  {
    title: "Better Days",
    href: "/a-i-r-o-n/better-days",
    description:
      "See how front-line insight becomes preserved, routed, and reusable instead of disappearing.",
  },
  {
    title: "Training",
    href: "https://training.dingfelder.co/",
    description:
      "See how approved lessons can become structured training instead of accidental relearning.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start a conversation about memory architecture, preserved lessons, and fault library structure.",
  },
];

export default function VaultPage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/vault" mainClassName="airon-vault-page">
      <HeroBlock
        eyebrow="Truth stored. Memory preserved. Lessons never lost."
        title="V.A.U.L.T.®"
        supportingLine="If it mattered once, it should still matter later."
        subhead="V.A.U.L.T. is A.I.R.O.N.'s protected memory layer for truth, history, context, and recoverable lessons."
        body={
          <>
            <p>
              It preserves what the process showed, what the system learned, and
              how humans responded — not as a dead archive, but as usable
              memory.
            </p>
            <p>
              V.A.U.L.T. is where A.I.R.O.N. stops merely reacting and starts
              carrying hard-earned truth forward across shifts, years, people,
              and decisions.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Memory Architecture Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "/a-i-r-o-n/modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Custody</h3>
            <p>
              Protected records, honest preservation, and truth that is not
              quietly rewritten after the fact.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Recall</h3>
            <p>
              The right lesson, signal, and repair history brought back when it
              actually matters instead of buried in storage.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What V.A.U.L.T. is"
        paragraphs={[
          "V.A.U.L.T. is memory with custody, context, and recall.",
          "It is not surveillance. It is not a dead archive. It is not endless raw telemetry. It is not memory without structure.",
          "It is protected, structured memory designed to help plants stop losing what they already paid to learn.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What V.A.U.L.T. preserves"
            subtitle="The kinds of truth plants usually lose first should be the easiest truths to find again."
            align="center"
          />
          <CapabilityGrid items={preservePoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Not every memory should weigh the same"
            subtitle="Raw storage becomes clutter when everything is treated as equally important."
            align="center"
          />
          <CapabilityGrid items={memoryWeightPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Data retention, archival value, and structured memory"
            subtitle="V.A.U.L.T. is not built to hoard raw data forever. It is built to keep what grows in value."
            align="center"
          />
          <CapabilityGrid items={retentionPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="IMP™: Institutional Memory Packets"
            subtitle="Not just notes. Not just logs. History prepared for reuse."
            align="center"
          />
          <CapabilityGrid items={impPoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              What one operator heard, what another confirmed, what maintenance
              fixed, what A.I.R.O.N. proved — and what the operation never
              forgot — can all be preserved as reusable institutional memory.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Fault Library and Institutional Memory Viewer"
            subtitle="V.A.U.L.T. becomes most valuable when the plant needs help right now, not when someone is leisurely browsing old records."
            align="center"
          />
          <CapabilityGrid items={faultLibraryPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why V.A.U.L.T. matters"
        paragraphs={[
          "Plants do not only lose production. They lose memory.",
          "When people rotate, retire, transfer, or leave, hard-earned pattern recognition can disappear with them.",
          "V.A.U.L.T. keeps the lessons that cost too much to relearn and makes them available again when today starts to look like a day the system has seen before.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Custody, trust, and honest records"
            subtitle="Truth has to survive long enough to become useful."
            align="center"
          />
          <CapabilityGrid items={trustPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="V.A.U.L.T., Better Days, and Training"
            subtitle="This is where participation turns into durable value."
            align="center"
          />
          <CapabilityGrid items={loopPoints} compact />
          <p className="support-line center">
            Better Days captures the signal. V.A.U.L.T. preserves the truth.
            Training teaches the lesson. The next associate learns it on
            purpose instead of by accident on a bad day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What V.A.U.L.T. can do"
            subtitle="Protected, structured memory with custody, context, and recall."
            align="center"
          />
          <CapabilityGrid items={capabilityPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Position statement"
        paragraphs={[
          "V.A.U.L.T. is not surveillance, and it is not a dead archive.",
          "It is protected, structured memory with custody, context, and recall — built so truth lasts and useful knowledge compounds.",
          "Data remembers. V.A.U.L.T. learns.",
        ]}
        sectionClassName="section section-alt"
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Truth. Custody. Context. Recall. Better work tomorrow."
      />

      <CTAFooterBand
        headline="Data remembers. V.A.U.L.T. learns."
        primaryCTA={{
          label: "Request a Memory Architecture Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore Continuous Improvement",
          href: "/a-i-r-o-n/continuous-improvement",
        }}
        supportingLine="If it mattered once, it should still matter later."
      />
    </SiteLayout>
  );
}
