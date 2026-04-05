import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import ContrastBlock from "../../components/core/ContrastBlock";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const watchedSignals = [
  "Differential pressure, airflow stability, and total system breathing truth",
  "Fan behavior, motor loading, VFD response, and draft-control stability",
  "Pulse-cleaning timing, valve behavior, compressed-air integrity, and cleaning effectiveness",
  "Compartment performance, online-versus-offline behavior, and repeated weak-house zones",
  "Filter loading, blinding clues, moisture influence, and media-life consequence",
  "Hopper evacuation, plugging exposure, rotary-airlock truth, and dust-removal continuity",
  "Duct balance, branch behavior, pickup-point truth, and hidden restriction patterns",
  "Spark, ember, heat, and abnormal-event clues tied to ignition and fire risk",
  "Leakage behavior, dirty-side to clean-side breach clues, and emission-risk posture",
  "Damper position, isolation posture, and maintenance-access consequence during upset or repair",
  "Operator observations, housekeeping clues, and repeated nuisance-complaint patterns",
  "Maintenance findings, alarm history, trip sequence, and event memory tied to real baghouse behavior",
];

const capabilities = [
  "Separate airflow, cleaning, fan, duct, filter, hopper, and controls truth faster",
  "Show when the real pain lives in loading, cleaning effectiveness, duct balance, moisture, or hidden leakage",
  "Preserve event sequence when differential pressure drifts, airflow collapses, emissions rise, or nuisance trips begin repeating",
  "Tighten troubleshooting around fan stability, pulse-cleaning confidence, hopper evacuation, and restriction patterns",
  "Expose weak filter performance, blinding, plugging, or poor dust removal before they become outages or compliance pain",
  "Help operations, maintenance, electricians, EHS, and engineering work from the same baghouse truth",
  "Reduce the habit of blaming one dirty reading or one visible symptom when the real system story is wider",
  "Feed stronger baghouse-domain truth into Fortune Teller™, Ghost Busting, and wider plant diagnosis",
  "Support safer, faster, and more defensible return-to-service decisions after trips, fires, plugging, or compartment work",
  "Turn repeated dust-collection trouble into preserved memory and improved recovery instead of folklore, resets, and guesswork",
];

const bestFit = [
  "Plants where one weak dust-collection system can throttle production, housekeeping, safety, and environmental confidence",
  "Operations handling foundry dust, furnace exhaust, grinding dust, process fines, smoke, fumes, or combustible-particulate consequence",
  "Sites where airflow truth, differential pressure, filter condition, and hopper continuity cannot stay vague",
  "Facilities with repeated plugging, poor cleaning, hot spots, nuisance alarms, visible emissions, or unexplained fan instability",
  "Teams that need cleaner evidence around pulse systems, damper posture, fan behavior, and compartment performance",
  "Organizations that want specialist truth on one of the plant's most overlooked but most operationally consequential utility systems",
];

const withoutBaghouseDoctor = [
  "Baghouse complaints stay trapped between housekeeping, maintenance, EHS, and operations",
  "Differential pressure, airflow, fan behavior, and filter condition stay fragmented",
  "Trips, plugging, or emissions risk get reacted to faster than they get understood",
  "The same weak-house behavior keeps returning with poor evidence and weak sequence memory",
  "Return-to-service decisions feel more reactive than they should under production, fire, and environmental consequence",
];

const withBaghouseDoctor = [
  "Dust-collection truth becomes clearer before the next plugged hopper, weak pull, trip, or visible-emissions event",
  "Airflow, cleaning, fan, filter, hopper, and operator reality stay connected as one story",
  "Operations, maintenance, EHS, electricians, and engineering can work from the same evidence trail",
  "Repeated upset events become preserved memory instead of disappearing with the shift",
  "Baghouse recovery and return-to-service become more deliberate, safer, and easier to defend",
];

const relatedPages = [
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how Baghouse Doctor™ fits inside the larger specialist architecture.",
  },
  {
    title: "Foundry Doctor™",
    href: "/a-i-r-o-n/foundry-doctor",
    description:
      "See how wider foundry continuity and utility truth connect when one weak dust-collection system can affect the whole operation.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See how preserved knowledge, human judgment, and operational truth strengthen safer action around dust, fire, airflow, and housekeeping consequence.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how baghouse-domain truth becomes action timing, drift visibility, and predictive clarity.",
  },
];

