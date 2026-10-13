import { Page, PageHero } from '../components/ui.jsx'
import { SITE } from '../data/content.js'

const SECTIONS = [
  { h: 'What we collect', p: 'Product and wishlist selections, review text, photos and ratings, order data (used only to verify purchases for reviews), email addresses (for magic login links) and AI chatbot messages. Chat threads are session-only and are not stored in a database.' },
  { h: 'How it is used', p: 'Data is used only to run the app feature the site owner installed. It is not used for ads, sold, or shared across merchants. Each site’s data is kept in its own CMS collection.' },
  { h: 'Third parties', p: 'OpenAI and Anthropic process AI-related content, such as chat messages and planned features like review summaries. All API calls go through the Wix Crafters backend, so API keys stay off the customer’s site.' },
  { h: 'Infrastructure', p: 'A minimal site-to-instance ID mapping is kept to route backend requests, such as plan checks and automations. It is deleted on uninstall.' },
  { h: 'Retention', p: 'App content (reviews, wishlist items and similar) stays on the customer’s Wix site and follows Wix’s platform behavior. The site-to-instance mapping is kept indefinitely, even after uninstall, to support reinstallation and continued service.' },
  { h: 'Additional communications', p: 'Site owners’ email addresses may be used to promote other Wix Crafters services, such as website design, Velo development and other apps. Owners can opt out at any time via email or an unsubscribe link.' },
  { h: 'Your rights', p: 'Users can request deletion of their data by contacting Wix Crafters.' },
]

export default function Privacy() {
  return (
    <Page>
      <PageHero eyebrow="Legal" title="Privacy Policy">Last updated 3rd July 2026.</PageHero>
      <section className="section pt-12 sm:pt-16">
        <div className="container-x grid gap-12 lg:grid-cols-[260px_1fr]">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-40 space-y-1 border-l border-white/10">
              {SECTIONS.map((s) => (
                <li key={s.h}>
                  <a href={`#${s.h.toLowerCase().replace(/\s+/g, '-')}`} onClick={(e) => { e.preventDefault(); document.getElementById(s.h.toLowerCase().replace(/\s+/g, '-'))?.scrollIntoView({ behavior: 'smooth' }) }} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-mute transition hover:border-accent hover:text-white">{s.h}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="max-w-3xl">
            {SECTIONS.map((s) => (
              <section key={s.h} id={s.h.toLowerCase().replace(/\s+/g, '-')} className="anchor border-b border-white/[0.07] py-8 first:pt-0">
                <h2 className="font-display text-2xl font-semibold tracking-tight">{s.h}</h2>
                <p className="mt-3 text-base leading-relaxed text-mute">{s.p}</p>
              </section>
            ))}
            <p className="mt-10 text-sm text-mute">
              Questions or deletion requests: <a className="text-accent underline underline-offset-4 hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              This page is a condensed summary for the design preview; the official policy is published at{' '}
              <a className="text-accent underline underline-offset-4 hover:text-white" href="https://www.wixcrafters.com/privacy-policy" target="_blank" rel="noreferrer">wixcrafters.com/privacy-policy</a>.
            </p>
          </div>
        </div>
      </section>
    </Page>
  )
}
