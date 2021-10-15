import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFood from '../../Hooks/useFood';

const FoodDetails = () => {
    const { foodId } = useParams();
    const {foods, isLoading} = useFood();


    console.log(isLoading)
    if (isLoading) {
        console.log(foods);
    }

    // foods.forEach(food => {
    //     console.log(food.id);
    //     console.log(foodId);
    //     if (food.id === foodId) {
    //         console.log(food);
    //         // displayFood = food;
    //     }
    // })
    // foods.find(food => food.id === foodId)
    // console.log(displayFood);
    return (
        <div>
            ekta matro food dekhabe {foodId}
        </div>
    );
};

export default FoodDetails;