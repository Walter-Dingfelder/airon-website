import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import SystemPlayerBlock from "../../components/doctrine/SystemPlayerBlock";

const retrofitPoints = [
  "Layer beside legacy or modern equipment",
  "Keep the original machine environment intact",
  "Instrument and listen before deeper expansion",
  "Advise in parallel before demanding trust",
  "Adapt to existing PLC and plant software realities",
  "Support private-label and machine-specific implementations",
];

const securityPoints = [
  "Parallel architecture instead of destructive rip-and-replace",
  "Secure portal structure through V.A.U.L.T.",
  "Remote visibility through SpeedForge / Starlink pathways",
  "Read-only, pull-ready information for authorized users",
  "No default push into customer ERP or CMMS",
  "Keep core machine logic and sensitive control layers protected",
];

const foundationPoints = [
  "Built on Unitronics All-In-One HMI/PLC foundations",
  "Flexible around customer-preferred PLC environments where required",
  "Expandable from one machine to broader facility coverage",
  "One truth layer that can grow without starting over",
  "Machine, process, and workforce support in one governed structure",
  "Industrial footing first — not decorative software second",
];

const executivePoints = [
  "Monitor one machine, one line, or the broader operation",
  "See decision-grade views instead of raw signal noise",
  "Request KPI views aligned to the operation's priorities",
  "Stay informed without intrusive access to control authority",
  "Use read-only views built around validated operational truth",
  "Support leadership visibility from anywhere authorized access is allowed",
];

const audiencePoints = [
  "Experienced operators who want direct machine truth",
  "Mechanics who need structure, memory, and drift visibility",
  "Trainees who need a serious, governed entry point",
  "Digital-native workers who learn through live feedback",
  "Supervisors who need continuity across shifts and crews",
  "Executives who need secure visibility without signal overload",
];

const relatedPages = [
  {
    title: "A.I.R.O.N. Home",
    href: "/a-i-r-o-n",
    description: "Return to the main A.I.R.O.N. overview.",
  },
  {
    title: "A.I.R.O.N. Modules",
    href: "/a-i-r-o-n/modules",
    description: "See the specialist layers underneath the umbrella system.",
  },
  {
    title: "Dingfelder Industrial Campus",
    href: "/a-i-r-o-n/industrial-campus",
    description: "See how workforce activation and governed learning fit in.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description: "Start a project conversation around your machines, process, or operation.",
  },
];

