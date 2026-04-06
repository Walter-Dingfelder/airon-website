import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ModuleCard from "../../components/core/ModuleCard";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import SystemPlayerBlock from "../../components/doctrine/SystemPlayerBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import HomeIntroPopup from "../../components/core/HomeIntroPopup";
import homeHeroOperatorPanel from "../../assets/airon-home-hero-operator-panel.png";

const featuredModules = [
  {
    name: "Furnace Doctor™",
    description: "The concrete specialist on the homepage — proving how the Doctor family reads real equipment truth now.",
    href: "/a-i-r-o-n/furnace-doctor",
  },
  {
    name: "Fortune Teller™",
    description: "Predictive Breakpoint® logic, action timing, and earlier clarity before consequence arrives.",
    href: "/a-i-r-o-n/fortune-teller",
  },
  {
    name: "V.A.U.L.T.®",
    description: "Custody, context, recall, IMP™ packets, and protected operational memory that does not die when people leave.",
    href: "/a-i-r-o-n/vault",
  },
  {
    name: "C.A.T.A.S.T.R.O.P.H.E.™",
    description: "Human protection, mobile continuity, guided recovery, and preserved truth when normal operation collapses.",
    href: "/a-i-r-o-n/catastrophe",
  },
  {
    name: "One-Touch Startup™",
    description: "Governed startup, annunciation, permissives, proof-before-progression, and calmer restarts.",
    href: "/a-i-r-o-n/one-touch-startup",
  },
  {
    name: "Doctor Family™",
    description: "A.I.R.O.N. is the nervous system. The Doctors are the specialists — assigned by machine, component, subsystem, or process slice.",
    href: "/a-i-r-o-n/doctor-family",
  },
];

const coreCapabilities = [
  "Continuously observe real machine, process, environmental, and human-state truth instead of waiting for reports to describe what already happened",
  "Protect people, preserve machines, and surface risk early enough that many catastrophes shrink into manageable decisions",
  "Hold the baseline, detect drift, preserve proof, and keep Continuous Improvement alive when teams, priorities, and leadership change",
  "Capture lucky wins, real losses, substitutions, handoffs, and recoveries as usable institutional memory instead of letting them evaporate",
  "Project expertise into live operation so fill-ins, new operators, and stressed crews are not abandoned to uncertainty",
  "Turn truth into guided action through Doctor modules, Fortune Teller™, C.A.T.A.S.T.R.O.P.H.E.™, Better Days, and governed startup logic",
  "Operate as an industrial culture, not a version number, and scale from one asset to a full facility nervous system",
  "Improve quietly in the background — without demanding that the plant rip out what already works to begin getting value",
];

const culturePoints = [
  "Continuous Improvement is not a meeting cycle. It becomes a living behavior inside the operation.",
  "Safety is not a department alone. It becomes a property of a system that can feel uncertainty forming.",
  "Truth is not allowed to become political. Evidence stays time-aligned, sensor-anchored, and recoverable.",
  "Training is not separated from reality. Offline truth and online truth stay aligned so the floor does not teach one thing and enforce another.",
  "Human value rises, not falls. The burden of remembering, monitoring, and policing shifts off people so judgment, mentorship, creativity, and leadership can rise.",
  "Catastrophe stops being a blind panic event. It becomes a guided human response supported by preserved truth, mobile continuity, and structured recovery.",
];

const operatingLaws = [
  "Human safety",
  "Machine safety",
  "Quality",
  "Waste reduction",
  "Continuous Improvement",
  "Preservation of the Continuous Improvement itself",
];

const withoutAIRON = [
  "Continuous Improvement depends on heroes, memory, politics, and whoever is still standing in the room",
  "Standards go stale quietly while shadow methods replace documented truth",
  "Handoffs, substitutions, and abnormal conditions shrink confidence before anyone can explain why",
  "Training truth and operating truth drift apart until uncertainty becomes the most dangerous condition in the plant",
  "Catastrophe is discovered late and then reconstructed from fragments, opinions, and pressure",
  "The plant forgets lucky wins, repeats painful lessons, and keeps paying to relearn what it once already knew",
];

const withAIRON = [
  "The baseline stays alive because the system remembers, hunts drift, and promotes proven winners safely",
  "Truth is captured while reality happens — not reconstructed after the damage, politics, or confusion settle in",
  "Skill persists through handoffs, substitutions, and turnover because expertise becomes live guidance instead of private memory",
  "Safety, quality, uptime, and learning stop competing because they are governed by the same incentives",
  "C.A.T.A.S.T.R.O.P.H.E.™ protects people and guides recovery when normal operation is gone or compromised",
  "The plant becomes a nervous system that can feel, remember, protect, and improve itself over time",
];

