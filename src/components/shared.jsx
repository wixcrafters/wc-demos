import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Icon, QuoteIcon, StarIcon } from './Icons.jsx'
import { Button, Img, Reveal, SpotCard } from './ui.jsx'
import Scene3D from './Scene3D.jsx'
import { isEmail } from '../lib/mailto.js'

/* ---------- FAQ accordion ---------- */
export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-white/[0.08] rounded-3xl border border-white/[0.08] bg-panel/60">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 rounded-3xl px-6 py-5 text-left font-display text-lg font-semibold tracking-tight transition hover:bg-white/[0.03] active:bg-white/[0.06] sm:px-8 sm:text-xl"
              >
                {f.q}
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/15 transition ${isOpen ? 'rotate-180 bg-[#2563eb] text-white' : 'text-mute'}`}>
                  <Icon name={isOpen ? 'minus' : 'plus'} className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-base leading-relaxed text-mute sm:px-8">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/* ---------- Testimonial card ---------- */
export function Avatar({ t, size = 'h-12 w-12' }) {
  const [failed, setFailed] = useState(false)
  const initials = t.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
  return (
    <span className={`relative grid ${size} shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-accent to-violet font-display text-sm font-bold text-white`}>
      {initials}
      {t.avatar && !failed && (
        <img src={t.avatar} alt="" loading="lazy" decoding="async" onError={() => setFailed(true)} className="absolute inset-0 h-full w-full object-cover" />
      )}
    </span>
  )
}

export function TestimonialCard({ t, className = '' }) {
  return (
    <SpotCard as="figure" className={`flex h-full flex-col justify-between p-7 sm:p-8 ${className}`}>
      <div>
        <div className="flex items-center justify-between">
          <QuoteIcon className="h-8 w-8 text-accent/70" />
          <div className="flex gap-0.5 text-[#f5b942]" role="img" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} />)}
          </div>
        </div>
        <blockquote className="mt-5 text-lg leading-relaxed text-fg/90">{t.quote}</blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-3">
        <Avatar t={t} />
        <div className="min-w-0">
          <div className="truncate font-semibold">{t.name}</div>
          <div className="truncate text-sm text-mute">{t.company ? `${t.role}, ${t.company}` : t.role}</div>
        </div>
      </figcaption>
    </SpotCard>
  )
}

/* ---------- Project card ---------- */
const initials = (t) => {
  const w = t.split(/[\s-]+/).filter(Boolean)
  return (w.length > 1 ? w[0][0] + w[1][0] : t.slice(0, 2)).toUpperCase()
}

export function ProjectCard({ p, index = 0, large = false }) {
  const tagCls = 'rounded-full border border-white/15 bg-black/30 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white/80 backdrop-blur'
  const body = (
    <>
      <Img
        src={p.image}
        alt={`${p.title} website preview`}
        label={p.image ? undefined : initials(p.title)}
        tone={index}
        className={`w-full ${large ? 'aspect-[16/9]' : 'aspect-[16/10]'}`}
        imgClass="transition duration-700 group-hover:scale-[1.05]"
      />
      <div className="flex items-start justify-between gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{p.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tags.map((t) => <span key={t} className={tagCls}>#{t}</span>)}
          </div>
        </div>
        {p.href && (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-white transition group-hover:border-accent group-hover:bg-accent">
            <Icon name="arrowUpRight" />
          </span>
        )}
      </div>
    </>
  )
  const cls = 'group block h-full'
  return p.href ? (
    <SpotCard as="a" href={p.href} target="_blank" rel="noreferrer" className={cls} aria-label={`${p.title}, view project on wixcrafters.com`}>{body}</SpotCard>
  ) : (
    <SpotCard className={cls}>{body}</SpotCard>
  )
}

/* ---------- Closing CTA with 3D rings ---------- */
export function CtaBand() {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [err, setErr] = useState('')
  const submit = (e) => {
    e.preventDefault()
    if (!isEmail(email)) { setErr('Enter a valid email address so we can reply.'); return }
    setErr('')
    nav('/contact-us', { state: { email: email.trim() } })
  }
  return (
    <section className="section overflow-hidden" aria-labelledby="cta-title">
      <div className="container-x">
        <div className="card noise relative overflow-hidden border-white/10 bg-gradient-to-br from-[#0d1838] via-panel to-[#0c1030] px-6 py-16 sm:px-14 sm:py-24">
          <Scene3D variant="rings" className="opacity-80 [mask-image:linear-gradient(90deg,transparent,#000_40%)]" />
          <div className="relative max-w-2xl">
            <span className="eyebrow mb-6">Need advanced Wix development?</span>
            <h2 id="cta-title" className="h-display text-4xl sm:text-6xl">Let&rsquo;s create tomorrow, hand in hand.</h2>
            <p className="lead mt-6 max-w-xl">Tell us about your project. We usually respond within 24 hours.</p>
            <form onSubmit={submit} noValidate className="mt-10 flex max-w-xl flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="cta-email" className="sr-only">Your email</label>
                <input
                  id="cta-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={!!err}
                  aria-describedby={err ? 'cta-err' : undefined}
                  className="field !rounded-full !px-6 !py-4"
                />
                {err && <p id="cta-err" className="err pl-4">{err}</p>}
              </div>
              <Button type="submit" icon="arrow" className="!py-4">Start a Conversation</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

