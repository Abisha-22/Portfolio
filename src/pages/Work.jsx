import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Work() {
  return (
    <section className="section page-top">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Work</span>
          <h2>Projects, prototypes, and internship builds</h2>
          <p>A focused set of systems spanning computer vision, sensor fusion, industrial control, and IoT telemetry — each one shipped, tested, and measured.</p>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
