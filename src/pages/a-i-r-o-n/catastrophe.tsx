import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import treeOfKnowledgeImage from "../../assets/catastrophe-tree-of-knowledge.png";
import emtSosBadgeImage from "../../assets/catastrophe-emt-sos-badge.webp";
import catastropheTabletImage from "../../assets/catastrophe-tablet.jpg";
import machineModeImage from "../../assets/catastrophe-machine-mode.png";
import emtSosModeImage from "../../assets/catastrophe-emt-sos-mode.png";

const doctrineRoles = [
  "Protect human life during abnormal and catastrophic events",
  "Carry bounded operational truth forward when systems, communications, or instrumentation degrade",
  "Guide safe stabilization, disciplined recovery, and correct repair when the plant is down",
  "Create a permanent incident record that improves the next response instead of disappearing after the restart",
];

const whatItIs = [
  "A native A.I.R.O.N. doctrine, not a detachable feature pack",
  "A decision system, not an alarm",
  "A structure for abnormal-event guidance when normal automation is degraded or gone",
  "A truth-continuity system spanning human safety, machine stabilization, and repair recovery",
  "A growth engine for The Tree of Knowledge through real rooted events",
  "A governed incident record system that preserves actions, timestamps, handoffs, and outcomes",
];

const whatItIsNot = [
  "Not a standalone tablet app",
  "Not a replacement for emergency services or trained responders",
  "Not a substitute for site procedures, training, or regulations",
  "Not autonomous machine control",
  "Not remote command authority",
  "Not paperwork that begins after the real event is over",
];

const humanPriorityRules = [
  "Human safety always takes precedence",
  "The first priority question is whether any humans are hurt",
  "On-site command remains absolute during active human response",
  "Remote participation is assistive only",
  "Life safety overrides technical optimization during active human response",
  "No person is expected or permitted to exceed training, authority, or personal safety limits",
];

const optionalTabletFunctions = [
  "Machine Event Mode for safe stabilization and early recovery guidance",
  "EMT-SOS Human Event Mode when injury is confirmed or credibly suspected",
  "Dual Incident Mode when human and machine consequence coexist",
  "Monitor & Comms Mode for mobile-first remote observation and coordination",
  "Shared Message Stream for role-labeled text coordination",
  "Local response speed dial for site-specific supervision, maintenance, safety, or electrical support",
  "One-touch SDS / MSDS access",
  "Emergency equipment requests such as tourniquet, AED, or Stokes basket",
  "Two-way paging and loudspeaker announcements",
  "Structured responder handoff",
  "Last Known Snapshot view and safe toggle into technical context when appropriate",
];

const tabletReadiness = [
  "Always powered and available when deployed",
  "Independent cellular connectivity by default",
  "Independent battery power with charging discipline and vehicle charging options",
  "Physically movable so critical intelligence can be carried away from fixed danger points",
  "Readiness state shown clearly as READY, DEGRADED, or NOT READY",
  "Dual-tablet redundancy with hot spare philosophy when tablets are used",
];

const lastKnownSnapshotPoints = [
  "Up to 24 hours of bounded operational truth leading into the event",
  "Equipment state, material state, and physics in play",
  "Live state continuation when any monitored subsystems remain online",
  "Human confirmations, actions, timestamps, and outcomes",
  "Hazard and energy profile including stored energy, thermal, chemical, electrical, hydraulic, pneumatic, and gravity risk",
  "A permanent rooted event record for future retrieval and safer sequence matching",
];

const repairGuidancePoints = [
  "Surface the right SOPs, documentation, CMMS records, and historical context for the asset in trouble",
  "Use preserved truth instead of hallway folklore, memory fragments, or panic-driven guesswork",
  "Move from safe stabilization into disciplined troubleshooting and recovery",
  "Constrain unsafe motion, restart, override, and improvisation until the right gates are satisfied",
  "Record what failed, what was confirmed, what was done, and what restored operation",
  "Continuously improve the next repair by turning this event into reusable sequential knowledge",
];

