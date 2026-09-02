export function RoofIllustration({ variant = 0, className = "" }) {
  const pitches = [
    [40, 150, 140, 60, 240, 150],
    [120, 160, 200, 90, 280, 160],
    [10, 140, 90, 70, 170, 140],
  ][variant % 3];

  return (
    <svg viewBox="0 0 280 170" className={className} preserveAspectRatio="xMidYMid meet">
      <rect width="280" height="170" fill="var(--stone-deep)" />
      <polygon
        points={pitches.join(" ")}
        fill="none"
        stroke="var(--navy)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <rect x={pitches[2] - 14} y={pitches[3] - 26} width="10" height="24" fill="var(--navy)" />
      {Array.from({ length: 5 }).map((_, row) => (
        <g key={row}>
          {Array.from({ length: 10 }).map((__, col) => {
            const x = pitches[0] + col * 22 - (row % 2 === 0 ? 0 : 11);
            const y = pitches[3] + 28 + row * 14 + ((pitches[1] - pitches[3]) * 0);
            if (x < pitches[0] - 20 || x > pitches[4] + 20) return null;
            return (
              <rect
                key={col}
                x={x}
                y={y}
                width="18"
                height="9"
                rx="1"
                fill="var(--blue)"
                opacity={0.15 + (row % 3) * 0.12}
              />
            );
          })}
        </g>
      ))}
    </svg>
  );
}

export function ArtisanIllustration({ className = "" }) {
  return (
    <svg viewBox="0 0 300 300" className={className} preserveAspectRatio="xMidYMid meet">
      <rect width="300" height="300" fill="var(--navy-deep)" />
      {/* roof pitch */}
      <polygon points="20,190 150,90 280,190" fill="var(--navy)" stroke="var(--blue)" strokeWidth="2" />
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 9 }).map((__, col) => {
          const x = 30 + col * 24 - (row % 2 === 0 ? 0 : 12);
          const y = 150 + row * 12;
          if (x < 25 || x > 265) return null;
          return (
            <rect key={`${row}-${col}`} x={x} y={y} width="20" height="9" rx="1" fill="var(--slate)" opacity={0.5 + (row % 2) * 0.2} />
          );
        })
      )}
      {/* figure silhouette standing on ridge */}
      <circle cx="150" cy="70" r="14" fill="var(--blue-bright)" />
      <path d="M150 84 L150 130 M150 96 L128 118 M150 96 L172 112 M150 130 L134 165 M150 130 L166 160" stroke="var(--blue-bright)" strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  );
}
