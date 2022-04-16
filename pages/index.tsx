import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Chart from '../Components/Chart/Chart'
import Product from '../Components/Product'

import { Container, Col, Row } from 'react-bootstrap'
import MarketplaceList from '../Components/MarketplaceList'

type props = {
  market: string,
  presence: number,
  sp: {
      value: number,
      rrp: number,
  },
  ip: {
      value: number,
      rrp: number,
  },
  view: string
}

const Home: NextPage = () => {
  const data: props = {
    market: 'S21',
    presence: 10,
    sp: {
        value: 5.999,
        rrp: 40,
    },
    ip: {
        value: 5.999,
        rrp: 10,
    },
    view: 'https://www.google.com'
  }

  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>

      </div>
      <main className={styles.main}>
        <div className={styles.topBar}></div>
        <Container fluid className="pt-3 pb-4 h-100">
          <Row className="h-100">
            <Col md>
              <Product />
              <MarketplaceList {...data} />
            </Col>
            <Col md className="col-md-8">
              <Product />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default Home