const commsAndCommandPoints = [
  "Outside and off-site participants can submit time-critical information without intake blockage when policy allows",
  "Audio seats are intentionally limited to reduce overload",
  "Automatic SMS fallback preserves intake when live audio is saturated",
  "Role labeling keeps guidance clear and traceable",
  "Executives, responders, and specialists may observe, communicate, and advise from mobile devices",
  "No remote participant gains control, override, reset, or workflow-change authority",
];

const growthAndRecordPoints = [
  "Simulation branches may be trained and pruned",
  "Real events always become roots",
  "Every rooted event can retain LKS, live state, human confirmations, actions, timestamps, outcomes, and handoff notes",
  "Events can be indexed by equipment, hazard class, and causal pattern for future retrieval",
  "The incident record is treated as the live event, not a later reconstruction",
  "The system should reduce time-to-stabilize, time-to-handoff, and repeat failure rediscovery over time",
];


const visualGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.5rem",
  alignItems: "start",
};

const visualCardStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(7,18,35,0.94), rgba(5,13,26,0.98))",
  border: "1px solid rgba(120,150,190,0.22)",
  borderRadius: "24px",
  padding: "1rem",
  boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
};

const visualImageStyle: React.CSSProperties = {
  width: "100%",
  display: "block",
  borderRadius: "18px",
  border: "1px solid rgba(120,150,190,0.16)",
};

const visualCaptionTitleStyle: React.CSSProperties = {
  margin: "0.95rem 0 0.35rem",
  fontSize: "1.05rem",
  fontWeight: 700,
  color: "#f4f7fb",
};

const visualCaptionTextStyle: React.CSSProperties = {
  margin: 0,
  color: "rgba(226,234,245,0.82)",
  lineHeight: 1.6,
  fontSize: "0.98rem",
};

function VisualFigure({
  src,
  alt,
  title,
  caption,
}: {
  src: string;
  alt: string;
  title: string;
  caption: string;
}): JSX.Element {
  return (
    <figure style={visualCardStyle}>
      <img src={src} alt={alt} style={visualImageStyle} />
      <figcaption>
        <h3 style={visualCaptionTitleStyle}>{title}</h3>
        <p style={visualCaptionTextStyle}>{caption}</p>
      </figcaption>
    </figure>
  );
}

const relatedPages = [
  {
    title: "Safety / Tree of Knowledge",
    href: "/a-i-r-o-n/safety",
    description:
      "See the Experience / Truth / Memory doctrine that underpins knowledge before action.",
  },
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how custody, context, recall, and institutional memory strengthen recovery and repair.",
  },
  {
    title: "Better Days",
    href: "/a-i-r-o-n/better-days",
    description:
      "See how captured reality becomes routed improvement instead of another forgotten breakdown.",
  },
  {
    title: "Contact / Discovery",
    href: "/a-i-r-o-n/contact",
    description:
      "Start a discovery conversation about abnormal-event protection, SOS coordination, and guided recovery.",
  },
];

