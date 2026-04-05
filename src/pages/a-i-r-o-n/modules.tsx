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
      "Not a side module. The central discipline that powers every major A.I.R.O.N. family.",
    href: "/a-i-r-o-n/continuous-improvement",
  },
  {
    name: "Controls & Automation",
    eyebrow: "Machine brain / process behavior",
    description:
      "PLCs, HMIs, sequencing, batching, startup, shutdown, interlocks, robotics, retrofit, and greenfield automation.",
    href: "/a-i-r-o-n/controls-automation",
  },
  {
    name: "Safety",
    eyebrow: "Human protection first",
    description:
      "Safety structure, startup annunciation, local authority, abnormal-condition communication, and protection under consequence.",
    href: "/a-i-r-o-n/safety",
  },
  {
    name: "Training",
    eyebrow: "Readiness / role-fit development",
    description:
      "Structured industrial learning, governed readiness, progression-based capability building, and the internal doctrine behind the live training environment.",
    href: "/a-i-r-o-n/training-philosophy",
    linkLabel: "See training philosophy →",
  },
  {
    name: "V.A.U.L.T. / Memory",
    eyebrow: "Truth / memory / proof",
    description:
      "Institutional memory, preserved fixes, historical trend context, and proof that survives shift change, turnover, and politics.",
    href: "/a-i-r-o-n/vault",
  },
  {
    name: "Predictive & Diagnostics",
    eyebrow: "Drift / advisory / prevention",
    description:
      "Furnace Doctor, Fortune Teller, startup signatures, acoustic advisory intelligence, and early warning before failure grows teeth.",
    href: "/a-i-r-o-n/furnace-doctor",
  },
  {
    name: "C.A.T.A.S.T.R.O.P.H.E.",
    eyebrow: "Abnormal-event architecture",
    description:
      "High-consequence event support, protected decision integrity, emergency communication, and local authority under stress.",
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
    name: "Contact / Discovery",
    eyebrow: "Practical next step",
    description:
      "Start the right conversation around controls, training, CI, support, startup, safety, memory, or broader system deployment.",
    href: "/a-i-r-o-n/contact",
  },
];

const architectureTruths = [
  "Continuous Improvement is the operating spine of A.I.R.O.N.",
  "SYSTEM-LIVE / PLAYER-LIVE is CI applied to human-to-machine engagement.",
  "Controls & Automation is CI applied to machine behavior.",
  "Safety is CI applied to human protection and governed control.",
  "V.A.U.L.T. is CI applied to memory, proof, and preserved lessons.",
  "Predictive intelligence is CI applied to drift, trend, and prevention.",
];

const familyHighlights = [
  "Better Days belongs under Continuous Improvement as the front door for participation.",
  "One-Touch Startup belongs under Controls & Automation as governed startup, shutdown, runout, and empty-down logic.",
  "Furnace Doctor and Fortune Teller belong under Predictive & Diagnostics as specialist advisory tools.",
  "Training is a full family, not just a link, because readiness and progression are core A.I.R.O.N. functions.",
  "C.A.T.A.S.T.R.O.P.H.E. stays top-level because abnormal-event structure is distinct from ordinary safety or diagnostics.",
  "Industrial Campus stays visible because A.I.R.O.N. is built around people, not just assets.",
];

const startingPoints = [
  {
    title: "Need help controlling the machine?",
    links: [
      { label: "Controls & Automation", href: "/a-i-r-o-n/controls-automation" },
      { label: "One-Touch Startup", href: "/a-i-r-o-n/one-touch-startup" },
    ],
  },
  {
    title: "Need help protecting people and startup risk?",
    links: [
      { label: "Safety", href: "/a-i-r-o-n/safety" },
      { label: "C.A.T.A.S.T.R.O.P.H.E.", href: "/a-i-r-o-n/catastrophe" },
    ],
  },
  {
    title: "Need memory, proof, or preserved lessons?",
    links: [
      { label: "V.A.U.L.T.", href: "/a-i-r-o-n/vault" },
      { label: "Continuous Improvement", href: "/a-i-r-o-n/continuous-improvement" },
    ],
  },
  {
    title: "Need drift, signatures, or predictive help?",
    links: [
      { label: "Furnace Doctor", href: "/a-i-r-o-n/furnace-doctor" },
      { label: "Fortune Teller", href: "/a-i-r-o-n/fortune-teller" },
    ],
  },
  {
    title: "Need workforce readiness or training?",
    links: [
      { label: "Industrial Campus", href: "/a-i-r-o-n/industrial-campus" },
      { label: "Training Philosophy", href: "/a-i-r-o-n/training-philosophy" },
      { label: "Open Live Training", href: "https://training.dingfelder.co/" },
    ],
  },
  {
    title: "Need the right conversation first?",
    links: [
      { label: "SYSTEM-LIVE / PLAYER-LIVE", href: "/a-i-r-o-n/system-live-player-live" },
      { label: "Contact / Discovery", href: "/a-i-r-o-n/contact" },
    ],
  },
];

const relatedPages = [
  {
    title: "Training Philosophy",
    href: "/a-i-r-o-n/training-philosophy",
    description: "See the internal doctrine page for governed readiness, preserved memory, and proof-based workforce development.",
  },
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description: "Read the operating spine that powers every major A.I.R.O.N. family.",
  },
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description: "See how A.I.R.O.N. meets the machine brain itself.",
  },
  {
    title: "SYSTEM-LIVE / PLAYER-LIVE",
    href: "/a-i-r-o-n/system-live-player-live",
    description: "See how A.I.R.O.N. improves the whole relationship between person and process.",
  },
];

export default function AIRONModulesPage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/modules" mainClassName="airon-modules-page">
      <HeroBlock
        eyebrow="See the full A.I.R.O.N. architecture in one place."
        title="A.I.R.O.N. Modules"
        subhead="One operating spine. Multiple module families. One system built to improve machines, people, memory, safety, and process truth together."
        body={
          <>
            <p>
              This page is the architecture map. It shows the major families
              inside A.I.R.O.N., what they are for, and where each one belongs.
            </p>
            <p>
              Continuous Improvement is the spine. The other families are how
              that spine expresses itself in real industrial form.
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
            <h3>Module Families</h3>
            <p>
              Controls, Safety, Training, Memory, Diagnostics, Campus, and
              abnormal-event architecture are all CI expressed in different
              industrial forms.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="Start with the family that matches the problem" />
          <p>
            A.I.R.O.N. is not a random collection of branded tools. It is a
            structured architecture. The families below help you find the right
            doorway without guessing.
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
          <SectionHeading title="How the architecture actually works" />
          <p className="center narrow-text">
            If you understand the six truths below, you understand why the
            site is organized the way it is.
          </p>
          <CapabilityGrid items={architectureTruths} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Important family relationships" />
          <p className="center narrow-text">
            These are the structural links that keep the site honest and keep
            the architecture from drifting into disconnected marketing pages.
          </p>
          <CapabilityGrid items={familyHighlights} compact />
        </div>
      </section>

      <section className="section">
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
        supportingLine="The more clearly the families are mapped, the easier it becomes to see where the next right move belongs."
      />

      <CTAFooterBand
        headline="One architecture. Many specialists. One operating spine."
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Continuous Improvement",
          href: "/a-i-r-o-n/continuous-improvement",
        }}
        supportingLine="A.I.R.O.N. is not just a set of pages. It is a structured industrial system built to improve what matters most."
      />
    </SiteLayout>
  );
}
