import React, { Suspense } from 'react'
//import Samsung from '../../components/Samsung/Samsung'
import Setup from '../../components/Setup/Setup'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './skills.module.css'
//import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/NavMenu/NavMenu'
import GlassCard from '../../components/GlassCard/GlassCard'

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
            <Setup scale={0.4} />
          </Suspense>
        </Canvas>
      </div>

      <div className={styles.skillCards}>
        <GlassCard>
          <div class={styles.cardContent}>
            <img src="/react.svg" alt="" />
            <h2>React JS</h2>
            <p>To put it simply, I build this website using React JS.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div class={styles.cardContent}>
            <img src="/next.svg" alt="" />
            <h2>Next JS</h2>
            <p>To put it simply, I build this website using React JS.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div class={styles.cardContent}>
            <img src="/angular.svg" alt="" />
            <h2>Angular JS</h2>
            <p>
              Those courses have greatly aided my ability with animations and
              game physics.
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div class={styles.cardContent}>
            <img src="/laravel.svg" style={{ marginTop: '30px' }} alt="" />
            <h2>Laravel</h2>
            <p>I use laravel for my PHP projects.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div class={styles.cardContent}>
            <img src="/c++.svg" alt="" />
            <h2>C++</h2>
            <p>
              I use C++ for win32 windows and console applications, and
              OpenFrameworks creative coding appliations.
            </p>
          </div>
        </GlassCard>
        <GlassCard>
          <div class={styles.cardContent}>
            <img src="/c-sharp.svg" alt="" />
            <h2>C#</h2>
            <p>I use C# for windows applications.</p>
          </div>
        </GlassCard>
        <GlassCard
        // style={{ background: 'black' }}
        >
          <div class={styles.cardContent}>
            <img src="/java.svg" alt="" style={{ width: '50%' }} />
            <h2>Java</h2>
            <p>
              I use Java with android Jetpack for android projects, Javafx
              desktop projects, and Java Processing for creative coding.
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard className={styles.glassCard}>
          <div class={styles.cardContent}>
            <img src="/kotlin.svg" alt="" />
            <h2>Kotlin</h2>
            <p>I use Kotlin purely for android Jetpack applications.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div class={styles.cardContent}>
            <img
              src="/python.svg"
              alt=""
              style={{ width: '100px', height: '100px' }}
            />
            <h2>Python</h2>
            <p>
              I use python for machine learning, data structures and algorithms,
              data science, and windows console applications, occasionally using
              it for windows GUI applications, where there is not too much focus
              on UI beauty.
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div class={styles.cardContent}>
            <h2>x86_64 Assembly</h2>
            <p>I use this mostly for educational purpose.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div class={styles.cardContent}>
            <h2>Electronics Design and Construction</h2>
            <p>
              I am well experienced in proteus electronics design and simulation
              suite.
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div class={styles.cardContent}>
            <img src="/arduino.svg" alt="" />
            <h2>Arduino C</h2>
            <p>
              I use C while programming Arduino or ESP modules for my
              electronics projects.
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
