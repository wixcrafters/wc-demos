import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const HeroScene = lazy(() => import('../three/HeroScene.jsx'))
const RingsScene = lazy(() => import('../three/RingsScene.jsx'))

function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

/** Mounts a lazy 3D scene after idle, pauses rendering while off-screen, respects reduced motion. */
export default function Scene3D({ variant = 'hero', className = '' }) {
  const wrap = useRef(null)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(true)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!hasWebGL()) return
    const go = () => setReady(true)
    const id = 'requestIdleCallback' in window ? window.requestIdleCallback(go, { timeout: 1800 }) : setTimeout(go, 700)
    return () => ('cancelIdleCallback' in window ? window.cancelIdleCallback(id) : clearTimeout(id))
  }, [])

  useEffect(() => {
    const el = wrap.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const Scene = variant === 'rings' ? RingsScene : HeroScene
  return (
    <div ref={wrap} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden="true">
      {ready && (
        <Suspense fallback={null}>
          <Scene active={visible} still={!!reduce} />
        </Suspense>
      )}
    </div>
  )
}
