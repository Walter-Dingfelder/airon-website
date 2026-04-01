import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

/**
 * A.I.R.O.N. Doctor Family source file — refactored
 *
 * Intended path:
 *   src/pages/a-i-r-o-n/doctor-family.tsx
 *
 * Notes:
 * - Example page using shared layout and shared core components.
 * - Import paths should be adjusted to match your final repo structure.
 */

const whySpecialists = [
  "Different signal weighting",
  "Different baseline logic",
  "Different failure vocabulary",
  "Different operator guidance",
  "Different predictive models",
];

const meltDoctorFocus = [
  "Melt deck behavior",
  "Thermal continuity",
  "Power / current / voltage behavior",
  "Refractory and heat-loss patterns",
  "Charge / feed influence on melt stability",
  "Holding and transfer conditions",
  "Weak thermal-process drift before quality or downtime consequence",
];

const furnaceDoctorFocus = [
  "Furnaces",
  "Burners",
  "Electric melt systems",
  "Thermal zones",
  "Conditioned hot-end delivery",
  "Related thermal-process behavior where early drift matters",
];

const foundryDoctorFocus = [
  "Melt",
  "Mold line interaction",
  "Sand systems",
  "Shakeout",
  "Reclamation",
  "Dust collection",
  "Cooling",
  "Transport",
  "Finishing",
  "Downtime causality across departments",
];

const withoutFamily = [
  "Process language gets blurred",
  "Signal weighting gets weaker",
  "Guidance becomes less credible",
  "Users feel the system is too generic",
];

const withFamily = [
  "Process truth becomes sharper",
  "Language fits the operation",
  "Users trust the model faster",
  "Specialist conversations start sooner",
];

const relatedPages = [
  {
    title: "Furnace Doctor™",
    href: "/a-i-r-o-n/furnace-doctor",
    description: "Hot-end advisory specialist.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description: "Predictive timing and action windows.",
  },
  {
    title: "A.I.R.O.N. Home",
    href: "/a-i-r-o-n",
    description: "See the full system overview.",
  },
  {
    title: "Modules Overview",
    href: "/a-i-r-o-n/modules",
    description: "See the system’s specialist layers.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start the next conversation.",
  },
];

export default function AIRONDoctorFamilyPageRefactored(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/doctor-family" mainClassName="airon-architecture-page doctor-family-page">
      <HeroBlock
        eyebrow="One nervous system. Many specialists."
        title="The Doctor Family™"
        supportingLine="Powered by A.I.R.O.N.™"
        subhead="Right doctor. Right process. Right truth."
        body={
          <>
            <p>
              A.I.R.O.N. is the umbrella system. The Doctor Family is how that
              intelligence specializes.
            </p>
            <p>
              Different processes speak different physical languages. Different
              processes drift differently. Different processes fail differently.
              That is why A.I.R.O.N. can deploy specialist Doctors tailored to
              the physics, risks, signals, and failure patterns of the process
              they serve.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Specialist Fit Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Pages",
          href: "#related-pages",
        }}
      >
        <div className="hero-image-placeholder">
          <span>Approved industrial architecture / specialist-system image goes here</span>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="One umbrella system. Specialist layers underneath."
        paragraphs={[
          "A.I.R.O.N. is the umbrella nervous system that remembers, protects, guides, and improves.",
          "The Doctor Family is the specialist advisory and predictive layer tuned to specific process classes.",
          "A.I.R.O.N. is the nervous system. The Doctors are the specialists.",
        ]}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading title="Different processes need different truth models" />
          <p className="center narrow-text">
            A melt deck does not drift like a furnace. A foundry does not fail
            like a food plant. A burner system does not behave like a sand loop.
            A startup problem does not read the same way as a memory problem.
          </p>
          <CapabilityGrid items={whySpecialists} compact />
          <p className="support-line center">
            The umbrella stays consistent. The specialist changes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Melt Doctor™"
            title="For melt decks, melt systems, thermal continuity, and heat-driven production"
          />
          <p className="center narrow-text">
            Melt Doctor is built for operations where molten material, thermal
            stability, power behavior, charge behavior, holding, transfer, and
            temperature integrity drive everything.
          </p>
          <CapabilityGrid items={meltDoctorFocus} />
          <div className="doctrine-block top-gap">
            <p><strong>Melt Doctor watches the melt before the melt watches the clock.</strong></p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            eyebrow="Furnace Doctor™"
            title="For furnaces, burners, electric melt, and hot-end process stability"
          />
          <p className="center narrow-text">
            Furnace Doctor is the hot-end specialist. It uses process,
            electrical, acoustic, vibration, and command-response evidence
            together to detect hot-end truth before hot-end trouble.
          </p>
          <CapabilityGrid items={furnaceDoctorFocus} compact />
          <div className="cta-row center top-gap">
            <a className="btn btn-secondary" href="/a-i-r-o-n/furnace-doctor">
              See Furnace Doctor
            </a>
          </div>
          <div className="doctrine-block top-gap">
            <p><strong>If the hot end whispers, Furnace Doctor hears it.</strong></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Foundry Doctor™"
            title="For foundry-wide operational continuity"
          />
          <p className="center narrow-text">
            Foundry Doctor sits wider than melt alone. It is built for the total
            foundry battlefield and helps the system understand the foundry as
            one living organism instead of a collection of separate machines.
          </p>
          <CapabilityGrid items={foundryDoctorFocus} />
          <div className="doctrine-block top-gap">
            <p><strong>Foundry Doctor sees the foundry as one living system.</strong></p>
          </div>
        </div>
      </section>

      <ContrastBlock
        title="One architecture. Better process fit."
        leftTitle="Without family structure"
        leftItems={withoutFamily}
        rightTitle="With family structure"
        rightItems={withFamily}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <p className="center narrow-text">
            The Doctor Family matters because it lets A.I.R.O.N. stay
            consistent while still speaking correctly to melt people, foundry
            people, maintenance, reliability, operations, and leadership.
          </p>
        </div>
      </section>

      <div id="related-pages">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. pages"
          items={relatedPages}
          supportingLine="Start with the architecture if you need fit clarity. Move into the specialist page when you know which process truth matters most."
        />
      </div>

      <CTAFooterBand
        headline="Choose the specialist that fits the process. Keep the system consistent above it."
        primaryCTA={{
          label: "Request a Specialist Fit Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Modules",
          href: "/a-i-r-o-n/modules",
        }}
        supportingLine="Right doctor. Right process. Right truth."
      />
    </SiteLayout>
  );
}
