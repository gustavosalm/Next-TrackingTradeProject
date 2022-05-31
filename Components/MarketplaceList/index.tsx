import { MarketplaceListStyle, RRPText } from './style';
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Row, Col, Button, Dropdown } from 'react-bootstrap';
import { IoIosArrowDown as BtArrow } from 'react-icons/io'
import { AiOutlineQuestionCircle as QuestMark } from 'react-icons/ai';

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
    const [startDate, setStartDate] = useState(new Date());
    const [mode, setMode] = useState('Mode');
    
    return(
        <MarketplaceListStyle>
            <Row className="mx-auto mb-3 align-items-center no-padding">
                <Col className="col-md-6 d-flex align-items-center position-relative">
                    <p className="mb-0"><strong>Offer</strong></p>
                    <QuestMark className="tooltipIcon" size={12} style={{color: "black", margin: " 0 0 5px 5px"}}/>
                    <div className="tooltip">Tooltip Text</div>
                </Col>
                <Col className="col-md-3">
                    <p className="mb-1">Date</p>
                    <Button className="btn-sm py-0 px-1">
                        <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                    </Button>
                </Col>
                <Col className="col-md-3 pad">
                    <p className="mb-1">Price</p>
                    <Dropdown drop="down" align='start' onSelect={(key) => {(key != null) ? setMode(key) : setMode('Mode') }}>
                        <Dropdown.Toggle className="btn-sm w-100" variant="primary" id="dropdown-basic">
                            {mode} <BtArrow size={10} style={{color: "white"}}/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="Mode">Mode</Dropdown.Item>
                            <Dropdown.Item eventKey="Minimum">Minimum</Dropdown.Item>
                            <Dropdown.Item eventKey="Maximum">Maximum</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <Button className="btn-sm w-100">Mode <BtArrow size={10}/></Button> */}
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