import React from "react";
import popupArtwork from "../../assets/workforce-skill-boost-popup.webp";

const INTRO_POPUP_STORAGE_KEY = "airon-home-intro-dismissed-at";
const INTRO_POPUP_DISMISS_HOURS = 24;
const SHOW_INTRO_POPUP_ALWAYS = true;
const ROBLOX_URL = "";

function shouldShowPopup(): boolean {
  if (SHOW_INTRO_POPUP_ALWAYS) return true;

  const dismissedAt = window.localStorage.getItem(INTRO_POPUP_STORAGE_KEY);
  if (!dismissedAt) return true;

  const dismissedTime = Number(dismissedAt);
  if (!Number.isFinite(dismissedTime)) return true;

  const elapsedMs = Date.now() - dismissedTime;
  return elapsedMs >= INTRO_POPUP_DISMISS_HOURS * 60 * 60 * 1000;
}

export default function HomeIntroPopup(): JSX.Element | null {
  const [isOpen, setIsOpen] = React.useState(false);

  const dismissPopup = React.useCallback(() => {
    if (!SHOW_INTRO_POPUP_ALWAYS) {
      window.localStorage.setItem(INTRO_POPUP_STORAGE_KEY, String(Date.now()));
    }
    setIsOpen(false);
  }, []);

  React.useEffect(() => {
    setIsOpen(shouldShowPopup());
  }, []);

  React.useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismissPopup();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [dismissPopup, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="intro-popup-overlay" role="presentation">
      <div
        className="intro-popup-dialog intro-popup-dialog-compact"
        role="dialog"
        aria-modal="true"
        aria-labelledby="airon-intro-popup-title"
        aria-describedby="airon-intro-popup-description"
      >
        <button
          type="button"
          className="intro-popup-close"
          aria-label="Close introduction"
          onClick={dismissPopup}
        >
          ×
        </button>

        <div className="intro-popup-media-wrap intro-popup-media-wrap-compact">
          <img
            className="intro-popup-media intro-popup-media-compact"
            src={popupArtwork}
            alt="A.I.R.O.N. Play Your Work - Work Your Play workforce concept artwork"
          />
        </div>

        <div className="intro-popup-copy intro-popup-copy-compact">
          <p className="eyebrow">It’s a new dawn, it’s a new day</p>
          <h2 id="airon-intro-popup-title">PLAY YOUR WORK - WORK YOUR PLAY</h2>
          <p id="airon-intro-popup-description">
            What if serious industrial readiness could meet people on common ground?
            Follow the trail into SYSTEM-LIVE / PLAYER-LIVE, or continue into A.I.R.O.N.
          </p>

          <div className="cta-row intro-popup-actions intro-popup-actions-compact">
            <a
              className="btn btn-primary"
              href="/a-i-r-o-n/system-live-player-live"
              onClick={dismissPopup}
            >
              Learn More
            </a>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={dismissPopup}
            >
              Continue to A.I.R.O.N.
            </button>
          </div>

          {ROBLOX_URL ? (
            <p className="intro-popup-support-link">
              <a href={ROBLOX_URL} target="_blank" rel="noreferrer">
                Find us on Roblox
              </a>
            </p>
          ) : null}

          <p className="intro-popup-note intro-popup-note-compact">
            Development mode is active. This popup is currently set to appear on every homepage visit so we can catch layout issues before production.
          </p>
        </div>
      </div>
    </div>
  );
}
