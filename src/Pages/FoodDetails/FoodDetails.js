import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFood from '../../Hooks/useFood';

const FoodDetails = () => {
    const { foodId } = useParams();
    const { foods } = useFood();
    console.log(foods)
    return (
        <div>
            ekta matro food dekhabe {foodId}
        </div>
    );
};

export default FoodDetails;