import React from 'react'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'

export default function AnimatedSphere(props) {
  return (
    <Sphere visible args={[1, 100, 200]} {...props}>
      <MeshDistortMaterial
        color="#8352fd"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.4}
      />
    </Sphere>
  )
}
