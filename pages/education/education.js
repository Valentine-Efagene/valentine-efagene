import React, { Suspense } from 'react'
import Graduation from '../../components/Graduation/Graduation'
import Samsung from '../../components/Samsung/Samsung'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './education.module.css'
import Footer from '../../components/footer/footer'
import NavMenu from '../../components/NavMenu/NavMenu'

export default function Education() {
  return (
    <div className={styles.educationMain}>
      <NavMenu />
      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Graduation scale={0.2} />
          </Suspense>
        </Canvas>
      </div>
      <Footer />
    </div>
  )
}
