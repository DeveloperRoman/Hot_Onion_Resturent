import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFood from '../../../../Hooks/useFood';
import Food from '../Food/Food';

const Dinner = () => {
    const { foods } = useFood();

    return (
        <Container>
            <Row>
                {
                    foods.map(food => {
                        if (food.category === 'dinner') {
                            return <Food key={food.id} food={food}></Food>;
                        }
                    })
                }
            </Row>
        </Container>
    );
};

export default Dinner;