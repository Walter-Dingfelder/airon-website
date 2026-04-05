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
  "Ram position, slide motion, and commanded-versus-actual press behavior",
  "Tonnage profile, load symmetry, and abnormal force signatures through the stroke",
  "Clutch, brake, stop-time, and stopping-confidence truth",
  "Hydraulic pressure, flow behavior, and valve-response integrity where hydraulic systems apply",
  "Lubrication health, friction clues, and heat-loading consequence",
  "Die protection, misfeed exposure, part ejection behavior, and tooling risk",
  "Feed timing, transfer timing, and upstream-to-press handoff truth",
  "Guarding status, interlock integrity, and permissive posture during operation and restart",
  "Motor, drive, flywheel, and drivetrain strain under real production duty",
  "Vibration, impact pattern, and repeated shock-loading clues",
  "Operator inputs, setup adjustments, and response timing under real production conditions",
  "Fault history, jam sequence, repeated recoveries, and event memory tied to actual press behavior",
];

const capabilities = [
  "Separate tooling, material, controls, brake, drive, feed, and mechanical truth faster",
  "Show when the real pain lives in the press, the die, the feed system, or the operating conditions around them",
  "Preserve event sequence when a misfeed, jam, tonnage spike, abnormal stop, or timing complaint occurs",
  "Tighten troubleshooting around clutch and brake confidence, stop-time behavior, and restart discipline",
  "Expose repeated setup drift, weak lubrication, or hidden stress before they become bigger failures",
  "Help operations, maintenance, toolroom, electricians, and engineering work from the same press truth",
  "Reduce the habit of blaming the operator, the die, or the material too early when the real cause is still unproven",
  "Feed stronger press-domain truth into Fortune Teller™, Ghost Busting, and wider site diagnosis",
  "Support safer, faster, and more defensible return-to-service decisions after abnormal stops",
  "Turn repeated press trouble into preserved memory and improved sequential recovery instead of folklore and reset culture",
];

const bestFit = [
  "Plants where one press or one press line can throttle production, quality, and delivery",
  "Operations running stamping, forming, transfer, hydraulic, or high-force press systems with real consequence",
  "Sites where clutch, brake, timing, tonnage, tooling, or feed truth cannot stay vague",
  "Facilities with repeated jams, misfeeds, abnormal stops, die damage, or hard-to-prove operator complaints",
  "Teams that need cleaner evidence around setup drift, tooling condition, restart discipline, and abnormal-event sequence",
  "Organizations that want specialist truth on one of the plant's highest-force and highest-consequence production assets",
];

const withoutPressDoctor = [
  "Press problems keep bouncing between controls, tooling, maintenance, and operations",
  "Stop-time, feed timing, tonnage, and die-protection truth stay fragmented",
  "Abnormal stops get cleared faster than they get understood",
  "The same jam, misfeed, or tooling damage risk keeps returning with weak evidence",
  "Return-to-service decisions feel more reactive than they should under real production consequence",
];

const withPressDoctor = [
  "Press truth becomes clearer before the next jam, die strike, or forced outage",
  "Motion, tonnage, tooling, guarding, feed timing, and operator reality stay connected as one story",
  "Operations, maintenance, toolroom, electricians, and engineering can work from the same evidence trail",
  "Repeated abnormal stops become preserved memory instead of disappearing with the shift",
  "Press recovery and return-to-service become more deliberate, safer, and easier to defend",
];

const relatedPages = [
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how Press Doctor™ fits inside the larger specialist architecture.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See how preserved knowledge, human judgment, and operational truth strengthen safer action under production consequence.",
  },
  {
    title: "One-Touch Startup™",
    href: "/a-i-r-o-n/one-touch-startup",
    description:
      "See how governed startup, permissives, annunciation, and proof-before-progression strengthen restart confidence.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how press-domain truth becomes action timing, drift visibility, and predictive clarity.",
  },
];

