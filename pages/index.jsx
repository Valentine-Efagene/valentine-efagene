import React, { Suspense, useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import NavMenu from '../components/NavMenu/NavMenu'
import styles from './index.module.css'
import { Canvas } from '@react-three/fiber'
import WhiteLaptop from '../components/WhiteLaptop/WhiteLaptop'

import { OrbitControls } from '@react-three/drei'
import Wave from 'react-wavify'
import WideNavMenu from '../components/WideNavMenu/WideNavMenu'
//import FacebookIcon from '@mui/icons-material/Facebook'
import GlowingHeadphones from '../components/GlowingHeadphones/GlowingHeadphones'
import Social from '../components/Social/Social'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link
          rel="preload"
          href="/fonts/gotham_rounded/GothamRounded-Book.otf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WideNavMenu />
      <NavMenu />
      <div className={styles.landing}>
        <div className={styles.starter}>
          <div className={styles.large}>
            Hi there. Thanks for taking out time to see my website
          </div>
          <div className={styles.small}>
            I am Valentine Efagene, a versatile, creative and resilient
            electronics and software engineer with 4+ years of experience in
            electronics design and construction, and software design,
            development and testing. A team worker, with excellent
            interpersonal, communication and problem-solving skills.
          </div>
        </div>
        <div className={styles.canvasContainer}>
          <Canvas className={styles.canvas}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              //enableRotate={false}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            {/* <axisHelper /> */}
            <Suspense fallback={null}>
              <WhiteLaptop
                scale={0.05}
                rotation={[0.5, -2, 0.0]}
                position={[-4.2, -0.9, -10.5]}
              />
            </Suspense>
          </Canvas>
        </div>
        <div className={styles.canvasContainer2}>
          <Canvas className={styles.canvas}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              //enableRotate={false}
            />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            {/* <axisHelper /> */}
            <Suspense fallback={null}>
              <GlowingHeadphones
                scale={0.8}
                rotation={[0, 1, 0]}
                position={[0, 0, 0]}
              />
            </Suspense>
          </Canvas>
        </div>
        <Wave
          className={styles.wave}
          fill="white"
          paused={false}
          options={{
            height: 100,
            amplitude: 40,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
      <Social />
    </div>
  )
}
