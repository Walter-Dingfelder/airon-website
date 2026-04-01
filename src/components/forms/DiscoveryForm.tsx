import React from "react";

/**
 * Intended path:
 *   src/components/forms/DiscoveryForm.tsx
 *
 * Notes:
 * - Reusable first-release discovery form for the A.I.R.O.N. site.
 * - This version is intentionally simple and framework-agnostic.
 * - Replace default form action/handler logic with your framework or backend wiring.
 */

export type DiscoveryIntentOption = {
  label: string;
  value: string;
};

export type DiscoveryFormProps = {
  title?: string;
  introText?: string;
  intentOptions?: DiscoveryIntentOption[];
  submitLabel?: string;
  formId?: string;
};

const defaultIntentOptions: DiscoveryIntentOption[] = [
  { label: "Furnace / hot-end issue", value: "furnace-hot-end" },
  { label: "Startup / shutdown issue", value: "startup-shutdown" },
  { label: "Predictive maintenance / drift", value: "predictive-drift" },
  { label: "Memory / truth / event history", value: "memory-truth-history" },
  { label: "Safety / abnormal-event architecture", value: "safety-abnormal-event" },
  { label: "Workforce / campus / training", value: "workforce-campus-training" },
  { label: "Full-system overview", value: "full-system-overview" },
  { label: "Something else", value: "something-else" },
];

export default function DiscoveryForm({
  title = "Tell us what is hurting",
  introText = "You do not need a perfect technical write-up to start. Tell us what you are looking at, what is hurting, and what you want to improve.",
  intentOptions = defaultIntentOptions,
  submitLabel = "Request Discovery",
  formId = "discovery-form",
}: DiscoveryFormProps): JSX.Element {
  return (
    <section className="section section-alt" id={formId}>
      <div className="container">
        <div className="two-col">
          <div>
            <header className="section-heading">
              <h2>{title}</h2>
            </header>

            <p>{introText}</p>

            <ul>
              <li>Furnace or hot-end issues</li>
              <li>Startup or shutdown inconsistency</li>
              <li>Predictive drift or recurring breakdown patterns</li>
              <li>Safety / abnormal-event concerns</li>
              <li>Training, readiness, or workforce activation needs</li>
            </ul>
          </div>

          <div>
            <form className="discovery-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" />
              </div>

              <div className="form-row">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                />
              </div>

              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-row">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Best number to reach you"
                />
              </div>

              <div className="form-row">
                <label htmlFor="primaryConcern">Primary discussion type</label>
                <select id="primaryConcern" name="primaryConcern" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  {intentOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <label htmlFor="message">Brief message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="What are you looking at, what is hurting, and what do you want to improve?"
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  {submitLabel}
                </button>
              </div>

              <p className="form-note">
                Release-1 form is intentionally short. Deeper intake can be added later if needed.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
