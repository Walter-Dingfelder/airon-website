import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import SystemPlayerBlock from "../../components/doctrine/SystemPlayerBlock";
import industrialCampusHero from "../../assets/industrial-campus-hero.png";
import industrialCampusIrisGasMeter from "../../assets/industrial-campus-iris-gas-meter.png";

/**
 * A.I.R.O.N. Dingfelder Industrial Campus source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/industrial-campus.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const campusWhatItIs = [
  "A professional simulation environment",
  "A workforce activation platform",
  "A guided familiarization campus",
  "A skill-transfer engine",
  "A Continuous Improvement development space",
  "A governed industrial learning system",
];

const workforceSkills = [
  "Reading changing conditions",
  "Learning through repetition",
  "Scanning live status",
  "Reacting to dynamic events",
  "Improving through feedback",
  "Coordinating across systems and roles",
];

const campusSupports = [
  "Build comfort with industrial systems",
  "Learn process flow before live exposure",
  "Rehearse startup, shutdown, and abnormal-event logic",
  "Understand role responsibilities",
  "Sharpen observation, judgment, and response",
  "Carry system memory into live work instead of starting cold every time",
];

const environments = [
  "Foundry operations",
  "Melt systems",
  "Oil and gas",
  "Propane storage and transfer",
  "Research and development",
  "Manufacturing",
  "Process operations",
  "Utility systems",
  "Environmental and nature study",
  "Guided safety and abnormal-event rehearsal",
  "Continuous Improvement development and rehearsal",
];


const irisVisualCardStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(7,18,35,0.94), rgba(5,13,26,0.98))",
  border: "1px solid rgba(120,150,190,0.22)",
  borderRadius: "24px",
  padding: "1rem",
  boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
};

const irisVisualImageStyle: React.CSSProperties = {
  width: "100%",
  display: "block",
  borderRadius: "18px",
  border: "1px solid rgba(120,150,190,0.16)",
};

const irisCaptionTitleStyle: React.CSSProperties = {
  margin: "0.95rem 0 0.35rem",
  fontSize: "1.05rem",
  fontWeight: 700,
  color: "#f4f7fb",
};

const irisCaptionTextStyle: React.CSSProperties = {
  margin: 0,
  color: "rgba(226,234,245,0.82)",
  lineHeight: 1.6,
  fontSize: "0.98rem",
};

const relatedPages = [
  {
    title: "PLAY YOUR WORK - WORK YOUR PLAY",
    href: "/a-i-r-o-n/play-your-work-work-your-play",
    description: "Professional workforce activation and skill transfer.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description: "Startup rehearsal, structure, and proof logic.",
  },
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description: "Abnormal-event readiness and human protection.",
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

export default function AIRONIndustrialCampusPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/industrial-campus" mainClassName="airon-branch-page industrial-campus-page">
      <HeroBlock
        eyebrow="Industry. Period."
        title="A.I.R.O.N. – Dingfelder Industrial Campus"
        subhead="A professional industrial campus for readiness, skill activation, simulation, and Continuous Improvement."
        body={
          <>
            <p>Dingfelder Industrial Campus is not a game world.</p>
            <p>
              It is a professional industrial environment built under A.I.R.O.N.
              governance to help people learn faster, prepare better, and
              perform with more confidence before real consequence arrives.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start a Campus Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Workforce Vision",
          href: "/a-i-r-o-n/play-your-work-work-your-play",
        }}
      >
        <div className="hero-demo-visual">
          <img
            src={industrialCampusHero}
            alt=""
            loading="eager"
            decoding="async"
          />
        </div>
      </HeroBlock>

      <section className="section">
        <div className="container">
          <SectionHeading title="Built for serious industrial use" />
          <CapabilityGrid items={campusWhatItIs} />
          <div className="contrast-card top-gap">
            <h3>It is not:</h3>
            <ul>
              <li>Childish entertainment</li>
              <li>Shallow gamification</li>
              <li>Decorative virtual fluff</li>
              <li>A replacement for real operations</li>
            </ul>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Build readiness before consequence"
        paragraphs={[
          "Plants still lose too much time and money because expertise is trapped in people, onboarding is too slow, fill-in operators are under-supported, process familiarity comes too late, and startup or abnormal-event logic is learned under pressure instead of before it.",
          "Dingfelder Industrial Campus exists to reduce that gap by giving people a place to build readiness before they pay for weak familiarity in the field.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="The gamer is already in your plant. The opportunity is to activate their skill." />
          <p className="center narrow-text">
            The modern workforce already carries valuable interactive skills.
            Those abilities do not disappear when people enter industry. Most
            operations simply never learned how to activate their skill
            professionally.
          </p>
          <CapabilityGrid items={workforceSkills} />
          <p className="support-line center">
            This is not about making work childish. It is about making readiness real.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What people can do inside the campus" />
          <CapabilityGrid items={campusSupports} />
          <p className="support-line center">
            This is where workforce familiarization, role-based guided learning,
            startup rehearsal, abnormal-event readiness, and expert knowledge
            transfer begin working together.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="One governed campus. Many industrial environments." />
          <CapabilityGrid items={environments} />
          <p className="support-line center">
            The point is not novelty. The point is governed, repeatable
            exposure to reality-shaped systems.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What guided operation actually looks like"
            subtitle="IRIS HUD familiarization at the Natural Gas Metering Station"
            align="center"
          />
          <div className="center narrow-text" style={{ marginBottom: "1.5rem" }}>
            Industrial Campus should not feel like a detached map. It should let the learner stand inside the system, read live context, see station status, and build confidence with the same governed interface logic that matters in the field.
          </div>
          <figure style={irisVisualCardStyle}>
            <img
              src={industrialCampusIrisGasMeter}
              alt="IRIS HUD view at the Natural Gas Metering Station inside the Dingfelder Industrial Campus"
              loading="lazy"
              decoding="async"
              style={irisVisualImageStyle}
            />
            <figcaption>
              <h3 style={irisCaptionTitleStyle}>IRIS HUD — Natural Gas Metering Station</h3>
              <p style={irisCaptionTextStyle}>
                This is the operator view inside the campus: IRIS mode active, role-aware interface visible, live directional and environmental context available, and a station-level interaction point placed directly in front of the learner. It shows how A.I.R.O.N. turns the campus from a broad overview into guided operational familiarity.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <SystemPlayerBlock
        title="Governed by A.I.R.O.N."
        systemText="SYSTEM enforces structure."
        playerText="PLAYER retains judgment."
      />

      <TextIntroBlock
        title="Continuous Improvement should be practiced, not just discussed."
        paragraphs={[
          "Continuous Improvement should not live only in meetings, reports, after-the-fact analysis, or executive summaries.",
          "It should be rehearsed, learned, tested, and strengthened in an environment that helps people build better habits before they pay for weak ones in the field.",
          "That is why Dingfelder Industrial Campus belongs inside the broader A.I.R.O.N. vision.",
        ]}
        sectionClassName="section"
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Start with readiness where the human and system meet. Expand into startup, safety, and system architecture when the path is clear."
      />

      <CTAFooterBand
        headline="Build real readiness before consequence arrives."
        primaryCTA={{
          label: "Start a Campus Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Workforce Vision",
          href: "/a-i-r-o-n/play-your-work-work-your-play",
        }}
        supportingLine="Modern workforce. Real industry. Live skill transfer."
      />
    </SiteLayout>
  );
}
