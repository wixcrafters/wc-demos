import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useReducedMotion, animate } from 'framer-motion'
import { Icon } from './Icons.jsx'

/* ---------- Button ---------- */
// Static map so Tailwind keeps the classes
const VARIANTS = { primary: 'btn-primary', ghost: 'btn-ghost', light: 'btn-light' }

export function Button({ to, href, onClick, variant = 'primary', icon, children, className = '', type, disabled, ...rest }) {
  const cls = `btn ${VARIANTS[variant] || VARIANTS.primary} ${className}`
  const inner = (
    <>
      {children}
      {icon && <Icon name={icon} className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  )
  if (to) return <Link to={to} className={`group ${cls}`} {...rest}>{inner}</Link>
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={`group ${cls}`}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {inner}
      </a>
    )
  }
  return (
    <button type={type || 'button'} onClick={onClick} disabled={disabled} className={`group ${cls}`} {...rest}>
      {inner}
    </button>
  )
}

/* ---------- Image with graceful fallback ---------- */
export function Img({ src, alt = '', className = '', imgClass = '', label, tone = 0 }) {
  const [failed, setFailed] = useState(false)
  const tones = [
    'from-[#12234f] via-[#1a1b4b] to-[#0a1224]',
    'from-[#1b1650] via-[#14224d] to-[#08101f]',
    'from-[#0b2a3a] via-[#112349] to-[#0a0f1e]',
  ]
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${tones[tone % 3]} ${className}`}>
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      {label && (
        <span
          className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold tracking-tight text-white/10 sm:text-6xl"
          aria-hidden="true"
        >
          {label}
        </span>
      )}
      {src && !failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${imgClass}`}
        />
      )}
    </div>
  )
}

/* ---------- Scroll reveal ---------- */
export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const reduce = useReducedMotion()
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}

/* ---------- Pointer spotlight card ---------- */
export function SpotCard({ children, className = '', as: Tag = 'div', ...rest }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <Tag onMouseMove={onMove} className={`card spot ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

/* ---------- Count up ---------- */
export function CountUp({ value, decimals = 0, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? value : 0)
  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(v) })
    return () => c.stop()
  }, [inView, value, reduce])
  return (
    <span ref={ref}>
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

/* ---------- Section heading ---------- */
export function SectionHeading({ eyebrow, title, children, align = 'left', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal><span className="eyebrow mb-5">{eyebrow}</span></Reveal>
      )}
      <Reveal delay={0.05}><h2 className="h-section">{title}</h2></Reveal>
      {children && <Reveal delay={0.1}><p className="lead mt-5">{children}</p></Reveal>}
    </div>
  )
}

/* ---------- Marquee ---------- */
export function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
      <div className="flex w-max animate-marquee gap-12 py-2 hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-xl font-semibold tracking-tight text-white/45 sm:text-2xl" aria-hidden={i >= items.length}>
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- Page wrapper ---------- */
export function Page({ children }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45 }}>
      {children}
    </motion.div>
  )
}

/* ---------- Page hero ---------- */
export function PageHero({ eyebrow, title, children, actions }) {
  return (
    <header className="page-top relative overflow-hidden border-b border-white/[0.06]">
      <div className="aurora absolute inset-0" aria-hidden="true" />
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="container-x relative py-16 sm:py-24">
        <span className="eyebrow mb-6">{eyebrow}</span>
        <h1 className="h-display max-w-4xl text-5xl sm:text-6xl lg:text-7xl">{title}</h1>
        {children && <p className="lead mt-6 max-w-2xl">{children}</p>}
        {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </header>
  )
}
