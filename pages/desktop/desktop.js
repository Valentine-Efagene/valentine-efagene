import React, { Suspense } from 'react'
import Hp from '../../components/Hp/Hp'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './desktop.module.css'
import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/NavMenu/NavMenu'

export default function Desktop() {
  return (
    <div className={styles.desktopMain}>
      <NavMenu />
      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Hp scale={0.25} />
          </Suspense>
        </Canvas>
      </div>
      <Footer />
    </div>
  )
}
