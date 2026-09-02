export default function SlateDivider({ flip = false, tone = "stone" }) {
  const bg = tone === "navy" ? "var(--navy)" : "var(--paper)";
  const tile = tone === "navy" ? "var(--slate)" : "var(--stone-deep)";
  return (
    <div
      aria-hidden="true"
      className={`h-8 md:h-12 w-full overflow-hidden ${flip ? "-scale-y-100" : ""}`}
      style={{ background: bg }}
    >
      <svg
        viewBox="0 0 240 32"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 13 }).map((__, col) => {
            const offset = row % 2 === 0 ? 0 : 12;
            return (
              <rect
                key={`${row}-${col}`}
                x={col * 24 + offset - 12}
                y={row * 6 - 16}
                width="22"
                height="10"
                rx="1"
                fill={tile}
                opacity={0.35 + (row % 3) * 0.12}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}
