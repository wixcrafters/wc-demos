import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Page, PageHero, Reveal, SectionHeading, SpotCard, Button } from '../components/ui.jsx'
import { Icon } from '../components/Icons.jsx'
import { CtaBand, TestimonialCard } from '../components/shared.jsx'
import { TESTIMONIALS } from '../data/content.js'

const STEPS = [
  { icon: 'database', title: 'Data lives in the Wix Database', text: 'Every record sits in a Wix Data collection with the fields your filters need.' },
  { icon: 'code', title: 'Filters connect via Velo code', text: 'Checkboxes, sliders, dropdowns and time ranges are wired to a single query builder.' },
  { icon: 'bolt', title: 'Input triggers a dynamic query', text: 'Each change builds a fresh wixData query from the active filters.' },
  { icon: 'layers', title: 'The repeater updates instantly', text: 'Results are bound to the repeater and render without a page reload.' },
]

const DEPTS = ['Engineering', 'Design', 'Support', 'Operations']
const TYPES = ['Full-time', 'Contract', 'Part-time']
const RANGES = [
  { v: 0, label: 'Any time' },
  { v: 1, label: 'Last 24 hours' },
  { v: 7, label: 'Last 7 days' },
  { v: 30, label: 'Last 30 days' },
]

// Sample data for the demo only
const JOBS = [
  { id: 1, title: 'Senior Velo Developer', dept: 'Engineering', type: 'Full-time', salary: 120, days: 1 },
  { id: 2, title: 'Product Designer', dept: 'Design', type: 'Full-time', salary: 95, days: 3 },
  { id: 3, title: 'API Integration Engineer', dept: 'Engineering', type: 'Contract', salary: 110, days: 6 },
  { id: 4, title: 'Customer Support Lead', dept: 'Support', type: 'Full-time', salary: 62, days: 9 },
  { id: 5, title: 'Operations Coordinator', dept: 'Operations', type: 'Part-time', salary: 38, days: 12 },
  { id: 6, title: 'UI Motion Designer', dept: 'Design', type: 'Contract', salary: 85, days: 2 },
  { id: 7, title: 'QA Automation Engineer', dept: 'Engineering', type: 'Full-time', salary: 98, days: 18 },
  { id: 8, title: 'Support Specialist', dept: 'Support', type: 'Part-time', salary: 34, days: 5 },
  { id: 9, title: 'Brand Designer', dept: 'Design', type: 'Full-time', salary: 78, days: 25 },
  { id: 10, title: 'Delivery Manager', dept: 'Operations', type: 'Full-time', salary: 92, days: 7 },
  { id: 11, title: 'Backend Engineer', dept: 'Engineering', type: 'Full-time', salary: 135, days: 14 },
  { id: 12, title: 'Onboarding Specialist', dept: 'Support', type: 'Contract', salary: 55, days: 28 },
]

const CODE = `import wixData from 'wix-data';

async function applyFilters() {
  let query = wixData.query('Jobs');

  const departments = $w('#departments').value;   // CheckboxGroup -> string[]
  if (departments.length) query = query.hasSome('department', departments);

  const type = $w('#jobType').value;              // Dropdown
  if (type) query = query.eq('type', type);

  query = query.ge('salary', $w('#minSalary').value); // Slider

  const days = Number($w('#postedWithin').value); // Dropdown: 0 | 1 | 7 | 30
  if (days) query = query.ge('_createdDate', new Date(Date.now() - days * 864e5));

  const { items } = await query.descending('_createdDate').find();
  $w('#jobsRepeater').data = items;
}

$w.onReady(() => {
  ['#departments', '#jobType', '#minSalary', '#postedWithin']
    .forEach((id) => $w(id).onChange(applyFilters));
  applyFilters();
});`

