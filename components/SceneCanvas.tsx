import { Suspense, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  ContactShadows,
  Environment,
  OrbitControls,
} from '@react-three/drei'
import { cn } from '@/lib/utils'

type SceneCanvasProps = {
  children: ReactNode
  className?: string
}

export default function SceneCanvas({ children, className }: SceneCanvasProps) {
  return (
    <div className={cn('h-full w-full', className)}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0.45, 6.4], fov: 30 }}
      >
        <ambientLight intensity={0.28} />
        <spotLight
          position={[5, 9, 5]}
          angle={0.35}
          penumbra={1}
          intensity={0.9}
        />
        <directionalLight position={[-3, 4, 2]} intensity={0.35} />
        <Environment preset="studio" />
        <Suspense fallback={null}>{children}</Suspense>
        <ContactShadows
          position={[0, -1.2, 0]}
          opacity={0.32}
          scale={10}
          blur={2.8}
          far={3.5}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.75}
        />
      </Canvas>
    </div>
  )
}
