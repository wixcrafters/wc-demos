import { Page, PageHero, Reveal, Img } from '../components/ui.jsx'
import { StarIcon } from '../components/Icons.jsx'
import { CtaBand, TestimonialCard } from '../components/shared.jsx'
import { STATS, TESTIMONIALS } from '../data/content.js'
import { IMG } from '../data/images.js'

export default function Testimonials() {
  return (
    <Page>
      <PageHero eyebrow="Testimonials" title={<>What our clients <span className="gradient-text">say.</span></>}>
        Founders, agencies and Fiverr clients on working with Wix Crafters.
      </PageHero>

      <section className="section pt-12 sm:pt-16">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-3xl border border-white/[0.08] bg-panel/70 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
              <div className="flex items-center gap-5">
                <div className="font-display text-6xl font-bold tracking-tighter">5.0</div>
                <div>
                  <div className="flex gap-0.5 text-[#f5b942]" role="img" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="h-5 w-5" />)}</div>
                  <div className="mt-1 text-sm text-mute">Fiverr rating &middot; 100% client satisfaction</div>
                </div>
              </div>
              <dl className="grid grid-cols-3 gap-8 text-left">
                {STATS.slice(0, 3).map((s) => (
                  <div key={s.label} className="flex flex-col-reverse">
                    <dd className="font-display text-3xl font-bold">{s.value}{s.suffix}</dd>
                    <dt className="text-xs text-mute">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.07} className="h-full">
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
              {[IMG.parkeLogo, IMG.lionshareLogo].map((src, i) => (
                <Img key={i} src={src} alt={i === 0 ? 'Parke-N logo' : 'Lion Share Co-work logo'} className="h-12 w-44 !bg-transparent" imgClass="!object-contain" />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CtaBand />
    </Page>
  )
}
