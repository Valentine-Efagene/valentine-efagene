import React, { Suspense } from 'react'
import Graduation from '../../components/Graduation/Graduation'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './education.module.css'
import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/NavMenu/NavMenu'
import WeldingArm from '../../components/WeldingArm/WeldingArm'
import Box from '../../components/Box/Box'
import ArduinoUno from '../../components/ArduinoUno/ArduinoUno'
import RoboticArmDuckish from '../../components/RoboticArmDuckish/RoboticArmDuckish'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

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
      <div className={styles.content}>
        <div className={styles.card}>
          <h2>Notable Areas Studied</h2>
        </div>
        <div className={styles.card}>
          <div className={styles.flex}>
            <div className={styles.roboticsCanvasContainer}>
              <Canvas className={styles.canvas}>
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.5} />
                <axisHelper />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                  <RoboticArmDuckish
                    //position={[]}
                    scale={0.03}
                    onClick={(event) => {
                      console.log(event)
                    }}
                  />
                </Suspense>
              </Canvas>
            </div>

            <div className={styles.cardNote}>
              <span>Robotics and control systems engineering</span>
              <br />
              <p>
                Veniam nostrud est et reprehenderit esse proident veniam
                cupidatat ea sint deserunt elit consequat aliquip. Velit sint
                enim do culpa deserunt consequat incididunt cillum in qui et
                ullamco velit. Nulla id anim culpa est laborum et sint sit enim
                aliquip proident sunt cupidatat sint.
              </p>
            </div>
          </div>
          <KeyboardArrowDownIcon className={styles.down} />
        </div>
        <div className={styles.card}>
          <div className={styles.flex}>
            <div className={styles.roboticsCanvasContainer}>
              <Canvas className={styles.canvas}>
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.5} />
                <axisHelper />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <Suspense fallback={null}>
                  <RoboticArmDuckish
                    //position={[]}
                    scale={0.03}
                    onClick={(event) => {
                      console.log(event)
                    }}
                  />
                </Suspense>
              </Canvas>
            </div>

            <div className={styles.cardNote}>
              <span>Robotics and control systems engineering</span>
              <br />
              <p>
                Veniam nostrud est et reprehenderit esse proident veniam
                cupidatat ea sint deserunt elit consequat aliquip. Velit sint
                enim do culpa deserunt consequat incididunt cillum in qui et
                ullamco velit. Nulla id anim culpa est laborum et sint sit enim
                aliquip proident sunt cupidatat sint.
              </p>
            </div>
          </div>
          <KeyboardArrowDownIcon className={styles.down} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
