import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Chart from '../Components/Chart/Chart'
import Product from '../Components/Product'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>

      </div>
      <main className={styles.main}>
        <div className={styles.topBar}></div>
        <div className={styles.productContainer}>
          <Product />
        </div>
        {/* <div className={styles.chartCard}>
          <Chart/>
        </div> */}
      </main>
    </div>
  )
}

export default Home
