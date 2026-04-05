import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const whyFamilyPoints = [
  "Different processes need different signal weighting",
  "Different processes need different baseline logic",
  "Different processes need different failure vocabulary",
  "Different processes need different operator guidance",
  "Different processes need different predictive models",
  "The umbrella stays consistent, but the specialist changes",
];

const doctorScopePoints = [
  "A Doctor can be created for a full machine",
  "A Doctor can be assigned to one component",
  "A Doctor can focus on a subsystem",
  "A Doctor can be built for one process block",
  "A Doctor can watch one portion of a line",
  "A Doctor can be shaped around whatever slice of the operation needs specialized attention",
];

const doctorExamplePoints = [
  "Furnace Doctor™",
  "Foundry Doctor™",
  "Servo Doctor™",
  "Motor Doctor™",
  "Crane Doctor™",
  "Press Doctor™",
  "Baghouse Doctor™",
  "Cooling Tower Doctor™",
];

const familyBenefitPoints = [
  "Sharpen process truth",
  "Filter out irrelevant I/O and noise",
  "Use the right vocabulary for the right process",
  "Match guidance to real operating conditions",
  "Improve user trust through specialist fit",
  "Accelerate troubleshooting by narrowing scope correctly",
  "Support better predictive models by starting from cleaner domain truth",
  "Make the full A.I.R.O.N. system feel less generic and more credible",
];

const relatedPages = [
  {
    title: "Furnace Doctor™",
    href: "/a-i-r-o-n/furnace-doctor",
    description:
      "See the homepage-facing hot-end specialist already active inside the Doctor Family™.",
  },
  {
    title: "Foundry Doctor™",
    href: "/a-i-r-o-n/foundry-doctor",
    description:
      "See the wider foundry-organism example that proves a Doctor can sit above one machine when the truth lives at the operational level.",
  },
  {
    title: "Motor Doctor™",
    href: "/a-i-r-o-n/motor-doctor",
    description:
      "See the rotating-equipment specialist built to connect electrical behavior, mechanical strain, heat, starts, and driven-load consequence.",
  },
  {
    title: "Predictive & Diagnostics",
    href: "/a-i-r-o-n/predictive-diagnostics",
    description:
      "See how Doctor modules, Ghost Busting, Fortune Teller™, and the Predictive Breakpoint® fit together.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start a conversation about the right Doctor fit for a machine, subsystem, process, or whole operation.",
  },
];

