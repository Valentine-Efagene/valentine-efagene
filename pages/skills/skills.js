import React, { Suspense } from 'react'
import Samsung from '../../components/Samsung/Samsung'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './mobile.module.css'
import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/NavMenu/NavMenu'

export default function Mobile() {
  return (
    <div className={styles.main}>
      <NavMenu />
      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Samsung scale={0.1} />
          </Suspense>
        </Canvas>
      </div>
      <div className={styles.content}>
        Eu elit nostrud anim laboris sint occaecat nostrud pariatur esse
        exercitation aute et tempor. Commodo consectetur aute ea commodo
        excepteur. Ad duis ut nisi quis commodo incididunt sunt nisi. Cupidatat
        aliquip laboris officia qui mollit enim voluptate sint. Esse culpa
        laborum exercitation occaecat veniam veniam. Non ad irure est
        consectetur deserunt voluptate fugiat minim reprehenderit irure nulla
        laboris do occaecat. Mollit esse nostrud labore sint proident irure
        eiusmod aliquip laborum et consectetur veniam excepteur adipisicing.
        Sint culpa sint mollit id. Cillum anim laborum sint cillum consectetur
        veniam. Veniam consectetur duis commodo ipsum duis mollit. Lorem fugiat
        sint fugiat aute nulla nulla quis irure. Dolore incididunt ea cupidatat
        laboris commodo eiusmod irure nulla veniam consequat occaecat enim
        commodo. Consectetur ullamco exercitation nostrud pariatur consequat est
        dolore officia minim dolor occaecat ut nisi. Est tempor ut amet tempor
        sint culpa qui enim fugiat eu ut magna consequat.
      </div>
      <Footer />
    </div>
  )
}
