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
  "Flexible around customer-preferred PLC environments where required",
  "Expandable from one machine to broader facility coverage",
  "One truth layer that can grow without starting over",
  "Machine, process, and workforce support in one governed structure",
  "Industrial footing first — not decorative software second",
];

const retrofitPoints = [
  "Retrofit automation for legacy or inherited equipment",
  "Greenfield automation for new machine and process systems",
  "Control system redesign and HMI modernization",
  "Remote expansion, sequencing upgrades, and recipe logic",
  "Private-label custom software and governed autonomy where appropriate",
  "Parallel deployment when the plant is not ready for full replacement",
];

const processPoints = [
  "Single-machine sequencing and machine-center control",
  "Plant utility and support process control",
  "Batching systems and governed recipe execution",
  "Metal recipe management and structured process timing",
  "Food and liquid process automation",
  "Machine synchronization, exception handling, and operator station design",
];

const startupPoints = [
  "Authorized startup release with governed progression",
  "Proof-based advancement instead of timer-only progression",
  "Controlled shutdown, clear / purge / runout, and empty-down logic",
  "Maintenance / test modes and restricted / degraded startup paths",
  "Startup treated as a safety event and a communication event",
  "Real transition control where trust is built or lost",
];

const safetyCommPoints = [
  "Plantwide or zone-specific startup warning",
  "Visual and verbal annunciation before motion begins",
  "Maintenance-directed fault announcements",
  "Distributed panel awareness with local-only control authority",
  "Remote messaging and support without stealing local command",
  "Clear communication about what is moving, where, and why",
];

const acousticPoints = [
  "Zone-aware acoustic monitoring as an advisory and proof-support layer",
  "Support abnormal-condition detection around belts, conveyors, blowers, and valves",
  "Use microphone and audio layers to strengthen startup and maintenance insight",
  "Help localize abnormal sound sources in real operating zones",
  "Correlate sound with process state, not just raw noise",
  "Keep acoustic advisory — not as a replacement for primary safety instrumentation",
];

const autonomyPoints = [
  "Free operators from repetitive, low-value manual sequences",
  "Create more time for inspections and verification",
  "Support better housekeeping and situational awareness",
  "Return attention to safety, judgment, and exception handling",
  "Give experienced people more space to coach and lead",
  "Use automation to reduce burden, not erase human value",
];

const motionPoints = [
  "Robotic machinery centers and multi-axis motion systems",
  "Autonomous crane logic and governed material handling",
  "Automated recipe transfer and execution",
  "Structured exception handling and recovery logic",
  "Machine-to-machine operational flow",
  "Governed industrial autonomy built around trust, boundaries, and interlocks",
];

const securePoints = [
  "No invasive dependence on customer business systems",
  "Outbound-only structure where project architecture calls for it",
  "Keep PLCs and core control layers isolated from external traffic",
  "Support secure messaging, remote dashboards, and structured visibility",
  "Work in parallel with the original environment when needed",
  "Build the right relationship between local authority and remote support",
];

const memoryPoints = [
  "Controls should remember, not just execute",
  "Preserve lessons instead of trapping them in one person’s memory",
  "Connect machine behavior to fault history and proven fixes",
  "Support structured handoff across shifts and roles",
  "Help new people learn without repeating old failures",
  "Turn controls into part of a living industrial memory structure",
];