export default function BaghouseDoctorPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/baghouse-doctor"
      mainClassName="airon-module-page baghouse-doctor-page"
    >
      <HeroBlock
        eyebrow="A.I.R.O.N.'s dust-collection specialist"
        title="Baghouse Doctor™"
        supportingLine="When one weak dust-collection system can become plant pain, the truth needs its own specialist."
        subhead="Baghouse Doctor™ is built to read airflow truth, filter behavior, cleaning effectiveness, hopper continuity, fan stability, and operator-reported reality as one connected dust-collection layer."
        body={
          <>
            <p>
              Baghouses rarely fail in one clean, dramatic way. More often the truth arrives as rising differential pressure,
              weak pull at the process, plugged hoppers, unstable fan behavior, poor pulsing, dirty-side leakage,
              visible emissions, ember risk, or repeated complaints that never quite get proven end to end.
            </p>
            <p>
              Baghouse Doctor™ exists to make that truth clearer before the next dust-collection problem becomes the next plant-level event.
              It is built to read what the house was asked to do, what it actually moved, how it cleaned, how it breathed,
              what the operators saw, and what the plant needs to decide before the next upset spreads into production, safety, or environmental consequence.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Baghouse Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Utility-system consequence</h3>
            <p>
              A baghouse may look like background utility equipment until airflow collapses, dust escapes,
              filters blind, hoppers plug, or fire risk appears. Then one overlooked system can become whole-plant pain.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Specialist truth</h3>
            <p>
              Baghouse Doctor™ reads airflow, cleaning, fan behavior, filter condition, hopper continuity,
              and operator reality together so the real cause becomes easier to prove.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="doctrine-block">
            <p className="eyebrow">Part of the Doctor Family™</p>
            <p>
              Baghouse Doctor™ is one specialist inside the larger Doctor Family™ architecture.
              It shows how A.I.R.O.N. can sit tightly on one of the plant&apos;s most overlooked but most consequential support systems
              and still tell a much sharper truth than one dirty gauge, one alarm, one housekeeping complaint, or one emissions snapshot alone.
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
        title="Built for one of the plant&apos;s most underestimated operational systems"
        paragraphs={[
          "Baghouse problems waste time because the truth often gets split between what operators feel at the pickup point, what maintenance sees at the fan or pulsing system, what EHS sees in visible conditions, and what the plant assumes must be happening inside the house. That fragmentation is dangerous when weak dust collection can touch production, housekeeping, safety, and environmental standing at the same time.",
          "That is why Baghouse Doctor™ deserves to exist as its own specialist. Dust-collection systems have their own vocabulary, their own failure posture, and their own need for preserved sequence. Generic utility alarms do not tell that story clearly enough.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Baghouse Doctor™ is not:</h3>
            <ul>
              <li>A replacement for required environmental compliance work, EHS governance, fire protection, or site maintenance discipline</li>
              <li>A substitute for inspections, filter maintenance, housekeeping, spark control, or safe isolation procedures</li>
              <li>A claim that every baghouse complaint is a filter problem — or that every visible symptom starts in one component alone</li>
              <li>A generic utility screen pretending airflow, dust risk, and emissions consequence are ordinary</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Baghouse Doctor™ watches"
            subtitle="Not just the alarm. The way airflow, cleaning, restriction, and dust behavior tell one story."
            align="center"
          />
          <CapabilityGrid items={watchedSignals} compact />
          <p className="support-line center">
            The point is not to create one more maintenance screen. The point is to preserve airflow truth,
            cleaning truth, and containment truth before one weak condition becomes the next outage, fire risk, or environmental event.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Baghouse Doctor™ can do"
            subtitle="Sharpen diagnosis, safer recovery, and predictive clarity around dust-collection systems that quietly carry major consequence."
            align="center"
          />
          <CapabilityGrid items={capabilities} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why baghouse truth deserves its own specialist"
        paragraphs={[
          "A baghouse can become plant pain long before it becomes an obvious failure. The fan may still run. The house may still pull some air. The process may still limp along. But differential pressure drifts, pulsing gets weak, hoppers stop clearing, compartments breathe unevenly, or operators stop trusting what the system is really doing.",
          "That is exactly where specialist truth matters. Baghouse Doctor™ is built to preserve what the house was commanded to do, what it actually moved, how it cleaned, what the dust system did under real conditions, what the human beings saw, and what the site needs to decide before the next upset spreads wider.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Where Baghouse Doctor™ fits best"
            subtitle="Strongest where airflow truth, dust handling, and containment can never stay vague."
            align="center"
          />
          <CapabilityGrid items={bestFit} compact />
        </div>
      </section>

      <ContrastBlock
        title="Cleaner truth. Earlier action. Fewer repeat upsets."
        leftTitle="Without Baghouse Doctor™"
        leftItems={withoutBaghouseDoctor}
        rightTitle="With Baghouse Doctor™"
        rightItems={withBaghouseDoctor}
      />

      <TextIntroBlock
        title="Why it matters"
        paragraphs={[
          "Baghouse trouble is often dismissed because it lives in utility space, background systems, or slow-building discomfort. But the consequence is never just background when the house stops breathing correctly.",
          "That is exactly why Baghouse Doctor™ belongs in the family. It protects one of the plant systems most likely to be blamed late, repaired reactively, or understood only after the consequence has already spread.",
          "The result is cleaner diagnosis, safer response, stronger environmental posture, and better plant continuity built on preserved dust-collection truth instead of folklore.",
        ]}
        sectionClassName="section"
      />

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Airflow truth. Dust-collection truth. Preserved sequence. Better recovery."
        />
      </div>

      <CTAFooterBand
        headline="When dust-collection truth matters, it deserves its own specialist."
        primaryCTA={{
          label: "Request a Baghouse Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="One baghouse. One collection zone. One line. Or the whole site utility story."
      />
    </SiteLayout>
  );
}
