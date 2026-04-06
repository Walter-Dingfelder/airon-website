import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import ModuleCard from "../../components/core/ModuleCard";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

type ModuleFamily = {
  name: string;
  eyebrow: string;
  description: string;
  href: string;
  linkLabel?: string;
};

const moduleFamilies: ModuleFamily[] = [
  {
    name: "A.I.R.O.N. Core",
    eyebrow: "Doctrine / operating philosophy",
    description:
      "The umbrella system, the philosophy behind it, and the way machine truth and human truth meet on common ground.",
    href: "/a-i-r-o-n/system-live-player-live",
  },
  {
    name: "Continuous Improvement",
    eyebrow: "Operating spine",
    description:
      "Not a side module. The central discipline that powers every major A.I.R.O.N. family and keeps the system learning during live operation.",
    href: "/a-i-r-o-n/continuous-improvement",
  },
  {
    name: "Controls & Automation",
    eyebrow: "Machine brain / process behavior",
    description:
      "PLCs, HMIs, sequencing, batching, startup, shutdown, interlocks, robotics, retrofit, and greenfield automation without ripping out what already works.",
    href: "/a-i-r-o-n/controls-automation",
  },
  {
    name: "Safety",
    eyebrow: "Human protection first",
    description:
      "Safety structure, annunciation, local authority, abnormal-condition communication, and protection under consequence.",
    href: "/a-i-r-o-n/safety",
  },
  {
    name: "Training Philosophy",
    eyebrow: "Readiness / governed progression",
    description:
      "Structured industrial learning, role-fit development, retained lessons, and workforce readiness tied to real plant truth.",
    href: "/a-i-r-o-n/training-philosophy",
  },
  {
    name: "V.A.U.L.T. / Memory",
    eyebrow: "Truth / memory / proof",
    description:
      "Institutional memory, preserved fixes, revision-controlled references, historical context, and proof that survives turnover and shift change.",
    href: "/a-i-r-o-n/vault",
  },
  {
    name: "Predictive & Diagnostics",
    eyebrow: "Drift / advisory / prevention",
    description:
      "Doctor modules, Predictive Breakpoint® logic, Ghost Busting, Fortune Teller™, and earlier action before instability becomes consequence.",
    href: "/a-i-r-o-n/predictive-diagnostics",
  },
  {
    name: "C.A.T.A.S.T.R.O.P.H.E.",
    eyebrow: "Abnormal-event architecture",
    description:
      "High-consequence event support, guided recovery, responder communication, truth continuity, and local authority under stress.",
    href: "/a-i-r-o-n/catastrophe",
  },
  {
    name: "Industrial Campus",
    eyebrow: "Workforce activation / human systems",
    description:
      "How A.I.R.O.N. meets operators, mechanics, trainees, and leadership where they are and gives everyone a home in the system.",
    href: "/a-i-r-o-n/industrial-campus",
  },
  {
    name: "Free OSHA & Safety Training",
    eyebrow: "External training portal",
    description:
      "Practical OSHA and safety training today, with room to expand into broader safety and workforce development over time.",
    href: "https://training.dingfelder.co/",
    linkLabel: "Open training portal ↗",
  },
  {
    name: "Contact / Discovery",
    eyebrow: "Practical next step",
    description:
      "Start the right conversation around controls, training, CI, support, startup, safety, memory, deployment, or broader system expansion.",
    href: "/a-i-r-o-n/contact",
  },
];

const baseHardwareStack = [
  "Unitronics all-in-one HMI / PLC for local control and operator interface",
  "V.A.U.L.T.® edge computer with protected local compute, storage, retention, and recall",
  "Starlink as the required facility communications backbone for C.A.T.A.S.T.R.O.P.H.E.™, off-site support, messaging, and corporate data pulls",
  "Battery backup / UPS so the system remains supported during plant power loss",
  "Sensory array selected by installation requirements: position, vibration, temperature, flow, pressure, current, voltage, audio, and other process-specific signals",
  "Read-only use of existing plant data where good signals already exist",
];

const deploymentBoundary = [
  "A.I.R.O.N. does not require ripping out the customer's existing operation to become useful",
  "The platform is designed to work with customer IT, engineering, maintenance, and existing vendors",
  "A.I.R.O.N. does not tie into corporate networks as a dependency for operation",
  "V.A.U.L.T.® serves as the OT/IT boundary and controlled outward-facing buffer",
  "Control authority stays where it belongs; insight, coordination, and preserved truth are what expand",
  "The goal is to keep the customer operating, not profit from their pain",
];


