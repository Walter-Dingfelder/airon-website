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
  "Current balance, phase behavior, and abnormal electrical draw",
  "Voltage quality, supply stability, and event correlation",
  "Power factor, real load, and wasted-energy signatures",
  "Thermal rise, cooling-path integrity, and heat-soak behavior",
  "Bearing condition, friction growth, and lubrication consequence",
  "Alignment drift, coupling stress, and mounted-condition change",
  "Start frequency, restart stress, and acceleration behavior",
  "VFD output behavior, ramp logic, and commanded-versus-actual response",
  "Driven-load strain from fans, pumps, conveyors, compressors, and process equipment",
  "Ambient contamination, dust, washdown, and enclosure stress",
  "Trip history, nuisance events, and weak recurring causes",
  "Maintenance patterns, repeat part replacement, and real failure sequence",
];

const capabilities = [
  "Hear the difference between a motor problem and a load problem",
  "Expose energy waste before it becomes heat, damage, or forced downtime",
  "Connect electrical symptoms to mechanical consequence instead of treating them separately",
  "Show whether the motor is weak, the control is weak, or the process is overloading the machine",
  "Tighten troubleshooting by weighting starts, heat, current, and load together",
  "Reduce repeat repairs by preserving the real event sequence in V.A.U.L.T.®",
  "Support safer restart and return-to-service decisions after trips or abnormal conditions",
  "Strengthen Fortune Teller™ by giving it cleaner motor-domain truth",
  "Turn recurring motor pain into structured Continuous Improvement instead of folklore",
  "Help operations, maintenance, engineering, and electricians work from the same evidence trail",
];

const bestFit = [
  "Plants where one recurring motor issue quietly throttles throughput, uptime, or energy efficiency",
  "Sites with nuisance trips, hot motors, short bearing life, or repeat replacement frustration",
  "Processes where the real problem may live in the driven load rather than the motor itself",
  "Operations running VFD-driven assets that need clearer truth around starts, ramps, and load stress",
  "Facilities where motor health, maintenance timing, and production consequence must stay connected",
  "Organizations that want specialist truth on one of the most common industrial failure points",
];

const withoutMotorDoctor = [
  "Motors get blamed for problems created by process strain or bad mounted conditions",
  "Parts get replaced without proving why the motor was suffering",
  "Heat, current, vibration, and trip history stay in separate conversations",
  "Energy waste hides until it becomes damage or forced downtime",
  "Repeat failures keep teaching the same expensive lesson",
];

const withMotorDoctor = [
  "Motor truth becomes clearer before damage, scrap, or downtime compound",
  "Electrical, mechanical, and process evidence can be read together",
  "Root cause tightens because the driven load and the motor stay connected",
  "Return-to-service decisions become safer and more defensible",
  "Recurring motor pain becomes memory, prediction, and improvement instead of repetition",
];

const relatedPages = [
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how Motor Doctor™ fits inside the larger specialist architecture.",
  },
  {
    title: "Foundry Doctor™",
    href: "/a-i-r-o-n/foundry-doctor",
    description:
      "See the wider operational example that can absorb motor truth into a full-process view.",
  },
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See how commanded behavior, drive logic, and control truth relate to motor-domain evidence.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how specialist motor truth becomes future timing, action windows, and predictive clarity.",
  },
];

