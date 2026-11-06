export type ArtView = 0 | 1 | 2;

/* Deterministic pseudo-random helpers so every product always renders
   the same illustration. */
function hashSeed(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rand(seed: number, k: number) {
  const x = Math.sin(seed + k * 97.13) * 43758.5453;
  return x - Math.floor(x);
}

function chartLine(
  seed: number,
  x0: number,
  y0: number,
  w: number,
  h: number,
  n: number,
) {
  let d = "";
  for (let i = 0; i <= n; i++) {
    const x = x0 + (w * i) / n;
    const y = y0 + h - (0.2 + 0.65 * rand(seed, i)) * h;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d.trim();
}

/**
 * Stylised lab-instrument illustration used in place of product photography.
 * `seed` makes the drawing stable per product; `view` picks the framing:
 * 0 = full bench system, 1 = control panel, 2 = vessel / detail.
 */
export function InstrumentArt({
  seed,
  view = 0,
  className,
  label,
}: {
  seed: string;
  view?: ArtView;
  className?: string;
  label?: string;
}) {
  const cleanSeed = (seed || "inst").replace(/[^a-zA-Z0-9]/g, "");
  const uid = `art-${cleanSeed}-${view}`;
  const s = hashSeed(seed + ":" + view);

  const screenW = 92 + Math.floor(rand(s, 1) * 30);
  const nBtn = 3 + Math.floor(rand(s, 2) * 3);
  const dial = -50 + rand(s, 3) * 100;
  const dialRad = (dial * Math.PI) / 180;
  const gauge = -60 + rand(s, 4) * 120;
  const gaugeRad = (gauge * Math.PI) / 180;

  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <linearGradient id={`${uid}-navy`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f2f2f" />
          <stop offset="100%" stopColor="#141414" />
        </linearGradient>
        <linearGradient id={`${uid}-steel`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#e8eef5" />
          <stop offset="55%" stopColor="#c3cedd" />
          <stop offset="100%" stopColor="#94a3b8" />
        </linearGradient>
        <linearGradient id={`${uid}-screen`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0e1c33" />
          <stop offset="100%" stopColor="#070f1c" />
        </linearGradient>
        <pattern
          id={`${uid}-grid`}
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 20 0 L 0 0 0 20"
            fill="none"
            stroke="#c9d6e6"
            strokeWidth="0.7"
          />
        </pattern>
      </defs>

      {/* backdrop */}
      <rect width="400" height="300" fill="#f5f5f5" />
      <rect
        width="400"
        height="300"
        fill={`url(#${uid}-grid)`}
        opacity="0.5"
      />
      <circle
        cx="366"
        cy="34"
        r="54"
        fill="none"
        stroke="#ff8d0a"
        strokeWidth="2"
        opacity="0.35"
      />
      <circle cx="34" cy="264" r="46" fill="#c4620a" opacity="0.1" />

      {view === 0 && (
        <g>
          {/* bench */}
          <rect x="52" y="246" width="296" height="12" rx="4" fill="#b6c2d2" />
          <rect x="78" y="258" width="10" height="26" fill="#98a6ba" />
          <rect x="312" y="258" width="10" height="26" fill="#98a6ba" />

          {/* sample bottle */}
          <rect x="56" y="196" width="34" height="50" rx="7" fill={`url(#${uid}-steel)`} />
          <rect x="61" y="222" width="24" height="24" rx="4" fill="#ff8d0a" opacity="0.45" />
          <rect x="63" y="186" width="20" height="12" rx="3" fill="#c4620a" />

          {/* tubing */}
          <path
            d="M90 214 C 108 208 98 170 116 158"
            fill="none"
            stroke="#9aa9bd"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* main chassis */}
          <rect x="108" y="70" width="188" height="176" rx="14" fill={`url(#${uid}-navy)`} />
          <path
            d="M108 84 a14 14 0 0 1 14-14 h160 a14 14 0 0 1 14 14 v20 h-188 z"
            fill="#c4620a"
          />
          <text
            x="124"
            y="92"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="10"
            fontWeight="800"
            letterSpacing="3"
            fill="#ffffff"
          >
            ORBIT
          </text>
          <circle cx="281" cy="88" r="4" fill="#4ade80" />

          {/* screen */}
          <rect
            x="126"
            y="118"
            width={screenW}
            height="64"
            rx="6"
            fill={`url(#${uid}-screen)`}
            stroke="#1e293b"
          />
          <path
            d={chartLine(s, 133, 128, screenW - 14, 38, 9)}
            fill="none"
            stroke="#ff8d0a"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <line
            x1="133"
            y1="172"
            x2={133 + screenW - 14}
            y2="172"
            stroke="#334155"
            strokeWidth="1"
          />

          {/* buttons */}
          {Array.from({ length: nBtn }).map((_, i) => (
            <circle
              key={i}
              cx={136 + i * 24}
              cy={206}
              r={6}
              fill={i === 0 ? "#ff8d0a" : "#e2e8f0"}
              stroke="#8fa0b5"
              strokeWidth="0.8"
            />
          ))}

          {/* vents */}
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1="250"
              y1={197 + i * 8}
              x2="288"
              y2={197 + i * 8}
              stroke="#8a8a8a"
              strokeWidth="3"
              opacity="0.5"
            />
          ))}

          {/* accent stripe */}
          <rect x="110" y="108" width="6" height="116" rx="3" fill="#ff8d0a" />

          {/* side control module */}
          <rect x="304" y="164" width="62" height="82" rx="10" fill="#242424" stroke="#4a4a4a" />
          <circle cx="335" cy="190" r="13" fill="#e5ebf2" stroke="#8fa0b5" />
          <line
            x1="335"
            y1="190"
            x2={335 + 9 * Math.cos(dialRad)}
            y2={190 + 9 * Math.sin(dialRad)}
            stroke="#c4620a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {[0, 1, 2].map((i) => (
            <line
              key={i}
              x1="314"
              y1={214 + i * 8}
              x2="356"
              y2={214 + i * 8}
              stroke="#c4620a"
              strokeWidth="3"
              opacity="0.6"
            />
          ))}
        </g>
      )}

      {view === 1 && (
        <g>
          {/* panel */}
          <rect x="28" y="34" width="344" height="232" rx="18" fill={`url(#${uid}-navy)`} />
          <path
            d="M28 52 a18 18 0 0 1 18-18 h308 a18 18 0 0 1 18 18 v22 h-344 z"
            fill="#c4620a"
          />
          <text
            x="48"
            y="63"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="11"
            fontWeight="800"
            letterSpacing="3"
            fill="#ffffff"
          >
            ORBIT
          </text>

          {/* screen with title bar */}
          <rect x="52" y="92" width="296" height="118" rx="8" fill={`url(#${uid}-screen)`} stroke="#1e293b" />
          <path d="M52 108 a8 8 0 0 1 8-8 h280 a8 8 0 0 1 8 8 v6 h-296 z" fill="#1a1a1a" />
          <circle cx="68" cy="102" r="3.5" fill="#ff8d0a" />
          <circle cx="80" cy="102" r="3.5" fill="#334155" />
          <circle cx="92" cy="102" r="3.5" fill="#334155" />
          {[134, 160, 186].map((y) => (
            <line key={y} x1="62" y1={y} x2="70" y2={y} stroke="#3b4a63" strokeWidth="2" />
          ))}
          <path
            d={`${chartLine(s, 78, 122, 258, 66, 14)} L336 196 L78 196 Z`}
            fill="#ff8d0a"
            opacity="0.16"
          />
          <path
            d={chartLine(s, 78, 122, 258, 66, 14)}
            fill="none"
            stroke="#ff8d0a"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* knobs */}
          {[0, 1, 2, 3].map((i) => {
            const cx = 92 + i * 58;
            const a = ((-90 + rand(s, 10 + i) * 240) * Math.PI) / 180;
            return (
              <g key={i}>
                <circle
                  cx={cx}
                  cy="238"
                  r="16"
                  fill={i === 0 ? "#ff8d0a" : "#e5ebf2"}
                  stroke="#8fa0b5"
                  strokeWidth="2"
                />
                <line
                  x1={cx}
                  y1="238"
                  x2={cx + 11 * Math.cos(a)}
                  y2={238 + 11 * Math.sin(a)}
                  stroke={i === 0 ? "#ffffff" : "#c4620a"}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
            );
          })}

          {/* emergency stop */}
          <rect x="310" y="224" width="42" height="30" rx="7" fill="#e2e8f0" stroke="#8fa0b5" />
          <circle cx="331" cy="239" r="10" fill="#dc2626" />
        </g>
      )}

      {view === 2 && (
        <g>
          <ellipse cx="200" cy="240" rx="120" ry="10" fill="#0f172a" opacity="0.08" />
          <rect x="122" y="230" width="156" height="18" rx="6" fill="#1e293b" />
          <ellipse cx="200" cy="232" rx="62" ry="9" fill="#ff8d0a" opacity="0.3" />

          {/* vessel body */}
          <rect x="146" y="106" width="108" height="122" rx="24" fill={`url(#${uid}-steel)`} />
          <rect x="158" y="118" width="14" height="96" rx="7" fill="#ffffff" opacity="0.5" />
          <rect x="182" y="150" width="38" height="26" rx="5" fill="#ffffff" opacity="0.9" />

          {/* lid */}
          <rect x="138" y="84" width="124" height="26" rx="10" fill={`url(#${uid}-navy)`} />
          {[150, 175, 200, 225, 250].map((cx) => (
            <circle key={cx} cx={cx} cy="97" r="4" fill="#93a4b8" />
          ))}

          {/* gauge */}
          <circle cx="200" cy="52" r="26" fill="#ffffff" stroke="#c4620a" strokeWidth="4" />
          <line
            x1="200"
            y1="52"
            x2={200 + 16 * Math.cos(gaugeRad)}
            y2={52 + 16 * Math.sin(gaugeRad)}
            stroke="#c4620a"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="200" cy="52" r="3.5" fill="#c4620a" />

          {/* plumbing */}
          <path
            d="M162 84 C 144 58 116 66 102 104"
            fill="none"
            stroke="#a3b2c6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M238 84 C 258 56 288 66 300 108"
            fill="none"
            stroke="#a3b2c6"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <rect x="92" y="110" width="14" height="30" rx="4" fill="#1e293b" />

          {/* valve wheel */}
          <circle cx="300" cy="124" r="13" fill="none" stroke="#ff8d0a" strokeWidth="4" />
          <line x1="300" y1="111" x2="300" y2="137" stroke="#ff8d0a" strokeWidth="3" />
          <line x1="287" y1="124" x2="313" y2="124" stroke="#ff8d0a" strokeWidth="3" />
        </g>
      )}
    </svg>
  );
}
