import React, { Suspense, useRef, useState } from 'react'
import Head from 'next/head'
import router from 'next/router'
import Footer from '../components/Footer/Footer'
import NavMenu from '../components/NavMenu/NavMenu'
import styles from './index.module.css'
import { Canvas, useFrame } from '@react-three/fiber'
import Box from '../components/Box/Box'
import AnimatedSphere from '../components/AnimatedSphere/AnimatedSphere'

import { OrbitControls } from '@react-three/drei'
import Setup from '../components/Setup/Setup'
import GamingSetup from '../components/GamingSetup/GamingSetup'
import Wave from 'react-wavify'
import Graduation from '../components/Graduation/Graduation'

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
      <NavMenu />

      {/* <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1> */}
      {/* <MyApp Component={NavMenu} /> */}
      {/* <div className={styles.boxCanvasContainer}>
        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Box
              onClick={() => {
                alert('clicked')
              }}
            />
          </Suspense>
        </Canvas>
      </div>
      <div className={styles.blobCanvasContainer}>
        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div> */}
      <div className={styles.canvasContainer}>
        <div className={styles.bg}></div>
        <Canvas className={styles.canvas}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Setup scale={0.3} />
          </Suspense>
          <Suspense fallback={null}>
            <AnimatedSphere scale={0.9} position={[0, -2.2, 0]} />
          </Suspense>
          <Suspense fallback={null}>
            <Graduation
              scale={gradScale}
              position={[0, 2, 0]}
              onPointerOver={(event) => setGradScale(0.11)}
              onPointerOut={(event) => setGradScale(0.1)}
              onClick={() => {
                router.push('/education/education')
              }}
            />
          </Suspense>
        </Canvas>
        <Wave
          className={styles.wave}
          // fill="#f79902"
          fill="#ffffffaa"
          paused={false}
          options={{
            height: 100,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        />
        {/* <Footer /> */}
      </div>

      {/*<div className={styles.welcomeMessage}>Welcome to my world</div>
      <div className={styles.about}>
        Hi there, I'm Valentine Efagene, a versatile, creative and resilient
        electronics and software engineer with 4+ years of experience in
        electronics design and construction, and software design, development
        and testing. A team worker, with excellent interpersonal, communication
        and problem-solving skills. If you're here, then clearly, you want to
        see my world. Welcome.
      </div> */}
    </div>
  )
}
