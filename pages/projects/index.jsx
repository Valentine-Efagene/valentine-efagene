import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import GlassCard from '../../components/GlassCard/GlassCard'
import styles from './projects.module.css'
//import Footer from '../../components/Footer/Footer'
import NavMenu from '../../components/NavMenu/NavMenu'
import WideNavMenu from '../../components/WideNavMenu/WideNavMenu'
import Rocket from '../../components/Rocket/Rocket'
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'
import Icon from '@mui/material/Icon'
import MyImage from '../../components/MyImage/MyImage'

export default function Projects() {
  return (
    <div className={styles.main}>
      <WideNavMenu />
      <NavMenu />

      <div className={styles.canvasContainer}>
        <Canvas className={styles.canvas}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Rocket scale={0.15} move={true} position={[0, -1.7, 0]} />
          </Suspense>
        </Canvas>
      </div>

      <div className={styles.projectCards}>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>WifiController</h2>
            <p>
              An android app for controlling wifi modules like the ESP32
              development module, leveraging the sensors on the device, and
              designed control widgets. The project was built using Java and
              Android Jetpack.
            </p>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://www.youtube.com/watch?v=XihYuIl-Ck8"
              >
                <YouTubeIcon style={{ color: 'red' }} />
              </a>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://play.google.com/store/apps/details?id=com.valentyne.wificontroller&hl=en"
              >
                <Icon style={{ position: 'relative', left: '2px' }}>
                  <MyImage src="/google-play.svg" alt="" layout="fill" />
                </Icon>
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>Organizer</h2>
            <p>
              A .net C# windows desktop application for organizing files in a
              device. It is to be installed as an option on the context menu
              (right click), for quick access.
            </p>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://youtu.be/I1ajLtmc9d4"
              >
                <YouTubeIcon style={{ color: 'red' }} />
              </a>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://youtu.be/I1ajLtmc9d4"
              >
                <GitHubIcon style={{ color: 'black' }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>Face-controlled arduino car</h2>
            <p>
              An openCV and maker project, used as my final year project, using
              openCV, under OpenFrameworks (a C++ creative coding library).
            </p>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://youtu.be/6sbRDCF63ds"
              >
                <YouTubeIcon style={{ color: 'red' }} />
              </a>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://github.com/Valentine-Efagene/Face-Controlled-Robotic-Car"
              >
                <GitHubIcon style={{ color: 'black' }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>Network Monitor</h2>
            <p>
              A C# .net WPF Windows desktop application for monitoring network
              data usage.
            </p>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://www.youtube.com/watch?v=bxVpTbyIzVU"
              >
                <YouTubeIcon style={{ color: 'red' }} />
              </a>
              <a
                className={styles.projLink}
                href="https://github.com/Valentine-Efagene/Network"
              >
                <GitHubIcon style={{ color: 'black' }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard
        // style={{ background: 'black' }}
        >
          <div className={styles.cardContent}>
            <h2>Small Businesses</h2>
            <p>
              A demo e-commerce android application, using Java, android
              Jetpack, Firebase and Google Maps API.
            </p>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://www.youtube.com/watch?v=KUrjFbDn1R4"
              >
                <YouTubeIcon style={{ color: 'red' }} />
              </a>
              <a
                className={styles.projLink}
                href="https://github.com/Valentine-Efagene/Small_Businesses"
              >
                <GitHubIcon style={{ color: 'black' }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard
        // style={{ background: 'black' }}
        >
          <div className={styles.cardContent}>
            <h2>Win32 and x86_64 Assembly Calculator</h2>
            <p>I made this as a proof-of-concept project.</p>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://github.com/Valentine-Efagene/win32-C-and-x86_64-assembly-calculator"
              >
                <GitHubIcon style={{ color: 'black' }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard
        // style={{ background: 'black' }}
        >
          <div className={styles.cardContent}>
            <h2>Pong</h2>
            <p>
              This is a simple pong game I made using Javafx, while studying 2D
              game physics.
            </p>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://github.com/Valentine-Efagene/Ping-Pong"
              >
                <GitHubIcon style={{ color: 'black' }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard
        // style={{ background: 'black' }}
        >
          <div className={styles.cardContent}>
            <h2>This Website</h2>
            <p>
              This website was built using Next.js, with Cypress for both
              component and integration testing, and Instanbul coverage for code
              coverage.
            </p>
          </div>
        </GlassCard>
        <GlassCard
        // style={{ background: 'black' }}
        >
          <div className={styles.cardContent}>
            <h2>Other Projects</h2>
            <p>
              Note that this page does not present an exhaustive list of my
              projects. Please see my github repositories for more exciting
              projects.
            </p>
            <div className={styles.links}>
              <a
                className={styles.projLink}
                target={'_blank'}
                rel="noreferrer"
                href="https://github.com/Valentine-Efagene"
              >
                <GitHubIcon style={{ color: 'black' }} />
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
