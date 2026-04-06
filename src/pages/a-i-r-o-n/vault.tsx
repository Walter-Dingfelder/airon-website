import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const preservePoints = [
  "Operational truth captured the way it actually happened",
  "Baseline memory, drift signatures, and verified outcomes",
  "Root-cause evidence that survives failure and recovery",
  "Decision timing, intervention timing, and action history",
  "Operator-confirmed lessons and technician-confirmed fixes",
  "Training packets, OEM manuals, drawings, and technical references",
  "IMP™ institutional memory packets prepared for reuse",
  "Historical context that can be surfaced again when the plant needs it",
];

const boundaryPoints = [
  "V.A.U.L.T.® is the protected memory and data-management backbone for A.I.R.O.N.",
  "It can sit as a one-way OT/IT buffer so operational truth can move outward without inbound control returning to the process",
  "It preserves truth without entangling the plant in corporate-network dependency",
  "It supports off-site visibility, support, and retrieval while keeping authority where it belongs locally",
  "It is built for custody, context, and recall — not for surveillance and not for convenience edits after the fact",
  "It separates who may use information from who may change, retire, or govern official records",
];

const retentionPoints = [
  "Tier 1 — Instant Memory for live high-resolution analog, audio, thermal, and harmonic data",
  "Tier 2 — Functional Memory for shift-scale patterns, alarms, recipe compliance, and operator action timing",
  "Tier 3 — Knowledge Memory for reusable Predictive Breakpoint® signatures, risk history, and validated outcomes",
  "Tier 4 — Institutional Memory for long-horizon lifecycle learning, cost reduction attribution, and culture retention",
  "Archive what compounds in value instead of hoarding whatever was easiest to store",
  "Keep the memory light enough to be usable and structured enough to become wisdom",
];

const structuredMemoryPoints = [
  "Machine memory — converter, coil, hydraulic, power, and equipment behavior",
  "Human memory — timing, actions, instincts, confirmations, and interventions",
  "Atmosphere memory — shift rhythm, stress conditions, and operating context where relevant",
  "Predictive composite memory — cross-domain signatures tied to outcomes",
  "Decision memory — what was done, when it was done, and what it changed",
  "These merge into event-based memory capsules that become more useful with reuse instead of less",
];

const impPoints = [
  "Searchable",
  "Verifiable",
  "Machine-readable",
  "Human-teachable",
  "Permanently accessible through V.A.U.L.T.®",
  "Prepared to prevent repetition instead of trapped in raw history",
  "Built from what one operator heard, what another confirmed, what maintenance fixed, and what A.I.R.O.N. proved",
  "Returned to operators, technicians, engineers, and leadership through a human retrieval interface",
];

const libraryPoints = [
  "Single revision-controlled search surface for diagrams, OEM manuals, technician notes, and training packets",
  "Indexed by equipment, discipline, document type, and revision status",
  "Designed so the current, correct reference can be retrieved on demand at the machine or from authorized terminals",
  "Useful during normal operation, shift handoff, troubleshooting, abnormal events, and recovery",
  "Search narrows memory to the relevant asset and context instead of forcing people to hunt across disconnected files",
  "The right memory is brought to the work instead of asking the work to stop for a records search",
];

const trustPoints = [
  "Evidence-grade records with preserved context instead of naked timestamps",
  "History protected the way it actually happened, not the way someone later wished it had happened",
  "Continuity of evidence through outages, recovery, and post-event review",
  "Access control and separation of duties so too much record power does not collapse into one set of hands",
  "Non-repudiation without surveillance — trustworthy records without treating people like suspects",
  "Honest review without reconstruction, guesswork, or political cleanup after the fact",
];

const loopPoints = [
  "Better Days captures the signal from the people living the work",
  "A.S.S.U.R.E.™ and operating truth bind events to what was really happening before, during, and after they formed",
  "V.A.U.L.T.® preserves that truth with custody, context, and recall",
  "Training and qualification can turn preserved lessons into repeatable understanding",
  "Fault libraries, IMPs, and retrieval tools bring lived history back when the next similar condition starts to form",
  "Knowledge compounds instead of resetting with shift change, turnover, retirement, or disruption",
];

const capabilityPoints = [
  "Protect records from quiet deletion, rewriting, or convenience edits",
  "Keep critical technical references available during outages, troubleshooting, and recovery",
  "Preserve truth without turning recordkeeping into surveillance",
  "Support audits, incident review, and engineering learning without reconstruction",
  "Surface the right document, packet, or memory at the right moment",
  "Turn stored history into reusable operating intelligence for tomorrow",
];

const relatedPages = [
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See why preserved truth and retained learning are part of the A.I.R.O.N. operating spine.",
  },
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See how continuous reality capture, boundary discipline, and live truth flow into protected memory.",
  },
  {
    title: "Training Philosophy",
    href: "/a-i-r-o-n/training-philosophy",
    description:
      "See how preserved lessons, identical training truth, and real operating memory stay connected.",
  },
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description:
      "See how preserved records, live guidance, and trusted recovery memory matter when abnormal events form.",
  },
];

