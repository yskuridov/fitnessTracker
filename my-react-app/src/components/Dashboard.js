import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import DailySummaryService from '../service/DailySummaryService';
import { useUser } from '../provider/UserProvider';
import ScrollbarComponent from './scrollbar/ScrollbarComponent';
import NutritionComponent from './dailysummary/NutritionComponent';

function DashboardComponent() {
    const [summaries, setSummaries] = useState([]);
    const { loggedInUser } = useUser();

    async function fetchData() {
        if (loggedInUser) {
            const fetchedSummaries = await DailySummaryService.getSummaries(loggedInUser.username);
            setSummaries(fetchedSummaries);
        }
    }

    useEffect(() => {
        fetchData();
    }, [loggedInUser]);

    function getFormattedDate(date) {
        const formatted = date.substring(0, 10);
        return formatted;
    }

    return (
        <div>
            <h4 className='text-light mb-3 mt-3'>Mes plans des jours</h4>
            <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link disabled className='text-light'>Date</Nav.Link>
                        </Nav.Item>
                        {summaries.map(summary => (
                            <Nav.Item key={summary.date}>
                                <Nav.Link eventKey={summary.date}>{getFormattedDate(summary.date)}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={9} className='mt-5'>
                    <Tab.Content className='text-light'>
                        {summaries.map(summary => (
                            <Tab.Pane key={summary.date} eventKey={summary.date}>
                                <div className='row'>
                                <div className='col-8'>
                                <ScrollbarComponent username={loggedInUser.username} date={summary.date} />
                                </div>
                                <div className='col border border-success border-left border-top-0'>
                                <h3 className='text-center text-success'>Analyse</h3>
                                </div>
                                </div>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </div>
    
    );
}

export default DashboardComponent;
