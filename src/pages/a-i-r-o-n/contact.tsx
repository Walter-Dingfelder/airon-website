import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import DiscoveryForm from "../../components/forms/DiscoveryForm";
import ContactBlock from "../../components/forms/ContactBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const relatedPages = [
  {
    title: "A.I.R.O.N. Home",
    href: "/a-i-r-o-n",
    description: "See the full system overview.",
  },
  {
    title: "Modules Overview",
    href: "/a-i-r-o-n/modules",
    description: "Explore the full A.I.R.O.N. architecture.",
  },
  {
    title: "SYSTEM-LIVE / PLAYER-LIVE",
    href: "/a-i-r-o-n/system-live-player-live",
    description: "See how A.I.R.O.N. improves human-to-machine engagement.",
  },
  {
    title: "Training",
    href: "https://training.dingfelder.co/",
    description: "Open the live training environment.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description: "Review the human-protection and abnormal-event layer.",
  },
  {
    title: "Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description: "Explore workforce activation and readiness.",
  },
];

const discoveryIntentOptions = [
  { label: "Controls / automation", value: "controls-automation" },
  { label: "Startup / shutdown / runout", value: "startup-shutdown-runout" },
  { label: "Safety / abnormal-event architecture", value: "safety-abnormal-event" },
  { label: "Predictive maintenance / drift", value: "predictive-drift" },
  { label: "Memory / truth / event history", value: "memory-truth-history" },
  { label: "Continuous improvement / Better Days", value: "continuous-improvement" },
  { label: "Training / workforce / campus", value: "training-workforce-campus" },
  { label: "Full-system discovery", value: "full-system-discovery" },
  { label: "Service / support response planning", value: "service-support" },
  { label: "Something else", value: "something-else" },
];

export default function AIRONContactPage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/contact" mainClassName="airon-contact-page">
      <HeroBlock
        eyebrow="Start the right conversation"
        title="Contact / Discovery"
        subhead="Every operation is different. Every machine has a history. Every plant has its own constraints, people, vendors, and realities."
        body={
          <>
            <p>
              Discovery is where we learn what the operation truly needs and what the
              next practical step should be.
            </p>
            <p>
              Whether the need is controls, startup logic, safety structure,
              predictive support, training, memory preservation, or a broader
              Continuous Improvement architecture, this is the place to begin.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start Discovery",
          href: "#discovery-form",
        }}
        secondaryCTA={{
          label: "Direct Contact",
          href: "#direct-contact",
        }}
      >
        <div className="doctrine-block">
          <p><strong>Keep the customer operating.</strong></p>
          <p>Do not profit from their pain.</p>
          <p>Connect the right people early and keep support practical.</p>
        </div>
      </HeroBlock>

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="What are you here to discuss?" />
          <p>
            You do not need a perfect technical write-up to begin. Pick the closest
            discussion path and start the conversation.
          </p>

          <div className="intent-grid">
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="controls-automation" />
              <span>Controls / automation</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="startup-shutdown-runout" />
              <span>Startup / shutdown / runout</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="predictive-drift" />
              <span>Predictive maintenance / drift</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="memory-truth-history" />
              <span>Memory / truth / event history</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="safety-abnormal-event" />
              <span>Safety / abnormal-event architecture</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="continuous-improvement" />
              <span>Continuous improvement / Better Days</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="training-workforce-campus" />
              <span>Training / workforce / campus</span>
            </label>
            <label className="intent-card">
              <input type="radio" name="intent-preview" value="service-support" />
              <span>Service / support response planning</span>
            </label>
          </div>
        </div>
      </section>

      <DiscoveryForm
        title="Tell us what is hurting"
        introText="You do not need a perfect technical description to start. Tell us what you are looking at, what is hurting, what support structure already exists, and what you want to improve."
        intentOptions={discoveryIntentOptions}
        submitLabel="Request Discovery"
      />

      <section className="section section-alt">
        <div className="container narrow">
          <SectionHeading title="Service & Support" />
          <p>
            A.I.R.O.N. is built to help keep the customer operating.
          </p>
          <p>
            Our goal is not to profit from disruption. Our goal is to support
            continuity, response, and recovery with the right people connected at
            the right time.
          </p>
          <p>
            We work with your IT team, engineering team, maintenance team, and
            existing vendors to help create fast, practical local support when
            needed. That means less waiting days for outside service to arrive,
            and more emphasis on equipping the people already closest to the work.
          </p>
          <p>
            We also make sure the necessary software, programs, and access are in
            trained hands so your team can work effectively with us online or at
            distance when support is needed.
          </p>
          <p>
            When A.I.R.O.N. detects an issue, it can notify our team as well as
            anyone the customer designates on the emergency contact list. That can
            include plant leadership, engineering, maintenance personnel, internal
            responders, approved outside contacts, manufacturers, or vendors
            connected to the affected equipment.
          </p>
          <p>
            Where authorized visibility exists, we can also help initiate remote
            support and coordinate with the people and partners who need to be
            involved. If equipment from another manufacturer or vendor appears to
            be part of the issue, we can help bring the right outside parties into
            the response path as well.
          </p>
          <p>
            The goal is faster awareness, faster coordination, clearer
            communication, and less downtime.
          </p>
          <div className="doctrine-block">
            <p><strong>Support Philosophy</strong></p>
            <p>Keep the customer operating.</p>
            <p>Do not profit from their pain.</p>
            <p>Work with customer IT, engineering, maintenance, and existing vendors.</p>
            <p>Build high-speed local support paths where possible.</p>
            <p>Equip trained customer hands with the software and access needed to work with us remotely.</p>
            <p>Notify the right people quickly when issues arise.</p>
            <p>Support practical response, not dependency.</p>
          </div>
          <p className="support-line">
            We are here to help the customer stay in motion — safely,
            intelligently, and with the right people connected when it matters
            most.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionHeading title="What happens after you send this" />
          <ol className="numbered-list">
            <li>We review the request and the operating context around it.</li>
            <li>We determine the best next conversation and the right people to include.</li>
            <li>We reply to schedule a discovery discussion or request a few useful details.</li>
            <li>
              If appropriate, we identify the best entry point: controls review,
              module review, machine estimate, startup architecture, training,
              support planning, or broader scope development.
            </li>
          </ol>
          <p className="support-line">
            The goal is clarity first — not unnecessary friction.
          </p>
        </div>
      </section>

      <ContactBlock
        title="Direct contact"
        supportingLine="If you already know what you need to discuss, direct contact is welcome."
      />

      <RelatedLinksBlock
        title="Need more context first?"
        items={relatedPages}
        supportingLine="You can explore the system first, then come back when you are ready."
      />

      <CTAFooterBand
        headline="Start where the problem is. Expand when the system is ready."
        primaryCTA={{
          label: "Request Discovery",
          href: "#discovery-form",
        }}
        secondaryCTA={{
          label: "Explore the Modules",
          href: "/a-i-r-o-n/modules",
        }}
        supportingLine="A.I.R.O.N. is built to support the customer’s operation, not hold it hostage."
      />
    </SiteLayout>
  );
}
