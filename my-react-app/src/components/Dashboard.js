import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import DailySummaryService from '../service/DailySummaryService';
import { useUser } from '../provider/UserProvider';

function DashboardComponent() {
    const [summaries, setSummaries] = useState([]);
    const { loggedInUser } = useUser();

    async function fetchData() {
        if (loggedInUser) {
            const fetchedSummaries = await DailySummaryService.getSummaries(loggedInUser);
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
        <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        {summaries.map(summary => (
                            <Nav.Item key={summary.date}>
                                <Nav.Link eventKey={summary.date}>{getFormattedDate(summary.date)}</Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content className='text-light'>
                        {summaries.map(summary => (
                            <Tab.Pane key={summary.date} eventKey={summary.date}>
                                <h2>{summary.date}</h2>
                                <p>{summary.username}</p>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default DashboardComponent;