const enterpriseBoundary = [
  "A.I.R.O.N. does not replace ERP, CMMS, MES, scheduling, or quality systems—it fuels them with structured truth",
  "Customer systems pull from A.I.R.O.N. through a secure one-way portal when they need data, instead of accepting fragile pushed integrations",
  "Nothing is pushed into the customer’s business systems, so reporting workflows can stay stable while operational truth gets better",
  "Accounting, maintenance, quality, and leadership can retrieve pull-ready outputs on demand without exposing plant controls to inbound dependency",
  "The same boundary that protects operations also protects trust: A.I.R.O.N. listens, preserves, and publishes outward without tying itself to corporate-network control paths",
  "This keeps A.I.R.O.N. non-intrusive for operations while still making existing enterprise systems more valuable"
];

const integrationTruths = [
  "Machine signals, supervisory points, and sensors are brought together without flattening the operation into a generic dashboard",
  "Acoustic intelligence, operator context, process behavior, and historical memory are kept connected instead of trapped in separate systems",
  "A.S.S.U.R.E.™ writes shift reality as it forms, including system-authored truth, event timing, and notification traceability",
  "Better Days, V.A.U.L.T.®, and the Training Engine form a closed loop between what the plant learns and what the next person sees",
  "Doctor modules tell the truth now. Fortune Teller™ weighs what that truth means next",
  "C.A.T.A.S.T.R.O.P.H.E.™ preserves command clarity, guided recovery, and real-time records when the operation enters abnormal territory",
];

const expansionPathways = [
  "One Starlink per facility supports one machine or many from the same communications backbone",
  "One V.A.U.L.T.® can serve as the protected memory and support spine for broad facility growth",
  "Future machine add-ins usually need a Unitronics all-in-one interface and only the sensors that process actually requires",
  "Expansion can move from melt to cranes, material flow, utilities, training, maintenance, safety, and other departments without rebuilding the whole architecture",
  "The first machine family is the beginning of the operating model, not the end of it",
  "The architecture is modular by machine, component, subsystem, process slice, and facility need",
];

const familyHighlights = [
  "Continuous Improvement is not just one more part of A.I.R.O.N. It is the reason A.I.R.O.N. exists.",
  "SYSTEM-LIVE / PLAYER-LIVE is CI applied to human-to-machine engagement.",
  "Controls & Automation is CI applied to machine behavior, governed startup, and execution truth.",
  "V.A.U.L.T.® is CI applied to memory, document control, proof, and institutional recall.",
  "Predictive intelligence is CI applied to drift, direction, action windows, and prevention.",
  "C.A.T.A.S.T.R.O.P.H.E.™ is CI applied under abnormal consequence, where clarity and safe recovery matter most.",
];

const startingPoints = [
  {
    title: "Need help protecting people and responding fast?",
    links: [
      { label: "Safety", href: "/a-i-r-o-n/safety" },
      { label: "C.A.T.A.S.T.R.O.P.H.E.", href: "/a-i-r-o-n/catastrophe" },
      { label: "Better Days", href: "/a-i-r-o-n/better-days" },
    ],
  },
  {
    title: "Need help keeping equipment and process running?",
    links: [
      { label: "Controls & Automation", href: "/a-i-r-o-n/controls-automation" },
      { label: "One-Touch Startup", href: "/a-i-r-o-n/one-touch-startup" },
      { label: "Predictive & Diagnostics", href: "/a-i-r-o-n/predictive-diagnostics" },
    ],
  },
  {
    title: "Need memory, documentation, drawings, or preserved lessons?",
    links: [
      { label: "V.A.U.L.T.", href: "/a-i-r-o-n/vault" },
      { label: "Continuous Improvement", href: "/a-i-r-o-n/continuous-improvement" },
      { label: "Doctor Family", href: "/a-i-r-o-n/doctor-family" },
    ],
  },
  {
    title: "Need predictive drift, signatures, or action timing?",
    links: [
      { label: "Fortune Teller", href: "/a-i-r-o-n/fortune-teller" },
      { label: "Predictive & Diagnostics", href: "/a-i-r-o-n/predictive-diagnostics" },
      { label: "Furnace Doctor", href: "/a-i-r-o-n/furnace-doctor" },
    ],
  },
  {
    title: "Need workforce readiness or training?",
    links: [
      { label: "Training Philosophy", href: "/a-i-r-o-n/training-philosophy" },
      { label: "Industrial Campus", href: "/a-i-r-o-n/industrial-campus" },
      { label: "Play Your Work - Work Your Play", href: "/a-i-r-o-n/play-your-work-work-your-play" },
      { label: "Free OSHA & Safety Training ↗", href: "https://training.dingfelder.co/" },
    ],
  },
  {
    title: "Need the right conversation first?",
    links: [
      { label: "SYSTEM-LIVE / PLAYER-LIVE", href: "/a-i-r-o-n/system-live-player-live" },
      { label: "Modules", href: "/a-i-r-o-n/modules" },
      { label: "Contact / Discovery", href: "/a-i-r-o-n/contact" },
    ],
  },
];

