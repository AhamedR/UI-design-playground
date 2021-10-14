import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>3D Product view</title>
        <meta name='description' content='3D product view' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Product View concepts
        </h1>

        <p className={styles.description}>
          3D Product view - <code className={styles.code}>Coming Soon</code>
        </p>
      </main>
    </div>
  )
}
