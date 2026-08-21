import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { profile } from '../data/projects.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <NavLink to="/" className="nav-mark" onClick={() => setOpen(false)}>
          <span className="nav-mark-dot" />
          {profile.name}
        </NavLink>

        <button className="nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={open}>
          <span />
          <span />
        </button>

        <nav className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              style={{ '--i': i }}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