export default function VaultPage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/vault" mainClassName="airon-vault-page">
      <HeroBlock
        eyebrow="Custody. Context. Recall."
        title="V.A.U.L.T.®"
        supportingLine="Protected memory for truth that still matters later."
        subhead="V.A.U.L.T.® is the protected memory and data-management backbone of A.I.R.O.N. — preserving operational truth, searchable technical references, and institutional memory packets so the plant does not lose what it already paid to learn."
        body={
          <>
            <p>
              V.A.U.L.T.® is not a dead archive and it is not endless raw telemetry.
              It is structured memory with custody, context, and recall.
            </p>
            <p>
              It keeps the right history available during normal operation, handoff,
              troubleshooting, outage, recovery, and review — so truth survives long enough to become useful.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Memory Architecture Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Architecture Map",
          href: "/a-i-r-o-n/modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Custody</h3>
            <p>
              Protected records, evidence-grade continuity, and technical references that are not quietly rewritten after the fact.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Recall</h3>
            <p>
              The right packet, drawing, lesson, or operating history surfaced again when the work actually needs it.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What V.A.U.L.T.® is"
        paragraphs={[
          "V.A.U.L.T.® is the place where A.I.R.O.N. stops merely observing and starts preserving what matters.",
          "It protects truth, preserves technical memory, and returns usable history to operators, technicians, engineers, and leadership when the plant needs clarity.",
          "It is not surveillance. It is not record clutter. It is not memory without structure. It is protected, structured recall for real industrial life.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What V.A.U.L.T.® preserves"
            subtitle="The truths plants lose first are usually the ones they most need back later."
            align="center"
          />
          <CapabilityGrid items={preservePoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Protected boundary, not loose storage"
            subtitle="V.A.U.L.T.® is part of how A.I.R.O.N. keeps memory useful without turning the plant into an entangled network problem."
            align="center"
          />
          <CapabilityGrid items={boundaryPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Retention tiers and archival value"
            subtitle="Raw data expires. Knowledge compounds. V.A.U.L.T.® keeps what grows in value."
            align="center"
          />
          <CapabilityGrid items={retentionPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Structured memory, not random history"
            subtitle="Useful institutional memory joins machine truth, human action, atmosphere, and outcome into something that can be retrieved and reused."
            align="center"
          />
          <CapabilityGrid items={structuredMemoryPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="IMP™ — Institutional Memory Packets"
            subtitle="Not just notes. Not just logs. History prepared to teach, guide, and prevent repetition."
            align="center"
          />
          <CapabilityGrid items={impPoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              IMP™ packets make lived experience searchable, teachable, and reusable. They preserve what one person heard, what another confirmed, what maintenance fixed, and what A.I.R.O.N. proved.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Document and drawing library"
            subtitle="When the plant needs the right reference, it should not have to guess which file name, revision, or folder path holds it."
            align="center"
          />
          <CapabilityGrid items={libraryPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why V.A.U.L.T.® matters during disruption"
        paragraphs={[
          "Plants do not only lose output. They lose memory, context, and confidence when the people who knew the story are absent, overwhelmed, or gone.",
          "V.A.U.L.T.® keeps that loss from becoming normal. It gives the operation a protected place where truth survives long enough to become guidance.",
          "When today starts to look like a day the system has seen before, V.A.U.L.T.® helps the plant remember sooner and recover cleaner.",
        ]}
        sectionClassName="section"
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Custody, trust, and evidence-grade records"
            subtitle="If the record can be quietly changed, the truth does not last very long."
            align="center"
          />
          <CapabilityGrid items={trustPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="How V.A.U.L.T.® keeps learning alive"
            subtitle="This is where signals, truth capture, preserved memory, and teachable recovery stop living as separate systems."
            align="center"
          />
          <CapabilityGrid items={loopPoints} compact />
          <p className="support-line center">
            Better Days captures the signal. V.A.U.L.T.® preserves the truth. Training teaches the lesson. Retrieval brings the right memory back to the right person at the right time.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What V.A.U.L.T.® can do"
            subtitle="Protected memory with custody, context, recall, and practical usefulness."
            align="center"
          />
          <CapabilityGrid items={capabilityPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Position statement"
        paragraphs={[
          "V.A.U.L.T.® is not a surveillance tool and it is not passive storage.",
          "It is protected, structured memory that keeps technical references trustworthy, preserves operating truth, and returns useful history when the work needs it most.",
          "Data remembers. V.A.U.L.T. learns.",
        ]}
        sectionClassName="section"
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Truth preserved. Context retained. Memory returned when it matters."
      />

      <CTAFooterBand
        headline="Data remembers. V.A.U.L.T. learns."
        primaryCTA={{
          label: "Request a Memory Architecture Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore Modules",
          href: "/a-i-r-o-n/modules",
        }}
        supportingLine="If it mattered once, it should still matter later."
      />
    </SiteLayout>
  );
}
