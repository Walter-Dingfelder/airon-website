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
  "Bridge travel, trolley travel, and hoist motion truth",
  "Lift speed, decel behavior, and controlled stopping posture",
  "Brake release, brake response, and brake-wear consequence",
  "Limit switches, overtravel risk, and permissive integrity",
  "Hook approach, zone proximity, and collision exposure",
  "Load swing, shock loading, and dynamic instability",
  "Motor, gearbox, coupler, and drive strain under real lifting duty",
  "Encoder truth, position feedback, and commanded-versus-actual motion",
  "Operator inputs, pendant or cabin behavior, and response timing",
  "Recurring faults, nuisance trips, and return-to-service discipline",
  "Structural usage patterns, duty-cycle stress, and repeated abuse clues",
  "Maintenance findings, near-miss history, and event memory tied to real crane behavior",
];

const capabilities = [
  "Separate electrical, controls, brake, drive, and mechanical truth faster",
  "Show when the real pain lives in motion control, stopping behavior, or load handling discipline",
  "Preserve event sequence when a hoist, trolley, or bridge move does not feel right",
  "Tighten troubleshooting around brakes, limits, interlocks, and motion permissives",
  "Expose weak restart confidence after trips, overloads, or abnormal stops",
  "Help operations, maintenance, electricians, and supervision work from the same crane truth",
  "Reduce the habit of blaming the operator when the system truth says otherwise — or ignoring operator concern when it matters",
  "Feed stronger crane-domain truth into Fortune Teller™, Ghost Busting, and wider site diagnosis",
  "Support safer, faster, and more defensible return-to-service decisions",
  "Turn repeated crane trouble into preserved memory instead of folklore and guesswork",
];

const bestFit = [
  "Plants where one crane can throttle or stop a large portion of operations",
  "Sites carrying heavy lifts, hot material, tooling, molds, ladles, dies, coils, or high-consequence suspended loads",
  "Operations where brake confidence, limit integrity, or motion truth cannot stay vague",
  "Facilities with repeated hoist faults, position mistrust, load swing, or hard-to-prove crane complaints",
  "Teams that need cleaner evidence around operator reports, maintenance findings, and abnormal lifting events",
  "Organizations that want specialist truth on one of the most consequential material-handling systems in the plant",
];

const withoutCraneDoctor = [
  "Crane complaints stay trapped between operator feel and incomplete fault history",
  "Brake, limit, drive, and mechanical problems blur together",
  "Near-miss lessons fade faster than they should",
  "One crane becomes plant pain while the real cause stays disputed",
  "Return-to-service decisions feel weaker than they should under suspended-load consequence",
];

const withCraneDoctor = [
  "Crane truth becomes clearer before the next bad move, hard stop, or forced outage",
  "Motion, braking, load handling, and permissive behavior stay connected as one story",
  "Operators, maintenance, and supervision can work from the same evidence trail",
  "Abnormal lifts and near-miss events become preserved memory instead of disappearing with the shift",
  "Crane recovery and return-to-service become more deliberate, safer, and easier to defend",
];

const relatedPages = [
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how Crane Doctor™ fits inside the larger specialist architecture.",
  },
  {
    title: "Safety",
    href: "/a-i-r-o-n/safety",
    description:
      "See how preserved knowledge, human judgment, and operational truth strengthen safer action under consequence.",
  },
  {
    title: "C.A.T.A.S.T.R.O.P.H.E.™",
    href: "/a-i-r-o-n/catastrophe",
    description:
      "See how abnormal-event truth, guided recovery, and human protection take over when normal control confidence is gone.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how crane-domain truth becomes action timing, drift visibility, and predictive clarity.",
  },
];

