import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import furnaceDoctorHero from "../../assets/furnace-doctor-hero.webp";

const watchedSignals = [
  "Command vs actual",
  "Startup vs production behavior",
  "Thermal response vs learned baseline",
  "Acoustic behavior",
  "Vibration behavior",
  "Electrical behavior",
  "Conditioned hot-end delivery stability",
];

const capabilities = [
  "Monitor live hot-end behavior by zone, asset, or system",
  "Compare command to actual response in real time",
  "Detect weak drift before visible consequence",
  "Capture startup signatures and tighten into production precision mode",
  "Identify signature loss, abnormal resonance, and unstable behavior early",
  "Support operators and maintenance with evidence-backed advisory guidance",
  "Separate thermal-process truth from noise, habit, and opinion",
];

const bestFit = [
  "Remelt furnaces",
  "Glass melting systems",
  "Burners and combustion trains",
  "Electric melt systems",
  "Thermal delivery and conditioning sections",
  "Heat-driven process equipment where early drift matters",
];

const withoutFD = [
  "Drift stays buried longer",
  "Startups remain harder to read",
  "Symptoms get interpreted late",
  "Maintenance may react later than it should",
];

const withFD = [
  "Drift becomes visible earlier",
  "Signatures become trackable",
  "Hot-end behavior becomes easier to understand",
  "Action can start before damage or forced downtime",
];

const relatedPages = [
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description: "Predictive timing and action windows.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description: "Governed startup and proof logic.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description: "Truth, memory, and recoverable lessons.",
  },
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "Furnace Doctor™ is one specialist inside the broader Doctor Family™ architecture.",
  },
];

export default function FurnaceDoctorPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/furnace-doctor"
      mainClassName="airon-module-page furnace-doctor-page"
    >
      <HeroBlock
        eyebrow="A.I.R.O.N.’s hot-end advisory specialist"
        title="Furnace Doctor™"
        subhead="Hot-end truth before hot-end trouble."
        body={
          <>
            <p>
              Furnace Doctor™ is tailored for furnaces, burners, electric melt
              systems, thermal zones, conditioned hot-end delivery, and related
              thermal-process behavior where early drift matters.
            </p>
            <p>
              It is built to detect weak thermal-process signals before they
              become instability, quality loss, equipment damage, startup
              failure, or forced downtime.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Hot-End Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="hero-demo-visual">
          <img
            src={furnaceDoctorHero}
            alt=""
            loading="eager"
            decoding="async"
          />
        </div>
      </HeroBlock>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="doctrine-block">
            <p className="eyebrow">Part of the Doctor Family™</p>
            <p>
              Furnace Doctor™ is one specialist inside the larger Doctor Family™
              architecture. A.I.R.O.N. can create Doctors for any component,
              subsystem, device, or process that needs special care.
            </p>
            <div className="cta-row">
              <a className="btn btn-secondary" href="/a-i-r-o-n/doctor-family">
                See the Doctor Family™
              </a>
            </div>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Built for the hot end"
        paragraphs={[
          "Furnace Doctor™ is A.I.R.O.N.’s specialist layer for heat-driven process behavior where early drift matters.",
          "It is designed to help operations, maintenance, and engineering see hot-end truth earlier and act with evidence instead of guesswork.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Furnace Doctor™ is not:</h3>
            <ul>
              <li>The universal doctor for every asset class</li>
              <li>A replacement for control systems</li>
              <li>A safety interlock</li>
              <li>A decorative dashboard</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="What Furnace Doctor™ watches" />
          <CapabilityGrid items={watchedSignals} />
          <p className="support-line center">
            It pays attention to heat-input response, blower and burner
            behavior, electric melt behavior, thermal-zone stability,
            conditioned delivery stability, startup signatures, and signature
            loss or abnormal resonance.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="What Furnace Doctor™ can do" />
          <CapabilityGrid items={capabilities} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Best where heat drives consequence" />
          <div className="two-col">
            <div>
              <ul>
                {bestFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="callout-card">
              <p>
                If the problem begins in the hot end, Furnace Doctor™ is one of
                the strongest entry points into the A.I.R.O.N. system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Advisory, not theatrical"
        paragraphs={[
          "Furnace Doctor™ is not a replacement for certified control or safety systems.",
          "It is an advisory instrument built to shorten recognition time, improve understanding, and focus attention where it matters most.",
        ]}
        sectionClassName="section"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>If the hot end whispers, Furnace Doctor™ hears it.</strong>
            </p>
          </div>
        </div>
      </section>

      <ContrastBlock
        title="Hot-end systems rarely fail without warning. They drift first."
        leftTitle="Without Furnace Doctor™"
        leftItems={withoutFD}
        rightTitle="With Furnace Doctor™"
        rightItems={withFD}
      />

      <section className="section">
        <div className="container narrow">
          <p className="center narrow-text">
            The warning usually exists. The problem is that it is often too
            weak, too buried, too fragmented, too noisy, or too dependent on
            one person noticing at the right moment.
          </p>
        </div>
      </section>

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Start with hot-end truth. Expand into prediction, startup, memory, and the broader Doctor Family™ when the system is ready."
        />
      </div>

      <CTAFooterBand
        headline="Start where the heat matters most."
        primaryCTA={{
          label: "Request a Hot-End Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="One furnace. One line. One hot-end problem. Or the full operation."
      />
    </SiteLayout>
  );
}
