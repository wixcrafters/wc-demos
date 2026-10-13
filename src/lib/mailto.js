import { SITE } from '../data/content.js'

export function openMailto({ subject, lines }) {
  const body = lines.filter(Boolean).join('\n')
  const href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = href
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
export const isEmail = (v) => EMAIL_RE.test(String(v).trim())
