import React from 'react';
import useFood from '../../../../Hooks/useFood';
import Food from '../Food/Food';

const Dinner = () => {
    const { foods } = useFood();

    return (
        <div className="">
            {
                foods.map(food => {
                    if (food.category === 'dinner') {
                        return <Food key={food.id} food={food}></Food>;
                    }
                })
            }
        </div>
    );
};

export default Dinner;