const relatedPages = [
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description: "See how A.I.R.O.N. integrates with live control behavior, governed startup, and plant execution truth.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description: "See how memory, documents, proof, revision control, and institutional recall stay available at the point of work.",
  },
  {
    title: "Predictive & Diagnostics",
    href: "/a-i-r-o-n/predictive-diagnostics",
    description: "See how Doctor modules, Ghost Busting, Fortune Teller™, and Predictive Breakpoint® fit together.",
  },
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.",
    href: "/a-i-r-o-n/catastrophe",
    description: "See how abnormal events, guided recovery, SOS communication, and incident truth stay structured under stress.",
  },
];

export default function AIRONModulesPage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/modules" mainClassName="airon-modules-page">
      <HeroBlock
        eyebrow="See the full A.I.R.O.N. architecture in one place."
        title="A.I.R.O.N. Modules"
        subhead="One operating spine. Multiple module families. One system built to improve machines, people, memory, safety, process truth, and abnormal-event recovery together."
        body={
          <>
            <p>
              This page is the architecture map. It shows the major families inside
              A.I.R.O.N., what they do, how they fit together, and what actually
              shows up on site when the system is deployed.
            </p>
            <p>
              A.I.R.O.N. is not a random collection of branded tools. It is a
              structured industrial system with a real hardware backbone, a real
              operating boundary, and a real expansion path from one machine family
              to the whole facility.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Homepage",
          href: "/a-i-r-o-n",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Operating Spine</h3>
            <p>
              Continuous Improvement is not just one more part of A.I.R.O.N.
              It is the reason A.I.R.O.N. exists.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Installable Reality</h3>
            <p>
              A.I.R.O.N. is not only doctrine. It is a deployable system with a
              control layer, edge memory, facility communications, power continuity,
              and site-specific sensing.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="Start with the family that matches the problem" />
          <p>
            A.I.R.O.N. is structured so the reader can enter through the real
            problem in front of them: safety, uptime, startup, memory, training,
            diagnostics, or abnormal-event recovery. The families below are the
            main doorways.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Top-level A.I.R.O.N. module families" />
          <div className="module-grid">
            {moduleFamilies.map((module) => (
              <ModuleCard
                key={module.name}
                name={module.name}
                eyebrow={module.eyebrow}
                description={module.description}
                href={module.href}
                linkLabel={module.linkLabel ?? "Open family →"}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Typical A.I.R.O.N. base hardware stack" />
          <p className="center narrow-text">
            Final deployment varies by process, risk, environment, and customer
            requirements, but the stack below grounds the system in real field
            hardware rather than abstract software talk.
          </p>
          <CapabilityGrid items={baseHardwareStack} compact />
          <p className="center narrow-text top-gap">
            One Starlink serves the whole facility. A.I.R.O.N. does not tie into
            corporate networks. UPS support keeps the system available when plant
            conditions are unstable.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Deployment boundary and operating posture" />
          <p className="center narrow-text">
            A.I.R.O.N. is designed to install responsibly, respect plant authority,
            and work with the customer’s people and vendors instead of pretending
            it replaces them.
          </p>
          <CapabilityGrid items={deploymentBoundary} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Existing systems, ERP, and pull-ready data" />
          <p className="center narrow-text">
            A.I.R.O.N. is built to strengthen the systems the customer already owns
            without creating fragile dependence, forced rip-and-replace work, or
            write-back risk inside business platforms.
          </p>
          <CapabilityGrid items={enterpriseBoundary} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="How the architecture actually behaves" />
          <p className="center narrow-text">
            The system gains value by keeping live truth, preserved memory, training,
            and guided action connected instead of scattered across separate screens,
            systems, and departments.
          </p>
          <CapabilityGrid items={integrationTruths} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Important family relationships" />
          <p className="center narrow-text">
            These are the structural links that keep the architecture honest and keep
            the website from drifting into disconnected marketing pages.
          </p>
          <CapabilityGrid items={familyHighlights} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="One Starlink. One V.A.U.L.T.® . Many machines." />
          <p className="center narrow-text">
            The first deployment is not the end state. The architecture is built to
            expand across machines, departments, and operating problems without
            rebuilding the whole backbone every time.
          </p>
          <CapabilityGrid items={expansionPathways} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Where should you start?" />
          <div className="use-case-grid">
            {startingPoints.map((group) => (
              <div className="use-case-card" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="The clearer the architecture map becomes, the easier it is to see what belongs where, how the system actually installs, and what the next right move should be."
      />

      <CTAFooterBand
        headline="One architecture. Many specialists. One operating spine."
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Controls & Automation",
          href: "/a-i-r-o-n/controls-automation",
        }}
        supportingLine="A.I.R.O.N. is not just a set of pages. It is a structured industrial system built to improve what matters most."
      />
    </SiteLayout>
  );
}
