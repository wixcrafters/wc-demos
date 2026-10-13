import { Link } from 'react-router-dom'
import { SITE } from '../data/content.js'
import { Icon, InstagramIcon, Logo } from './Icons.jsx'

const col = 'text-sm text-mute transition hover:text-white active:text-accent'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.07] bg-panel/60">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-mute">{SITE.tagline}.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Wix Crafters on Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-mute transition hover:border-white/30 hover:text-white active:scale-95">
              <InstagramIcon />
            </a>
            <a href={`mailto:${SITE.email}`} aria-label="Email Wix Crafters" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-mute transition hover:border-white/30 hover:text-white active:scale-95">
              <Icon name="mail" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">Company</h3>
          <ul className="space-y-3">
            <li><Link className={col} to="/#about">About Us</Link></li>
            <li><Link className={col} to="/#services">Our Services</Link></li>
            <li><Link className={col} to="/portfolio">Work / Examples</Link></li>
            <li><Link className={col} to="/testimonials">Testimonials</Link></li>
            <li><Link className={col} to="/contact-us">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">Solutions</h3>
          <ul className="space-y-3">
            <li><Link className={col} to="/#services">Wix Development</Link></li>
            <li><Link className={col} to="/#capabilities">Velo Coding</Link></li>
            <li><Link className={col} to="/#integrations">API Integration</Link></li>
            <li><Link className={col} to="/#integrations">Payment Gateway</Link></li>
            <li><Link className={col} to="/ai-chatbot">AI Chat Bots</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">Resources</h3>
          <ul className="space-y-3">
            <li><Link className={col} to="/filters-on-repeater">Velo Code Examples</Link></li>
            <li><Link className={col} to="/blog">Blog</Link></li>
            <li><a className={col} href="https://dev.wix.com/docs/velo" target="_blank" rel="noreferrer">Documentation</a></li>
            <li><a className={col} href="https://wix.com" target="_blank" rel="noreferrer">Wix.com</a></li>
            <li><Link className={col} to="/#pricing">Pricing</Link></li>
            <li><Link className={col} to="/contact-us">Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-6 text-xs text-mute sm:flex-row sm:items-center">
          <p>&copy; 2026 Wix Crafters. All rights reserved.</p>
          <Link to="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}
