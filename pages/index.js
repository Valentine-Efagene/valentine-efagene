import React, { Suspense } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer/footer'
import NavMenu from '../components/NavMenu/NavMenu'
import styles from './index.module.css'
import { Canvas } from '@react-three/fiber'
import Box from '../components/Box/Box'
import AnimatedSphere from '../components/AnimatedSphere/AnimatedSphere'
import Hp from '../components/Hp/Hp'
import { OrbitControls } from '@react-three/drei'

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
      <NavMenu />

      {/* <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1> */}
      {/* <MyApp Component={NavMenu} /> */}
      <div className={styles.boxCanvasContainer}>
        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Box />
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
      </div>
      <div className={styles.hpCanvasContainer}>
        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Hp />
          </Suspense>
        </Canvas>
      </div>

      <Footer />
    </div>
  )
}