const relatedLinks = [
  {
    title: "Modules",
    href: "/a-i-r-o-n/modules",
    description:
      "See the architecture map, deployment stack, facility backbone, OT / IT boundary, and where each major capability lives.",
  },
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See why no human can own Continuous Improvement alone — and how A.I.R.O.N. stewards baseline, drift, and proof.",
  },
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See the sensory layer, truth capture, deployment boundary, 4M + A causality, startup governance, and living machine behavior.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See why uncertainty, handoffs, and live change are safety events — and why A.I.R.O.N. treats them that way before harm appears.",
  },
  {
    title: "Training Philosophy",
    href: "/a-i-r-o-n/training-philosophy",
    description:
      "See why training truth and operating truth must match — and how expertise survives substitution in real time.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start the conversation around deployment, controls posture, Doctor architecture, C.A.T.A.S.T.R.O.P.H.E.™, or a broader facility rollout.",
  },
];

export default function AIRONHomePageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n" mainClassName="airon-home">
      <HomeIntroPopup />

      <HeroBlock
        eyebrow="Industrial culture, not a number."
        title="A.I.R.O.N.™"
        supportingLine='Pronounced “Iron”'
        subhead="The living industrial nervous system that remembers, protects, guides, and improves while the operation is still moving."
        body={
          <>
            <p>
              A.I.R.O.N. is not a dashboard, not a version label, and not a
              decorative layer laid on top of industry. It is a living system
              that senses drift, captures truth, preserves memory, projects
              expertise, and keeps raising the baseline safely and purposefully.
            </p>
            <p>
              It exists because human beings should not be asked to carry
              continuous improvement, operational memory, safety certainty, and
              catastrophe recovery by memory alone.
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
          <img src={homeHeroOperatorPanel} alt="A.I.R.O.N. operator interface and industrial guidance surface" loading="eager" decoding="async" />
        </div>
      </HeroBlock>

      <TextIntroBlock
        title='Why the “A” is silent'
        subtitle='A.I.R.O.N.™ — Pronounced “Iron”'
        paragraphs={[
          'The “A” is silent by design. In real operations, autonomy should not demand attention. It should work quietly in the background — sensing drift, capturing wins, protecting people, and raising the baseline safely and purposefully.',
          'A.I.R.O.N. is not a poster. It is a living system that craves change and learns from it. If a capability is written honestly into the system, it becomes part of the plant’s operational memory instead of another forgotten promise.',
        ]}
        sectionClassName="section"
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What makes A.I.R.O.N. different"
            subtitle="Not software theater. Not industrial cosplay. Real continuity under real conditions."
            align="center"
          />
          <CapabilityGrid items={coreCapabilities} compact />
        </div>
      </section>

      <SystemPlayerBlock />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What A.I.R.O.N. changes inside a plant"
            subtitle="It does not simply add visibility. It changes how safety, memory, training, and improvement behave together."
            align="center"
          />
          <CapabilityGrid items={culturePoints} compact />
          <p className="support-line center">
            A.I.R.O.N. does not replace people. It removes what crushes them.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="The operating laws never change"
            subtitle="Governance does not wait for the meeting. It remains active while the plant is alive."
            align="center"
          />
          <CapabilityGrid items={operatingLaws} compact />
          <p className="support-line center">
            These are not slogans. They are the order of priority A.I.R.O.N.
            protects when speed, politics, pressure, or uncertainty try to pull
            the plant somewhere dangerous.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Specialist modules. One nervous system."
            subtitle="A.I.R.O.N. expands through specialist layers that can be assigned to a machine, a component, a subsystem, a process slice, or the full operation."
          />

          <div className="module-grid">
            {featuredModules.map((module) => (
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
        title="The difference is not cosmetic. It is structural."
        subtitle="What happens when Continuous Improvement, safety, truth, skill, and recovery are forced to live inside people alone — versus when the plant itself can remember."
        leftTitle="Without A.I.R.O.N."
        leftItems={withoutAIRON}
        rightTitle="With A.I.R.O.N."
        rightItems={withAIRON}
      />

      <TextIntroBlock
        title="Why this is bigger than a number"
        paragraphs={[
          'Industry 4.0, 5.0, and 6.0 can be useful references, but A.I.R.O.N. is not trying to win a version-number argument. It is building an industrial culture that can feel, remember, protect, and improve itself while humans remain at the center of meaning and direction.',
          'That is why A.I.R.O.N. is not just analytics, not just automation, and not just a training system. It is the structure that allows truth, continuity, and improvement to survive substitution, disruption, leadership change, and catastrophe without resetting the plant back to amnesia.',
        ]}
        sectionClassName="section section-alt"
      />

      <RelatedLinksBlock
        title="Start where your need is clearest"
        items={relatedLinks}
        supportingLine="You do not have to know the vocabulary first. Start from the pressure point, and the system will make the structure visible."
      />

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
        supportingLine="A.I.R.O.N. is an industrial culture, not a number."
      />
    </SiteLayout>
  );
}
