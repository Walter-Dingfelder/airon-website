import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";

const plcPoints = [
  "Interface with virtually any industrial PLC environment",
  "Work beside legacy logic, modern PLCs, and hybrid inherited systems",
  "Support distributed I/O, remote expansion, and plant-specific structures",
  "Interpret, support, extend, and where appropriate govern existing controls",
  "Build around the real machine, real process, and real people depending on it",
  "Respect the plant instead of forcing one rigid controls ideology onto it",
];

const foundationPoints = [
  "Built on Unitronics All-In-One HMI/PLC foundations",
  "Machine logic, interface design, alarms, and process visibility in one environment",
  "Flexible around customer-preferred PLC platforms when project conditions call for it",
  "Supports remote I/O and expansion strategies",
  "Accommodates machine-specific and process-specific interface layers",
  "Provides custom operator-facing logic for the actual people running the work",
];

const retrofitPoints = [
  "Retrofit automation for inherited, legacy, or partially documented systems",
  "Greenfield automation built correctly from the start",
  "HMI modernization and control structure redesign",
  "Sequencing upgrades, batching logic, and machine rebuild controls",
  "Private-label custom software and governed autonomy where appropriate",
  "Disciplined implementation instead of dogma",
];

const processPoints = [
  "Single-machine sequencing and plant utility control",
  "Food and liquid process batching",
  "Metal recipe management and governed transfer logic",
  "Structured operator stations and exception handling",
  "Equipment synchronization and recipe validation",
  "From hot-end-only upgrades to broader section-by-section process deployment",
];

const startupPoints = [
  "Authorized startup release instead of casual start commands",
  "Plantwide or zone-specific annunciation before motion begins",
  "Proof-based advancement instead of timer-only trust",
  "Controlled shutdown, clear / purge / runout, and empty-down recipes",
  "Maintenance / test modes and restricted startup when explicitly approved",
  "Safe recovery after interruption, hold, or degraded operation",
];

const safetyCommPoints = [
  "Startup is treated as a safety event and a communication event",
  "Plantwide or zone-specific warning before motion",
  "Visual and verbal annunciation with countdown to first motion",
  "Distributed panel awareness with local-only control authority preserved",
  "Remote communication does not equal remote command",
  "The right people know what is about to move, where, and why",
];

const acousticPoints = [
  "Zone-aware acoustic monitoring as an advisory and proof-support layer",
  "Supports abnormal-condition recognition around belts, conveyors, blowers, burners, and actuators",
  "Can assist with source-aware maintenance guidance tied to operating state",
  "Works alongside current, pressure, temperature, vibration, and position proof channels",
  "Microphones and acoustic layers support insight, not certified primary safety replacement",
  "Useful for startup, abnormal-condition detection, and maintenance interpretation",
];

const roboticsPoints = [
  "Robotic machinery centers and multi-axis motion systems",
  "Governed autonomous crane and material handling logic",
  "Automated recipe transfer and machine-to-machine operational flow",
  "Structured exception handling and recovery logic",
  "Interlocks, timing, position awareness, and physical consequence management",
  "Serious automation instead of flashy automation",
];

const securityPoints = [
  "No need for invasive access to sensitive customer systems by default",
  "Outbound-only visibility and disciplined controls integration",
  "Local control authority preserved at the machine",
  "Read-only truth capture, secure messaging, and structured remote support",
  "PLCs isolated from external traffic where the deployment requires it",
  "Build the right relationship between local authority and secure visibility",
];

const memoryPoints = [
  "Controls that support memory, not just execution",
  "Plain-language fault guidance tied to validated history",
  "Trend visibility for better handoff and maintenance continuity",
  "Sequence knowledge no longer trapped only in one operator or one engineer",
  "Institutional memory becomes part of the operating environment",
  "Long-term value appears when controls help the plant remember",
];

const audiencePoints = [
  "Operators who need usable interfaces",
  "Mechanics who need structured truth",
  "Plant managers who need reliable machine behavior",
  "Executives who need trustworthy system performance",
  "Facilities with legacy equipment or mixed inherited systems",
  "Teams building from scratch or upgrading one machine at a time",
];

const relatedPages = [
  {
    title: "SYSTEM-LIVE / PLAYER-LIVE",
    href: "/a-i-r-o-n/system-live-player-live",
    description: "See how A.I.R.O.N. unites machine truth and human judgment.",
  },
  {
    title: "One-Touch Startup",
    href: "/a-i-r-o-n/one-touch-startup",
    description: "See the governed startup layer and the operational discipline behind it.",
  },
  {
    title: "A.I.R.O.N. Modules",
    href: "/a-i-r-o-n/modules",
    description: "Return to the broader architecture and specialist layers.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start a controls, automation, retrofit, or greenfield conversation.",
  },
];

