import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './food.css'

const Food = (props) => {
    const { id, name, price, description, image } = props.food;
    const history = useHistory();

    const seeFoodDetails = (id) => {
        history.push(`/foodDetails/${id}`)
        window.location.reload();
    }
    return (
        <Col sm={6} md={4}>
            <div onClick={() =>seeFoodDetails(id)} className="singleFood">
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