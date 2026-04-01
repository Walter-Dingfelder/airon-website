import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import ModuleCard from "../../components/core/ModuleCard";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

/**
 * A.I.R.O.N. modules overview source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/modules.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core components.
 * - Import paths should be adjusted to match your final repo structure.
 */

type ModuleItem = {
  name: string;
  eyebrow: string;
  description: string;
  href: string;
};

const primaryModules: ModuleItem[] = [
  {
    name: "Furnace Doctor™",
    eyebrow: "Hot-end advisory specialist",
    description: "Hot-end truth before hot-end trouble.",
    href: "/a-i-r-o-n/furnace-doctor",
  },
  {
    name: "Fortune Teller™",
    eyebrow: "Predictive layer",
    description: "See the breakpoint before the breakdown.",
    href: "/a-i-r-o-n/fortune-teller",
  },
  {
    name: "V.A.U.L.T.®",
    eyebrow: "Truth and memory layer",
    description: "If it mattered once, it should still matter later.",
    href: "/a-i-r-o-n/vault",
  },
  {
    name: "One-Touch Startup™",
    eyebrow: "Startup structure and proof",
    description: "Startup should be controlled, provable, and repeatable.",
    href: "/a-i-r-o-n/one-touch-startup",
  },
  {
    name: "C.A.T.A.S.T.R.O.P.H.E.™",
    eyebrow: "Abnormal-event human protection",
    description: "When everything else goes silent, protect your people.",
    href: "/a-i-r-o-n/catastrophe",
  },
  {
    name: "Dingfelder Industrial Campus",
    eyebrow: "Workforce activation and simulation",
    description: "Build real readiness before consequence arrives.",
    href: "/a-i-r-o-n/industrial-campus",
  },
];

const specialistReasons = [
  "Different signal weighting",
  "Different baseline logic",
  "Different failure vocabulary",
  "Different operator guidance",
  "Different predictive models",
];

const hotEndStack = [
  "Furnace Doctor",
  "Fortune Teller",
  "One-Touch Startup",
];

const continuityStack = [
  "V.A.U.L.T.",
  "Fortune Teller",
  "One-Touch Startup",
];

const safetyStack = [
  "C.A.T.A.S.T.R.O.P.H.E.",
  "Safety / Tree of Knowledge",
  "V.A.U.L.T.",
];

const workforceStack = [
  "Dingfelder Industrial Campus",
  "PLAY YOUR WORK",
  "One-Touch Startup",
];

const relatedPages = [
  {
    title: "Doctor Family",
    href: "/a-i-r-o-n/doctor-family",
    description: "See how the specialist architecture fits together.",
  },
  {
    title: "Industry. Period.",
    href: "/a-i-r-o-n/industry-period",
    description: "Read the strategic position behind the system.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start the next conversation.",
  },
];

export default function AIRONModulesPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/modules" mainClassName="airon-modules-page">
      <HeroBlock
        eyebrow="One nervous system. Multiple specialist layers."
        title="A.I.R.O.N. Modules"
        subhead="Specialist pages for guidance, diagnostics, prediction, memory, startup, safety, and workforce activation."
        body={
          <>
            <p>
              A.I.R.O.N. expands through specialist modules that can be deployed
              on one asset, one line, one process block, or the full operation.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the System Overview",
          href: "/a-i-r-o-n",
        }}
      >
        <div className="hero-image-placeholder">
          <span>Clean A.I.R.O.N. brand treatment or structure visual goes here</span>
        </div>
      </HeroBlock>

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="One umbrella system. Specialist capabilities underneath." />
          <p>
            A.I.R.O.N. is the umbrella nervous system that remembers, protects,
            guides, and improves while the operation runs.
          </p>
          <p>
            The modules are the specialist layers that let that intelligence
            focus on hot-end truth, predictive timing, memory and continuity,
            startup structure, abnormal-event protection, and workforce activation.
          </p>

          <div className="doctrine-block">
            <p><strong>A.I.R.O.N. is the nervous system.</strong></p>
            <p><strong>The modules are the specialists.</strong></p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Choose the next page by problem, not by guesswork" />
          <div className="module-grid">
            {primaryModules.map((module) => (
              <ModuleCard
                key={module.name}
                name={module.name}
                eyebrow={module.eyebrow}
                description={module.description}
                href={module.href}
                linkLabel="Open page →"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Different processes need different specialists" />
          <p className="center narrow-text">
            A melt deck does not drift like a furnace. A foundry does not fail
            like a food plant. A startup problem does not behave like a memory
            problem. A live abnormal event does not behave like a predictive
            maintenance problem.
          </p>
          <CapabilityGrid items={specialistReasons} compact />
          <div className="cta-row center">
            <a className="btn btn-secondary" href="/a-i-r-o-n/doctor-family">
              See the Doctor Family
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Deploy one layer — or several together" />
          <div className="comparison-grid">
            <div className="comparison-card">
              <h3>Hot-End Stack</h3>
              <ul>
                {hotEndStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="comparison-card">
              <h3>Continuity Stack</h3>
              <ul>
                {continuityStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="comparison-card">
              <h3>Safety / Abnormal-Event Stack</h3>
              <ul>
                {safetyStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="comparison-card">
              <h3>Workforce / Campus Stack</h3>
              <ul>
                {workforceStack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Where should you start?" />
          <div className="use-case-grid">
            <div className="use-case-card">
              <h3>Hot-end / furnace issue</h3>
              <ul>
                <li><a href="/a-i-r-o-n/furnace-doctor">Furnace Doctor</a></li>
                <li><a href="/a-i-r-o-n/fortune-teller">Fortune Teller</a></li>
              </ul>
            </div>

            <div className="use-case-card">
              <h3>Startup inconsistency / tribal startup</h3>
              <ul>
                <li><a href="/a-i-r-o-n/one-touch-startup">One-Touch Startup</a></li>
                <li><a href="/a-i-r-o-n/vault">V.A.U.L.T.</a></li>
              </ul>
            </div>

            <div className="use-case-card">
              <h3>Emergency / abnormal-event concern</h3>
              <ul>
                <li><a href="/a-i-r-o-n/catastrophe">C.A.T.A.S.T.R.O.P.H.E.</a></li>
                <li><a href="/a-i-r-o-n/safety">Safety / Tree of Knowledge</a></li>
              </ul>
            </div>

            <div className="use-case-card">
              <h3>Workforce / training / readiness</h3>
              <ul>
                <li><a href="/a-i-r-o-n/industrial-campus">Dingfelder Industrial Campus</a></li>
                <li><a href="/a-i-r-o-n/play-your-work">PLAY YOUR WORK</a></li>
              </ul>
            </div>

            <div className="use-case-card">
              <h3>Strategic / brand understanding</h3>
              <ul>
                <li><a href="/a-i-r-o-n">A.I.R.O.N. Home</a></li>
                <li><a href="/a-i-r-o-n/industry-period">Industry. Period.</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with the architecture if you need fit clarity. Move into the specialist page when you know which process truth matters most."
      />

      <CTAFooterBand
        headline="Start where the problem is. Expand when the system is ready."
        primaryCTA={{
          label: "Request a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Homepage",
          href: "/a-i-r-o-n",
        }}
        supportingLine="One asset. One line. One module. Or the full operation."
      />
    </SiteLayout>
  );
}
