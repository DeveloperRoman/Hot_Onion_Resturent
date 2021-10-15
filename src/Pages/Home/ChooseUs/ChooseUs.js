import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from './Services';
import fastDelevery from '../../../images/services/fast.png'
import cook from '../../../images/services/cook.png'
import homeDelevery from '../../../images/services/home.png'
import { faBell, faBusAlt, faTruck } from '@fortawesome/free-solid-svg-icons';

const ChooseUs = () => {
    return (
        <div className="mt-5">
            <Container fluid="sm">
                <h2 className="mt-4">Why you choose us</h2>
                <p>Barton waited twenty always repair in within we do. An delighted offending <br /> curiosity my is dashwoods at. Boy prospous increasing surrounded.</p>
                <Row>
                    <Services
                        img={fastDelevery}
                        title={'Fast Delevery'}
                        icon={faBusAlt}>
                    </Services>
                    <Services
                        img={cook}
                        title={'A Good Auto Responder'}
                        icon={faBell}>
                    </Services>
                    <Services
                        img={homeDelevery}
                        title={'Home Delivery'}
                        icon={faTruck}>
                    </Services>
                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;