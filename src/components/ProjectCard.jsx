import { Link } from 'react-router-dom'
import ProjectIcon from './ProjectIcon.jsx'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card">
      <div className="project-card-top">
        <ProjectIcon type={project.icon} />
        <span className="project-card-period">{project.period}</span>
      </div>
      <h3>{project.name}</h3>
      <p className="project-card-tagline">{project.tagline}</p>
      <div className="project-card-tools">
        {project.tools.slice(0, 3).map((t) => (
          <span key={t}>{t}</span>
        ))}
        {project.tools.length > 3 && <span>+{project.tools.length - 3}</span>}
      </div>
      <span className="project-card-cta">View project →</span>
    </Link>
  )
}
