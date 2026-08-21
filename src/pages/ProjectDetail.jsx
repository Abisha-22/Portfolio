import { useParams, Link, Navigate } from 'react-router-dom'
import { projects } from '../data/projects.js'
import ProjectIcon from '../components/ProjectIcon.jsx'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/work" replace />

  const idx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <section className={`section page-top project-detail${project.slug === 'fruit-ripeness-predictor' ? ' project-detail--fruit' : ''}${project.slug === 'smart-bin-waste-segregation' ? ' project-detail--smart-bin' : ''}${project.slug === 'Iot-smart-irrigation' ? ' project-detail--irrigation' : ''}${project.slug === 'plc-bag-scanning' ? ' project-detail--automation' : ''}`}>
      <div className="wrap">
        <Link to="/work" className="back-link">← All work</Link>

        <div className="project-detail-head">
          <ProjectIcon type={project.icon} />
          <div>
            <span className="eyebrow">{project.period}</span>
            <h1>{project.name}</h1>
            <p className="hero-lede">{project.tagline}</p>
          </div>
        </div>

        {project.slug !== 'Iot-smart-irrigation' && (
          <>
            {/* Demo image or video */}
            <div className="project-demo">
              {project.slug === 'fruit-ripeness-predictor' ? (
                <video controls>
                  <source src="/videos/classification.mp4" type="video/mp4" />
                  <track kind="captions" src="/videos/classification.vtt" srcLang="en" label="English" default />
                  Your browser does not support video playback.
                </video>
              ) : project.slug === 'plc-bag-scanning' ? (
                <video controls>
                  <source src="/videos/plc-bag-scanning.mp4" type="video/mp4" />
                  <track kind="captions" src="/videos/plc-bag-scanning.vtt" srcLang="en" label="English" default />
                  Your browser does not support video playback.
                </video>
              ) : project.slug === 'smart-bin-waste-segregation' ? (
                <div className="project-demo-gallery">
                  <img src="/images/garbage%202.jpg" alt="Smart bin dry waste segregation" />
                  <img src="/images/garbage%201.jpg" alt="Smart bin wet waste segregation" />
                </div>
              ) : (
                <>
                  <img
                    src={`/images/${project.slug}.jpg`}
                    alt={`${project.name} demo`}
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'flex' }}
                  />
                  <div className="project-demo-fallback">
                    <ProjectIcon type={project.icon} />
                    <span>Add a demo screenshot at /public/images/{project.slug}.jpg</span>
                  </div>
                </>
              )}
            </div>
          </>
        )}

        <div className="project-metrics">
          {project.metrics.map((m) => (
            <div key={m.label} className="metric">
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="project-detail-grid">
          <div>
            <h3>Goal</h3>
            <p>{project.goal}</p>
          </div>
          <div>
            <h3>My role</h3>
            <p>{project.role}</p>
          </div>
          <div>
            <h3>Result</h3>
            <p>{project.result}</p>
          </div>
        </div>

        <div>
          <h3>Tools & stack</h3>
          <div className="tool-tags">
            {project.tools.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="project-next">
          <span className="eyebrow">Next project</span>
          <Link to={`/work/${next.slug}`}>{next.name} →</Link>
        </div>
      </div>
    </section>
  )
}
