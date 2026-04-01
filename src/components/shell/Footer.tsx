import React from "react";

/**
 * Intended path:
 *   src/components/shell/Footer.tsx
 *
 * Notes:
 * - Framework-agnostic React component.
 * - Replace <a> tags with framework-specific Link components if desired.
 * - Keep footer disciplined, not overloaded.
 */

export default function Footer(): JSX.Element {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <section className="footer-brand">
          <p className="footer-brand-name">A.I.R.O.N.™ — Pronounced “Iron”</p>
          <p className="footer-brand-support">
            The operational nervous system your plant never had.
          </p>
        </section>

        <div className="footer-grid">
          <section>
            <h2 className="footer-heading">System</h2>
            <ul className="footer-links">
              <li><a href="/a-i-r-o-n">Home</a></li>
              <li><a href="/a-i-r-o-n/modules">Modules</a></li>
              <li><a href="/a-i-r-o-n/industry-period">Industry. Period.</a></li>
            </ul>
          </section>

          <section>
            <h2 className="footer-heading">Workforce / Safety</h2>
            <ul className="footer-links">
              <li><a href="/a-i-r-o-n/industrial-campus">Dingfelder Industrial Campus</a></li>
              <li><a href="/a-i-r-o-n/play-your-work">PLAY YOUR WORK</a></li>
              <li><a href="/a-i-r-o-n/safety">Safety / Tree of Knowledge</a></li>
              <li><a href="/a-i-r-o-n/catastrophe">C.A.T.A.S.T.R.O.P.H.E.</a></li>
            </ul>
          </section>

          <section>
            <h2 className="footer-heading">Contact</h2>
            <ul className="footer-links contact-links">
              <li>Dingfelder Enterprises</li>
              <li>Walter W. Dingfelder</li>
              <li>North East, PA 16428</li>
              <li><a href="https://dingfelder.co">dingfelder.co</a></li>
              <li><a href="mailto:walter@dingfelder.co">walter@dingfelder.co</a></li>
              <li><a href="tel:+18144405753">(814) 440-5753</a></li>
            </ul>
          </section>
        </div>

        <section className="footer-cta-band">
          <h2 className="footer-cta-headline">
            Your machines ALWAYS whisper.
            <br />
            With A.I.R.O.N.™ you’ll NEVER hear them scream.
          </h2>

          <div className="cta-row center">
            <a className="btn btn-primary" href="/a-i-r-o-n/contact">
              Request Discovery
            </a>
            <a className="btn btn-secondary" href="/a-i-r-o-n/modules">
              Explore the Modules
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}
