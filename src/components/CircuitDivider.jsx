export default function CircuitDivider({ flip = false }) {
  return (
    <div className={`circuit-divider${flip ? ' flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
        <path
          d="M0 20 H180 L210 5 H420 L450 20 H700 L730 35 H960 L990 20 H1200"
          fill="none"
          stroke="var(--line)"
          strokeWidth="1.5"
        />
        <circle cx="210" cy="5" r="3.5" fill="var(--accent)" />
        <circle cx="450" cy="20" r="3.5" fill="var(--accent-2)" />
        <circle cx="730" cy="35" r="3.5" fill="var(--accent)" />
        <circle cx="990" cy="20" r="3.5" fill="var(--accent-2)" />
      </svg>
    </div>
  )
}
