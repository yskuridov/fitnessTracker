import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import DailySummaryService from '../service/DailySummaryService';

function DashboardComponent() {
    const [summaries, setSummaries] = useState([])

    useEffect( () => {
        async function fetchData(){
            setSummaries(await DailySummaryService.getSummaries("yegor11111"));
            console.log(summaries);
        }
        fetchData();
    })


    return (
        <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {summaries.map(summary => (
                            <Nav.Item key={summary.date}>
                                <Nav.Link eventKey={summary.date}>{summary.date}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className='text-light'>
                        {summaries.map(summary => (
                            <Tab.Pane key={summary.date} eventKey={summary.date}>
                                <h2>{summary.date}</h2>
                                <p>{summary.date}</p>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default DashboardComponent;