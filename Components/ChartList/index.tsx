import { FiltersContainer, ChartsContainer } from './style';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import { Container, Row, Col, ButtonGroup, Button, ToggleButton } from 'react-bootstrap';
import Chart from '../Chart';

const ChartList = () => {
    const [date, setDate] = useState(new Date());
    const [period, setPeriod] = useState(0);
    const [payment, setPayment] = useState(0);

    return(
        <>
            <FiltersContainer>
                <div>
                    <p>Period</p>
                    <ButtonGroup>
                        <ToggleButton className="px-3" type="checkbox" variant="primary" value="0" checked={period === 0} onClick={(e) => setPeriod(0)}>Hour</ToggleButton>
                        <ToggleButton className="px-3" type="checkbox" variant="primary" value="1" checked={period === 1} onClick={(e) => setPeriod(1)}>Day</ToggleButton>
                        <ToggleButton className="px-3" type="checkbox" variant="primary" value="2" checked={period === 2} onClick={(e) => setPeriod(2)}>Week</ToggleButton>
                    </ButtonGroup>
                </div>
                <div>
                    <p>Date</p>
                    <Button className="btn-sm w-100">
                        <DatePicker selected={date} dateFormat="yyyy-MM-dd" onChange={(newDate: Date) => setDate(newDate)} />
                    </Button>
                </div>
                <div>
                    <p>Form of Payment</p>
                    <ButtonGroup>
                        <ToggleButton className="px-3" type="checkbox" variant="primary" value="0" checked={payment === 0} onClick={(e) => setPayment(0)}>Spot Price</ToggleButton>
                        <ToggleButton className="px-3" type="checkbox" variant="primary" value="1" checked={payment === 1} onClick={(e) => setPayment(1)}>Installment Price</ToggleButton>
                    </ButtonGroup>
                </div>
                <div>
                    <p>Marketplaces</p>
                    <Button className="px-3">All Marketplaces</Button>
                </div>
            </FiltersContainer>
            <ChartsContainer>
                <Container fluid className="px-0 w-100">
                    <Row className="pb-3">
                        <Col className="col-md-6">
                            <div>
                                <div>
                                    <Chart />
                                </div>
                            </div>
                        </Col>
                        <Col className="col-md-6">
                            <div>
                                <div>
                                    <Chart />
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-md-6">
                            <div>
                                <div>
                                    <Chart />
                                </div>
                            </div>
                        </Col>
                        <Col className="col-md-6">
                            <div>
                                <div>
                                    <Chart />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </ChartsContainer>
        </>
    );
}

export default ChartList;