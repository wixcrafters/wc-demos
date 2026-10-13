import { useMemo, useState } from 'react'
import { Page, PageHero, Img, Reveal, SpotCard } from '../components/ui.jsx'
import { Icon } from '../components/Icons.jsx'
import { CtaBand } from '../components/shared.jsx'
import { POSTS } from '../data/content.js'

function PostCard({ p, i, feature = false }) {
  return (
    <SpotCard as="a" href={p.href} target="_blank" rel="noreferrer" className={`group flex h-full flex-col ${feature ? 'lg:flex-row' : ''}`} aria-label={`${p.title}, opens on wixcrafters.com`}>
      <Img src={p.cover} alt="" tone={i} label="Velo" className={`w-full ${feature ? 'aspect-[4/3] lg:aspect-auto lg:min-h-[340px] lg:w-[55%]' : 'aspect-[4/3]'}`} imgClass="transition duration-700 group-hover:scale-[1.05]" />
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-mute">
            <span>{p.date}</span><span aria-hidden="true">&middot;</span><span>{p.read} min read</span>
          </div>
          <h2 className={`mt-4 font-display font-semibold leading-tight tracking-tight ${feature ? 'text-3xl sm:text-4xl' : 'text-xl'}`}>{p.title}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-mute">{p.excerpt}</p>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3">
          Read article <Icon name="arrowUpRight" className="h-4 w-4" />
        </span>
      </div>
    </SpotCard>
  )
}

export default function Blog() {
  const [q, setQ] = useState('')
  const list = useMemo(() => {
    const s = q.trim().toLowerCase()
    return s ? POSTS.filter((p) => (p.title + p.excerpt).toLowerCase().includes(s)) : POSTS
  }, [q])
  const showFeature = !q.trim()
  const [first, ...rest] = list

  return (
    <Page>
      <PageHero eyebrow="Blog" title={<>Wix Velo code <span className="gradient-text">examples &amp; tutorials.</span></>}>
        Practical walkthroughs from the team that ships Velo every day: bookings, dashboards, payments, automation and AI.
      </PageHero>

      <section className="section pt-12 sm:pt-16">
        <div className="container-x">
          <div className="relative max-w-md">
            <label htmlFor="blog-search" className="sr-only">Search articles</label>
            <Icon name="search" className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-mute" />
            <input id="blog-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles" className="field !rounded-full !pl-12" />
          </div>

          {list.length === 0 ? (
            <p className="mt-16 text-center text-mute">No articles match &ldquo;{q}&rdquo;.</p>
          ) : (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {showFeature && first && (
                <Reveal className="sm:col-span-2 lg:col-span-3"><PostCard p={first} i={0} feature /></Reveal>
              )}
              {(showFeature ? rest : list).map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.06}><PostCard p={p} i={i + 1} /></Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
      <CtaBand />
    </Page>
  )
}
