import { MarketplaceListStyle, RRPText } from './style';

import { Row, Col, Button } from 'react-bootstrap';

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

const MarketplaceList = (list: props[]) => {
    return(
        <MarketplaceListStyle>
            <Row className="mx-auto mb-3 align-items-center no-padding">
                <Col className="col-md-6">
                    <p className="mb-0"><strong>Offer</strong></p>
                </Col>
                <Col className="col-md-3">
                    <p className="mb-1">Date</p>
                    <Button className="btn-sm">2022-01-06</Button>
                </Col>
                <Col className="col-md-3 pad">
                    <p className="mb-1">Price</p>
                    <Button className="btn-sm w-100">Mode V</Button>
                </Col>
            </Row>
            <div>
                <strong>Marketplace</strong>
                <strong>Presence</strong>
                <strong>SP (R$)</strong>
                <strong>%RRP</strong>
                <strong>IP (R$)</strong>
                <strong>%RRP</strong>
                <strong>View</strong>
                <div></div>
            </div>
            {Object.values(list).map((item: props) => <Marketplace key={item.market} {...item}/> )}
        </MarketplaceListStyle>
    )
}

const Marketplace = (item: props) => {
    return (
        <div>
            <p>{item.market}</p>
            <p>{item.presence}%</p>
            <p>{item.sp.value}</p>
            <RRPText opacity={(item.sp.rrp / 100)}>{item.sp.rrp}%</RRPText>
            <p>{item.ip.value}</p>
            <RRPText opacity={(item.ip.rrp / 100)}>{item.ip.rrp}%</RRPText>
            <p>a</p>
            <div></div>
        </div>
    );
}

export default MarketplaceList;