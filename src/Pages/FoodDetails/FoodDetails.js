import React from 'react';
import { useParams } from 'react-router';
import useFood from '../../Hooks/useFood';

const FoodDetails = () => {
    const { foodId } = useParams();
    const { foods } = useFood();
    const displayFood = {};
    foods.find(food => food.id === foodId)
    console.log(displayFood);
    return (
        <div>
            ekta matro food dekhabe {foodId}
        </div>
    );
};

export default FoodDetails;