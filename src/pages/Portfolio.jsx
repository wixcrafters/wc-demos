import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Page, PageHero, Reveal, Button } from '../components/ui.jsx'
import { CtaBand, ProjectCard } from '../components/shared.jsx'
import { PROJECTS } from '../data/content.js'

const FILTERS = [
  { id: 'all', label: 'All work' },
  { id: 'velo', label: 'Velo' },
  { id: 'design', label: 'Design' },
]

export default function Portfolio() {
  const [f, setF] = useState('all')
  const list = useMemo(() => PROJECTS.filter((p) => f === 'all' || p.tags.includes(f)), [f])

  return (
    <Page>
      <PageHero
        eyebrow="Portfolio"
        title={<>What did we <span className="gradient-text">build?</span></>}
        actions={<Button to="/contact-us" icon="arrow">Start your project</Button>}
      >
        We don&rsquo;t just build websites. We build solutions that work, from API integrations to complete membership platforms.
      </PageHero>

      <section className="section pt-12 sm:pt-16">
        <div className="container-x">
          <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {FILTERS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={f === t.id}
                onClick={() => setF(t.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition active:scale-95 ${
                  f === t.id
                    ? 'border-[#2563eb] bg-[#2563eb] text-white'
                    : 'border-white/10 bg-white/[0.03] text-mute hover:border-white/30 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                >
                  <ProjectCard p={p} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal>
            <p className="mt-10 rounded-3xl border border-dashed border-white/15 p-8 text-center font-display text-xl text-mute">
              + many more (confidential)
            </p>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </Page>
  )
}
