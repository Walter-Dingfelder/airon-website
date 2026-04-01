import React from "react";

/**
 * Intended path:
 *   src/components/core/CapabilityGrid.tsx
 *
 * Notes:
 * - Reusable grid for cards/bullets shown across homepage, module pages,
 *   safety pages, and workforce pages.
 */

export type CapabilityGridProps = {
  items: Array<string | React.ReactNode>;
  compact?: boolean;
};

export default function CapabilityGrid({
  items,
  compact = false,
}: CapabilityGridProps): JSX.Element {
  const className = compact
    ? "capability-grid compact-grid"
    : "capability-grid";

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={typeof item === "string" ? item : index} className="card">
          {item}
        </div>
      ))}
    </div>
  );
}