export default function ControlsAutomationPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/controls-automation"
      mainClassName="airon-controls-automation-page"
    >
      <HeroBlock
        eyebrow="Machine logic. Process logic. Human logic."
        title="CONTROLS & AUTOMATION"
        supportingLine="A.I.R.O.N. at the point of control."
        subhead="A.I.R.O.N. does not only watch machines. It can also help control them."
        body={
          <>
            <p>
              This is where A.I.R.O.N. meets the actual machine brain of
              industry: PLCs, HMIs, remote expansion, sequencing, interlocks,
              startup logic, shutdown logic, batching, recipes, robotics, and
              governed autonomous operations.
            </p>
            <p>
              From retrofit work on legacy equipment to greenfield systems built
              from the ground up, A.I.R.O.N. can be developed to interface with
              existing controls or stand up the full control environment itself.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore Modules",
          href: "/a-i-r-o-n/modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Retrofit</h3>
            <p>
              Strengthen, modernize, and make usable what already exists without
              destroying the machine, the process, or the operating knowledge
              built around it.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Greenfield</h3>
            <p>
              Build the machine brain correctly from the start with disciplined
              automation, governed interfaces, and operator-facing logic that can
              be trusted in the real world.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What we mean by controls"
        paragraphs={[
          "Controls are where the machine becomes behavior. They determine what starts, what stops, what waits, what alarms, what interlocks, what sequences, what protects, and what is allowed to happen next.",
          "A.I.R.O.N. was not built only to observe efficiency, safety, memory, maintenance, and improvement from a distance. It was built to understand the structure underneath them. In the real world, those outcomes all ride on control logic, process structure, and the quality of the operating environment itself.",
          "A.I.R.O.N. understands the machine mind, not just the management layer around it.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Interface with any PLC"
            subtitle="Real plants are mixed environments. A.I.R.O.N. is built to meet the machine where it is."
            align="center"
          />
          <CapabilityGrid items={plcPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Unitronics foundation. Customer-preferred flexibility."
            subtitle="A.I.R.O.N. is built on Unitronics All-In-One HMI/PLC foundations, with implementation flexibility when the project demands it."
            align="center"
          />
          <CapabilityGrid items={foundationPoints} compact />
          <p className="support-line center">
            This is not about forcing the plant to match the software. It is
            about building software and controls that respect the plant.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Retrofit and greenfield automation"
            subtitle="A.I.R.O.N. belongs in both worlds and can scale from one machine to full process automation." 
            align="center"
          />
          <CapabilityGrid items={retrofitPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="From single machines to full process control"
            subtitle="This is real machine and process control, not just screens and summaries."
            align="center"
          />
          <CapabilityGrid items={processPoints} compact />
          <p className="support-line center">
            From heavy machine control to food batching, from machine rebuilds to
            serious plant-floor operating systems, the controls layer is where
            the work becomes real.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Governed startup, shutdown, runout, and empty-down"
            subtitle="A.I.R.O.N. treats startup and shutdown as governed operating events, not tribal knowledge."
            align="center"
          />
          <CapabilityGrid items={startupPoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              This is not only about big automation. It is also about the small,
              high-consequence moments where plants usually rely on memory,
              habit, and luck: starting a line, stopping a line, emptying a
              line, clearing a section, purging a path, checking one section
              without running the full plant, and recovering safely after a
              hold.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Safety communication, startup annunciation, and local authority"
            subtitle="Safety is job one. Startup is a communication event, not just a control event."
            align="center"
          />
          <CapabilityGrid items={safetyCommPoints} compact />
          <p className="support-line center">
            People need to know what is about to move, where it is about to
            move, and why it is about to move. Remote communication must never
            be confused with remote command.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Acoustic monitoring, microphones, and zone-aware advisory intelligence"
            subtitle="A.I.R.O.N. can use acoustic monitoring as an advisory and proof-support layer around real operating state."
            align="center"
          />
          <CapabilityGrid items={acousticPoints} compact />
          <p className="support-line center">
            Acoustic is powerful when it supports insight, abnormal-condition
            detection, and maintenance interpretation. It is not presented as a
            replacement for certified primary safety instrumentation.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Robotics, motion, and governed autonomous operations"
            subtitle="Serious automation requires interlocks, boundaries, recovery logic, and physical consequence awareness."
            align="center"
          />
          <CapabilityGrid items={roboticsPoints} compact />
          <p className="support-line center">
            This is governed industrial autonomy, not novelty automation.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Secure by structure"
            subtitle="The controls story is not ‘give us your whole plant and hope for the best.’"
            align="center"
          />
          <CapabilityGrid items={securityPoints} compact />
          <p className="support-line center">
            The stronger industrial posture is to build the right relationship
            between local authority, secure messaging, structured visibility,
            read-only truth capture, and disciplined controls integration.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Controls that remember"
            subtitle="When controls support memory, sequence knowledge stops leaving with people."
            align="center"
          />
          <CapabilityGrid items={memoryPoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              Controls are no longer just an electrical and logic layer. They
              become part of a living industrial memory structure.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Who this is for"
            subtitle="For the people who ask the real industrial question: can they actually control the machine?"
            align="center"
          />
          <CapabilityGrid items={audiencePoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              A.I.R.O.N. can live beside the machine, inside the machine, or
              around the machine, depending on what the project deserves.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Safety. Structure. Memory. Controls. Annunciation. Human authority."
      />

      <CTAFooterBand
        headline="We are Industry. Period."
        primaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Explore Modules",
          href: "/a-i-r-o-n/modules",
        }}
        supportingLine="A.I.R.O.N. can help industry not only understand what is happening, but shape what happens next."
      />
    </SiteLayout>
  );
}
