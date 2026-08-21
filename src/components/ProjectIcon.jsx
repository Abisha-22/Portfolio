const paths = {
  cv: (
    <>
      <rect x="6" y="10" width="36" height="28" rx="3" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="3" fill="var(--accent)" stroke="none" />
      <path d="M16 10l2.5-4h11L32 10" />
    </>
  ),
  sensor: (
    <>
      <rect x="14" y="6" width="20" height="36" rx="3" />
      <path d="M14 16h20M14 26h20" />
      <circle cx="24" cy="34" r="2.5" fill="var(--accent-2)" stroke="none" />
      <path d="M8 16c-3 3-3 9 0 12M40 16c3 3 3 9 0 12" />
    </>
  ),
  signal: (
    <>
      <path d="M6 34c4-14 10-14 14 0M22 34c3-9 7-9 10 0M34 34c2-5 4-5 8 0" />
      <circle cx="6" cy="34" r="2" fill="var(--accent)" stroke="none" />
      <circle cx="42" cy="34" r="2" fill="var(--accent-2)" stroke="none" />
    </>
  ),
  plc: (
    <>
      <rect x="8" y="8" width="32" height="32" rx="3" />
      <path d="M8 18h32M16 8v32M28 8v10M28 24v8" />
      <circle cx="34" cy="14" r="2" fill="var(--accent)" stroke="none" />
      <circle cx="22" cy="30" r="2" fill="var(--accent-2)" stroke="none" />
    </>
  ),
}

export default function ProjectIcon({ type }) {
  return (
    <svg viewBox="0 0 48 48" className="project-icon" strokeWidth="1.6" stroke="var(--ink)" fill="none" strokeLinecap="round" strokeLinejoin="round">
      {paths[type] || paths.cv}
    </svg>
  )
}
