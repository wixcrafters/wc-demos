import { useState } from 'react'
import { Button } from './ui.jsx'
import { Icon } from './Icons.jsx'
import { SITE } from '../data/content.js'
import { isEmail, openMailto } from '../lib/mailto.js'

/** Client-side validated form. There is no backend in a design preview, so a valid submit opens the visitor's mail app. */
export default function RequirementForm({ idPrefix = 'f', submitLabel = 'Send My Requirement', initialEmail = '', subject = 'New project enquiry' }) {
  const [v, setV] = useState({ first: '', last: '', email: initialEmail, short: '', long: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => {
    setV((o) => ({ ...o, [k]: e.target.value }))
    if (errors[k]) setErrors((o) => ({ ...o, [k]: undefined }))
  }

  const validate = () => {
    const e = {}
    if (!v.first.trim()) e.first = 'Please enter your first name.'
    if (!v.email.trim()) e.email = 'Please enter your email.'
    else if (!isEmail(v.email)) e.email = 'That email address does not look right.'
    if (v.short.trim().length < 3) e.short = 'A few words on what you need is enough.'
    if (v.long.length > 2000) e.long = 'Please keep this under 2,000 characters.'
    return e
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0]
      document.getElementById(`${idPrefix}-${first}`)?.focus()
      return
    }
    openMailto({
      subject: `${subject}: ${v.short.trim()}`,
      lines: [`Name: ${v.first.trim()} ${v.last.trim()}`.trim(), `Email: ${v.email.trim()}`, '', v.long.trim()],
    })
    setSent(true)
  }

  if (sent) {
    return (
      <div role="status" className="rounded-3xl border border-cyan/30 bg-cyan/[0.06] p-8">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-cyan/20 text-cyan"><Icon name="check" strokeWidth={2.4} /></span>
        <h3 className="mt-5 font-display text-2xl font-semibold">Your email is ready to send.</h3>
        <p className="mt-2 text-mute">
          Your mail app should have opened with your message. If it didn&rsquo;t, write to us at{' '}
          <a className="text-accent underline underline-offset-4 hover:text-white" href={`mailto:${SITE.email}`}>{SITE.email}</a>. We usually respond within 24 hours.
        </p>
        <Button variant="ghost" className="mt-6" onClick={() => setSent(false)}>Edit message</Button>
      </div>
    )
  }

  const field = (k, label, props = {}, required = false) => (
    <div className={props.wrap}>
      <label htmlFor={`${idPrefix}-${k}`} className="label">{label}{required && <span className="text-accent"> *</span>}</label>
      {props.area ? (
        <textarea id={`${idPrefix}-${k}`} rows={5} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${idPrefix}-${k}-e` : undefined} className="field resize-y" placeholder={props.placeholder} />
      ) : (
        <input id={`${idPrefix}-${k}`} type={props.type || 'text'} autoComplete={props.autoComplete} value={v[k]} onChange={set(k)} aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${idPrefix}-${k}-e` : undefined} className="field" placeholder={props.placeholder} />
      )}
      {errors[k] && <p id={`${idPrefix}-${k}-e`} className="err">{errors[k]}</p>}
    </div>
  )

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {field('first', 'First name', { autoComplete: 'given-name' }, true)}
      {field('last', 'Last name', { autoComplete: 'family-name' })}
      {field('email', 'Email', { type: 'email', autoComplete: 'email', wrap: 'sm:col-span-2', placeholder: 'you@company.com' }, true)}
      {field('short', 'What do you need built?', { wrap: 'sm:col-span-2', placeholder: 'e.g. Stripe subscriptions with a member portal' }, true)}
      {field('long', 'Tell us about your project', { area: true, wrap: 'sm:col-span-2', placeholder: 'Goals, integrations, timeline. The more detail you share, the better we can help.' })}
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" icon="arrow">{submitLabel}</Button>
        <p className="flex items-center gap-2 text-xs text-mute"><Icon name="clock" className="h-4 w-4" /> We usually respond within 24 hours.</p>
      </div>
    </form>
  )
}
