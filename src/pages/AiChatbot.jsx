import { Page, PageHero, Reveal, SpotCard, SectionHeading, Img, Button } from '../components/ui.jsx'
import { Icon, InstagramIcon } from '../components/Icons.jsx'
import RequirementForm from '../components/RequirementForm.jsx'
import QrTool from '../components/QrTool.jsx'
import { PROCESS, SITE } from '../data/content.js'
import { IMG } from '../data/images.js'
import { motion } from 'framer-motion'

const CAPS = [
  { icon: 'chat', title: 'Automate support', text: 'Answer the questions your team repeats every day, around the clock.' },
  { icon: 'users', title: 'Capture leads', text: 'Collect names, emails and project details inside the conversation.' },
  { icon: 'plug', title: 'Integrate with your systems', text: 'Connect to bookings, CRMs and databases through Velo backend code.' },
  { icon: 'shield', title: 'Keys stay server-side', text: 'Every model call runs through backend web methods, never the browser.' },
]

const CHAT = [
  { from: 'user', text: 'Can I book a table for four on Friday?' },
  { from: 'bot', text: 'Yes. Friday has 7:30 pm and 9:00 pm free for four. Which works better?' },
  { from: 'user', text: '7:30 please.' },
  { from: 'bot', text: 'Booked. A confirmation is on its way to your email.' },
]

function ChatDemo() {
  return (
    <div className="card mx-auto w-full max-w-md p-5 sm:p-6" role="img" aria-label="Illustrative chatbot conversation about booking a table">
      <div className="flex items-center gap-3 border-b border-white/[0.07] pb-4">
        <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent to-violet"><Icon name="chat" className="h-5 w-5 text-white" /></span>
        <div>
          <div className="text-sm font-semibold">Site assistant</div>
          <div className="flex items-center gap-1.5 text-xs text-mute"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online</div>
        </div>
        <span className="ml-auto rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-mute">Illustration</span>
      </div>
      <div className="space-y-3 py-5">
        {CHAT.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 * i, duration: 0.4 }}
            className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <p className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.from === 'user' ? 'rounded-br-md bg-[#2563eb] text-white' : 'rounded-bl-md bg-white/[0.07] text-fg/90'}`}>{m.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-mute">
        <span className="flex-1">Type a message</span><Icon name="arrow" className="h-4 w-4 text-accent" />
      </div>
    </div>
  )
}

export default function AiChatbot() {
  return (
    <Page>
      <PageHero
        eyebrow="AI Chatbot"
        title={<>Let&rsquo;s build something <span className="gradient-text">powerful.</span></>}
        actions={<><Button href="#start" onClick={(e) => { e.preventDefault(); document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' }) }} icon="arrow">Start Your Project</Button><Button href="#qr-tool" variant="ghost" onClick={(e) => { e.preventDefault(); document.getElementById('qr-tool')?.scrollIntoView({ behavior: 'smooth' }) }}>Try it live</Button></>}
      >
        Describe a custom requirement or a complex idea and we will turn it into a working Wix solution: custom Wix development, Velo coding, API integrations and AI chatbots.
      </PageHero>

      <section className="section">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="AI chatbots for Wix" title="Chat that works for your business.">
              Custom, AI-powered chatbots built into your Wix site that automate support, answer questions, capture leads and integrate with your business systems.
            </SectionHeading>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {CAPS.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <SpotCard className="h-full p-6">
                    <Icon name={c.icon} className="h-6 w-6 text-cyan" />
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-tight">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{c.text}</p>
                  </SpotCard>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}><ChatDemo /></Reveal>
        </div>
      </section>

      <section className="section border-y border-white/[0.06] bg-panel/40">
        <div className="container-x">
          <SectionHeading eyebrow="Live examples" title="Real tools built with Wix Velo." />
          <div className="mt-12"><QrTool /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Img src={IMG.codePanel} alt="Velo code panel" label="Velo" tone={1} className="mx-auto aspect-[6/5] w-full max-w-xl rounded-3xl border border-white/10" imgClass="!object-contain" />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Why Wix Crafters?" title="Specialists in advanced Wix development.">
              From simple business sites to complex web apps, we write the Velo, wire the APIs and stay with you after launch.
            </SectionHeading>
          </div>
        </div>
      </section>

      <section className="section border-t border-white/[0.06] bg-panel/40 pt-20">
        <div className="container-x">
          <SectionHeading eyebrow="Process" title="Simple. Transparent. Effective." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
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

      <section id="start" className="section anchor">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Start a conversation" title="Tell us what you want to build.">
              Share your project details and we will come back with a plan. Responses usually arrive within 24 hours.
            </SectionHeading>
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-3 text-sm">
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-fg/90 transition hover:text-accent"><Icon name="mail" className="h-5 w-5 text-cyan" /> {SITE.email}</a>
                <a href={SITE.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-fg/90 transition hover:text-accent"><InstagramIcon className="h-5 w-5 text-cyan" /> @wixcrafters</a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-10">
              <RequirementForm idPrefix="chat" submitLabel="Send My Requirement" subject="AI chatbot enquiry" />
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  )
}
