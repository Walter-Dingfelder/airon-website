import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const doctrineRoots = [
  <>
    <h3>Experience</h3>
    <p>What people learned the hard way, including near-misses, weak signals, substitutes, workarounds, and consequence.</p>
  </>,
  <>
    <h3>Truth</h3>
    <p>What the process, machines, materials, environment, and event evidence actually showed — not what people hoped was true.</p>
  </>,
  <>
    <h3>Memory</h3>
    <p>What must still be available tomorrow when the expert is off shift, the supervisor changed, or the incident has already cooled down.</p>
  </>,
];

const exposurePoints = [
  "Handoffs and shift change",
  "Substitutions and unfamiliar assignments",
  "Startup, restart, and abnormal transition",
  "Jams, clears, and improvised recovery",
  "Drifting conditions and rising uncertainty",
  "Pressure to move before understanding",
  "Weak communication between operations, maintenance, and engineering",
  "Memory loss after the event",
];

const livingSystemPoints = [
  "Keep safety connected to the real work instead of a binder on a shelf",
  "Preserve truth close to the moment when human decisions must be made",
  "Support startup, handoff, abnormal-event, and recovery moments where risk rises fastest",
  "Carry memory across shifts so avoidable pain does not have to teach the same lesson twice",
  "Help people slow down before movement when understanding is incomplete",
  "Protect the human being creating the improvement, not just the metric being improved",
  "Strengthen continuity between people, systems, and learned history",
  "Turn consequence into retained knowledge instead of recurring loss",
];

const doctrineRules = [
  "Do not move before understanding",
  "Do not improvise where truth is available",
  "Do not let urgency outrun clarity",
  "Do not let memory die at shift change",
  "Do not separate safety from reality",
  "No improvement is allowed to endanger the person creating it",
];

const connectedLayers = [
  <>
    <h3>One-Touch Startup™</h3>
    <p>Startup is one of the most sensitive safety moments in the operation. Proof-before-progression keeps movement governed.</p>
  </>,
  <>
    <h3>V.A.U.L.T.®</h3>
    <p>Safety memory must survive the shift, the incident, and the personnel change. Custody, context, and recall matter.</p>
  </>,
  <>
    <h3>Better Days</h3>
    <p>Improvement ideas, warnings, and unresolved concerns should not disappear because the right person was unavailable that day.</p>
  </>,
  <>
    <h3>C.A.T.A.S.T.R.O.P.H.E.™</h3>
    <p>When systems degrade and consequence is live, the doctrine extends into abnormal-event human protection and structured action.</p>
  </>,
];

const withoutDoctrine = [
  "Memory fragments after the event",
  "Handoffs weaken",
  "Urgency outruns understanding",
  "The same avoidable pain returns",
];

const withDoctrine = [
  "Truth stays closer to the decision",
  "Memory survives the shift",
  "Safety stays tied to the work",
  "The system learns from consequence instead of repeating it",
];

const relatedPages = [
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description: "See how the safety doctrine extends into abnormal-event human protection when normal systems degrade.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description: "See how governed startup protects people during one of the most sensitive operating moments.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description: "See how custody, context, recall, and IMP™ memory keep safety truth from disappearing.",
  },
  {
    title: "Better Days",
    href: "/a-i-r-o-n/better-days",
    description: "See how improvement signals, warnings, and unresolved issues stay visible instead of getting lost.",
  },
];