export default function AIRONSystemLivePlayerLivePage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/system-live-player-live"
      mainClassName="airon-system-player-page"
    >
      <HeroBlock
        eyebrow="It’s a new dawn, it’s a new day"
        title="SYSTEM-LIVE / PLAYER-LIVE"
        supportingLine="PLAY YOUR WORK - WORK YOUR PLAY"
        subhead="A.I.R.O.N. creates common ground between machine truth and human truth."
        body={
          <>
            <p>
              SYSTEM-LIVE is where A.I.R.O.N. learns, measures, preserves baselines,
              and watches for drift.
            </p>
            <p>
              PLAYER-LIVE is where people govern, approve, train, interpret, and
              improve with structure and discipline.
            </p>
            <p>
              This is not entertainment. This is not a gimmick. This is a serious
              industrial operating philosophy built for the real world.
            </p>
          </>
        }
        primaryCTA={{
          label: "Continue to A.I.R.O.N.",
          href: "/a-i-r-o-n",
        }}
        secondaryCTA={{
          label: "Start Discovery",
          href: "/a-i-r-o-n/contact",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>SYSTEM-LIVE</h3>
            <p>
              Machine-centered truth: baseline, drift, proof, timing, memory,
              and continuous observation.
            </p>
          </div>
          <div className="comparison-card">
            <h3>PLAYER-LIVE</h3>
            <p>
              Human-centered entry: judgment, rehearsal, approval, governed
              learning, and disciplined improvement.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="The old industrial problem"
        paragraphs={[
          "For generations, people adapted themselves to whatever machine interface, software structure, and operating language they were handed. Operators adapted. Mechanics adapted. Supervisors adapted. Executives adapted.",
          "A.I.R.O.N. changes that relationship. Instead of forcing every person into one rigid operating language, A.I.R.O.N. creates a framework where machine truth and human truth can meet on common ground.",
          "Modern work is increasingly screen-driven, sensor-rich, logic-based, and feedback-intensive. The workforce is changing, the tools are changing, and the interface between human beings and industrial reality has to change with them.",
        ]}
        sectionClassName="section section-alt"
      />

      <TextIntroBlock
        title="What SYSTEM-LIVE means"
        paragraphs={[
          "SYSTEM-LIVE is the machine-centered side of A.I.R.O.N. It learns continuously, measures reality, holds the baseline, detects drift, and preserves proof.",
          "It does not get tired. It does not retire. It does not forget the lesson because the best operator went home or the best engineer changed jobs.",
          "Baseline is the known-good state. Drift is the slow deviation. Proof is verified cause and effect. That is the work people should not have to carry alone forever. A.I.R.O.N. was built to carry it with them.",
        ]}
      />

      <TextIntroBlock
        title="What PLAYER-LIVE means"
        paragraphs={[
          "PLAYER-LIVE is the human-centered side of A.I.R.O.N. It is where people enter the system in a structured, governed, disciplined way to learn, rehearse, understand, improve, and make better decisions.",
          "It is not social media. It is not recreational gaming. It is not ungoverned simulation. It is not speed over safety.",
          "PLAYER-LIVE is governed mastery. It creates a serious entry point for newer workforce participants, supports rehearsal and training, strengthens onboarding, and helps people build confidence without forcing them to learn the hard way on a live machine.",
        ]}
        sectionClassName="section section-alt"
      />

      <SystemPlayerBlock
        title="Why both belong together"
        systemText="holds baseline, drift, proof, timing, and repeatable structure."
        playerText="retains judgment, ethics, approvals, context, and physical authority."
      />

      <section className="section">
        <div className="container narrow">
          <p>
            The power is not in choosing one over the other. The power is in the
            structural union of both.
          </p>
          <p>
            SYSTEM-LIVE without PLAYER-LIVE can preserve truth, but it cannot
            replace human judgment, ethics, or safety approvals. PLAYER-LIVE
            without SYSTEM-LIVE can create participation, but it loses custody
            of baseline, drift, and proof.
          </p>
          <p>
            A.I.R.O.N. was built so both can exist together: the machine truth
            remains intact, the human role remains respected, learning stays
            serious, and improvement stays disciplined.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Retrofit without replacement"
            subtitle="A.I.R.O.N. can be layered beside legacy or modern equipment without forcing a destructive rip-and-replace event first."
            align="center"
          />
          <p className="center narrow-text">
            If your machine is newer than yesterday or older than grandpa’s
            grandpa, A.I.R.O.N. can be developed to meet it where it is.
          </p>
          <CapabilityGrid items={retrofitPoints} compact />
          <p className="support-line center">
            The goal is not to erase what already works. The goal is to
            strengthen it, extend it, and make it more usable for the people
            who depend on it.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Platform foundation and reach"
            subtitle="A.I.R.O.N. is built on Unitronics All-In-One HMI/PLC foundations and expanded through V.A.U.L.T. and SpeedForge / Starlink architecture."
            align="center"
          />
          <CapabilityGrid items={foundationPoints} compact />
          <p className="support-line center">
            The objective is not to force one controls ideology onto every plant.
            The objective is to build the right support layer around the real
            machine, the real process, and the real people in front of us.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Secure by structure"
            subtitle="A.I.R.O.N. works in parallel with the original machine environment while keeping core control logic intact."
            align="center"
          />
          <CapabilityGrid items={securityPoints} compact />
          <p className="support-line center">
            A.I.R.O.N. does not need to push into ERP, CMMS, or other customer
            systems to create value. It creates a secure portal and pull-ready
            information structure so authorized users can access the data they
            want, when they want it, without exposing the core machine
            environment to unnecessary risk.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Executive visibility and configurable KPI views"
            subtitle="Authorized leaders can monitor one machine, one line, or the broader operation through secure read-only views built around validated operational truth."
            align="center"
          />
          <CapabilityGrid items={executivePoints} compact />
          <p className="support-line center">
            This is not about flooding leadership with more dashboards. It is
            about giving them the right lens, at the right altitude, with the
            right structure.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Who this helps"
            subtitle="There is a home for everyone inside SYSTEM-LIVE / PLAYER-LIVE."
            align="center"
          />
          <CapabilityGrid items={audiencePoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              If grandpa and dad are running the machine and want direct machine
              truth, SYSTEM-LIVE speaks their language.
            </p>
            <p>
              When Jr. steps in, PLAYER-LIVE gives him a serious, structured,
              governed entry point into the same world.
            </p>
            <p>
              A.I.R.O.N. does not disrespect experience. It preserves it. It
              does not flatten people into one interface. It creates a framework
              where experienced operators, mechanics, engineers, trainees, and
              leadership can all connect to the same truth in ways that make
              sense for their role.
            </p>
          </div>
        </div>
      </section>

      <RelatedLinksBlock
        title="Related A.I.R.O.N. pages"
        items={relatedPages}
        supportingLine="Machine truth. Human judgment. Secure visibility. Structured growth."
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
        supportingLine="A.I.R.O.N. does not replace people. It preserves what makes them powerful."
      />
    </SiteLayout>
  );
}
