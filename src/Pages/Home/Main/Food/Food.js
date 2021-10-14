import React from 'react';
import { Col } from 'react-bootstrap';
import './food.css'

const Food = (props) => {
    const { id, name, price, description, image } = props.food;
    return (
        <Col md={4}>
            <div className="singleFood">
                <div className='foodImg'>
                    <img src={image} alt="" />
                </div>
                <div className="foodInfo">
                    <h4>{name}</h4>
                    <span>{description}</span>
                    <b>${price}</b>
                </div>
            </div>
        </Col>
    );
};

export default Food;