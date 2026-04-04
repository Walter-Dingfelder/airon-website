import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ModuleCard from "../../components/core/ModuleCard";
import ContrastBlock from "../../components/core/ContrastBlock";
import SystemPlayerBlock from "../../components/doctrine/SystemPlayerBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import HomeIntroPopup from "../../components/core/HomeIntroPopup";
import homeHeroOperatorPanel from "../../assets/airon-home-hero-operator-panel.png";

/**
 * A.I.R.O.N. homepage source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/index.tsx
 *
 * Notes:
 * - Example page using shared layout and core components.
 * - Import paths should be adjusted to match your final repo structure.
 * - This file demonstrates the intended refactor direction for the site.
 */

const modules = [
  {
    name: "Furnace Doctor™",
    description: "Hot-end advisory specialist.",
    href: "/a-i-r-o-n/furnace-doctor",
  },
  {
    name: "Fortune Teller™",
    description: "Predictive breakpoints and action timing.",
    href: "/a-i-r-o-n/fortune-teller",
  },
  {
    name: "V.A.U.L.T.®",
    description: "Truth, memory, and recoverable knowledge.",
    href: "/a-i-r-o-n/vault",
  },
  {
    name: "One-Touch Startup™",
    description: "Governed startup, permissives, and proof.",
    href: "/a-i-r-o-n/one-touch-startup",
  },
  {
    name: "C.A.T.A.S.T.R.O.P.H.E.™",
    description: "Abnormal-event human protection layer.",
    href: "/a-i-r-o-n/catastrophe",
  },
  {
    name: "Dingfelder Industrial Campus",
    description: "Workforce activation, simulation, and Continuous Improvement infrastructure.",
    href: "/a-i-r-o-n/industrial-campus",
  },
];

const capabilityItems = [
  "Observe live process truth",
  "Detect drift before traditional alarms force reaction",
  "Compare command versus actual behavior in real time",
  "Preserve baselines, context, and institutional memory",
  "Guide one-touch startup and controlled shutdown",
  "Project expertise into live operation",
  "Create predictive breakpoints and action windows",
  "Scale from one asset to a full operational ecosystem",
];

const withoutAIRON = [
  "Expertise leaves",
  "Standards go stale",
  "Truth gets political",
  "Startups depend on heroes",
  "Recurring problems never fully die",
];

const withAIRON = [
  "The plant remembers",
  "The baseline stays alive",
  "Drift becomes visible",
  "Learning survives turnover",
  "Improvement starts living in the system",
];

export default function AIRONHomePageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n" mainClassName="airon-home">
      <HomeIntroPopup />
      <HeroBlock
        eyebrow="Forging tomorrow’s efficiency with every minute of today’s operation"
        title="A.I.R.O.N.™"
        supportingLine='Pronounced “Iron”'
        subhead="The operational nervous system your plant never had."
        body={
          <>
            <p>
              A.I.R.O.N. is a living industrial system that remembers, protects,
              guides, and improves while the operation runs.
            </p>
          </>
        }
        primaryCTA={{
          label: "Explore the System",
          href: "/a-i-r-o-n/modules",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
      >
        <div className="hero-demo-visual">
          <img
            src={homeHeroOperatorPanel}
            alt=""
            loading="eager"
            decoding="async"
          />
        </div>
      </HeroBlock>

      <section className="section">
        <div className="container narrow">
          <SectionHeading
            title='Why the “A” is silent'
            subtitle='A.I.R.O.N.™ — Pronounced “Iron”'
          />
          <p>
            The “A” is silent by design. Autonomy should not demand attention.
            It should work quietly in the background — sensing drift, capturing
            wins, protecting people, and raising the baseline safely and
            purposefully.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Built for real industry" />
          <div className="two-col">
            <div>
              <p>
                A.I.R.O.N. is an operational instrument built for real
                industrial environments:
              </p>
              <ul>
                <li>High heat</li>
                <li>High noise</li>
                <li>High consequence</li>
                <li>Real physics</li>
                <li>Real continuity problems</li>
              </ul>
            </div>

            <div className="contrast-card">
              <h3>A.I.R.O.N. is not:</h3>
              <ul>
                <li>A decorative dashboard</li>
                <li>A generic AI assistant</li>
                <li>A toy</li>
                <li>Automation for the sake of automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="What A.I.R.O.N. does" />
          <CapabilityGrid items={capabilityItems} />
        </div>
      </section>

      <SystemPlayerBlock />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Specialist modules. One nervous system."
            subtitle="A.I.R.O.N. expands through specialist layers that can be deployed on one asset, one line, or the full operation."
          />

          <div className="module-grid">
            {modules.map((module) => (
              <ModuleCard
                key={module.name}
                name={module.name}
                href={module.href}
                description={module.description}
              />
            ))}
          </div>

          <div className="center-cta">
            <a className="btn btn-primary" href="/a-i-r-o-n/modules">
              View All Modules
            </a>
          </div>
        </div>
      </section>

      <ContrastBlock
        title="Without continuity, plants drift quietly"
        leftTitle="Without A.I.R.O.N."
        leftItems={withoutAIRON}
        rightTitle="With A.I.R.O.N."
        rightItems={withAIRON}
      />

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="Industry. Period." />
          <p>
            Stop chasing version numbers. What matters is not whether someone
            calls your plant 4.0, 5.0, or 6.0. What matters is whether it can
            stay safe, hold truth, preserve memory, protect continuity, improve
            without forgetting, and keep working when people, priorities, and
            conditions change.
          </p>

          <div className="cta-row">
            <a className="btn btn-secondary" href="/a-i-r-o-n/industry-period">
              Read the Position
            </a>
          </div>
        </div>
      </section>

      <CTAFooterBand
        headline="Your machines ALWAYS whisper. With A.I.R.O.N.™ you’ll NEVER hear them scream."
        primaryCTA={{
          label: "Request a Discovery Meeting",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore the Modules",
          href: "/a-i-r-o-n/modules",
        }}
      />
    </SiteLayout>
  );
}
