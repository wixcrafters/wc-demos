import { Link } from 'react-router-dom'
import { Page, Reveal, Img, SpotCard, SectionHeading, CountUp, Marquee, Button } from '../components/ui.jsx'
import { Icon, StarIcon } from '../components/Icons.jsx'
import { CtaBand, Faq, ProjectCard, TestimonialCard } from '../components/shared.jsx'
import Scene3D from '../components/Scene3D.jsx'
import { CAPABILITIES, EXPERTISE, FAQS, FEATURED_PROJECTS, PLANS, PROCESS, PROJECTS, SERVICES, SITE, STATS, TECH_MARQUEE, TESTIMONIALS, WHY } from '../data/content.js'
import { IMG } from '../data/images.js'

const CAP_ICONS = ['database', 'code', 'bolt', 'layers', 'sliders']
const CAP_SPAN = ['lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2']

function Hero() {
  return (
    <section className="page-top relative isolate overflow-hidden">
      <div className="aurora absolute inset-0 -z-10" aria-hidden="true" />
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden="true" />
      <Scene3D variant="hero" className="-z-10 opacity-40 lg:opacity-100" />
      <div className="container-x relative flex min-h-[calc(100svh-var(--banner-h,0px)-var(--nav-h))] flex-col justify-center py-14 sm:py-20">
        <Reveal y={12}>
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-3 pr-4 text-xs text-mute backdrop-blur">
            <span className="flex gap-0.5 text-[#f5b942]" aria-hidden="true">{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="h-3.5 w-3.5" />)}</span>
            5.0 on Fiverr &middot; Wix &amp; Velo development studio
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="h-display mt-7 max-w-3xl text-[44px] sm:text-7xl lg:text-[80px]">
            Custom Wix websites,{' '}
            <span className="gradient-text">engineered with Velo.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="lead mt-7 max-w-xl">
            {SITE.tagline}. API integration, payment gateway integration, member portals and much more.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to="/contact-us" icon="arrow">Hire Us</Button>
            <Button to="/portfolio" variant="ghost">See our work</Button>
          </div>
        </Reveal>

        <Reveal delay={0.32} className="mt-16 sm:mt-24">
          <dl className="grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dd className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                </dd>
                <dt className="mt-1 text-xs text-mute">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section anchor">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-accent/25 to-violet/20 blur-2xl" aria-hidden="true" />
            <Img src={IMG.veloExpert} alt="Velo by Wix Experts" label="Velo" className="aspect-[5/4] w-full rounded-[2rem] border border-white/10" />
          </div>
        </Reveal>
        <div>
          <Reveal><span className="eyebrow mb-5">Velo by Wix experts</span></Reveal>
          <Reveal delay={0.05}><h2 className="h-section">Business sites, web apps and everything the editor can&rsquo;t do.</h2></Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6">
              Wix Crafters builds customized Wix and Velo websites, including business sites, web apps, API integrations, payment gateways and AI chatbots. Certified specialists, direct communication, and no project closed until you approve the result.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {EXPERTISE.map((e) => (
                <li key={e} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-fg/90 transition hover:border-accent/60 hover:bg-accent/10">{e}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="section anchor border-t border-white/[0.06] bg-panel/40">
      <div className="container-x">
        <SectionHeading eyebrow="Services" title="What we build for you">
          Three disciplines, one team that writes the Velo and owns the result.
        </SectionHeading>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08} className="h-full">
              <SpotCard as="article" className="group flex h-full flex-col">
                <Img src={s.image} alt={s.title} tone={i} className="aspect-[3/2] w-full" imgClass="transition duration-700 group-hover:scale-[1.04]" />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-mute">{s.blurb}</p>
                  <ul className="mt-6 space-y-2.5 text-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-fg/85">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent"><Icon name="check" className="h-3 w-3" strokeWidth={2.4} /></span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Capabilities() {
  return (
    <section id="capabilities" className="section anchor">
      <div className="container-x">
        <SectionHeading eyebrow="Velo coding" title="Almost everything is possible on Wix">
          The editor gets you a site. Velo gets you a product.
        </SectionHeading>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className={`${CAP_SPAN[i]}`}>
              <SpotCard className="h-full p-7 sm:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-violet/25 text-[#9db9ff]">
                  <Icon name={CAP_ICONS[i]} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">{c.text}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Integrations() {
  return (
    <section id="integrations" className="section anchor overflow-hidden border-y border-white/[0.06] bg-panel/40">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <Reveal><span className="eyebrow mb-5">Integrations</span></Reveal>
          <Reveal delay={0.05}><h2 className="h-section">Connect Wix with the tools you already use.</h2></Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6">
              Stripe, CRMs, payment gateways and custom third-party APIs, wired into your site through secure backend code. Over 50 integrations delivered, including Adyen and GoCardless.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/blog" variant="ghost" icon="arrow">Read the Velo guides</Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-cyan/15 to-violet/20 blur-3xl" aria-hidden="true" />
            <Img src={IMG.integrations} alt="Wix connected to third-party tools" label="API" tone={2} className="aspect-[980/422] w-full rounded-3xl border border-white/10" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function FeaturedWork() {
  const items = FEATURED_PROJECTS.map((t) => PROJECTS.find((p) => p.title === t))
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Selected work" title="What did we build?">
            We don&rsquo;t just build websites. We build solutions that work.
          </SectionHeading>
          <Reveal><Button to="/portfolio" variant="ghost" icon="arrow">All projects</Button></Reveal>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.08}>
              <ProjectCard p={p} index={i} large />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section className="section border-t border-white/[0.06] bg-panel/40">
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-40 lg:self-start">
          <SectionHeading eyebrow="Why Wix Crafters" title="Why clients trust Wix Crafters" />
          <Reveal delay={0.15}>
            <div className="mt-10 grid max-w-md grid-cols-2 gap-4">
              <div className="card p-6"><div className="font-display text-4xl font-bold">5.0</div><div className="mt-1 text-xs text-mute">Fiverr rating</div></div>
              <div className="card p-6"><div className="font-display text-4xl font-bold">100%</div><div className="mt-1 text-xs text-mute">Client satisfaction</div></div>
            </div>
          </Reveal>
        </div>
        <ol className="space-y-4">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05} as="li">
              <SpotCard className="flex gap-5 p-6 sm:p-7">
                <span className="font-mono text-sm text-cyan">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight">{w.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-mute">{w.text}</p>
                </div>
              </SpotCard>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Process" title="Simple. Transparent. Effective." />
        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <SpotCard className="h-full p-8">
                <div className="font-display text-6xl font-bold tracking-tighter text-white/10">{p.step}</div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mute">{p.text}</p>
              </SpotCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="pricing" className="section anchor border-y border-white/[0.06] bg-panel/40">
      <div className="container-x">
        <SectionHeading eyebrow="Pricing" title="No hidden charges. No surprises." align="center">
          Pick a starting point. Every project is scoped to what you actually need.
        </SectionHeading>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <div className={`relative flex h-full flex-col rounded-3xl border p-8 ${p.featured ? 'border-accent/60 bg-gradient-to-b from-accent/[0.12] to-panel shadow-glow' : 'border-white/[0.08] bg-panel/80'}`}>
                {p.featured && <span className="absolute -top-3 left-8 rounded-full bg-[#2563eb] px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white">Recommended</span>}
                <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-sm text-mute">{p.note}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-bold tracking-tight">{p.price}</span>
                  {p.price !== 'Custom' && <span className="text-sm text-mute">starting at</span>}
                </div>
                <ul className="mt-8 flex-1 space-y-3.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-fg/90">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-cyan" strokeWidth={2.4} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button to="/contact-us" variant={p.featured ? 'primary' : 'ghost'} icon="arrow" className="mt-9 w-full">
                  {p.price === 'Custom' ? 'Talk to us' : 'Get Started'}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Testimonials" title="What our clients say" />
          <Reveal><Button to="/testimonials" variant="ghost" icon="arrow">Read all reviews</Button></Reveal>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.slice(4).map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full"><TestimonialCard t={t} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="section border-t border-white/[0.06] pt-20">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading eyebrow="FAQ" title="Questions, answered." />
        <Reveal><Faq items={FAQS} /></Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <Page>
      <Hero />
      <div className="border-y border-white/[0.06] bg-panel/50 py-6"><Marquee items={TECH_MARQUEE} /></div>
      <About />
      <Services />
      <Capabilities />
      <Integrations />
      <FeaturedWork />
      <WhyUs />
      <Process />
      <Pricing />
      <Testimonials />
      <FaqSection />
      <CtaBand />
    </Page>
  )
}
