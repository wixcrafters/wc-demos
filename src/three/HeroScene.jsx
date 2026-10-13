import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function rng(seed) {
  let a = seed
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** A sphere-ish mesh of service nodes joined by their nearest neighbours: an API network. */
function buildNetwork(count = 120, radius = 2.7) {
  const rand = rng(7)
  const golden = Math.PI * (3 - Math.sqrt(5))
  const pts = []
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const th = golden * i
    const k = radius * (0.88 + rand() * 0.3)
    pts.push(new THREE.Vector3(Math.cos(th) * r * k, y * k, Math.sin(th) * r * k))
  }
  const edges = []
  const seen = new Set()
  pts.forEach((p, i) => {
    const near = pts
      .map((q, j) => ({ j, d: p.distanceToSquared(q) }))
      .filter((o) => o.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 3)
    near.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`
      if (!seen.has(key)) { seen.add(key); edges.push([i, j]) }
    })
  })
  const nodes = new Float32Array(pts.length * 3)
  pts.forEach((p, i) => p.toArray(nodes, i * 3))
  const lines = new Float32Array(edges.length * 6)
  edges.forEach(([a, b], i) => { pts[a].toArray(lines, i * 6); pts[b].toArray(lines, i * 6 + 3) })
  return { pts, edges, nodes, lines }
}

const PACKETS = 26

function Network({ still }) {
  const net = useMemo(() => buildNetwork(), [])
  const group = useRef()
  const packets = useRef()
  const state = useMemo(
    () => Array.from({ length: PACKETS }, (_, i) => ({ edge: (i * 17) % net.edges.length, t: (i * 0.137) % 1, v: 0.25 + ((i * 7) % 5) * 0.06 })),
    [net]
  )
  const packetPos = useMemo(() => new Float32Array(PACKETS * 3), [])
  const { pointer, viewport } = useThree()

  useFrame((_, dt) => {
    const g = group.current
    if (!g) return
    const s = still ? 0 : 1
    g.rotation.y += dt * 0.1 * s
    g.rotation.x += (pointer.y * 0.28 - g.rotation.x) * Math.min(1, dt * 2)
    g.rotation.z += (-pointer.x * 0.12 - g.rotation.z) * Math.min(1, dt * 2)

    if (!still && packets.current) {
      state.forEach((p, i) => {
        p.t += dt * p.v
        if (p.t >= 1) { p.t = 0; p.edge = Math.floor(Math.random() * net.edges.length) }
        const [a, b] = net.edges[p.edge]
        packetPos[i * 3] = net.pts[a].x + (net.pts[b].x - net.pts[a].x) * p.t
        packetPos[i * 3 + 1] = net.pts[a].y + (net.pts[b].y - net.pts[a].y) * p.t
        packetPos[i * 3 + 2] = net.pts[a].z + (net.pts[b].z - net.pts[a].z) * p.t
      })
      packets.current.attributes.position.needsUpdate = true
    }
  })

  const scale = THREE.MathUtils.clamp(viewport.width / 8.6, 0.5, 1.12)
  const x = viewport.width > 8 ? viewport.width * 0.24 : 0

  return (
    <group position={[x, 0, 0]} scale={scale}>
      <group ref={group}>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={net.nodes.length / 3} array={net.nodes} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial size={0.07} color="#8fb3ff" transparent opacity={0.95} sizeAttenuation depthWrite={false} />
        </points>
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={net.lines.length / 3} array={net.lines} itemSize={3} />
          </bufferGeometry>
          <lineBasicMaterial color="#3d7bff" transparent opacity={0.28} depthWrite={false} />
        </lineSegments>
        <points>
          <bufferGeometry ref={packets}>
            <bufferAttribute attach="attributes-position" count={PACKETS} array={packetPos} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial size={0.16} color="#22d3ee" transparent opacity={1} sizeAttenuation depthWrite={false} />
        </points>

        {/* core */}
        <mesh>
          <icosahedronGeometry args={[1.15, 2]} />
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.38} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.72, 0]} />
          <meshBasicMaterial color="#3d7bff" transparent opacity={0.22} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.72, 0]} />
          <meshBasicMaterial color="#8fb3ff" wireframe transparent opacity={0.7} />
        </mesh>

        {/* orbit rings */}
        <Ring radius={3.35} tilt={[1.2, 0.2, 0]} color="#7c5cff" speed={0.12} still={still} />
        <Ring radius={3.7} tilt={[0.4, 0.9, 0.3]} color="#3d7bff" speed={-0.09} still={still} />
      </group>
    </group>
  )
}

function Ring({ radius, tilt, color, speed, still }) {
  const ref = useRef()
  useFrame((_, dt) => { if (ref.current && !still) ref.current.rotation.z += dt * speed })
  return (
    <group rotation={tilt}>
      <mesh ref={ref}>
        <torusGeometry args={[radius, 0.012, 8, 160]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

export default function HeroScene({ active = true, still = false }) {
  return (
    <Canvas
      frameloop={active ? (still ? 'demand' : 'always') : 'never'}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      eventSource={document.getElementById('root')}
      eventPrefix="client"
      style={{ position: 'absolute', inset: 0 }}
      aria-hidden="true"
    >
      <Network still={still} />
    </Canvas>
  )
}
