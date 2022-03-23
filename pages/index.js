import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/evernote.module.css'
import dynamic from 'next/dynamic'
import { useState } from 'react'


const NoteOperations = dynamic(() => import('./components/NoteOperations'), {ssr: false})
const NoteDetails = dynamic(() => import('./components/NoteDetails'), {ssr: false})


export default function Home() {
  
  const [ID, setID] = useState(null);
  const getANote = (id) => {
    setID(id)
  }


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
            <NoteOperations getSingleNote={getANote}/>
          </div>

          <div className={styles.right}>
            <NoteDetails ID = {ID} />
          </div>
        </div>
      </main>
    </div>
  )
}
