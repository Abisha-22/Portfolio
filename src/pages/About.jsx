import { profile, experience, education, priorEducation, skills, softSkills, interests, certificates } from '../data/projects.js'
import Avatar from '../components/Avatar.jsx'

export default function About() {
  return (
    <section className="section page-top">
      <div className="wrap about-grid">
        <div className="about-side">
          <Avatar size={200} />
          <h1>{profile.name}</h1>
          <p className="hero-title" style={{ fontSize: 15 }}>{profile.title}</p>
          <p className="about-bio">{profile.summary}</p>
          <div className="skill-group about-side-group">
            <span className="skill-group-label">Soft skills</span>
            <div className="tool-tags">
              {softSkills.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
          <div className="skill-group about-side-group">
            <span className="skill-group-label">Interests</span>
            <div className="tool-tags">
              {interests.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        </div>

        <div className="about-main">
          <div className="about-block">
            <h2>Experience</h2>
            <div className="timeline">
              {experience.map((e) => (
                <div key={e.company} className="timeline-item">
                  <div className="timeline-dot" />
                  <div>
                    <div className="timeline-top">
                      <strong>{e.role}</strong>
                      <span className="timeline-period">{e.period}</span>
                    </div>
                    <p className="timeline-company">{e.company} — {e.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h2>Education</h2>
            <div className="edu-card">
              <div className="timeline-top">
                <strong>{education.degree}</strong>
                <span className="timeline-period">{education.period}</span>
              </div>
              <p className="timeline-company">{education.school} — CGPA {education.cgpa}</p>
              <div className="tool-tags">
                {education.coursework.map((c) => <span key={c}>{c}</span>)}
              </div>
            </div>
            <div className="timeline" style={{ marginTop: 22 }}>
              {priorEducation.map((e) => (
                <div key={e.school} className="timeline-item">
                  <div className="timeline-dot" />
                  <div>
                    <div className="timeline-top">
                      <strong>{e.level}</strong>
                      <span className="timeline-period">{e.period}</span>
                    </div>
                    <p className="timeline-company">{e.school} — {e.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-block">
            <h2>Skills</h2>
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="skill-group">
                <span className="skill-group-label">{group}</span>
                <div className="tool-tags">
                  {items.map((s) => <span key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="about-block">
            <h2>Certificates</h2>
            <div className="timeline">
              {certificates.map((c) => (
                <div key={c.name} className="timeline-item">
                  <div className="timeline-dot" />
                  <div>
                    <div className="timeline-top">
                      <strong>{c.name}</strong>
                      <span className="timeline-period">{c.issuer}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
