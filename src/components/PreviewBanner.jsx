import { useEffect, useRef } from 'react'

const CLIENT_NAME = 'Wix Crafters'

export default function PreviewBanner() {
  const ref = useRef(null)

  // Publish the banner height so the fixed navbar and page content can offset themselves
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const set = () =>
      document.documentElement.style.setProperty('--banner-h', `${el.offsetHeight}px`)
    set()
    const ro = new ResizeObserver(set)
    ro.observe(el)
    window.addEventListener('resize', set)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', set)
    }
  }, [])

  return (
    <div
      ref={ref}
      role="note"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#f59e0b',
        color: '#1c1917',
        fontSize: '13px',
        fontWeight: 600,
        textAlign: 'center',
        lineHeight: 1.35,
        padding: '6px 12px',
      }}
    >
      This is a design preview created by Wix Crafters for demonstration purposes only. This is
      not the official website of {CLIENT_NAME}. |{' '}
      <a
        href="https://wixcrafters.com"
        style={{ color: '#1c1917', textDecoration: 'underline' }}
        target="_blank"
        rel="noreferrer"
      >
        wixcrafters.com
      </a>
    </div>
  )
}
