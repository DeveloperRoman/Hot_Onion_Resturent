import { faArrowRight, faGift } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';
import fastDelevery from '../../../images/services/fast.png'

const Services = () => {
    return (
        <Col md={4}>
            <div>
                <div>
                    <img className="img-fluid" src={fastDelevery} alt="" />
                </div>
                <div className="d-flex p-3 align-items-start">
                    <div className="me-3">
                        <div className="bg-danger p-2 rounded-circle text-white d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={faGift}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div>
                        <h4>Fast Delevery</h4>
                        <p style={{fontSize: '14px'}} className="text-muted">Keep your systems in sync with automated web hook based notifications each time link is paid and how we dream about our future.</p>
                        <button className="border-0 text-primary bg-transparent fw-bold">
                            See More
                            <span className="ms-3 bg-success rounded-circle text-white p-1" style={{fontSize: '12px'}}>
                                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Services;