export default function AIRONCatastrophePage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/catastrophe" mainClassName="airon-module-page catastrophe-page">
      <HeroBlock
        eyebrow="When normal systems go dark, human beings still need truth"
        title="C.A.T.A.S.T.R.O.P.H.E.™"
        supportingLine="Conditional Action Tree — Adapting Safe, Tactical, Responsible, Operational, Physical Human Engagement"
        subhead="C.A.T.A.S.T.R.O.P.H.E.™ is the native A.I.R.O.N. doctrine for abnormal-event protection, Savior-On-Site coordination, carried operational truth, and guided recovery when consequence is real and improvisation is unacceptable."
        body={
          <>
            <p>
              This is not just a disaster page, and it is not just a tablet. C.A.T.A.S.T.R.O.P.H.E. is built into every A.I.R.O.N. system as a native incident-handling doctrine.
            </p>
            <p>
              It exists for the moment when dashboards stop being enough, communication fragments, fixed consoles become the wrong place to stand, and people still have to protect life, stabilize the scene, guide the recovery, and restore the plant the right way.
            </p>
          </>
        }
        primaryCTA={{
          label: "Start a C.A.T.A.S.T.R.O.P.H.E. Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Pages",
          href: "#related-pages",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Protect life</h3>
            <p>
              When humans are hurt or at risk, EMT-SOS places life safety first,
              preserves command clarity, and prepares a clean responder handoff.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Carry truth</h3>
            <p>
              Last Known Snapshot, surviving live state, human confirmation, and
              recorded decisions keep the event understandable even when instrumentation degrades.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Guide recovery</h3>
            <p>
              Machine Event Mode, Dual Incident logic, and memory-backed repair guidance
              help people recover safely, correctly, and faster than rediscovering the path from scratch.
            </p>
          </div>
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="Why C.A.T.A.S.T.R.O.P.H.E. matters"
        paragraphs={[
          "When normal automation degrades, communications break down, or the event outruns the screen the crew expected to rely on, C.A.T.A.S.T.R.O.P.H.E. becomes the disciplined human guidance layer inside A.I.R.O.N.",
          "It helps protect life, preserve truth, coordinate communications, and guide safe recovery without forcing people to juggle disconnected radios, procedures, documentation, phone trees, and memory under stress.",
          "The doctrine is built into every A.I.R.O.N. system. Tablets are optional endpoints that can extend visibility, mobility, and communication, but they are not the system itself.",
        ]}
      />

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What C.A.T.A.S.T.R.O.P.H.E. actually is"
            subtitle="A native doctrine spanning human protection, truth continuity, and recovery guidance."
            align="center"
          />
          <CapabilityGrid items={whatItIs} compact />

          <SectionHeading
            title="What it is not"
            subtitle="Important boundaries matter when the event is real."
            align="center"
          />
          <CapabilityGrid items={whatItIsNot} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="The four roles the reader needs to understand"
            subtitle="This system is doing more than one job because the event itself demands more than one job."
            align="center"
          />
          <CapabilityGrid items={doctrineRoles} />
          <div className="doctrine-block top-gap">
            <p>
              A catastrophic event is not neatly divided into separate software purchases. The same incident may require human aid, hazard awareness, machine stabilization, responder coordination, documentation access, communications discipline, and repair sequence guidance in one continuous chain.
            </p>
            <p>
              C.A.T.A.S.T.R.O.P.H.E. is designed to keep that chain intact.
            </p>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Built into every A.I.R.O.N. system. Tablets optional."
        paragraphs={[
          "C.A.T.A.S.T.R.O.P.H.E. does not depend on a specific endpoint for authority, persistence, or continuity. It executes within the A.I.R.O.N. control and data layer as a native incident-handling doctrine.",
          "Tablets, HMIs, workstations, and mobile devices may visualize state, accept human input, and carry the event outward — but the doctrine itself is not a detachable tablet product and it is not a bolt-on module.",
          "That matters because there is no other single device or workflow like this. Instead of juggling radios, disconnected procedures, scattered emergency numbers, fixed consoles, printed documentation, and fragmented machine data, one optional mobile endpoint can consolidate the relevant subsystems into a single governed field surface while the system logic remains native to A.I.R.O.N.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section section-alt" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={visualGridStyle}>
            <VisualFigure
              src={catastropheTabletImage}
              alt="Concept image of the optional C.A.T.A.S.T.R.O.P.H.E. field tablet endpoint"
              title="Optional field endpoint concept"
              caption="One governed mobile surface can carry incident visibility, responder guidance, documentation access, communications, and state continuity away from fixed danger points without redefining the underlying doctrine as a tablet-only product."
            />
            <VisualFigure
              src={emtSosBadgeImage}
              alt="EMT-SOS Savior-On-Site badge"
              title="EMT-SOS / Savior-On-Site"
              caption="When human life priority is active, SOS identifies the on-site continuity role: the person carrying scene truth, disciplined communication, responder readiness, and clean handoff responsibility under stress."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="SOS mode: Savior-On-Site"
            subtitle="The person with the tablet becomes the mobile continuity point, not just a person holding hardware."
            align="center"
          />
          <div className="doctrine-block">
            <p>
              EMT-SOS is the human life-safety subsystem operating under C.A.T.A.S.T.R.O.P.H.E. It activates after a catastrophic event is declared and the first priority question is answered yes: are any humans hurt?
            </p>
            <p>
              In that moment, SOS is the honored on-site role carrying life-safety coordination, responder preparation, communication discipline, and carried truth away from danger. The goal is not theatrics. The goal is to prevent good people from becoming the next casualty.
            </p>
          </div>
          <CapabilityGrid items={humanPriorityRules} compact />
          <div className="container" style={{ padding: 0, marginTop: "1.5rem" }}>
            <div style={{ maxWidth: "420px", margin: "0 auto" }}>
              <VisualFigure
                src={emtSosBadgeImage}
                alt="EMT-SOS Savior-On-Site badge"
                title="SOS is a role, not just a screen mode"
                caption="The person in possession of the active tablet becomes the mobile continuity point for life safety, responder preparation, message discipline, and trusted on-site event truth until formal handoff occurs."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What the optional tablet endpoint can consolidate"
            subtitle="One governed field surface instead of scattered subsystems and frantic switching."
            align="center"
          />
          <CapabilityGrid items={optionalTabletFunctions} />
          <p className="support-line center">
            The tablet is optional. The doctrine is not.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Tablet readiness, movement, and trust"
            subtitle="If a tablet is used, it must behave like a life-safety tool, not a casual accessory."
            align="center"
          />
          <CapabilityGrid items={tabletReadiness} compact />
          <div className="callout-card top-gap">
            <p>
              The point of the tablet is to move critical intelligence away from fixed danger points, reduce anchoring to consoles or unsafe equipment, and keep the on-site lead connected to the event, the people, the hazards, and the outside world from a safer location.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Last Known Snapshot: bounded truth carried forward"
            subtitle="When the plant loses visibility, the event still has history."
            align="center"
          />
          <CapabilityGrid items={lastKnownSnapshotPoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              This is why the system matters during both safety response and repair. When monitored systems die, humans become the sensors and C.A.T.A.S.T.R.O.P.H.E. becomes the guide — but it does not start from nothing.
            </p>
            <p>
              It starts from the best preserved operational truth available and carries that truth into the next decision.
            </p>
          </div>
        </div>
      </section>

      <TextIntroBlock
        title="Machine Event Mode, Human Event Mode, and Dual Incident Mode"
        paragraphs={[
          "Machine Event Mode exists when abnormal machine or process conditions are detected without confirmed human injury. It guides initial safe stabilization and recovery, constrains unsafe movement, and gives one-touch access to local response resources established during commissioning.",
          "Human Event Mode exists when injury is confirmed or credibly suspected. It supports structured observation, immediate actions bounded by training and authority, SDS access, timestamped responder handoff, and disciplined communication under stress.",
          "Dual Incident Mode exists when machine hazards and human consequence coexist. In that condition, human life safety remains primary, machine controls remain locked or constrained to predefined safe states, and recovery waits until human safety and responder handoff are complete.",
        ]}
        sectionClassName="section"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={visualGridStyle}>
            <VisualFigure
              src={machineModeImage}
              alt="Machine Event Mode interface concept for C.A.T.A.S.T.R.O.P.H.E."
              title="Machine Event Mode"
              caption="Machine-first abnormal states focus on stabilization, exclusion, hazardous energy verification, local response speed dial, and carried Last Known Snapshot truth before recovery begins."
            />
            <VisualFigure
              src={emtSosModeImage}
              alt="EMT-SOS mode interface concept with shared message stream"
              title="EMT-SOS Human Event Mode"
              caption="Human-life priority shifts the surface toward immediate actions, shared messaging, SDS access, role assignment, and a handoff record that responders can trust when seconds matter."
            />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Communications, outside support, and executive visibility"
            subtitle="Remote participation is allowed to help. It is not allowed to seize command."
            align="center"
          />
          <CapabilityGrid items={commsAndCommandPoints} compact />
          <div className="doctrine-block top-gap">
            <p>
              This is where SOS becomes more than a screen. It becomes the field communicator for emergency services, off-site executives, vendors, specialists, and designated customer contacts — through text, voice, paging, loudspeaker, and structured event updates — while preserving on-site command discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Guided recovery and repair"
            subtitle="A three-dollar bearing can still become a plant catastrophe."
            align="center"
          />
          <CapabilityGrid items={repairGuidancePoints} />
          <div className="doctrine-block top-gap">
            <p>
              This is where C.A.T.A.S.T.R.O.P.H.E. expands beyond disaster response. During a breakdown, it can bring forward the knowledge already preserved around the machine: SOPs, asset documentation, CMMS history, prior outcomes, rooted events, and the lived truth of what just happened.
            </p>
            <p>
              That is how safe, correct, and expeditious repair becomes a governed process instead of a race between memory gaps, tribal lore, and production pressure.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="How the system grows after the event"
            subtitle="The goal is not only surviving this incident. The goal is improving the next one."
            align="center"
          />
          <CapabilityGrid items={growthAndRecordPoints} compact />
          <p className="support-line center">
            The repair process itself can become reviewable evidence for stronger sequential instructions, faster troubleshooting, better handoff quality, and fewer repeated mistakes.
          </p>
        </div>
      </section>

      <TextIntroBlock
        eyebrow="Experience. Truth. Memory."
        title="The Tree of Knowledge is what keeps the system from standing still"
        paragraphs={[
          "Simulation may teach. Real events root. That distinction matters because C.A.T.A.S.T.R.O.P.H.E. is not built to admire incident records; it is built to grow from them.",
          "Every real event can strengthen future traversal through rooted history, safety gates, asset relationships, hazard profiles, human confirmations, and proven safe sequences.",
          "That is how A.I.R.O.N. redefines the word C.A.T.A.S.T.R.O.P.H.E. — not only as protection during consequence, but as an engine for better recovery, better repair, and better judgment after consequence has passed.",
        ]}
        sectionClassName="section"
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <VisualFigure
              src={treeOfKnowledgeImage}
              alt="Safety The Tree of Knowledge emblem"
              title="Safety / The Tree of Knowledge"
              caption="Experience, truth, and memory are not decoration here. They are the underlying doctrine that lets real incidents become rooted knowledge for safer handoffs, stronger repair sequencing, and better judgment during the next event."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>C.A.T.A.S.T.R.O.P.H.E. does not remove human sovereignty.</h3>
            <ul>
              <li>It does not command the scene autonomously.</li>
              <li>It does not turn remote observers into on-site decision-makers.</li>
              <li>It does not authorize unsafe heroics, blind restart, or improvised repair.</li>
              <li>It does not replace trained responders, site procedures, or legal obligations.</li>
            </ul>
          </div>
        </div>
      </section>

      <div id="related-pages">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. pages"
          items={relatedPages}
          supportingLine="Start with high-consequence protection. Expand into memory, routed improvement, and institutional knowledge as the system matures."
        />
      </div>

      <CTAFooterBand
        headline="Protect life. Carry truth. Guide recovery. Improve the next repair."
        primaryCTA={{
          label: "Start a C.A.T.A.S.T.R.O.P.H.E. Conversation",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See V.A.U.L.T.®",
          href: "/a-i-r-o-n/vault",
        }}
        supportingLine="Built into every A.I.R.O.N. system. Optional endpoints. Non-optional truth."
      />
    </SiteLayout>
  );
}
