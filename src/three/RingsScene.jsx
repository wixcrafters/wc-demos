import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Dust({ count = 220 }) {
  const arr = useMemo(() => {
    const a = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.2 + Math.random() * 3.2
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(2 * Math.random() - 1)
      a[i * 3] = r * Math.sin(ph) * Math.cos(th)
      a[i * 3 + 1] = r * Math.cos(ph) * 0.6
      a[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th)
    }
    return a
  }, [count])
  const ref = useRef()
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.03 })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={arr} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#8fb3ff" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Rings({ still }) {
  const g = useRef()
  const rings = useRef([])
  const { pointer, viewport } = useThree()
  useFrame((_, dt) => {
    if (still) return
    rings.current.forEach((m, i) => { if (m) { m.rotation.x += dt * (0.12 + i * 0.05); m.rotation.y += dt * (0.08 + i * 0.03) } })
    if (g.current) {
      g.current.rotation.y += (pointer.x * 0.5 - g.current.rotation.y) * Math.min(1, dt * 1.5)
      g.current.rotation.x += (-pointer.y * 0.3 - g.current.rotation.x) * Math.min(1, dt * 1.5)
    }
  })
  const scale = THREE.MathUtils.clamp(viewport.width / 9, 0.5, 1.05)
  const x = viewport.width > 8 ? viewport.width * 0.27 : 0
  const colors = ['#3d7bff', '#7c5cff', '#22d3ee', '#8fb3ff', '#3d7bff']
  return (
    <group position={[x, 0, 0]}>
      <group ref={g} scale={scale}>
      {colors.map((c, i) => (
        <mesh key={i} ref={(el) => (rings.current[i] = el)} rotation={[i * 0.6, i * 0.9, 0]}>
          <torusGeometry args={[1.0 + i * 0.42, 0.011, 8, 140]} />
          <meshBasicMaterial color={c} transparent opacity={0.75 - i * 0.08} />
        </mesh>
      ))}
      <mesh>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.75} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.22, 24, 24]} />
        <meshBasicMaterial color="#8fb3ff" />
      </mesh>
      <Dust />
      </group>
    </group>
  )
}

export default function RingsScene({ active = true, still = false }) {
  return (
    <Canvas
      frameloop={active ? (still ? 'demand' : 'always') : 'never'}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
    >
      <Rings still={still} />
    </Canvas>
  )
}