function Demo() {
  const [depts, setDepts] = useState([])
  const [type, setType] = useState('')
  const [min, setMin] = useState(0)
  const [range, setRange] = useState(0)

  const items = useMemo(
    () =>
      JOBS.filter(
        (j) =>
          (!depts.length || depts.includes(j.dept)) &&
          (!type || j.type === type) &&
          j.salary >= min &&
          (!range || j.days <= range)
      ).sort((a, b) => a.days - b.days),
    [depts, type, min, range]
  )

  const toggle = (d) => setDepts((o) => (o.includes(d) ? o.filter((x) => x !== d) : [...o, d]))
  const reset = () => { setDepts([]); setType(''); setMin(0); setRange(0) }
  const dirty = depts.length || type || min || range

  return (
    <div id="demo" className="anchor grid gap-6 lg:grid-cols-[320px_1fr]">
      <form className="card h-fit space-y-7 p-6" onSubmit={(e) => e.preventDefault()} aria-label="Job filters">
        <fieldset>
          <legend className="label">Department</legend>
          <div className="space-y-1">
            {DEPTS.map((d) => (
              <label key={d} className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 text-sm transition hover:bg-white/[0.05] active:bg-white/10">
                <input type="checkbox" checked={depts.includes(d)} onChange={() => toggle(d)} className="h-4 w-4 rounded" />
                {d}
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label htmlFor="f-type" className="label">Job type</label>
          <select id="f-type" value={type} onChange={(e) => setType(e.target.value)} className="field">
            <option value="">Any type</option>
            {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="f-salary" className="label flex justify-between"><span>Minimum salary</span><span className="normal-case text-fg">${min}k</span></label>
          <input id="f-salary" type="range" min="0" max="140" step="5" value={min} onChange={(e) => setMin(Number(e.target.value))} className="w-full" />
        </div>

        <div>
          <label htmlFor="f-range" className="label">Posted</label>
          <select id="f-range" value={range} onChange={(e) => setRange(Number(e.target.value))} className="field">
            {RANGES.map((r) => <option key={r.v} value={r.v}>{r.label}</option>)}
          </select>
        </div>

        <button type="button" onClick={reset} disabled={!dirty} className="w-full rounded-full border border-white/15 py-3 text-sm font-medium transition hover:border-white/35 hover:bg-white/[0.05] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40">
          Reset filters
        </button>
      </form>

      <div>
        <div className="mb-4 flex items-center justify-between text-sm text-mute" aria-live="polite">
          <span><span className="font-semibold text-fg">{items.length}</span> of {JOBS.length} results</span>
          <span className="font-mono text-[11px] uppercase tracking-wider">Sample data</span>
        </div>
        <motion.ul layout className="grid gap-3 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {items.map((j) => (
              <motion.li
                key={j.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <SpotCard className="h-full p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold leading-tight tracking-tight">{j.title}</h3>
                    <span className="shrink-0 rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[11px] text-[#9db9ff]">${j.salary}k</span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-mute">
                    <span>{j.dept}</span><span>{j.type}</span>
                    <span>{j.days === 1 ? 'Today' : `${j.days} days ago`}</span>
                  </div>
                </SpotCard>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        {items.length === 0 && (
          <div className="rounded-3xl border border-dashed border-white/15 p-12 text-center text-mute">
            No roles match these filters. <button onClick={reset} className="text-accent underline underline-offset-4 hover:text-white">Reset filters</button>
          </div>
        )}
      </div>
    </div>
  )
}

function CodeBlock() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(CODE); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* clipboard unavailable */ }
  }
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#070b14]">
      <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-3">
        <div className="flex items-center gap-2" aria-hidden="true"><i className="h-3 w-3 rounded-full bg-white/15" /><i className="h-3 w-3 rounded-full bg-white/15" /><i className="h-3 w-3 rounded-full bg-white/15" /></div>
        <span className="font-mono text-xs text-mute">Jobs page code</span>
        <button onClick={copy} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-mute transition hover:border-white/30 hover:text-white active:scale-95">{copied ? 'Copied' : 'Copy'}</button>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-relaxed text-[#b8c7ee] sm:p-7 sm:text-[13px]"><code>{CODE}</code></pre>
    </div>
  )
}

export default function FiltersOnRepeater() {
  return (
    <Page>
      <PageHero
        eyebrow="Velo code example"
        title={<>Advanced filters on <span className="gradient-text">repeaters.</span></>}
        actions={<>
          <Button href="#demo" icon="arrow" onClick={(e) => { e.preventDefault(); document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' }) }}>View Live Demo</Button>
          <Button to="/contact-us" variant="ghost">Hire Wix Expert</Button>
        </>}
      >
        Built with Wix Velo code for fast, dynamic user experiences. Filters with checkboxes, sliders, dropdowns and time ranges, powered by your Wix database.
      </PageHero>

      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="How these filters work" />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07} as="li">
                <SpotCard className="h-full p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-accent/25 to-violet/25 text-[#9db9ff]"><Icon name={s.icon} className="h-6 w-6" /></span>
                    <span className="font-mono text-sm text-white/25">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold leading-snug tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{s.text}</p>
                </SpotCard>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-y border-white/[0.06] bg-panel/40">
        <div className="container-x">
          <SectionHeading eyebrow="Live demo" title="Try the filters." />
          <div className="mt-12"><Demo /></div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="The code" title="One query builder, four inputs.">
            Every control feeds the same function. Add a filter by adding one line.
          </SectionHeading>
          <Reveal className="min-w-0"><CodeBlock /></Reveal>
        </div>
      </section>

      <section className="section border-t border-white/[0.06] bg-panel/40 pt-20">
        <div className="container-x">
          <SectionHeading eyebrow="Kind words" title="What our clients say" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {TESTIMONIALS.slice(0, 4).map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06} className="h-full"><TestimonialCard t={t} className="!p-6" /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </Page>
  )
}
