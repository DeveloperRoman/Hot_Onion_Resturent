import React from 'react';

const Food = (props) => {
    const { id, name, price, description, image } = props.food;
    return (
        <div>
            <img src={image} alt="" />
            <span>{name}</span>
            <h4>{description}</h4>
            <b>{price}</b>
        </div>
    );
};

export default Food;