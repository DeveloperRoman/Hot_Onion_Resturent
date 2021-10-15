import React from 'react';
import { useHistory } from 'react-router';
import './SeeAllButton.css';

const SeeAllButton = () => {
    const history = useHistory();

    const cheakOutAll = () => {
        history.push('/cheakoutall')
        window.location.reload();
    }
    return (
        <div className='text-center'>
            <button onClick={cheakOutAll} className="btn text-white checkout-food">checkout all our food</button>
        </div>
    );
};

export default SeeAllButton;