const relatedPages = [
  {
    title: "SYSTEM-LIVE / PLAYER-LIVE",
    href: "/a-i-r-o-n/system-live-player-live",
    description:
      "See how machine truth and human engagement meet on common ground.",
  },
  {
    title: "Continuous Improvement",
    href: "/a-i-r-o-n/continuous-improvement",
    description:
      "See why Controls & Automation is Continuous Improvement applied to machine behavior.",
  },
  {
    title: "One-Touch Startup",
    href: "/a-i-r-o-n/one-touch-startup",
    description:
      "See governed startup, sequencing, annunciation, and proof-based advancement in context.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start a conversation around controls, automation, startup, retrofit, or full machine architecture.",
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
              automation, governed interfaces, and operator-facing logic that
              can be trusted in the real world.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What we mean by controls"
        paragraphs={[
          "Controls are where the machine becomes behavior. They determine what starts, what stops, what waits, what alarms, what interlocks, what sequences, what protects, and what is allowed to happen next.",
          "A.I.R.O.N. was not built only to observe efficiency, safety, memory, maintenance, and improvement from a distance. It was built to understand the structure underneath them.",
          "A.I.R.O.N. understands the machine mind, not just the management layer around it.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Interface with any PLC"
            subtitle="A serious controls partner has to be able to meet the machine where it is."
            align="center"
          />
          <CapabilityGrid items={plcPoints} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Unitronics foundation. Customer-preferred flexibility."
            subtitle="A.I.R.O.N. is built on Unitronics All-In-One HMI/PLC foundations while remaining flexible around customer-preferred control environments."
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
            subtitle="A.I.R.O.N. belongs in both worlds."
            align="center"
          />
          <CapabilityGrid items={retrofitPoints} compact />
          <p className="support-line center">
            Some projects need A.I.R.O.N. beside the original environment. Some
            need a full new control layer. Some need both over time. The point
            is disciplined implementation.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="From single machines to full process control"
            subtitle="A.I.R.O.N. is built for real machine and process control, not just screens and summaries."
            align="center"
          />
          <CapabilityGrid items={processPoints} compact />
          <p className="support-line center">
            From heavy machine control to food batching, from startup logic to
            process continuity, the controls layer is where the work becomes
            real.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Governed startup, shutdown, runout, and empty-down"
            subtitle="This is where a controls partner proves whether they understand real operations."
            align="center"
          />
          <CapabilityGrid items={startupPoints} compact />
          <p className="support-line center">
            A.I.R.O.N. is not only about big automation. It is also about the
            small, high-consequence moments where plants usually rely on memory,
            habit, and luck.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Safety communication, startup annunciation, and local authority"
            subtitle="Startup is a communication event, not just a control event."
            align="center"
          />
          <CapabilityGrid items={safetyCommPoints} compact />
          <p className="support-line center">
            People need to know what is about to move, where it is about to
            move, and why. Remote communication must never be confused with
            remote command.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Acoustic monitoring, microphones, and zone-aware advisory intelligence"
            subtitle="A.I.R.O.N. can use acoustic monitoring and microphone layers as an advisory and proof-support channel."
            align="center"
          />
          <CapabilityGrid items={acousticPoints} compact />
          <p className="support-line center">
            Acoustic is powerful and useful, but it remains an advisory and
            proof-support layer, not a replacement for primary safety
            instrumentation or core process control signals.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Autonomy that frees people for human work"
            subtitle="Good automation should remove repetitive burden so people can focus on inspections, awareness, judgment, and the work only humans should do."
            align="center"
          />
          <CapabilityGrid items={autonomyPoints} compact />
          <p className="support-line center">
            Through governed autonomous control, A.I.R.O.N. can free operators
            from mundane repetitive tasks and return time to the human work that
            keeps plants safer, cleaner, more aware, and more reliable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Robotics, motion, and governed autonomous operations"
            subtitle="Some machines do not only sequence. They move."
            align="center"
          />
          <CapabilityGrid items={motionPoints} compact />
          <p className="support-line center">
            This is not autonomy for novelty’s sake. This is governed industrial
            autonomy built around trust, boundaries, interlocks, and human
            authority.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Secure by structure"
            subtitle="A.I.R.O.N. does not need invasive access to a customer’s sensitive systems to be useful."
            align="center"
          />
          <CapabilityGrid items={securePoints} compact />
          <p className="support-line center">
            The controls story is not “give us your whole plant and hope for the
            best.” It is “let us build the right relationship between local
            authority, secure messaging, structured visibility, and disciplined
            controls integration.”
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Controls that remember"
            subtitle="One of the biggest failures in industrial controls is that too much wisdom lives only in people."
            align="center"
          />
          <CapabilityGrid items={memoryPoints} compact />
          <p className="support-line center">
            Controls are no longer just an electrical and logic layer. They
            become part of a living industrial memory structure.
          </p>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Machine behavior. Startup logic. Human authority. Structured memory. Safer automation."
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
