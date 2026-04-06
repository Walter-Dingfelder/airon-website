import React from "react";
import SiteLayout from "../../layouts/SiteLayout";
import HeroBlock from "../../components/core/HeroBlock";
import TextIntroBlock from "../../components/core/TextIntroBlock";
import SectionHeading from "../../components/core/SectionHeading";
import CapabilityGrid from "../../components/core/CapabilityGrid";
import RelatedLinksBlock from "../../components/core/RelatedLinksBlock";
import CTAFooterBand from "../../components/core/CTAFooterBand";
import sopRoutingWorkflowImage from "../../assets/sop-routing-workflow.jpg";

const whatItDoes = [
  "Build or strengthen standard operating procedures when a customer has gaps, outdated work instructions, or no governed SOP structure yet",
  "Store approved procedures in V.A.U.L.T.® as searchable, revision-controlled plant knowledge",
  "Separate procedure use from procedure editing so the right people see the right truth in the right place",
  "Create Draft SOP Packets (DSPs) that preserve the current revision, the proposed revision, the reason for change, and the approval lineage",
  "Route revisions one department at a time through the people who must sign off before release",
  "Keep procedures available across CAT tablets, A.I.R.O.N. terminals, and authorized mobile access without turning every endpoint into an editing station",
  "Turn approved SOPs into training modules, qualification sequences, and PLAYER-LIVE truth for simulation of the customer’s own facility or process",
];

const accessTruths = [
  "Plant-floor HMIs, CAT tablets, and authorized mobile surfaces are built for read-only awareness, retrieval, and live guidance where the work is happening",
  "Secure workstations and governed web interfaces are where revisions, reviewer comments, and approval actions are entered",
  "Operators, technicians, engineering, safety, and leadership can all see the status that matters without everyone holding edit authority",
  "The same custody and role discipline that protects machine truth also protects procedure truth",
  "Document access is meant to speed work, reduce confusion, and prevent old revisions from surviving in desk drawers or memory",
  "Authorized mobile use extends visibility, not uncontrolled authorship",
];

const dspTruths = [
  "Each Draft SOP Packet preserves the current approved revision beside the proposed revision so changes are visible before release",
  "The originator, reason code, timestamps, evidence, and routing mode stay attached to the packet instead of being reconstructed later",
  "Review moves through a governed path one department at a time so accountability is clear and no critical review step quietly disappears",
  "Review windows, in-step timers, and current department ownership keep the packet alive until resolution instead of letting it vanish into email",
  "Final release becomes a structured event with lineage, not a mystery version that appeared on the floor one morning",
  "The packet itself becomes part of institutional memory so future reviews can see why the change was made and what problem it solved",
];

const trainingTruths = [
  "Training is built from approved SOPs, not from a disconnected binder that teaches one truth while the plant enforces another",
  "Any standard operating procedure or high-turnover role can become a governed A.I.R.O.N. training module when consistency and retention matter",
  "The same procedure can feed control-room terminals, maintenance workstations, mobile tablets, kiosks, and secure remote review without changing the truth",
  "Completion records, quiz results, and lesson history remain preserved in V.A.U.L.T.® as part of the plant’s long-term learning memory",
  "PLAYER-LIVE can use the same SOP-driven sequences inside a true simulation of the customer’s own facility or process so practice matches reality",
  "Offline preparation and online operation should speak the same language, use the same sequence, and preserve the same expectations",
];

const whyItMatters = [
  "Procedures stop drifting in private and start living in governed, reviewable memory",
  "Operators get the current approved procedure where the work is actually happening",
  "Training stops teaching one truth while the floor enforces another",
  "Engineering, maintenance, quality, safety, and leadership share one routed approval path instead of fragmented revision habits",
  "Improvements become reviewable procedure, reviewable procedure becomes teachable training, and teachable training becomes repeatable culture",
  "The plant no longer has to bleed to rediscover the same lesson",
];

