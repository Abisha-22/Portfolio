import { useState } from 'react'
import { profile } from '../data/projects.js'

// To use a real photo: drop your file into /public/images/profile.jpg
// This component tries to load it automatically, and falls back to a
// monogram placeholder if the file isn't there yet.
export default function Avatar({ size = 220, src = '/images/sha-portrait.jpg' }) {
  const [failed, setFailed] = useState(false)
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')

  if (failed) {
    return (
      <div className="avatar-placeholder" style={{ width: size, height: size }}>
        <span>{initials}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={profile.name}
      className="avatar-photo"
      style={{ width: size, height: size }}
      onError={() => setFailed(true)}
    />
  )
}
