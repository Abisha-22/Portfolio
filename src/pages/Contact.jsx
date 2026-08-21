import { useState } from 'react'
import { profile } from '../data/projects.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio contact from ${form.name || 'a visitor'}`
  )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`

  function handleSubmit(e) {
    e.preventDefault()
    window.location.href = mailtoHref
  }

  return (
    <section className="section page-top">
      <div className="wrap contact-grid">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 style={{ marginTop: 12, fontSize: 'clamp(26px, 3vw, 34px)' }}>Let's talk</h1>
          <p className="hero-lede" style={{ marginTop: 14 }}>
            Open to full-time roles and internships in embedded systems, IoT, and applied ML.
            The fastest way to reach me is email — the form on the right routes straight there.
          </p>

          <div className="contact-list">
            <a href={`mailto:${profile.email}`} className="contact-item">
              <span className="contact-item-label">Email</span>
              <span>{profile.email}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-item-label">LinkedIn</span>
              <span>linkedin.com/in/abisha-v-640434262</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-item-label">GitHub</span>
              <span>github.com/Abisha-22</span>
            </a>
            <div className="contact-item">
              <span className="contact-item-label">Based in</span>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What are you working on?"
            />
          </label>
          <button type="submit" className="btn">Send message</button>
          <p className="contact-form-note">Opens your email client with this pre-filled.</p>
        </form>
      </div>
    </section>
  )
}
