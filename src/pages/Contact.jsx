import { useState } from 'react'
import { profile } from '../data/projects.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

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
              <span className="contact-item-label"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></span>
              <span>{profile.email}</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-item-label"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5V18M6.5 5.5v.1M11 18v-5.2a3 3 0 0 1 6 0V18m-6-5.5V18M11 10v8M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /></svg></span>
              <span>linkedin.com/in/abisha-v-640434262</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-item-label"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.3-4-2-5.5-2.5M15 19v-2.5c0-1 .1-1.5-.5-2C17.8 14.1 21 13 21 8.5a4.7 4.7 0 0 0-1.3-3.5A4.4 4.4 0 0 0 19.6 2S18.3 1.6 15 3.8a11.8 11.8 0 0 0-6 0C5.7 1.6 4.4 2 4.4 2a4.4 4.4 0 0 0-.1 3A4.7 4.7 0 0 0 3 8.5C3 13 6.2 14.1 9.5 14.5c-.6.5-.6 1.2-.5 2V19" /></svg></span>
              <span>github.com/Abisha-22</span>
            </a>
            <div className="contact-item">
              <span className="contact-item-label"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.2" /></svg></span>
              <span>{profile.location}</span>
            </div>
          </div>
        </div>

        <form className="contact-form" action="https://formsubmit.co/abishavelan@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="Portfolio contact message" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <label>
            Name
            <input
              type="text"
              name="name"
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
              name="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What are you working on?"
            />
          </label>
          <button type="submit" className="btn">Send message</button>
        </form>
      </div>
    </section>
  )
}