export default function AIRONSafetyPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/safety" mainClassName="airon-branch-page safety-page">
      <HeroBlock
        eyebrow="Knowledge Before Action. Truth Before Movement. People Before Everything."
        title="Safety"
        supportingLine="The Tree of Knowledge™"
        subhead="Safety is not a department. It is a living system property."
        body={
          <>
            <p>
              The Tree of Knowledge™ is A.I.R.O.N.’s doctrine anchor for safety.
              It keeps safety connected to experience, operating truth, and preserved memory
              instead of reducing it to paperwork, posters, or after-the-fact explanation.
            </p>
            <p>
              Safety gets stronger when the system stays tied to what the work is actually doing,
              what people actually learned, and what must still be remembered tomorrow.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start a Safety Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See C.A.T.A.S.T.R.O.P.H.E.",
          href: "/a-i-r-o-n/catastrophe",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Normal operation</h3>
            <p>
              Safety lives in handoffs, startup, substitutions, weak signals,
              visibility, memory, and the discipline to understand before moving.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Abnormal operation</h3>
            <p>
              When systems fail or conditions go dark, the doctrine matters even more
              because truth, structure, and human protection can no longer be assumed.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="The doctrine behind the page"
        paragraphs={[
          "The Tree of Knowledge™ is not just a symbol. It is the doctrine that ties experience, truth, and memory into a safety posture that stays alive during real operation.",
          "That matters because people rarely get hurt on the easiest, most stable, best-communicated part of the day. They get hurt when the operation is changing, drifting, rushed, substituted, unclear, or partially understood.",
          "A.I.R.O.N. treats safety as something that must stay connected to the living operation, not something reconstructed later after the consequence already happened.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Safety is not:</h3>
            <ul>
              <li>Paperwork only</li>
              <li>Poster-only culture</li>
              <li>Separated from live operating conditions</li>
              <li>Something that depends on memory after the fact</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="The three roots of the doctrine"
            subtitle="Experience, truth, and memory have to stay connected or safety gets weaker than it looks."
            align="center"
          />
          <CapabilityGrid items={doctrineRoots} compact />
          <p className="support-line center">
            When these three stay connected, safety becomes stronger than policy alone.
            When they disconnect, people start relying on speed, luck, and incomplete knowledge.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Where people are most exposed"
            subtitle="The highest-risk moments are often the moments where understanding is weakest."
            align="center"
          />
          <CapabilityGrid items={exposurePoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What a living safety system must do"
            subtitle="Safety should stay close to the work, the truth, and the human being making the decision."
            align="center"
          />
          <CapabilityGrid items={livingSystemPoints} compact />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionHeading
            title="What the doctrine asks people and systems to do"
            subtitle="These are operating rules, not wall slogans."
            align="center"
          />
          <div className="doctrine-block">
            <ul>
              {doctrineRules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Safety stays connected to the rest of A.I.R.O.N."
        paragraphs={[
          "A living safety doctrine should not be isolated from startup, memory, improvement routing, or abnormal-event structure.",
          "That is why Safety connects naturally to One-Touch Startup™, V.A.U.L.T.®, Better Days, and C.A.T.A.S.T.R.O.P.H.E.™ inside the larger A.I.R.O.N. architecture.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Where the doctrine becomes operational"
            subtitle="The page is philosophy. These are the connected system layers that make it durable."
            align="center"
          />
          <CapabilityGrid items={connectedLayers} compact />
        </div>
      </section>

      <ContrastBlock
        title="Most safety programs are strongest on normal days"
        leftTitle="Without a living safety doctrine"
        leftItems={withoutDoctrine}
        rightTitle="With the Tree of Knowledge™"
        rightItems={withDoctrine}
        sectionClassName="section section-alt"
      />

      <TextIntroBlock
        title="When systems fail, the doctrine matters even more"
        paragraphs={[
          "When communication breaks, conditions go dark, or normal control confidence collapses, the Tree of Knowledge™ becomes even more important because truth and structure have to survive the event.",
          "That is where C.A.T.A.S.T.R.O.P.H.E.™ extends the doctrine to guide people safely, preserve truth, structure decisions, protect life, and support recovery without reckless movement.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>Safety gets weaker when it drifts away from the work. It gets stronger when it stays tied to the truth of the work.</strong>
            </p>
          </div>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with the doctrine if you need the safety philosophy. Move into abnormal-event structure, startup discipline, preserved memory, and improvement routing when the path is clear."
      />

      <CTAFooterBand
        headline="Protect the people before the system has to explain itself later."
        primaryCTA={{
          label: "Start a Safety Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See C.A.T.A.S.T.R.O.P.H.E.",
          href: "/a-i-r-o-n/catastrophe",
        }}
        supportingLine="Experience. Truth. Memory."
      />
    </SiteLayout>
  );
}
