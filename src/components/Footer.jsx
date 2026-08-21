import { profile } from '../data/projects.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p className="footer-mono">© {new Date().getFullYear()} {profile.name}</p>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5V18M6.5 5.5v.1M11 18v-5.2a3 3 0 0 1 6 0V18m-6-5.5V18M11 10v8M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /></svg>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.3-4-2-5.5-2.5M15 19v-2.5c0-1 .1-1.5-.5-2C17.8 14.1 21 13 21 8.5a4.7 4.7 0 0 0-1.3-3.5A4.4 4.4 0 0 0 19.6 2S18.3 1.6 15 3.8a11.8 11.8 0 0 0-6 0C5.7 1.6 4.4 2 4.4 2a4.4 4.4 0 0 0-.1 3A4.7 4.7 0 0 0 3 8.5C3 13 6.2 14.1 9.5 14.5c-.6.5-.6 1.2-.5 2V19" /></svg>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
