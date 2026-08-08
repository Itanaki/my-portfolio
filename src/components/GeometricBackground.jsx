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
          opacity="1"
        />
      </g>

      {/* Hexagon 2 - middle right */}
      <g className="hex hex-2" filter="url(#glow)">
        <polygon
          points="850,400 920,350 990,400 990,500 920,550 850,500"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2.5"
          opacity="1"
        />
      </g>

      {/* Hexagon 3 - bottom center */}
      <g className="hex hex-3" filter="url(#glow)">
        <polygon
          points="600,600 670,550 740,600 740,700 670,750 600,700"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2"
          opacity="1"
        />
      </g>

      {/* Hexagon 4 - top left */}
      <g className="hex hex-4" filter="url(#glow)">
        <polygon
          points="150,120 200,90 250,120 250,180 200,210 150,180"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2"
          opacity="0.8"
        />
      </g>

      {/* Hexagon 5 - bottom left */}
      <g className="hex hex-5" filter="url(#glow)">
        <polygon
          points="100,650 170,600 240,650 240,750 170,800 100,750"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2.5"
          opacity="0.9"
        />
      </g>

      {/* Hexagon 6 - center */}
      <g className="hex hex-6" filter="url(#glow)">
        <polygon
          points="550,300 610,260 670,300 670,400 610,440 550,400"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2"
          opacity="0.7"
        />
      </g>

      {/* Hexagon 7 - upper center */}
      <g className="hex hex-7" filter="url(#glow)">
        <polygon
          points="700,100 760,60 820,100 820,180 760,220 700,180"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="1.8"
          opacity="0.6"
        />
      </g>

      {/* Hexagon 8 - bottom right */}
      <g className="hex hex-8" filter="url(#glow)">
        <polygon
          points="1050,650 1120,600 1190,650 1190,750 1120,800 1050,750"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="2"
          opacity="0.75"
        />
      </g>

      {/* Data nodes - floating circles with connecting lines - cluster 1 (middle right) */}
      <g className="data-cluster" opacity="1">
        <circle cx="950" cy="300" r="4" fill="var(--signal)" />
        <circle cx="880" cy="250" r="3" fill="var(--signal)" />
        <circle cx="1000" cy="350" r="3.5" fill="var(--signal)" />
        <line x1="950" y1="300" x2="880" y2="250" stroke="var(--signal)" strokeWidth="1" />
        <line x1="950" y1="300" x2="1000" y2="350" stroke="var(--signal)" strokeWidth="1" />
      </g>

      {/* Data nodes - cluster 2 (upper left) */}
      <g className="data-cluster" opacity="0.9">
        <circle cx="300" cy="150" r="3.5" fill="var(--signal)" />
        <circle cx="350" cy="120" r="3" fill="var(--signal)" />
        <circle cx="280" cy="220" r="2.5" fill="var(--signal)" />
        <line x1="300" y1="150" x2="350" y2="120" stroke="var(--signal)" strokeWidth="0.8" />
        <line x1="300" y1="150" x2="280" y2="220" stroke="var(--signal)" strokeWidth="0.8" />
      </g>

      {/* Data nodes - cluster 3 (bottom left) */}
      <g className="data-cluster" opacity="0.8">
        <circle cx="250" cy="700" r="3" fill="var(--signal)" />
        <circle cx="320" cy="680" r="3.5" fill="var(--signal)" />
        <circle cx="280" cy="750" r="2.5" fill="var(--signal)" />
        <line x1="250" y1="700" x2="320" y2="680" stroke="var(--signal)" strokeWidth="0.8" />
        <line x1="320" y1="680" x2="280" y2="750" stroke="var(--signal)" strokeWidth="0.8" />
      </g>

      {/* Data nodes - cluster 4 (center) */}
      <g className="data-cluster" opacity="0.85">
        <circle cx="600" cy="450" r="3.5" fill="var(--signal)" />
        <circle cx="660" cy="480" r="3" fill="var(--signal)" />
        <circle cx="630" cy="520" r="2.5" fill="var(--signal)" />
        <circle cx="570" cy="500" r="3" fill="var(--signal)" />
        <line x1="600" y1="450" x2="660" y2="480" stroke="var(--signal)" strokeWidth="0.8" />
        <line x1="600" y1="450" x2="630" y2="520" stroke="var(--signal)" strokeWidth="0.8" />
        <line x1="600" y1="450" x2="570" y2="500" stroke="var(--signal)" strokeWidth="0.8" />
      </g>

      {/* Data nodes - cluster 5 (bottom right) */}
      <g className="data-cluster" opacity="0.8">
        <circle cx="1100" cy="550" r="3" fill="var(--signal)" />
        <circle cx="1050" cy="580" r="3.5" fill="var(--signal)" />
        <circle cx="1150" cy="600" r="2.5" fill="var(--signal)" />
        <line x1="1100" y1="550" x2="1050" y2="580" stroke="var(--signal)" strokeWidth="0.8" />
        <line x1="1100" y1="550" x2="1150" y2="600" stroke="var(--signal)" strokeWidth="0.8" />
      </g>

      {/* Circuit line accent 1 - upper left */}
      <g className="circuit-line" opacity="1" stroke="var(--signal)" strokeWidth="1.5" fill="none">
        <path d="M 100,100 L 200,100 L 200,200 L 300,200" />
        <circle cx="100" cy="100" r="2" fill="var(--signal)" />
        <circle cx="300" cy="200" r="2" fill="var(--signal)" />
      </g>

      {/* Circuit line accent 2 - lower left */}
      <g className="circuit-line" opacity="0.8" stroke="var(--signal)" strokeWidth="1.5" fill="none">
        <path d="M 50,650 L 150,650 L 150,750 L 280,750" />
        <circle cx="50" cy="650" r="2" fill="var(--signal)" />
        <circle cx="280" cy="750" r="2" fill="var(--signal)" />
      </g>

      {/* Circuit line accent 3 - bottom center */}
      <g className="circuit-line" opacity="0.75" stroke="var(--signal)" strokeWidth="1.2" fill="none">
        <path d="M 600,500 L 700,500 L 700,600 L 800,600 L 800,700" />
        <circle cx="600" cy="500" r="2" fill="var(--signal)" />
        <circle cx="800" cy="700" r="2" fill="var(--signal)" />
      </g>

      {/* Circuit line accent 4 - upper right */}
      <g className="circuit-line" opacity="0.85" stroke="var(--signal)" strokeWidth="1.3" fill="none">
        <path d="M 1000,50 L 1100,50 L 1100,150 L 1200,150" />
        <circle cx="1000" cy="50" r="2" fill="var(--signal)" />
        <circle cx="1200" cy="150" r="2" fill="var(--signal)" />
      </g>

      {/* Circuit line accent 5 - right side */}
      <g className="circuit-line" opacity="0.7" stroke="var(--signal)" strokeWidth="1.4" fill="none">
        <path d="M 1100,300 L 1200,300 L 1200,400 L 1100,400" />
        <circle cx="1100" cy="300" r="1.5" fill="var(--signal)" />
        <circle cx="1100" cy="400" r="1.5" fill="var(--signal)" />
      </g>
    </svg>
  );
}
