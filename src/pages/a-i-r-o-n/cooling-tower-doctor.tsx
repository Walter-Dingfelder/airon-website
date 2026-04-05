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
  "Cold-water temperature, hot-water temperature, and approach performance under real load",
  "Tower flow truth, pump behavior, valve position, and hydraulic continuity across the full cooling loop",
  "Fan staging, motor loading, VFD response, gearbox health, and vibration clues tied to thermal performance",
  "Fill condition, fouling, scale buildup, biological loading, and heat-transfer degradation over time",
  "Basin level, makeup-water behavior, overflow posture, and low-level exposure tied to continuity risk",
  "Drift, plume behavior, eliminator condition, and visible loss clues tied to water and environmental performance",
  "Water chemistry, conductivity, blowdown posture, and corrosion or scale consequence across the system",
  "Freeze exposure, cold-weather operating posture, and ice-formation risk during winter conditions",
  "Distribution balance, nozzle condition, and uneven tower loading that quietly steals performance",
  "Operator observations, seasonal complaints, and repeated warm-return or weak-cooling patterns",
  "Maintenance findings, weather context, trip sequence, and historical event memory tied to real tower behavior",
  "Connected equipment consequence across furnaces, compressors, hydraulics, drives, condensers, and process loads that depend on cooling truth",
];

const capabilities = [
  "Separate tower, pump, fan, chemistry, fill, weather, and process-load truth faster",
  "Show when the real pain lives in heat rejection, water flow, fouling, fan performance, freeze posture, or weak distribution balance",
  "Preserve event sequence when summer heat, winter icing, weak flow, high temperature, or recurring nuisance alarms begin repeating",
  "Tighten troubleshooting around approach drift, fan staging, basin behavior, scaling, and biological loading",
  "Expose weak cooling performance before it becomes process instability, equipment stress, production throttling, or forced downtime",
  "Help operations, maintenance, utilities, electricians, water-treatment partners, and engineering work from the same cooling truth",
  "Reduce the habit of blaming one temperature reading when the real system story is wider",
  "Feed stronger cooling-domain truth into Fortune Teller™, Ghost Busting, and wider plant diagnosis",
  "Support safer, faster, and more defensible return-to-service decisions after trips, icing, storms, low-flow events, or fan failures",
  "Turn repeated seasonal cooling pain into preserved memory and improved recovery instead of folklore, guesswork, and repeated compromise",
];

const bestFit = [
  "Plants where cooling towers quietly sit behind furnace, compressor, hydraulic, condenser, or process-temperature continuity",
  "Operations where one weak cooling tower can throttle uptime, destabilize product quality, or stress multiple dependent systems at once",
  "Sites dealing with seasonal load swings, extreme summer demand, winter freeze exposure, or weather-driven thermal instability",
  "Facilities with repeated warm-water complaints, poor approach performance, fan problems, scale, fouling, or unexplained water loss",
  "Teams that need cleaner evidence around chemistry, flow, drift, freeze posture, and heat-rejection performance",
  "Organizations that want specialist truth on one of the plant's most operationally consequential utility systems",
];

const withoutCoolingTowerDoctor = [
  "Cooling complaints stay split between operations, maintenance, utilities, chemistry vendors, and engineering",
  "Temperature, flow, fan behavior, chemistry, weather, and process consequence stay fragmented",
  "Thermal pain gets reacted to faster than it gets understood",
  "The same summer overload, winter icing, fouling, or low-flow story keeps returning with weak sequence memory",
  "Return-to-service decisions feel more reactive than they should under production and equipment consequence",
];

const withCoolingTowerDoctor = [
  "Heat-rejection truth becomes clearer before the next warm-water event, process upset, freeze problem, or thermal bottleneck",
  "Tower, pump, fan, chemistry, weather, and operator reality stay connected as one story",
  "Operations, maintenance, utilities, electricians, and engineering can work from the same evidence trail",
  "Repeated seasonal events become preserved memory instead of disappearing with the weather or the shift",
  "Cooling recovery and return-to-service become more deliberate, safer, and easier to defend",
];

