/**
 * Orbit's signature line: the shape of a bomb-calorimeter temperature-rise
 * curve (flat fore-period, steep rise after firing, plateau). Used sparingly
 * as a background line on navy bands.
 */
export function TemperatureCurve({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 800 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 100 H330 C360 100 372 98 384 86 C400 68 410 30 440 22 C470 15 520 16 800 18"
        fill="none"
        stroke="#3d7fd1"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <path d="M0 100 H800" stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
