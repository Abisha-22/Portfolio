import { profile } from '../data/projects.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p className="footer-mono">© {new Date().getFullYear()} {profile.name}</p>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
    </footer>
  )
}