export default function PressDoctorPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/press-doctor"
      mainClassName="airon-module-page press-doctor-page"
    >
      <HeroBlock
        eyebrow="A.I.R.O.N.'s press-domain specialist"
        title="Press Doctor™"
        supportingLine="When one press cycle can become plant pain, the truth needs its own specialist."
        subhead="Press Doctor™ is built to read motion truth, tonnage behavior, tooling consequence, feed timing, stop confidence, and operator-reported reality as one connected press-domain layer."
        body={
          <>
            <p>
              Presses do not fail like ordinary equipment. One weak brake, one mistimed feed,
              one abnormal tonnage spike, one lubrication miss, one misfeed, or one setup drift
              that no one can fully prove can turn into downtime, damaged tooling, quality loss,
              near misses, and repeated mistrust across the whole operation.
            </p>
            <p>
              Press Doctor™ exists to make that truth clearer before the next abnormal cycle becomes
              the next plant-level event. It is built to read what the press was asked to do,
              what it actually did, how it stopped, what the tooling and material experienced,
              and how the human beings around it experienced the moment.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Press Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Production-force consequence</h3>
            <p>
              Press systems compress force, timing, tooling, and human exposure into one repeating cycle.
              When that cycle gets weak, the consequence can spread fast across safety, uptime, quality, and trust.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Specialist truth</h3>
            <p>
              Press Doctor™ reads motion, tonnage, tooling, feed timing, stopping behavior, and operator reality together
              so the real cause becomes easier to prove.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="doctrine-block">
            <p className="eyebrow">Part of the Doctor Family™</p>
            <p>
              Press Doctor™ is one specialist inside the larger Doctor Family™ architecture.
              It shows how A.I.R.O.N. can sit tightly on high-force production systems and still tell
              a much sharper truth than one fault history, one operator complaint, or one damaged part alone.
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
        title="Built for one of the plant's highest-force repeat-event systems"
        paragraphs={[
          "Press problems waste time because the truth often gets split between what production felt, what the press logged, what the toolroom sees later, what maintenance observes after the stop, and what the plant assumes must have happened. That fragmentation is dangerous when one cycle carries real force, timing, tooling, and human consequence.",
          "That is why Press Doctor™ deserves to exist as its own specialist. Press systems have their own vocabulary, their own failure posture, and their own need for preserved sequence. Generic event history does not tell that story clearly enough.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Press Doctor™ is not:</h3>
            <ul>
              <li>A replacement for certified safety functions, guarding, or required press governance</li>
              <li>A substitute for operator skill, toolroom discipline, maintenance accountability, or engineering ownership</li>
              <li>A claim that every abnormal stop is caused by the press itself — or by the operator, tool, or material alone</li>
              <li>A generic downtime screen pretending press consequence is ordinary</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Press Doctor™ watches"
            subtitle="Not just the fault. The way force, timing, tooling, and stopping truth behave together."
            align="center"
          />
          <CapabilityGrid items={watchedSignals} compact />
          <p className="support-line center">
            The point is not to create one more press screen. The point is to preserve motion truth,
            tonnage truth, tooling truth, and stopping truth before one repeated complaint becomes the next outage or damage event.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Press Doctor™ can do"
            subtitle="Sharpen diagnosis, safer recovery, and predictive clarity around high-consequence production systems."
            align="center"
          />
          <CapabilityGrid items={capabilities} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why press truth deserves its own specialist"
        paragraphs={[
          "A press can become plant pain long before it becomes a formal failure. The line may still cycle. The parts may still come out. But stop confidence weakens, timing drifts, tonnage no longer looks right, tooling starts telling a harder story, or the operator stops trusting what the next cycle will do.",
          "That is exactly where specialist truth matters. Press Doctor™ is built to preserve what the system was commanded to do, what it actually did, how the tooling and material behaved, what the human being saw, and what the plant needs to decide before the next cycle.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Best where press behavior carries real consequence"
            subtitle="One jam, one mistimed cycle, or one weak stop can still ripple through the whole operation."
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
                Press Doctor™ earns its keep anywhere a press carries enough force, timing sensitivity,
                tooling risk, or throughput consequence that one weak truth can become expensive fast.
              </p>
              <p>
                It is especially powerful where the same jam, misfeed, tooling damage, or stop-time concern keeps returning
                because the real sequence was never preserved clearly enough to review and improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Where Press Doctor™ sits in the architecture"
        paragraphs={[
          "Press Doctor™ tells the truth now inside one of the plant's most consequential specialist domains: high-force production under real timing, tooling, and guarding conditions.",
          "That truth can then feed broader Doctors, operating views, C.A.T.A.S.T.R.O.P.H.E.™, and Fortune Teller™. The press specialist should not be disconnected from the rest of the system. It should make the larger system smarter by being sharper at the press level first.",
          "A.I.R.O.N. is the nervous system. The Doctors are the specialists. Press Doctor™ proves that specialist fit matters when one repeating cycle carries enough consequence that ordinary event history is not enough.",
        ]}
        sectionClassName="section section-alt"
      />

      <ContrastBlock
        title="Earlier clarity. Better recovery. Stronger return-to-service confidence."
        leftTitle="Without Press Doctor™"
        leftItems={withoutPressDoctor}
        rightTitle="With Press Doctor™"
        rightItems={withPressDoctor}
      />

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Start with specialist press truth where cycle consequence matters most. Expand into safety, governed startup, and predictive timing as the wider system grows."
        />
      </div>

      <CTAFooterBand
        headline="Give one of the plant's highest-force repeat-event systems the specialist truth it deserves."
        primaryCTA={{
          label: "Request a Press Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Doctor Family™",
          href: "/a-i-r-o-n/doctor-family",
        }}
        supportingLine="One press. One press line. One die system. Or the whole operation around it."
      />
    </SiteLayout>
  );
}
