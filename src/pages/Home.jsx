import { Link } from 'react-router-dom'
import { profile, projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'
import CircuitDivider from '../components/CircuitDivider.jsx'
import Avatar from '../components/Avatar.jsx'

export default function Home() {
  const featured = projects.slice(0, 4)

  return (
    <>
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-text">
            <span className="eyebrow">Available for full-time roles</span>
            <h1>
              {profile.name}
              <span className="hero-title">{profile.title}</span>
            </h1>
            <p className="hero-lede">{profile.mainSkill}.</p>
            <div className="hero-actions">
              <Link to="/work" className="btn">See the work</Link>
              <Link to="/contact" className="btn btn-outline">Get in touch</Link>
              <a href="/resume/ABISHA V RESUME.pdf" className="btn btn-outline" download>Download resume</a>
            </div>
          </div>
          <div className="hero-avatar">
            <Avatar size={240} />
            <div className="hero-avatar-tag">
              <span className="nav-mark-dot" /> {profile.location}
            </div>
          </div>
        </div>
      </section>

      <CircuitDivider />

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Selected work</span>
            <h2>Four systems I've built end to end</h2>
            <p>From on-device sensor fusion to cloud-connected telemetry — a look at the projects that best represent how I work.</p>
          </div>
          <div className="project-grid">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
          <div className="section-foot">
            <Link to="/work" className="btn btn-outline">View all work →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
