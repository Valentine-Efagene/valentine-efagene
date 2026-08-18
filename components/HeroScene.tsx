import { Suspense, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Bounds,
  Center,
  ContactShadows,
  OrbitControls,
  useGLTF,
} from '@react-three/drei'

function Headphones() {
  const { scene } = useGLTF('/GlowingHeadphones.gltf')
  const model = useMemo(() => scene.clone(true), [scene])
  return <primitive object={model} />
}

useGLTF.preload('/GlowingHeadphones.gltf')

export default function HeroScene() {
  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [2.2, 1.4, 4.8], fov: 32 }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 3]} intensity={1.25} />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} />
      <Suspense fallback={null}>
        <Bounds fit clip={false} observe margin={1.25}>
          <Center>
            <Headphones />
          </Center>
        </Bounds>
        <ContactShadows
          position={[0, -1.15, 0]}
          opacity={0.4}
          scale={10}
          blur={2.4}
          far={4}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.7}
      />
    </Canvas>
  )
}
