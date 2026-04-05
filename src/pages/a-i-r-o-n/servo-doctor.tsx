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
  "Commanded position versus actual position",
  "Following error and axis lag",
  "Velocity instability, oscillation, and hunting",
  "Encoder or feedback integrity loss",
  "Homing behavior and repeatability drift",
  "Torque demand, current behavior, and drive effort",
  "Mechanical binding, backlash, and mounted looseness",
  "Cycle timing deviation and station-to-station motion variance",
  "Alarm history, reset behavior, and repeat nuisance faults",
  "Motion truth around jams, bad tuning, weak repairs, and stressed process demands",
];

const capabilities = [
  "Separate tuning problems from mechanical problems more cleanly",
  "Show when the axis is suffering from the process rather than causing the process problem",
  "Preserve motion-event sequence so troubleshooting does not restart from memory alone",
  "Clarify whether the issue lives in the drive, feedback, mechanics, or commanded behavior",
  "Tighten restart confidence after jams, repairs, or abnormal stops",
  "Feed motion truth into broader Doctor views and Fortune Teller™",
  "Improve handoff quality between controls, maintenance, mechanics, and production",
  "Turn recurring motion pain into preserved memory and better future guidance",
];

const bestFit = [
  "High-speed indexing, pick-and-place, cut-to-length, or registration-sensitive equipment",
  "Processes where small motion error becomes scrap, jams, or lost throughput",
  "Machines with repeat nuisance servo faults that never seem to stay fixed",
  "Sites where tuning changes, encoder issues, or mechanical looseness blur together",
  "Operations where restart confidence matters after crashes, mispicks, or abnormal stops",
  "Systems where commanded motion and real motion must stay provably connected",
];

const withoutServoDoctor = [
  "Servo alarms get reset faster than they get understood",
  "Tuning, mechanics, and process strain keep getting blamed in circles",
  "Bad motion events are remembered emotionally but not preserved clearly",
  "Small tracking errors become scrap, jams, or positional distrust",
  "Restart decisions stay cautious because the real cause never got proven",
];

const withServoDoctor = [
  "Motion truth becomes clearer before the next jam, crash, or scrap run",
  "Controls, mechanics, and operations can work from the same sequence of evidence",
  "Following error, feedback issues, and mechanical looseness separate faster",
  "Return-to-service decisions become more deliberate and defensible",
  "Recurring servo pain becomes memory, prediction, and better motion discipline",
];

const relatedPages = [
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how Servo Doctor™ fits inside the larger specialist architecture.",
  },
  {
    title: "Motor Doctor™",
    href: "/a-i-r-o-n/motor-doctor",
    description:
      "See the rotating-equipment specialist that pairs naturally with motion-control truth.",
  },
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See how commanded behavior, machine logic, and control structure connect to servo-domain truth.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how specialist motion truth becomes action timing, drift visibility, and predictive clarity.",
  },
];