export default function MotorDoctorPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/motor-doctor"
      mainClassName="airon-module-page motor-doctor-page"
    >
      <HeroBlock
        eyebrow="A.I.R.O.N.'s rotating-equipment specialist"
        title="Motor Doctor™"
        supportingLine="One motor can still become a whole-plant problem."
        subhead="Motor Doctor™ is the specialist built to read electrical load, mechanical strain, heat, starts, drive behavior, and driven-process consequence as one connected truth layer."
        body={
          <>
            <p>
              Motors look common until one weak one starts teaching an expensive lesson.
              One hot motor, one recurring trip, one short-lived bearing, one overloaded fan,
              or one unstable restart can quietly drag down an entire process.
            </p>
            <p>
              Motor Doctor™ exists to make that truth clearer before the damage compounds. It is
              built to read the motor, the way it is being driven, and the way the attached process
              is loading it — all together.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Motor Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Common asset</h3>
            <p>
              Motors are everywhere, which makes their pain easy to normalize until the same failure keeps coming back.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Specialist truth</h3>
            <p>
              Motor Doctor™ reads the rotating asset, the electrical behavior, and the driven process together so the real cause becomes easier to prove.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="doctrine-block">
            <p className="eyebrow">Part of the Doctor Family™</p>
            <p>
              Motor Doctor™ is one specialist inside the larger Doctor Family™ architecture.
              It shows how A.I.R.O.N. can sit tightly on one asset class that exists almost
              everywhere in industry and still tell a much sharper truth than a generic alarm stack.
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
        title="Built for one of industry's most repeated failure stories"
        paragraphs={[
          "Motors fail in ways that look obvious after the fact and stay frustrating before the fact. Heat rises slowly. Trips feel intermittent. Bearings keep getting changed. The motor gets blamed while the real overload lives in the process or the mounted condition.",
          "That is why Motor Doctor™ deserves to exist as its own specialist. It gives rotating equipment the right vocabulary, the right evidence weighting, and the right troubleshooting posture instead of flattening it into generic plant noise.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Motor Doctor™ is not:</h3>
            <ul>
              <li>A replacement for certified protection, relays, or motor-control hardware</li>
              <li>A promise that every hot motor is a motor-only problem</li>
              <li>A substitute for electricians, mechanics, or process ownership</li>
              <li>A decorative trend view that still leaves root cause blurry</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Motor Doctor™ watches"
            subtitle="Not just the motor. The way the motor is being asked to live."
            align="center"
          />
          <CapabilityGrid items={watchedSignals} compact />
          <p className="support-line center">
            The point is not to create one more panel full of trends. The point is to connect motor truth, control truth, and process truth before one weak asset becomes a plantwide consequence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Motor Doctor™ can do"
            subtitle="Sharpen diagnosis, return-to-service confidence, and predictive clarity around rotating equipment."
            align="center"
          />
          <CapabilityGrid items={capabilities} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Best where motors are common but consequences are not small"
            subtitle="A three-dollar part or one hidden overload can still become a plant-level problem."
            align="center"
          />
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
                Motor Doctor™ earns its keep anywhere one asset that looks ordinary can still throttle safety,
                energy, maintenance attention, or production continuity.
              </p>
              <p>
                It is especially powerful where the same repair keeps returning because the real sequence was never preserved clearly enough to review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Where Motor Doctor™ sits in the architecture"
        paragraphs={[
          "Motor Doctor™ tells the truth now inside one of the most common industrial specialist domains: rotating equipment under real electrical and process load.",
          "That truth can then feed broader Doctors, operating views, and Fortune Teller™. The motor specialist should not be disconnected from the rest of the system. It should make the larger system smarter by being sharper at the motor level first.",
        ]}
        sectionClassName="section"
      />

      <ContrastBlock
        title="A repeated motor problem is rarely just a repeated motor problem."
        leftTitle="Without Motor Doctor™"
        leftItems={withoutMotorDoctor}
        rightTitle="With Motor Doctor™"
        rightItems={withMotorDoctor}
      />

      <TextIntroBlock
        title="Operational memory matters here"
        paragraphs={[
          "Motor Doctor™ becomes more valuable as it learns what the site has already lived through: nuisance trips, hot restarts, weak repairs, bearing churn, overload patterns, drive irregularities, and the real sequence between asset distress and process consequence.",
          "That memory belongs in V.A.U.L.T.® and in Continuous Improvement. The goal is not just to replace one failed motor faster. The goal is to stop repeating the same failure story under a different work order number.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>When a motor begins to whisper, Motor Doctor™ helps the site hear what it really means.</strong>
            </p>
          </div>
        </div>
      </section>

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Start with motor-domain truth. Expand into broader process views, control understanding, and predictive timing as the system grows."
        />
      </div>

      <CTAFooterBand
        headline="See the real motor problem before the real consequence multiplies."
        primaryCTA={{
          label: "Request a Motor Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="One motor. One driven load. One repeat trip. Or the full rotating-equipment story."
      />
    </SiteLayout>
  );
}
