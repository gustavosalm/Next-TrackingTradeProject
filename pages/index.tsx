import type { NextPage } from 'next'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import ChartList from '../Components/ChartList'
import Product from '../Components/Product'
import MarketplaceList from '../Components/MarketplaceList'
import SideMenu from '../Components/SideMenu'

import { Container, Col, Row, Dropdown } from 'react-bootstrap'
import { GoThreeBars as HamButton } from 'react-icons/go';
import { BiSearchAlt as Search, BiFullscreen, BiPowerOff } from 'react-icons/bi';
import { IoIosArrowDown as BtArrow } from 'react-icons/io';

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
          <div>
            <button onClick={() => setActive(!active)}><HamButton size={18} style={{color: "#454c60"}}/></button>
            <div className={styles.searchBar}>
              <Search />
              <input placeholder="Search..."></input>
            </div>
          </div>
          <div>
            <button className="pb-0" onClick={() => (document.fullscreenElement) ? document.exitFullscreen() : document.documentElement.requestFullscreen()}>
              <BiFullscreen size={18} />
            </button>
            <div className={styles.userOptions}>
              <div></div>
              <Dropdown className="align-end" onSelect={(key) => console.log('logout')}>
                <Dropdown.Toggle className="btn-sm w-100 no-hover" variant="primary" id="dropdown-basic">
                  <span className="text-dark">nome</span> <BtArrow size={12} color="black"/>
                  </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Logout">
                    <BiPowerOff color="#df3e4c"/> Logout
                    </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <Container fluid className="pt-3 pb-4 h-100 mainContainer">
          <Row className="h-100">
            <Col md className="col-md-4 overflow-y-hidden"> {/* overflow-y-hidden */}
              <Product />
              <MarketplaceList {...data} />
            </Col>
            <Col md className="col-md-8 mt-md-0 mt-3" fluid>
              <ChartList />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default Home
