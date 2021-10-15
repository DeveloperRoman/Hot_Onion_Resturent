import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useFood from '../../Hooks/useFood';
import Food from '../Home/Main/Food/Food';

const CheakoutAll = () => {
    const { foods } = useFood();

    return (
        <Container>
            <h1 className="text-center mt-4 mb-2">Cheak Out All Of Our Food & Recipe </h1>
            <Row>
                {
                    foods.map(food => <Food key={food.id} food={food}></Food>)
                }
            </Row>
        </Container>
    );
};

export default CheakoutAll;