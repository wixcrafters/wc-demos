import { useLocation } from 'react-router-dom'
import { Page, PageHero, Reveal, SpotCard } from '../components/ui.jsx'
import { Icon, InstagramIcon } from '../components/Icons.jsx'
import RequirementForm from '../components/RequirementForm.jsx'
import QrTool from '../components/QrTool.jsx'
import { SITE } from '../data/content.js'

export default function Contact() {
  const { state } = useLocation()
  return (
    <Page>
      <PageHero eyebrow="Contact us" title={<>Get in <span className="gradient-text">touch.</span></>}>
        Tell us about your project. The more details you share, the better we can help.
      </PageHero>

      <section className="section pt-12 sm:pt-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <Reveal>
            <div className="card p-6 sm:p-10">
              <RequirementForm idPrefix="contact" initialEmail={state?.email || ''} submitLabel="Send My Requirement" subject="Project enquiry" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <aside className="space-y-5">
              <SpotCard as="a" href={`mailto:${SITE.email}`} className="group flex items-center gap-5 p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent"><Icon name="mail" /></span>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-mute">Email</div>
                  <div className="truncate font-semibold group-hover:text-accent">{SITE.email}</div>
                </div>
              </SpotCard>
              <SpotCard as="a" href={SITE.instagram} target="_blank" rel="noreferrer" className="group flex items-center gap-5 p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/15 text-[#a99aff]"><InstagramIcon /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-mute">Connect with us</div>
                  <div className="font-semibold group-hover:text-accent">@wixcrafters</div>
                  <div className="mt-0.5 text-xs text-mute">Updates, tips and real projects.</div>
                </div>
              </SpotCard>
              <div className="rounded-3xl border border-white/[0.08] p-6">
                <div className="flex items-center gap-3 text-sm text-fg/90"><Icon name="clock" className="h-5 w-5 text-cyan" /> We usually respond within 24 hours.</div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section border-t border-white/[0.06] bg-panel/40">
        <div className="container-x">
          <Reveal><span className="eyebrow mb-5">Live examples</span></Reveal>
          <Reveal delay={0.05}><h2 className="h-section max-w-2xl">Real tools built with Wix Velo.</h2></Reveal>
          <div className="mt-12"><QrTool /></div>
        </div>
      </section>
    </Page>
  )
}
