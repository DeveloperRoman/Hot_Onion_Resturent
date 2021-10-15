import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFood from '../../../../Hooks/useFood';
import Food from '../Food/Food';

const Lunch = () => {
    const { foods } = useFood();

    // console.log(foods);
    return (
        <Container>
            <Row>
                {
                    foods.map(food => {
                        if (food.category === 'lunch') {
                            return <Food key={food.id} food={food}></Food>;
                        }
                    })
                }
            </Row>
        </Container>
    );
};

export default Lunch;