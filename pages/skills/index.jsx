import React, { Suspense } from 'react'
import Setup from '../../components/Setup/Setup'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styles from './skills.module.css'
//import Image from 'next/image'
//import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/NavMenu/NavMenu'
import GlassCard from '../../components/GlassCard/GlassCard'
import MyImage from '../../components/MyImage/MyImage'
import WideNavMenu from '../../components/WideNavMenu/WideNavMenu'

export default function Mobile() {
  return (
    <div className={styles.main}>
      <NavMenu />
      <WideNavMenu />
      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Setup scale={0.4} time={Date.now()} animate={true} />
          </Suspense>
        </Canvas>
      </div>

      <div className={styles.skillCards}>
        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/react.svg"
              alt=""
              className={styles.cardImg}
              layout="fixed"
              width={200}
              height={200}
            />
            <h2>React JS</h2>
            <p>I build this website using React JS.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/next.svg"
              layout="fixed"
              width={200}
              height={200}
              alt=""
              className={styles.cardImg}
            />
            <h2>Next JS</h2>
            <p>I build this website using Next JS.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        {/* <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/angular.svg"
              alt=""
              layout="fixed"
              width={200}
              height={200}
              className={styles.cardImg}
            />
            <h2>Angular JS</h2>
            <p>
              Those courses have greatly aided my ability with animations and
              game physics.
            </p>
          </div>
        </GlassCard> */}
        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/laravel.svg"
              alt=""
              layout="fixed"
              width={200}
              height={200}
              className={styles.cardImg}
            />
            <h2>Laravel</h2>
            <p>I use laravel for my PHP projects.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/c++.svg"
              alt=""
              layout="fixed"
              width={100}
              height={100}
              className={styles.cardImg}
            />
            <h2>C++</h2>
            <p>
              I use C++ for win32 windows and console applications, and
              OpenFrameworks creative coding appliations.
            </p>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/c-sharp.svg"
              alt=""
              layout="fixed"
              width={100}
              height={100}
              className={styles.cardImg}
            />
            <h2>C#</h2>
            <p>I use C# for windows applications.</p>
          </div>
        </GlassCard>
        <GlassCard
        // style={{ background: 'black' }}
        >
          <div className={styles.cardContent}>
            <MyImage
              src="/java.svg"
              alt=""
              layout="fixed"
              width={100}
              height={100}
              className={styles.cardImg}
            />
            <h2>Java</h2>
            <p>
              I use Java with android Jetpack for android projects, Javafx
              desktop projects, and Java Processing for creative coding.
            </p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard className={styles.glassCard}>
          <div className={styles.cardContent}>
            <MyImage
              src="/kotlin.svg"
              alt=""
              layout="fixed"
              width={100}
              height={100}
              className={styles.cardImg}
            />
            <h2>Kotlin</h2>
            <p>I use Kotlin purely for android Jetpack applications.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/python.svg"
              alt=""
              layout="fixed"
              width={100}
              height={100}
              className={styles.cardImg}
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
        {/* 
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>x86_64 Assembly</h2>
            <p>I use this mostly for educational purpose.</p>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>Electronics Design and Construction</h2>
            <p>
              I am well experienced in proteus electronics design and simulation
              suite.
            </p>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/arduino.svg"
              alt=""
              layout="fixed"
              width={100}
              height={100}
              className={styles.cardImg}
            />
            <h2>Arduino C</h2>
            <p>
              I use C while programming Arduino or ESP modules for my
              electronics projects.
            </p>
          </div>
        </GlassCard> */}
      </div>
      {/* <Footer /> */}
    </div>
  )
}
