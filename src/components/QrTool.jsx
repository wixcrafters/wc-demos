import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { Button } from './ui.jsx'

/** Working QR generator (runs in the browser) mirroring the live Velo tool on the original site. */
export default function QrTool() {
  const [text, setText] = useState('https://wixcrafters.com')
  const [src, setSrc] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let live = true
    const t = text.trim()
    if (!t) { setSrc(''); setError('Enter some text or a URL to generate a code.'); return }
    setError('')
    QRCode.toDataURL(t, { width: 480, margin: 2, errorCorrectionLevel: 'M', color: { dark: '#05070d', light: '#ffffff' } })
      .then((u) => live && setSrc(u))
      .catch(() => live && setError('That is too long to encode. Try something shorter.'))
    return () => { live = false }
  }, [text])

  return (
    <div id="qr-tool" className="anchor card grid gap-8 p-6 sm:p-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
      <div>
        <div className="flex gap-2">
          {['Velo Tool', 'Velo', 'API'].map((t, i) => (
            <span key={t} className={`rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${i === 0 ? 'bg-accent/20 text-[#9db9ff]' : 'border border-white/15 text-mute'}`}>{t}</span>
          ))}
        </div>
        <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">QR Code Generator</h3>
        <p className="mt-3 max-w-md text-mute">Convert any text or URL into a QR code instantly. Built with Wix Velo and external API integration.</p>
        <label htmlFor="qr-input" className="label mt-8">Text or URL</label>
        <input id="qr-input" value={text} onChange={(e) => setText(e.target.value)} aria-invalid={!!error} aria-describedby={error ? 'qr-err' : undefined} className="field" placeholder="https://" />
        {error && <p id="qr-err" className="err">{error}</p>}
        <p className="mt-3 text-xs text-mute">This preview generates the code in your browser.</p>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="grid aspect-square w-full max-w-[260px] place-items-center rounded-3xl bg-white p-3 shadow-[0_20px_70px_-15px_rgba(61,123,255,0.6)]">
          {src ? <img src={src} alt={`QR code for ${text}`} className="h-full w-full" width="240" height="240" /> : <span className="text-sm text-ink/50">No code yet</span>}
        </div>
        <Button variant="ghost" icon="download" href={src || undefined} download="wixcrafters-qr.png" disabled={!src} aria-disabled={!src} onClick={(e) => { if (!src) e.preventDefault() }}>
          Download PNG
        </Button>
      </div>
    </div>
  )
}
