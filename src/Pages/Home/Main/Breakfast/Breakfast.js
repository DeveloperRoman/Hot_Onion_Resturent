import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFood from '../../../../Hooks/useFood';
import Food from '../Food/Food';

const Breakfast = () => {
    const { foods } = useFood();

    return (
        <Container>
            <Row>
                {
                    foods.map(food => {
                        if (food.category === 'breakfast') {
                            return <Food key={food.id} food={food}></Food>;
                        }
                    })
                }
            </Row>
        </Container>
    );
};

export default Breakfast;