export default function CraneDoctorPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/crane-doctor"
      mainClassName="airon-module-page crane-doctor-page"
    >
      <HeroBlock
        eyebrow="A.I.R.O.N.'s suspended-load specialist"
        title="Crane Doctor™"
        supportingLine="When one crane move can become plant pain, the truth needs its own specialist."
        subhead="Crane Doctor™ is built to read motion truth, brake confidence, limit integrity, load behavior, and operator-reported reality as one connected crane-domain layer."
        body={
          <>
            <p>
              Cranes are not ordinary utilities. They move consequence through the plant.
              One weak brake, one false limit, one unstable lift, one repeated nuisance trip,
              or one motion complaint that cannot be proven cleanly can turn into downtime,
              damaged equipment, near misses, mistrust, or real human exposure.
            </p>
            <p>
              Crane Doctor™ exists to make that truth clearer before the next bad move becomes
              the next plant-level event. It is built to read what the crane was asked to do,
              what it actually did, how safely it stopped, what the load did, and how the
              human being operating it experienced the moment.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Crane Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Material-handling consequence</h3>
            <p>
              Crane systems do not fail quietly. When suspended loads, travel motion, or stopping confidence go weak,
              the consequence can spread fast across safety, uptime, and trust.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Specialist truth</h3>
            <p>
              Crane Doctor™ reads motion, braking, load behavior, interlocks, and operator reality together so the real cause becomes easier to prove.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="doctrine-block">
            <p className="eyebrow">Part of the Doctor Family™</p>
            <p>
              Crane Doctor™ is one specialist inside the larger Doctor Family™ architecture.
              It shows how A.I.R.O.N. can sit tightly on high-consequence lifting and material-handling systems
              and still tell a much sharper truth than a single fault code, operator complaint, or maintenance note alone.
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
        title="Built for one of the plant's most consequential motion systems"
        paragraphs={[
          "Crane problems waste time because the truth often gets split between what the operator felt, what the crane logged, what maintenance observed later, and what the plant assumes must have happened. That fragmentation is dangerous when the system moving the load is also moving real exposure.",
          "That is why Crane Doctor™ deserves to exist as its own specialist. Crane systems have their own vocabulary, their own risk posture, and their own need for preserved sequence. Generic event history does not tell that story clearly enough.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Crane Doctor™ is not:</h3>
            <ul>
              <li>A replacement for certified protections, rated procedures, or required lifting governance</li>
              <li>A substitute for operator skill, rigging discipline, or maintenance accountability</li>
              <li>A claim that every crane complaint is mechanical — or that every complaint is human error</li>
              <li>A generic maintenance screen pretending crane consequence is ordinary</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Crane Doctor™ watches"
            subtitle="Not just the fault. The way motion, load, and stopping truth behave together."
            align="center"
          />
          <CapabilityGrid items={watchedSignals} compact />
          <p className="support-line center">
            The point is not to create one more crane screen. The point is to preserve motion truth,
            braking truth, and load truth before one repeated complaint becomes the next outage or near miss.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Crane Doctor™ can do"
            subtitle="Sharpen diagnosis, safer recovery, and predictive clarity around high-consequence lifting systems."
            align="center"
          />
          <CapabilityGrid items={capabilities} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why crane truth deserves its own specialist"
        paragraphs={[
          "A crane can become plant pain long before it becomes a formal failure. The line may still move. The bridge may still travel. The hoist may still lift. But brake feel changes, stopping confidence weakens, motion does not look right, or the operator stops trusting what the system will do next.",
          "That is exactly where specialist truth matters. Crane Doctor™ is built to preserve what the system was commanded to do, what it actually did, how the load behaved, what the human being saw, and what the plant needs to decide before the next move.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Where it fits best"
            subtitle="Built for plants where one lifting system can shape safety, uptime, and confidence."
            align="center"
          />
          <CapabilityGrid items={bestFit} compact />
        </div>
      </section>

      <ContrastBlock
        title="Clearer crane truth. Safer decisions. Fewer disputed events."
        leftTitle="Without Crane Doctor™"
        leftItems={withoutCraneDoctor}
        rightTitle="With Crane Doctor™"
        rightItems={withCraneDoctor}
      />

      <TextIntroBlock
        title="Connected to the wider A.I.R.O.N. architecture"
        paragraphs={[
          "Crane Doctor™ is not isolated from the rest of the system. It feeds specialist crane-domain truth upward into Fortune Teller™, supports abnormal-event continuity when C.A.T.A.S.T.R.O.P.H.E.™ takes over, and strengthens the site's ability to preserve near-miss lessons before they disappear.",
          "That matters because crane trouble rarely stays small. A brake issue, travel fault, overloaded lift, or disputed event can become a plant-level consequence faster than most ordinary equipment problems.",
          "The sharper the crane truth is now, the better the next decision becomes.",
        ]}
        sectionClassName="section section-alt"
      />

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Specialist truth for one of the plant's most consequential motion systems."
        />
      </div>

      <CTAFooterBand
        headline="When suspended-load truth matters, the specialist matters."
        primaryCTA={{
          label: "Request a Crane Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="One crane. One bay. One process block. Or the wider operation around it."
      />
    </SiteLayout>
  );
}
