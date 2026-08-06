export function GeometricBackground() {
  return (
    <svg
      className="geometric-bg"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Hexagon 1 - top right */}
      <g className="hex hex-1" filter="url(#glow)">
        <polygon
          points="900,150 950,120 1000,150 1000,210 950,240 900,210"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2"
          opacity="0.15"
        />
      </g>

      {/* Hexagon 2 - middle right */}
      <g className="hex hex-2" filter="url(#glow)">
        <polygon
          points="850,400 920,350 990,400 990,500 920,550 850,500"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2.5"
          opacity="0.1"
        />
      </g>

      {/* Hexagon 3 - bottom center */}
      <g className="hex hex-3" filter="url(#glow)">
        <polygon
          points="600,600 670,550 740,600 740,700 670,750 600,700"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2"
          opacity="0.12"
        />
      </g>

      {/* Data nodes - floating circles with connecting lines */}
      <g className="data-cluster" opacity="0.08">
        <circle cx="950" cy="300" r="4" fill="var(--signal)" />
        <circle cx="880" cy="250" r="3" fill="var(--signal)" />
        <circle cx="1000" cy="350" r="3.5" fill="var(--signal)" />
        <line x1="950" y1="300" x2="880" y2="250" stroke="var(--signal)" strokeWidth="1" />
        <line x1="950" y1="300" x2="1000" y2="350" stroke="var(--signal)" strokeWidth="1" />
      </g>

      {/* Circuit line accent */}
      <g className="circuit-line" opacity="0.06" stroke="var(--signal)" strokeWidth="1.5" fill="none">
        <path d="M 100,100 L 200,100 L 200,200 L 300,200" />
        <circle cx="100" cy="100" r="2" fill="var(--signal)" />
        <circle cx="300" cy="200" r="2" fill="var(--signal)" />
      </g>
    </svg>
  );
}
