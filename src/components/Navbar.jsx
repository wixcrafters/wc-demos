import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV } from '../data/content.js'
import { Icon, Logo } from './Icons.jsx'
import { Button } from './ui.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const link = ({ isActive }) =>
    `relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 hover:text-white hover:bg-white/[0.06] active:bg-white/10 ${
      isActive ? 'text-white' : 'text-mute'
    }`

  return (
    <>
      <nav
        aria-label="Primary"
        style={{ top: 'var(--banner-h, 0px)', height: 'var(--nav-h)' }}
        className={`fixed inset-x-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-full items-center justify-between">
          <Link to="/" aria-label="WixCrafters home" className="rounded-xl transition-opacity hover:opacity-80">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end} className={link}>
                {({ isActive }) => (
                  <>
                    {n.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-dot"
                        className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gradient-to-r from-accent to-cyan"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button to="/contact-us" className="hidden !px-5 !py-2.5 lg:inline-flex">Hire Us</Button>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition hover:bg-white/10 active:scale-95 lg:hidden"
            >
              <Icon name={open ? 'x' : 'menu'} />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ top: 'calc(var(--banner-h, 0px) + var(--nav-h))' }}
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-6">
              {NAV.map((n, i) => (
                <motion.div key={n.to} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}>
                  <NavLink
                    to={n.to}
                    end={n.end}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-2xl border-b border-white/[0.06] px-3 py-4 font-display text-2xl font-semibold tracking-tight transition hover:bg-white/[0.04] active:bg-white/[0.08] ${
                        isActive ? 'text-white' : 'text-mute'
                      }`
                    }
                  >
                    {n.label}
                    <Icon name="arrow" className="h-5 w-5" />
                  </NavLink>
                </motion.div>
              ))}
              <Button to="/contact-us" icon="arrow" className="mt-6 w-full">Hire Us</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
