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
        camera={{ position: [0, 0.6, 7], fov: 32 }}
      >
        <ambientLight intensity={0.35} />
        <spotLight
          position={[6, 10, 4]}
          angle={0.4}
          penumbra={1}
          intensity={1.1}
        />
        <directionalLight position={[-4, 6, 2]} intensity={0.45} />
        <Environment preset="city" />
        <Suspense fallback={null}>{children}</Suspense>
        <ContactShadows
          position={[0, -1.35, 0]}
          opacity={0.45}
          scale={12}
          blur={2.4}
          far={4}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.45}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>
    </div>
  )
}