export default function ServoDoctorPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/servo-doctor"
      mainClassName="airon-module-page servo-doctor-page"
    >
      <HeroBlock
        eyebrow="A.I.R.O.N.'s motion-control specialist"
        title="Servo Doctor™"
        supportingLine="When commanded motion and real motion stop agreeing, the truth needs a specialist."
        subhead="Servo Doctor™ is built to read commanded position, actual motion, following error, feedback integrity, drive effort, and machine mechanics as one connected motion-truth layer."
        body={
          <>
            <p>
              Servo problems rarely stay small for long. One weak encoder signal,
              one drifting home position, one loose coupling, one bad tuning change,
              or one axis that is working harder than it should can quietly turn into
              scrap, jams, mistrust, and repeated downtime.
            </p>
            <p>
              Servo Doctor™ exists to make that truth clearer before the machine teaches
              the same lesson again. It is built to read the commanded move, the actual
              move, and the physical machine carrying that move — all together.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Servo Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Commanded motion</h3>
            <p>
              The controls know what the machine was told to do.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Real motion truth</h3>
            <p>
              Servo Doctor™ shows whether the axis, mechanics, and process actually delivered that command cleanly.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="doctrine-block">
            <p className="eyebrow">Part of the Doctor Family™</p>
            <p>
              Servo Doctor™ is one specialist inside the larger Doctor Family™ architecture.
              It proves that A.I.R.O.N. can sit tightly on motion control when the real problem
              lives in the relationship between commanded motion, machine response, and mechanical reality.
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
        title="Built for one of industry's most frustrating truth gaps"
        paragraphs={[
          "Servo problems waste time because the machine can still move while the truth is already degrading. It may home, run, and reset — but positional trust is shrinking, recovery is getting shakier, and the next fault is already forming.",
          "That is why Servo Doctor™ deserves to exist as its own specialist. Motion control has its own vocabulary, its own failure signatures, and its own need for preserved sequence. Generic alarms do not tell that story clearly enough.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Servo Doctor™ is not:</h3>
            <ul>
              <li>A replacement for certified safety functions, interlocks, or motion hardware</li>
              <li>A promise that every servo alarm is a tuning-only problem</li>
              <li>A substitute for controls, mechanical, or process ownership</li>
              <li>A trend screen that still leaves restart confidence weak</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Servo Doctor™ watches"
            subtitle="Not just whether the axis moved. Whether it moved truthfully."
            align="center"
          />
          <CapabilityGrid items={watchedSignals} compact />
          <p className="support-line center">
            The point is not to create one more motion dashboard. The point is to preserve
            motion truth before one weak axis turns into a machine-wide consequence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Servo Doctor™ can do"
            subtitle="Sharpen motion troubleshooting, restart confidence, and future guidance around servo-driven equipment."
            align="center"
          />
          <CapabilityGrid items={capabilities} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Best where motion precision carries consequence"
            subtitle="Small positional error can become scrap, mistrust, or repeated machine pain."
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
                Servo Doctor™ earns its keep where commanded motion must become repeatable,
                trusted machine behavior instead of hopeful recovery after the next alarm.
              </p>
              <p>
                It is especially valuable where the same motion problem keeps returning because
                the event sequence was never preserved clearly enough to review and improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Why Servo Doctor™ and VFD Doctor™ are not the same thing"
        paragraphs={[
          "Servo Doctor™ is built for controlled axis truth: position, following error, feedback integrity, homing repeatability, and commanded-versus-actual motion behavior.",
          "VFD Doctor™ belongs beside it as a different specialist for speed-controlled drive behavior, ramping, torque delivery, load response, and variable-frequency operation on broader rotating assets.",
          "They can overlap in a machine, but they should not be flattened into one generic drive story. The specialist matters.",
        ]}
        sectionClassName="section"
      />

      <TextIntroBlock
        title="Where Servo Doctor™ sits in the architecture"
        paragraphs={[
          "Servo Doctor™ tells the truth now inside one of the most timing-sensitive industrial specialist domains: controlled motion under real mechanical and process demand.",
          "That truth can then feed broader Doctors, operating views, Continuous Improvement, and Fortune Teller™. The motion specialist should not be isolated from the larger system. It should make the larger system sharper by being more precise at the motion layer first.",
        ]}
        sectionClassName="section section-alt"
      />

      <ContrastBlock
        title="If motion truth is weak, the whole machine starts lying."
        leftTitle="Without Servo Doctor™"
        leftItems={withoutServoDoctor}
        rightTitle="With Servo Doctor™"
        rightItems={withServoDoctor}
      />

      <TextIntroBlock
        title="Operational memory matters here"
        paragraphs={[
          "Servo Doctor™ becomes more valuable as it learns what the site has already lived through: homing drift, weak mechanical repairs, tuning changes, intermittent feedback faults, repeated jams, and the exact sequence between motion distress and process consequence.",
          "That memory belongs in V.A.U.L.T.® and in Continuous Improvement. The goal is not just to reset the next servo alarm faster. The goal is to stop reliving the same motion failure under a different timestamp.",
        ]}
        sectionClassName="section"
      />

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Motion truth, control truth, specialist fit, and future timing stay stronger when they stay connected."
        />
      </div>

      <CTAFooterBand
        headline="Commanded motion is not the same as trusted motion."
        primaryCTA={{
          label: "Request a Servo Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "Start a Discovery Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        supportingLine="Servo Doctor™ helps prove where the motion truth is breaking down before the machine teaches the same lesson again."
      />
    </SiteLayout>
  );
}
