import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>

      </div>
      <main className={styles.main}>
        <div className={styles.topBar}></div>
      </main>
    </div>
  )
}

export default Home
