import React, { Suspense } from 'react'
import Graduation from '../../components/Graduation/Graduation'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './education.module.css'
import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/NavMenu/NavMenu'
import WideNavMenu from '../../components/WideNavMenu/WideNavMenu'
import GlassCard from '../../components/GlassCard/GlassCard'

export default function Education() {
  return (
    <div className={styles.educationMain}>
      <WideNavMenu />
      <NavMenu />

      <div className={styles.content}>
        <div className={styles.canvasContainer}>
          <Canvas className={styles.canvas}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Suspense fallback={null}>
              <Graduation move={false} scale={0.2} />
            </Suspense>
          </Canvas>
        </div>

        <div className={styles.academics}>
          <div className={styles.degree}>
            <span>BENG</span>
            <br />
            <span>COMPUTER ENGINEERING</span>
            <br />
            <span>FEDERAL UNIVERSITY OF BENIN, EDO, NIGERIA</span>
            <br />
          </div>

          <div className={styles.courseCards}>
            <GlassCard>
              <div class={styles.cardContent}>
                <h2>Robotics and Control Systems Engineering</h2>
                <p>
                  Those courses have greatly aided my ability with animations
                  and game physics.
                </p>
                {/* <a href="#">Read More</a> */}
              </div>
            </GlassCard>
            <GlassCard>
              <div class={styles.cardContent}>
                <h2>Computer Graphics</h2>
                <p>
                  Those courses have greatly aided my ability with animations
                  and game physics.
                </p>
                {/* <a href="#">Read More</a> */}
              </div>
            </GlassCard>
            <GlassCard>
              <div class={styles.cardContent}>
                <h2>Engineering Mathematics</h2>
                <p>
                  My training in engineering mathematics has helped me avoid
                  trail and eror, and use more systematic approaches to
                  problems, and also to reduce complex problems to simple
                  equations.
                </p>
                {/* <a href="#">Read More</a> */}
              </div>
            </GlassCard>
            <GlassCard>
              <div class={styles.cardContent}>
                <h2>Machine Learning</h2>
                <p>
                  Those courses have greatly aided my ability with animations
                  and game physics.
                </p>
                {/* <a href="#">Read More</a> */}
              </div>
            </GlassCard>
            <GlassCard
            // style={{ background: 'black' }}
            >
              <div class={styles.cardContent}>
                <h2>Image Processing and Computer Vision</h2>
                <p>
                  This course helped me in my Image Processing and Computer
                  Vision journey. Noteably, my final project was on Image
                  Processing and Robotics, using OpenCV and an arduino car,
                  using an ESP8266 module.
                </p>
                {/* <a href="#">Read More</a> */}
              </div>
            </GlassCard>
            <GlassCard className={styles.glassCard}>
              <div class={styles.cardContent}>
                <h2>Computer Architecture</h2>
                <p>
                  These courses gate me intimate insight into computers, digital
                  electronics and microcontrollers, which has helped me a whole
                  lot in my journey as a maker.
                </p>
                {/* <a href="#">Read More</a> */}
              </div>
            </GlassCard>
            <GlassCard>
              <div class={styles.cardContent}>
                <h2>Logic</h2>
                <p>
                  Considering that logic control statements are all over all
                  programming languages, the importance of this does not need
                  much saying.
                </p>
                {/* <a href="#">Read More</a> */}
              </div>
            </GlassCard>
            <GlassCard>
              <div class={styles.cardContent}>
                <h2>Low Level Programming</h2>
                <p>
                  I was introduced to assembly language and bytecode
                  programming. I am actually an x86_64 assembly programmer
                  today.
                </p>
                {/* <a href="#">Read More</a> */}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
