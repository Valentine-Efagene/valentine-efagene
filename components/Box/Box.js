import React from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three'

export default function Box(props) {
  const colorMap = useLoader(
    TextureLoader,
    '/TexturesCom_Electronics0035_S.jpg'
  )

  return (
    <mesh rotation={[90, 0, 20]} {...props}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      {/* <sphereGeometry args={[1, 32, 32]} /> */}
      {/* <meshLambertMaterial attach="material" color="#ffaaff" /> */}
      {/* <meshStandardMaterial map={colorMap} /> */}
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}
