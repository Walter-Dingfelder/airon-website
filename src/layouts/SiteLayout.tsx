import React from "react";
import Header from "../components/shell/Header";
import Footer from "../components/shell/Footer";

/**
 * Intended path:
 *   src/layouts/SiteLayout.tsx
 *
 * Notes:
 * - Shared wrapper for A.I.R.O.N. pages.
 * - Applies the global header/footer shell automatically.
 * - Keeps page implementations cleaner and more consistent.
 */

export type SiteLayoutProps = {
  children: React.ReactNode;
  currentPath?: string;
  showHeaderCTA?: boolean;
  mainClassName?: string;
};

export default function SiteLayout({
  children,
  currentPath = "",
  showHeaderCTA = true,
  mainClassName = "",
}: SiteLayoutProps): JSX.Element {
  return (
    <div className="site-shell">
      <Header currentPath={currentPath} showHeaderCTA={showHeaderCTA} />
      <main className={mainClassName}>{children}</main>
      <Footer />
    </div>
  );
}
