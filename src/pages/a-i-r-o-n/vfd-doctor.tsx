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
  "Commanded speed versus actual process response",
  "Ramp behavior, accel and decel stress, and restart posture",
  "Current draw, torque demand, and overload signatures",
  "DC bus behavior, input quality, and power-disturbance events",
  "Carrier settings, switching stress, and heat-loading consequence",
  "Harmonic contribution, line-side interaction, and system-side distortion clues",
  "Cooling path integrity, cabinet heat, and contamination stress",
  "Nuisance trips, reset behavior, and recurring fault sequence",
  "Motor insulation stress, bearing risk, and cable-length consequence",
  "Parameter drift, unauthorized changes, and weak commissioning history",
  "Bypass behavior, handoff conditions, and mode-change truth",
  "Driven-process strain from fans, pumps, conveyors, compressors, and variable-load equipment",
];

const capabilities = [
  "Separate drive problems from motor problems more cleanly",
  "Show when the real pain lives in configuration, cooling, supply quality, or the driven process",
  "Tighten restart confidence after trips by preserving the real event sequence",
  "Connect parameter changes, thermal stress, and nuisance faults instead of treating them separately",
  "Expose weak acceleration, unstable speed control, and hidden overload patterns earlier",
  "Help electricians, controls, maintenance, and operations work from the same evidence trail",
  "Feed sharper drive-domain truth into broader Doctors and Fortune Teller™",
  "Turn repeated trip-reset-repeat behavior into preserved memory and better future guidance",
  "Improve return-to-service discipline after abnormal stops, brownouts, or stress events",
  "Reduce the tendency to blame the drive when the real issue is elsewhere — or ignore the drive when it is the issue",
];

const bestFit = [
  "Processes where variable speed is essential to throughput, stability, or product quality",
  "Sites with nuisance VFD trips, hot cabinets, unexplained overloads, or unstable restarts",
  "Operations where one drive fault can stop a line, throttle a process, or create cascading disruption",
  "Facilities with mixed drive ages, weak commissioning history, or inconsistent parameter governance",
  "Motor systems where the truth can live in the drive, the motor, the supply, or the process loading them",
  "Organizations that want specialist truth on one of industry's most common power-electronics failure points",
];

const withoutVFDDoctor = [
  "Trips get reset faster than they get understood",
  "Parameter drift and weak commissioning history stay hidden until the next shutdown",
  "Drive, motor, supply, and process blame each other in circles",
  "Heat, overload, and restart stress stay fragmented across screens and people",
  "One recurring fault keeps teaching the same expensive lesson",
];

const withVFDDoctor = [
  "Drive truth becomes clearer before the next forced stop or nuisance trip",
  "Controls, maintenance, electricians, and operations can work from the same event sequence",
  "Parameter issues, supply stress, motor consequence, and process overload separate faster",
  "Restart and return-to-service decisions become more deliberate and defensible",
  "Recurring VFD pain becomes memory, prediction, and improvement instead of folklore",
];

const relatedPages = [
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how VFD Doctor™ fits inside the larger specialist architecture.",
  },
  {
    title: "Motor Doctor™",
    href: "/a-i-r-o-n/motor-doctor",
    description:
      "See the rotating-equipment specialist that pairs naturally with drive-domain truth.",
  },
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See how logic, commanded behavior, permissives, and control structure connect to variable-speed equipment.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how drive-domain truth becomes action timing, drift visibility, and predictive clarity.",
  },
];