export default function DoctorFamilyPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/doctor-family"
      mainClassName="airon-doctor-family-page"
    >
      <HeroBlock
        eyebrow="One nervous system. Many specialists."
        title="THE DOCTOR FAMILY™"
        supportingLine="Right doctor. Right process. Right truth."
        subhead="A.I.R.O.N. is the umbrella system. The Doctor Family™ is how that intelligence specializes."
        body={
          <>
            <p>
              Different processes speak different physical languages. Different
              processes drift differently. Different processes fail differently.
            </p>
            <p>
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
          label: "See Related Modules",
          href: "/a-i-r-o-n/modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Umbrella</h3>
            <p>
              A.I.R.O.N. stays consistent as the nervous system that ties the
              whole architecture together.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Specialist</h3>
            <p>
              The Doctor changes to match the real machine, process, subsystem,
              or trouble area that needs special care.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What the Doctor Family™ is"
        paragraphs={[
          "The Doctor Family™ is the specialist architecture inside A.I.R.O.N.",
          "A.I.R.O.N. is the nervous system. The Doctors are the specialists.",
          "The system does not force every machine, subsystem, or process through one generic truth model. It creates the right specialist view for the job.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why the family structure matters"
            subtitle="Different processes need different truth models."
            align="center"
          />
          <CapabilityGrid items={whyFamilyPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Doctors are built for the user, not from a closed catalog"
            subtitle="Doctor modules are created specifically for the user’s device, component, subsystem, or process."
            align="center"
          />
          <CapabilityGrid items={doctorScopePoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              Furnace Doctor™ is presented here as one example of what can be
              created for any component that needs special attention in your
              system.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Example Doctors"
            subtitle="Examples, not limits."
            align="center"
          />
          <CapabilityGrid items={doctorExamplePoints} compact />
          <p className="support-line center">
            The point is not to present a narrow list. The point is to make
            clear that A.I.R.O.N. creates the right Doctor for the real machine
            or process need.
          </p>
        </div>
      </section>

      <TextIntroBlock
        title="Furnace Doctor™ as the example"
        paragraphs={[
          "Furnace Doctor™ is the clearest public example because it already has a strong, well-defined role as the hot-end advisory specialist.",
          "It is built to detect weak thermal-process signals before they become instability, quality loss, equipment damage, startup failure, or forced downtime.",
          "If the hot end whispers, Furnace Doctor™ hears it.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="Foundry Doctor™ as the wider example" />
          <p>
            Foundry Doctor™ proves that some Doctors need to sit wider than one cabinet,
            one burner, or one drive.
          </p>
          <p>
            It is built for foundry-wide operational continuity and is meant to see the
            foundry as one living organism instead of a collection of separate machines.
          </p>
          <p>
            That matters because it shows the family can scale narrowly, broadly, by asset,
            by line, by process, or by whole operational battlefield.
          </p>
          <div className="cta-row">
            <a className="btn btn-secondary" href="/a-i-r-o-n/foundry-doctor">
              See Foundry Doctor™
            </a>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow">
          <SectionHeading title="Motor Doctor™ as the next specialist example" />
          <p>
            Motor Doctor™ proves the family can also sit tightly on one of industry's most common
            and most repeated failure stories: rotating equipment under real electrical and process load.
          </p>
          <p>
            It is built to read heat, current, starts, trip history, drive behavior, mounted condition,
            and driven-load strain together so the site can see whether the real problem lives in the motor,
            the control, or the process being asked of it.
          </p>
          <p>
            That matters because one ordinary-looking motor can still become a plant-level consequence
            when its truth stays fragmented.
          </p>
          <div className="cta-row">
            <a className="btn btn-secondary" href="/a-i-r-o-n/motor-doctor">
              See Motor Doctor™
            </a>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="The relationship to Fortune Teller™"
        paragraphs={[
          "The Doctors tell the truth now. Fortune Teller™ sits above the Doctor Family™ as the forward-state predictive layer.",
          "The family relationship is simple: Doctor equals specialized truth now. Fortune Teller™ equals what that truth means next.",
          "That is a very strong architecture story because it keeps specialization and prediction connected without making either one generic.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What the Doctor Family™ can do"
            subtitle="Specialist fit makes the full A.I.R.O.N. system feel sharper, more credible, and more useful."
            align="center"
          />
          <CapabilityGrid items={familyBenefitPoints} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why it matters"
        paragraphs={[
          "A generic system can observe a lot and still fail to help. If it does not speak the right process language, weight the right signals, and guide the right people correctly, it will still feel vague.",
          "The Doctor Family™ solves that. It lets one A.I.R.O.N. architecture still speak correctly to the real machine, the real process, and the real people depending on it.",
          "That is where the family structure becomes commercially powerful.",
        ]}
        sectionClassName="section section-alt"
      />

      <TextIntroBlock
        title="Position statement"
        paragraphs={[
          "A.I.R.O.N. is the nervous system. The Doctors are the specialists.",
          "The umbrella stays consistent. The specialist changes.",
          "That is how A.I.R.O.N. can remain one system while still speaking accurately to the real machine, the real process, and the real people depending on it.",
        ]}
      />

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Specialists. Process truth. Prediction. Real fit."
      />

      <CTAFooterBand
        headline="A.I.R.O.N. is the nervous system. The Doctors are the specialists."
        primaryCTA={{
          label: "Request a Specialist Fit Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="Not every machine needs the same truth model. Not every process needs the same specialist."
      />
    </SiteLayout>
  );
}