const relatedPages = [
  {
    title: "V.A.U.L.T.®",
    href: "/a-i-r-o-n/vault",
    description:
      "See how custody, context, recall, revision control, and protected technical memory stay connected.",
  },
  {
    title: "Training Philosophy",
    href: "/a-i-r-o-n/training-philosophy",
    description:
      "See why training truth and operating truth must match if readiness is supposed to hold under consequence.",
  },
  {
    title: "Controls & Automation",
    href: "/a-i-r-o-n/controls-automation",
    description:
      "See how read-only HMI visibility, governed authoring, and structured plant truth belong in the same operating system.",
  },
  {
    title: "SYSTEM-LIVE / PLAYER-LIVE",
    href: "/a-i-r-o-n/system-live-player-live",
    description:
      "See how live machine truth and human engagement stay structurally connected instead of splitting into theory and practice.",
  },
];

export default function SopRoutingGovernancePage(): JSX.Element {
  return (
    <SiteLayout currentPath="/a-i-r-o-n/sop-routing-governance" mainClassName="airon-sop-routing-page">
      <HeroBlock
        eyebrow="Governed procedure truth"
        title="SOP Routing & Governance"
        supportingLine="A.I.R.O.N. / V.A.U.L.T.® Controlled Procedure System"
        subhead="When questions arise, the system becomes the source of truth — not human memory, desk drawers, or drifting revisions."
        body={
          <>
            <p>
              A.I.R.O.N. does not just store SOPs. It governs them.
            </p>
            <p>
              For customers who already have strong procedures, A.I.R.O.N. keeps them searchable,
              revision-controlled, routed, and available where the work is happening. For customers
              with missing procedures or unsafe gaps, Dingfelder Enterprises can help build the SOP
              structure first — then turn that truth into governed training and simulation.
            </p>
          </>
        }
        primaryCTA={{
          label: "Discuss SOP Governance",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See V.A.U.L.T.®",
          href: "/a-i-r-o-n/vault",
        }}
      >
        <div className="hero-demo-visual">
          <img
            src={sopRoutingWorkflowImage}
            alt="A.I.R.O.N. SOP routing workflow showing active SOPs, routed approval path, and secure maintenance review state."
          />
        </div>
      </HeroBlock>

      <TextIntroBlock
        title="What this module really is"
        paragraphs={[
          "This is not a document folder and it is not a suggestion-level workflow. SOP Routing & Governance is where procedure truth becomes visible, reviewable, and teachable across the plant.",
          "The same system that preserves machine truth and event truth can also preserve procedure truth — who proposed a change, why it was proposed, what evidence supported it, who reviewed it, what revision won, and what should be taught next.",
          "That means approved procedures do not just sit in storage. They become live plant knowledge available on CAT tablets, on any A.I.R.O.N. terminal in the facility, and on authorized mobile devices where governed access is appropriate.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What SOP Routing & Governance does"
            subtitle="Procedure control becomes a living operating discipline instead of an after-hours paperwork burden."
            align="center"
          />
          <CapabilityGrid items={whatItDoes} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Read where work happens. Edit where governance happens."
            subtitle="Use and authorship are separated on purpose so awareness can move fast without procedure control collapsing."
            align="center"
          />
          <CapabilityGrid items={accessTruths} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Draft SOP Packet (DSP) workflow"
            subtitle="A change proposal should arrive with lineage, context, and visible routing — not as an unexplained replacement document."
            align="center"
          />
          <CapabilityGrid items={dspTruths} compact />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="Training is built from approved SOP truth"
            subtitle="The same procedure can govern live work, qualification, and PLAYER-LIVE simulation of the customer’s own facility or process."
            align="center"
          />
          <CapabilityGrid items={trainingTruths} compact />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Why this matters"
            subtitle="Procedure truth should not disappear when the expert leaves, the shift changes, or the process gets noisy."
            align="center"
          />
          <CapabilityGrid items={whyItMatters} compact />
        </div>
      </section>

      <RelatedLinksBlock
        title="Related pages"
        items={relatedPages}
        supportingLine="SOP governance sits at the intersection of V.A.U.L.T.® custody, training truth, live machine support, and PLAYER-LIVE continuity."
      />

      <CTAFooterBand
        eyebrow="Governed procedure truth"
        title="If the procedure matters, it deserves custody, routing, and a teachable future."
        body="A.I.R.O.N. can help customers build missing SOPs, close dangerous gaps, route revisions cleanly, and turn approved procedure into governed training and simulation."
        primaryCTA={{ label: "Start the SOP Conversation", href: "/a-i-r-o-n/contact" }}
        secondaryCTA={{ label: "See the Architecture Map", href: "/a-i-r-o-n/modules" }}
      />
    </SiteLayout>
  );
}
