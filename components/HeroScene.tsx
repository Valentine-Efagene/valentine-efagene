import { Float } from '@react-three/drei'
import WhiteLaptop from '@/components/WhiteLaptop/WhiteLaptop'
import GlowingHeadphones from '@/components/GlowingHeadphones/GlowingHeadphones'
import SceneCanvas from '@/components/Scene'

export default function HeroScene() {
  return (
    <SceneCanvas className="h-full w-full">
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.45}>
        <WhiteLaptop
          scale={0.055}
          rotation={[0.28, -1.15, 0.05]}
          position={[-0.35, -0.15, 0]}
        />
      </Float>
      <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.7}>
        <GlowingHeadphones
          scale={0.55}
          rotation={[0.15, 0.9, 0.1]}
          position={[1.55, 0.55, 0.35]}
        />
      </Float>
    </SceneCanvas>
  )
}
