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

export default function Skills() {
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
              src="/img/react.svg"
              layout="fixed"
              alt=""
              className={styles.cardImg}
              width={200}
              height={200}
            />
            <h2>React JS</h2>
            <p>I built this website using React JS.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/img/next.svg"
              layout="fixed"
              width={200}
              height={200}
              alt=""
              className={styles.cardImg}
            />
            <h2>Next JS</h2>
            <p>I built this website using Next JS.</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>

        {/* <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/img/laravel.svg"
              alt=""
              layout="fixed"
              width={200}
              height={200}
              className={styles.cardImg}
            />
            <h2>Laravel</h2>
            <p>I use laravel for my PHP projects.</p>
          </div>
        </GlassCard> */}

        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/img/nodejs.svg"
              alt=""
              layout="fixed"
              width={200}
              height={200}
              className={styles.cardImg}
            />
            <h2>NodeJS</h2>
            <p>Back End Development</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>

        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/img/nestjs.svg"
              alt=""
              layout="fixed"
              width={200}
              height={200}
              className={styles.cardImg}
            />
            <h2>NestJS</h2>
            <p>NodeJS Framework</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>

        <GlassCard>
          <div className={styles.cardContent}>
            <MyImage
              src="/img/aws.svg"
              alt=""
              layout="fixed"
              width={200}
              height={200}
              className={styles.cardImg}
            />
            <h2>AWS Cloud Computing</h2>
            <p>Infrastructure</p>
            {/* <a href="#">Read More</a> */}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