export default function VFDDoctorPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/vfd-doctor"
      mainClassName="airon-module-page vfd-doctor-page"
    >
      <HeroBlock
        eyebrow="A.I.R.O.N.'s drive-domain specialist"
        title="VFD Doctor™"
        supportingLine="When variable-speed control becomes plant pain, the truth needs its own specialist."
        subhead="VFD Doctor™ is built to read commanded speed, power-electronics behavior, parameter integrity, motor consequence, and driven-process response as one connected truth layer."
        body={
          <>
            <p>
              Variable Frequency Drives solve real problems, but they also create their own failure language.
              One nuisance trip, one bad parameter change, one overheated cabinet, one weak restart, or one
              unstable ramp can quietly turn into downtime, process instability, mistrust, and repeat intervention.
            </p>
            <p>
              VFD Doctor™ exists to make that truth clearer before the same fault becomes the next shutdown.
              It is built to read the drive, the motor it is stressing, the electrical environment it is living in,
              and the process it is being asked to carry — all together.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a VFD Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Variable-speed advantage</h3>
            <p>
              Drives add control, flexibility, and process value — which makes their failure signals easy to underestimate until the line stops.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Specialist truth</h3>
            <p>
              VFD Doctor™ reads the drive, the motor, the supply, and the process together so the real cause becomes easier to prove.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="doctrine-block">
            <p className="eyebrow">Part of the Doctor Family™</p>
            <p>
              VFD Doctor™ is one specialist inside the larger Doctor Family™ architecture.
              It shows how A.I.R.O.N. can sit tightly on one of industry's most common power-electronics layers
              and still tell a much sharper truth than a drive fault code alone.
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
        title="Built for one of industry's most repeated reset-and-repeat stories"
        paragraphs={[
          "Drive faults waste time because variable-speed systems can look healthy right up until the next trip, brownout, ramp failure, or thermal event. A site resets the drive, restarts the process, and still does not know whether the pain came from settings, cooling, electrical quality, the motor, or the load itself.",
          "That is why VFD Doctor™ deserves to exist as its own specialist. Variable-speed control has its own vocabulary, its own failure signatures, and its own need for preserved sequence. Generic alarms do not tell that story clearly enough.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>VFD Doctor™ is not:</h3>
            <ul>
              <li>A replacement for certified protection, STO functions, or drive hardware safeguards</li>
              <li>A promise that every trip is caused by the drive itself</li>
              <li>A substitute for electricians, controls ownership, or sound commissioning practice</li>
              <li>A fault-history screen that still leaves restart confidence weak</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What VFD Doctor™ watches"
            subtitle="Not just the fault code. The way the drive is being asked to live."
            align="center"
          />
          <CapabilityGrid items={watchedSignals} compact />
          <p className="support-line center">
            The point is not to create one more cabinet screen. The point is to preserve drive truth,
            motor truth, and process truth before one recurring trip becomes a plant-level consequence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What VFD Doctor™ can do"
            subtitle="Sharpen diagnosis, return-to-service confidence, and predictive clarity around variable-speed equipment."
            align="center"
          />
          <CapabilityGrid items={capabilities} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Best where drive behavior carries real consequence"
            subtitle="One recurring trip, weak ramp, or hidden parameter problem can still throttle an entire process."
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
                VFD Doctor™ earns its keep anywhere variable-speed control is essential enough that
                one unstable drive can quietly drag down uptime, quality, energy discipline, or restart confidence.
              </p>
              <p>
                It is especially powerful where the same drive fault keeps returning because the real event sequence
                was never preserved clearly enough to review and improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Where VFD Doctor™ sits in the architecture"
        paragraphs={[
          "VFD Doctor™ tells the truth now inside one of the most common industrial specialist domains: variable-speed control under real electrical and process load.",
          "That truth can then feed Motor Doctor™, broader Doctors, operating views, and Fortune Teller™. The drive specialist should not be disconnected from the rest of the system. It should make the larger system smarter by being sharper at the drive level first.",
        ]}
        sectionClassName="section"
      />

      <ContrastBlock
        title="A recurring drive problem is rarely just a recurring drive problem."
        leftTitle="Without VFD Doctor™"
        leftItems={withoutVFDDoctor}
        rightTitle="With VFD Doctor™"
        rightItems={withVFDDoctor}
      />

      <TextIntroBlock
        title="Operational memory matters here"
        paragraphs={[
          "VFD Doctor™ becomes more valuable as it learns what the site has already lived through: nuisance trips, hot cabinets, weak commissioning, overload ramps, brownouts, unstable restarts, and the real sequence between drive distress and process consequence.",
          "That memory belongs in V.A.U.L.T.® and in Continuous Improvement. The goal is not just to reset one drive faster. The goal is to stop repeating the same fault story under a different trip log and a different maintenance note.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container narrow">
          <div className="doctrine-block">
            <p>
              <strong>VFD Doctor™ makes variable-speed truth easier to prove before the next trip writes the story for you.</strong>
            </p>
          </div>
        </div>
      </section>

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Specialist drive truth should connect cleanly to motors, controls, prediction, and the larger Doctor Family™."
        />
      </div>

      <CTAFooterBand
        headline="One drive can still become a whole-process problem."
        primaryCTA={{
          label: "Request a VFD Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="See the drive, the motor, the power, and the process together — before the next trip becomes the lesson."
      />
    </SiteLayout>
  );
}
