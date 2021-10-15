import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from './Services';
import fastDelevery from '../../../images/services/fast.png'
import cook from '../../../images/services/cook.png'
import homeDelevery from '../../../images/services/home.png'

const ChooseUs = () => {
    return (
        <div>
            <Container>
                <h2>Why you choose us</h2>
                <p>Barton waited twenty always repair in within we do. An delighted offending <br /> curiosity my is dashwoods at. Boy prospous increasing surrounded.</p>
                <Row>
                    <Services img={fastDelevery} title={''}></Services>
                    <Services></Services>
                    <Services></Services>
                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;