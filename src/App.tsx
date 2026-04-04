import React from "react";
import HomePage from "./pages/a-i-r-o-n/index";
import ContactPage from "./pages/a-i-r-o-n/contact";
import ModulesPage from "./pages/a-i-r-o-n/modules";
import FurnaceDoctorPage from "./pages/a-i-r-o-n/furnace-doctor";
import FortuneTellerPage from "./pages/a-i-r-o-n/fortune-teller";
import VaultPage from "./pages/a-i-r-o-n/vault";
import OneTouchStartupPage from "./pages/a-i-r-o-n/one-touch-startup";
import CatastrophePage from "./pages/a-i-r-o-n/catastrophe";
import IndustrialCampusPage from "./pages/a-i-r-o-n/industrial-campus";
import PlayYourWorkPage from "./pages/a-i-r-o-n/play-your-work";
import IndustryPeriodPage from "./pages/a-i-r-o-n/industry-period";
import SafetyPage from "./pages/a-i-r-o-n/safety";
import DoctorFamilyPage from "./pages/a-i-r-o-n/doctor-family";
import SystemLivePlayerLivePage from "./pages/a-i-r-o-n/system-live-player-live";
import ControlsAutomationPage from "./pages/a-i-r-o-n/controls-automation";

function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname;
}

function NotFoundPage(): JSX.Element {
  return (
    <main className="section">
      <div className="container narrow center">
        <p className="eyebrow">Route not found</p>
        <h1>A.I.R.O.N.</h1>
        <p>The requested route is not currently mapped in this app entry.</p>
        <div className="cta-row center">
          <a className="btn btn-primary" href="/a-i-r-o-n">
            Go to Home
          </a>
          <a className="btn btn-secondary" href="/a-i-r-o-n/contact">
            Contact / Discovery
          </a>
        </div>
      </div>
    </main>
  );
}

export default function App(): JSX.Element {
  const pathname = normalizePath(window.location.pathname);

  switch (pathname) {
    case "/":
    case "/a-i-r-o-n":
      return <HomePage />;
    case "/a-i-r-o-n/contact":
      return <ContactPage />;
    case "/a-i-r-o-n/modules":
      return <ModulesPage />;
    case "/a-i-r-o-n/furnace-doctor":
      return <FurnaceDoctorPage />;
    case "/a-i-r-o-n/fortune-teller":
      return <FortuneTellerPage />;
    case "/a-i-r-o-n/vault":
      return <VaultPage />;
    case "/a-i-r-o-n/one-touch-startup":
      return <OneTouchStartupPage />;
    case "/a-i-r-o-n/catastrophe":
      return <CatastrophePage />;
    case "/a-i-r-o-n/industrial-campus":
      return <IndustrialCampusPage />;
    case "/a-i-r-o-n/play-your-work":
      return <PlayYourWorkPage />;
    case "/a-i-r-o-n/industry-period":
      return <IndustryPeriodPage />;
    case "/a-i-r-o-n/safety":
      return <SafetyPage />;
    case "/a-i-r-o-n/doctor-family":
      return <DoctorFamilyPage />;
    case "/a-i-r-o-n/system-live-player-live":
      return <SystemLivePlayerLivePage />;
    case "/a-i-r-o-n/controls-automation":
      return <ControlsAutomationPage />;
    default:
      return <NotFoundPage />;
  }
}