const relatedPages = [
  {
    title: "Doctor Family™",
    href: "/a-i-r-o-n/doctor-family",
    description:
      "See how Cooling Tower Doctor™ fits inside the larger specialist architecture.",
  },
  {
    title: "Motor Doctor™",
    href: "/a-i-r-o-n/motor-doctor",
    description:
      "See how motor, fan, pump, and driven-load truth connect when thermal performance depends on rotating equipment staying healthy.",
  },
  {
    title: "VFD Doctor™",
    href: "/a-i-r-o-n/vfd-doctor",
    description:
      "See how variable-speed fan and pump control truth connect when cooling performance depends on stable drive behavior.",
  },
  {
    title: "Fortune Teller™",
    href: "/a-i-r-o-n/fortune-teller",
    description:
      "See how cooling-domain truth becomes action timing, drift visibility, and predictive clarity.",
  },
];

export default function CoolingTowerDoctorPage(): JSX.Element {
  return (
    <SiteLayout
      currentPath="/a-i-r-o-n/cooling-tower-doctor"
      mainClassName="airon-module-page cooling-tower-doctor-page"
    >
      <HeroBlock
        eyebrow="A.I.R.O.N.'s heat-rejection specialist"
        title="Cooling Tower Doctor™"
        supportingLine="When thermal rejection becomes plant consequence, the truth needs its own specialist."
        subhead="Cooling Tower Doctor™ is built to read temperature truth, flow continuity, fan performance, chemistry consequence, fill condition, weather exposure, and operator-reported reality as one connected cooling layer."
        body={
          <>
            <p>
              Cooling towers rarely fail in one clean, dramatic way. More often the truth arrives as rising return temperature,
              weak approach, unstable flow, poor fan staging, scaling, fouling, freeze exposure, water loss, drift complaints,
              or repeated summer and winter pain that never quite gets proven end to end.
            </p>
            <p>
              Cooling Tower Doctor™ exists to make that truth clearer before the next cooling problem becomes the next plant-level event.
              It is built to read what the system was asked to reject, what it actually removed, how the tower breathed,
              how the water moved, what the weather was doing, what the operators saw, and what the plant needs to decide before the next thermal compromise spreads into uptime, quality, or equipment consequence.
            </p>
          </>
        }
        primaryCTA={{
          label: "Request a Cooling Tower Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See Related Modules",
          href: "#related-modules",
        }}
      >
        <div className="comparison-grid">
          <div className="comparison-card">
            <h3>Utility-system consequence</h3>
            <p>
              A cooling tower may look like background utility equipment until process temperature rises,
              summer load piles up, winter icing starts, or dependent systems begin throttling. Then one overlooked system can become whole-plant pain.
            </p>
          </div>
          <div className="comparison-card">
            <h3>Specialist truth</h3>
            <p>
              Cooling Tower Doctor™ reads temperature, flow, fan behavior, fill condition, chemistry,
              freeze posture, and operator reality together so the real cause becomes easier to prove.
            </p>
          </div>
        </div>
      </HeroBlock>

      <section className="section section-alt">
        <div className="container narrow">
          <div className="doctrine-block">
            <p className="eyebrow">Part of the Doctor Family™</p>
            <p>
              Cooling Tower Doctor™ is one specialist inside the larger Doctor Family™ architecture.
              It shows how A.I.R.O.N. can sit tightly on one of the plant's most consequential support systems
              and still tell a much sharper truth than one basin temperature, one fan alarm, one water-treatment note,
              or one seasonal complaint alone.
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
        title="Built for one of the plant's most underestimated operational systems"
        paragraphs={[
          "Cooling problems waste time because the truth often gets split between what operators feel in the process, what maintenance sees at the fan or pump, what utilities sees in the tower, what the chemistry program reports, and what the plant assumes must be happening because the water is warm. That fragmentation is dangerous when weak heat rejection can touch uptime, quality, motor life, drive life, and process confidence at the same time.",
          "That is why Cooling Tower Doctor™ deserves to exist as its own specialist. Cooling towers have their own vocabulary, their own seasonal failure posture, and their own need for preserved sequence. Generic utility alarms do not tell that story clearly enough.",
        ]}
      />

      <section className="section">
        <div className="container narrow">
          <div className="contrast-card">
            <h3>Cooling Tower Doctor™ is not:</h3>
            <ul>
              <li>A replacement for required water-treatment programs, inspections, maintenance discipline, or safe isolation procedures</li>
              <li>A substitute for chemistry expertise, freeze planning, mechanical repairs, or tower cleaning work</li>
              <li>A claim that every thermal complaint starts in the tower — or that every warm condition is a water-treatment problem</li>
              <li>A generic utility screen pretending weather, heat rejection, and process consequence are ordinary</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeading
            title="What Cooling Tower Doctor™ watches"
            subtitle="Not just the temperature. The way heat rejection, water movement, weather, and equipment behavior tell one story."
            align="center"
          />
          <CapabilityGrid items={watchedSignals} compact />
          <p className="support-line center">
            The point is not to create one more utilities screen. The point is to preserve heat-rejection truth,
            water-movement truth, and seasonal operating truth before one weak condition becomes the next bottleneck, trip, or forced compromise.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            title="What Cooling Tower Doctor™ can do"
            subtitle="Sharpen diagnosis, safer recovery, and predictive clarity around thermal systems that quietly carry major consequence."
            align="center"
          />
          <CapabilityGrid items={capabilities} compact />
        </div>
      </section>

      <TextIntroBlock
        title="Why cooling truth deserves its own specialist"
        paragraphs={[
          "A cooling tower can become plant pain long before it becomes an obvious failure. Fans may still run. Water may still circulate. The process may still limp along. But approach drifts, distribution gets uneven, fill fouls, chemistry slips, icing builds, or operators stop trusting what the cooling system is really doing.",
          "That is exactly where specialist truth matters. Cooling Tower Doctor™ is built to preserve what the system was commanded to reject, what it actually removed, how the tower performed under real weather and load, what the human beings saw, and what the site needs to decide before the next thermal problem spreads wider.",
        ]}
        sectionClassName="section section-alt"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            title="Where Cooling Tower Doctor™ fits best"
            subtitle="Strongest where heat rejection, seasonal posture, and process continuity can never stay vague."
            align="center"
          />
          <CapabilityGrid items={bestFit} compact />
        </div>
      </section>

      <ContrastBlock
        title="Cleaner truth. Earlier action. Fewer repeat thermal upsets."
        leftTitle="Without Cooling Tower Doctor™"
        leftItems={withoutCoolingTowerDoctor}
        rightTitle="With Cooling Tower Doctor™"
        rightItems={withCoolingTowerDoctor}
      />

      <TextIntroBlock
        title="Why it matters"
        paragraphs={[
          "Cooling trouble is often dismissed because it lives in utility space, weather exposure, or slow-building discomfort. But the consequence is never just background when process temperature starts climbing, equipment starts stressing, or summer and winter conditions begin to dictate production.",
          "That is exactly why Cooling Tower Doctor™ belongs in the family. It protects one of the plant systems most likely to be blamed late, repaired reactively, or understood only after the consequence has already spread.",
          "The result is cleaner diagnosis, safer response, stronger thermal continuity, and better plant performance built on preserved cooling truth instead of folklore.",
        ]}
        sectionClassName="section"
      />

      <div id="related-modules">
        <RelatedLinksBlock
          title="Related A.I.R.O.N. modules"
          items={relatedPages}
          supportingLine="Heat-rejection truth. Flow truth. Seasonal truth. Better recovery."
        />
      </div>

      <CTAFooterBand
        headline="When thermal rejection matters, it deserves its own specialist."
        primaryCTA={{
          label: "Request a Cooling Tower Review",
          href: "/a-i-r-o-n/contact",
        }}
        secondaryCTA={{
          label: "See the Doctor Family™",
          href: "/a-i-r-o-n/doctor-family",
        }}
        supportingLine="One tower. One cooling loop. One utility system. Or the whole operation."
      />
    </SiteLayout>
  );
}
