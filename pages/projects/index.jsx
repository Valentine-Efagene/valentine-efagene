import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import GlassCard from '../../components/GlassCard/GlassCard'
import styles from './projects.module.css'
import NavMenu from '../../components/NavMenu/NavMenu'
import WideNavMenu from '../../components/WideNavMenu/WideNavMenu'
import Rocket from '../../components/Rocket/Rocket'
import Icon from '@mui/material/Icon'
import playIcon from '../../public/img/google-play.svg'
import MyImage from '../../components/MyImage/MyImage'
import { Language, LinkedIn, YouTube as YouTubeIcon, GitHub as GitHubIcon } from '@mui/icons-material'

const WEB_COLOR = 'white'

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
            <h2>Java Energies</h2>
            <img
              className={styles.projImg}
              src="/img/java-energies.png"
              alt=""
            />
            <p>
              Java Energies is an African energy company. I built this using
              Typescript and Vite.
            </p>
            <div className={styles.skills}>
              <h3>Skills</h3>
              <p>React, Typescript, Vite, CSS</p>
            </div>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://javaenergies.com/"
              >
                <Language style={{ color: WEB_COLOR }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>Renewed Hope Admin </h2>
            <img
              className={styles.projImg}
              src="/img/renewed_hope.jpg"
              alt=""
            />
            <p>
              Renewed Hope is an housing project by the federal government of Nigeria. I built the admin dashboard, notifications API, and several other APIs.
            </p>
            <div className={styles.skills}>
              <h3>Skills</h3>
              <p>React, Typescript, Vitest, Supertest, CSS, AWS SQS, AWS Lambda, AWS SES, NestJS, NodeJS</p>
            </div>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://renewedhopehomes.fmhud.gov.ng/"
              >
                <Language style={{ color: WEB_COLOR }} />
              </a>
            </div>
          </div>
        </GlassCard><GlassCard>
          <div className={styles.cardContent}>
            <h2>Homebase Account Opening</h2>
            <img
              className={styles.projImg}
              src="/img/hb account opening.png"
              alt=""
            />
            <p>
              The user fills a form, and the system generates a PDF,
              and mails that to the relevant email. It uses a queue for orchestration.
            </p>
            <div className={styles.skills}>
              <h3>Skills</h3>
              <p>Laravel, Bootstrap, Javascript</p>
            </div>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://www.loom.com/share/ed233e434094412587e7771c08069ff8?sid=394a72e9-a542-4935-a5a8-90ac837a7a7d"
              >
                <YouTubeIcon style={{ color: 'red' }} />
              </a>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://javaenergies.com/"
              >
                <Language style={{ color: WEB_COLOR }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>WifiController</h2>
            <p>
              An android app for controlling wifi modules like the ESP32
              development module, leveraging the sensors on the device, and
              designed control widgets. I built this in my undergraduate days,
              because I was an electronics hobbyist at the time. The project was
              built using Java and Android Jetpack.
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
                  <MyImage src={playIcon} alt="" layout="fill" />
                </Icon>
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>Jatado Form Builder</h2>
            <img
              className={styles.projImg}
              src="/img/jatado-form-builder.jpg"
              alt=""
            />
            <p>
              Jatado Form Builder is an internal application for a Jatado
              Technologies
            </p>
            <div className={styles.skills}>
              <h3>Skills</h3>
              <p>Django, React, CSS</p>
            </div>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://formbuilder.jatado.com"
              >
                <Language style={{ color: 'white' }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>Traffic Pilot</h2>
            <img
              className={styles.projImg}
              src="/img/trafficPilot.jpg"
              alt=""
            />
            <p>
              Traffic Pilot is an application for hijacking social media trends
              for advertisement purposes. For NDA reasons, I can only share a
              dev demo link.
            </p>
            <div className={styles.skills}>
              <h3>Skills</h3>
              <p>Javascript, React, Vite, Cypress</p>
            </div>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="traffic-pilot-green.vercel.app/"
              >
                <Language style={{ color: WEB_COLOR }} />
              </a>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <div className={styles.cardContent}>
            <h2>This Website</h2>
            <p>
              This website was built using Next.js, with Cypress for both
              component and integration testing, and Instanbul coverage for code
              coverage.
            </p>
            <div className={styles.skills}>
              <h3>Skills</h3>
              <p>NextJS, Cypress, ThreeJS, React, CSS</p>
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
                <GitHubIcon style={{ color: WEB_COLOR }} />
              </a>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className={styles.cardContent}>
            <h2>Organizer</h2>
            <p>
              A .net C# windows desktop application I built in my undergraduate
              days, for organizing files in a device. It is to be installed as
              an option on the context menu (right click), for quick access.
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
                href="https://github.com/Valentine-Efagene/Organiser"
              >
                <GitHubIcon style={{ color: WEB_COLOR }} />
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
                <GitHubIcon style={{ color: WEB_COLOR }} />
              </a>
            </div>
          </div>
        </GlassCard>
        {/* <GlassCard>
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
                <GitHubIcon style={{ color: WEB_COLOR }} />
              </a>
            </div>
          </div>
        </GlassCard> */}
        <GlassCard>
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
                <GitHubIcon style={{ color: WEB_COLOR }} />
              </a>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://www.youtube.com/channel/UCOp4pUKPXy7Nsz7XE-ttBWQ"
              >
                <YouTubeIcon style={{ color: 'red' }} />
              </a>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://www.linkedin.com/posts/valentine-efagene_designer-design-react-activity-7045789888872353793-gQUr?utm_source=share&utm_medium=member_desktop"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
        </GlassCard><GlassCard>
          <div className={styles.cardContent}>
            <h2>Law Firm</h2>
            <img className={styles.projImg} src="/img/lawfirm.webp" alt="" />
            <p>
              This is a law firm portfolio template, with a live blog, using
              NextJS 13 and Sanity CMS. I took it up as a challenge to when
              NextJS 13 was released.
            </p>
            <div className={styles.skills}>
              <h3>Skills</h3>
              <p>NextJS 13, Sanity</p>
            </div>
            <div className={styles.links}>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://www.youtube.com/watch?v=yztAH4qTgsA"
              >
                <YouTubeIcon style={{ color: 'red' }} />
              </a>
              <a
                target={'_blank'}
                rel="noreferrer"
                className={styles.projLink}
                href="https://www.linkedin.com/posts/valentine-efagene_nextjs-nextjs13-blog-activity-7065221683468472320-ZEPy?utm_source=share&utm_medium=member_desktop"
              >
                <LinkedIn />
              </a>
            </div>
          </div>
        </GlassCard>
      </div>
      {/* <Footer /> */}
    </div>
  )
}
