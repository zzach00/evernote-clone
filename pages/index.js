import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/evernote.module.css'
import NoteOperations from './components/NoteOperations';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Evernote Clone</title>
        <meta name="description" content="This is an Evernote Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.left}>
            <NoteOperations />
          </div>
          <div className={styles.right}>Right</div>
        </div>
      </main>
    </div>
  )
}
