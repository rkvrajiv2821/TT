"use client";

// Mobile (<768px) fallback: no WebGL, no particle system — a lightweight SVG
// rendering of the same core + node motif so the brand device stays visible
// without the performance cost of a live 3D scene (design-direction.md §12).
export function ConnectedCoreStatic({ reducedMotion }: { reducedMotion: boolean }) {
  const nodeAngles = [0, 60, 120, 180, 240, 300];

  return (
    <svg
      viewBox="0 0 160 160"
      className="h-full w-full"
      role="img"
      aria-label="TOUCHTiER's connected core, linking customer, venue, membership, loyalty, marketing, payments, mobile, cloud, data and integrations"
    >
      <defs>
        <linearGradient id="core-signal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#61D3FA" />
          <stop offset="50%" stopColor="#9361FA" />
          <stop offset="100%" stopColor="#DE61FA" />
        </linearGradient>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5F6F8" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#DE61FA" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#DE61FA" stopOpacity="0" />
        </radialGradient>
      </defs>

      {[60, 45, 30].map((r, i) => (
        <circle
          key={r}
          cx="80"
          cy="80"
          r={r}
          fill="none"
          stroke="url(#core-signal)"
          strokeOpacity={0.22 - i * 0.04}
          strokeWidth={1}
        />
      ))}

      {nodeAngles.map((angle) => {
        const rad = (angle * Math.PI) / 180;
        // Rounded to avoid server/client floating-point string mismatches
        // (e.g. "32.368602791855885" vs "32.36860279185589") during hydration.
        const x = Math.round((80 + Math.cos(rad) * 55) * 100) / 100;
        const y = Math.round((80 + Math.sin(rad) * 55) * 100) / 100;
        return (
          <g key={angle}>
            <line
              x1="80"
              y1="80"
              x2={x}
              y2={y}
              stroke="url(#core-signal)"
              strokeOpacity={0.3}
              strokeWidth={1}
            />
            <circle cx={x} cy={y} r={3} fill="#F5F6F8" fillOpacity={0.85} />
          </g>
        );
      })}

      <circle cx="80" cy="80" r="26" fill="url(#core-glow)" />
      <circle
        cx="80"
        cy="80"
        r="6"
        fill="#F5F6F8"
        className={reducedMotion ? undefined : "animate-pulse"}
      />
    </svg>
  );
}
