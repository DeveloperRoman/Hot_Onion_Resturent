import React from 'react';
import './SeeAllButton.css';


const checkoutFood = {
    text-transform: capitalize;
    background: #999999a6;
    color: white;
    font-weight: 700;
}

const SeeAllButton = () => {
    return (
        <div className='text-center'>
            <button className="btn checkout-food">checkout all our food</button>
        </div>
    );
};

export default SeeAllButton;