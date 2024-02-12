import React from 'react';
import { Container } from 'react-bootstrap';
import { Sidebar} from '../../components/Dashboard';

import '../../App.scss';

const Dashboard = () => {
    return (
        <React.Fragment>
            <Container fluid className="p-0">
                <div className="wrapper">
                    {/* Collapsible Sidebar */}
                    <Sidebar />
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;
