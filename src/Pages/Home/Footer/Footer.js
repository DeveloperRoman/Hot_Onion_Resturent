import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png'


const newList = {
    listStyle: 'none',
    color: 'white',
    lineHeight: '1.8'
}
const Footer = () => {
    return (
        <div className='bg-black mt-5 pt-3'>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <img style={{width: '260px'}} src={logo} alt="" />
                    </Col>
                    <Col sm={6} md={3}>
                        <ul className='mt-4'>
                            <li style={newList}>About online food</li>
                            <li style={newList}>Read our blog</li>
                            <li style={newList}>Sign up to deliver</li>
                            <li style={newList}>Add your restaurant</li>
                        </ul>
                    </Col>
                    <Col sm={6} md={3}>
                        <ul className='mt-4'>
                            <li style={newList}>Get help</li>
                            <li style={newList}>Read FAQs</li>
                            <li style={newList}>view all cities</li>
                            <li style={newList}>Restaurants near me</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;