import type { NextPage } from 'next'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Chart from '../Components/Chart/Chart'
import Product from '../Components/Product'

import { Container, Col, Row } from 'react-bootstrap'
import MarketplaceList from '../Components/MarketplaceList'
import SideMenu from '../Components/SideMenu'

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
  const [active, setActive] = useState(false);
  const data: props[] = [{
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
  }, {
    market: 'S22',
    presence: 30,
    sp: {
        value: 7.999,
        rrp: 20,
    },
    ip: {
        value: 10.999,
        rrp: 70,
    },
    view: 'https://www.google.com'
  }]

  return (
    <div className={styles.container}>
      <SideMenu {...{active: active}}/>
      <main className={styles.main}>
        <div className={styles.topBar}>
          <button onClick={() => setActive(!active)}></button>
        </div>
        <Container fluid className="pt-3 pb-4 h-100">
          <Row className="h-100">
            <Col md className="overflow-hidden"> {/* min-vw-25 */}
              <Product />
              <MarketplaceList {...data} />
            </Col>
            <Col md className="col-md-8" fluid>
              <Product />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default Home
