import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col } from 'react-bootstrap';

const Services = (props) => {
    return (
        <Col sm={6} md={4}>
            <div>
                <div>
                    <img className="img-fluid" src={props.img} alt="" />
                </div>
                <div className="d-flex p-3 align-items-start">
                    <div className="me-3">
                        <div className="bg-danger p-2 rounded-circle text-white d-flex align-items-center justify-content-center">
                        <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div>
                        <h4>{props.title}</h4>
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