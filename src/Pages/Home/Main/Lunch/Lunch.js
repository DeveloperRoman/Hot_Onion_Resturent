import React from 'react';
import useFood from '../../../../Hooks/useFood';
import Food from '../Food/Food';

const Lunch = () => {
    const { foods } = useFood();

    return (
        <div className="">
            {
                foods.map(food => {
                    if (food.category === 'lunch') {
                        return <Food key={food.id} food={food}></Food>;
                    }
                })
            }
        </div>
    );
};

export default Lunch;