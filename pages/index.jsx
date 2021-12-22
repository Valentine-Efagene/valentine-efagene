import React, { Suspense, useRef, useState } from 'react'
import Head from 'next/head'
import router from 'next/router'
import Footer from '../components/Footer/Footer'
import NavMenu from '../components/NavMenu/NavMenu'
import styles from './index.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import Laptop from '../components/Laptop/Laptop'
import WhiteLaptop from '../components/WhiteLaptop/WhiteLaptop'
import Box from '../components/Box/Box'
import AnimatedSphere from '../components/AnimatedSphere/AnimatedSphere'

import { OrbitControls } from '@react-three/drei'
import Setup from '../components/Setup/Setup'
import Hp from '../components/Hp/Hp'
import GamingSetup from '../components/GamingSetup/GamingSetup'
import Wave from 'react-wavify'
import Graduation from '../components/Graduation/Graduation'
import WideNavMenu from '../components/WideNavMenu/WideNavMenu'
import CardsButton from '../components/CardsButton/CardsButton'
import FacebookIcon from '@mui/icons-material/Facebook'

export default function Home() {
  const [gradScale, setGradScale] = useState(0.1)

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
            I'm Valentine Efagene, a versatile, creative and resilient
            electronics and software engineer with 4+ years of experience in
            electronics design and construction, and software design,
            development and testing. A team worker, with excellent
            interpersonal, communication and problem-solving skills. If you're
            here, then clearly, you want to see my world. Welcome.
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
                scale={0.04}
                rotation={[0.5, -2, 0.0]}
                position={[-3.3, -0.7, -8.5]}
              />
            </Suspense>
          </Canvas>
        </div>
        <Wave className={styles.wave} />
      </div>
    </div>
  )
}
