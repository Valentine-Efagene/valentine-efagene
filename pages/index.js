import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer/footer'
import NavMenu from '../components/NavMenu/NavMenu'
import styles from './index.module.css'

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

      <div className={styles.main}>
        {/* <h1 className="title">
          Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link>
        </h1> */}
        {/* <MyApp Component={NavMenu} /> */}
      </div>

      <Footer />
    </div>
  )
}
