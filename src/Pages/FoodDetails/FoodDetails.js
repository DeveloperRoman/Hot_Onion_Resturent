import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';


const foods = [
    {
      id: 1,
      name: "Bagel and cream cheese",
      price: 6.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "breakfast",
      image: "https://i.ibb.co/s2jpXsc/breakfast4.png"
    },
    {
      id: 2,
      name: "Breakfast sandwich",
      price: 9.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "breakfast",
      image: "https://i.ibb.co/wWJTZV4/breakfast5.png"
    },
    {
      id: 3,
      name: "Baked chiken",
      price: 10.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "breakfast",
      image: "https://i.ibb.co/sqfF7px/breakfast6.png"
    },
    {
      id: 4,
      name: "eggs benedict",
      price: 8.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "breakfast",
      image: "https://i.ibb.co/HqqyFYD/breakfast1.png"
    },
    {
      id: 5,
      name: "toast croissant fried egg",
      price: 19.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "breakfast",
      image: "https://i.ibb.co/h9W7Dhy/breakfast2.png"
    },
    {
      id: 6,
      name: "full breakfast fried egg toast brunch",
      price: 3.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "breakfast",
      image: "https://i.ibb.co/mbFGgqM/breakfast3.png"
    },
    {
      id: 7,
      name: "healthy meal plan",
      price: 23.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "lunch",
      image: "https://i.ibb.co/qg0MyhS/lunch2.png"
    },
    {
      id: 8,
      name: "fried chicken bento",
      price: 9.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "lunch",
      image: "https://i.ibb.co/3s5NJ3q/lunch3.png"
    },
    {
      id: 9,
      name: "tarragon rubbed salmon",
      price: 6.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "lunch",
      image: "https://i.ibb.co/M8MjQhp/lunch4.png"
    },
    {
      id: 10,
      name: "indian bunch",
      price: 8.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "lunch",
      image: "https://i.ibb.co/4sWPszW/lunch5.png"
    },
    {
      id: 11,
      name: "beef steak",
      price: 15.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "lunch",
      image: "https://i.ibb.co/qNypWSD/lunch6.png"
    },
    {
      id: 12,
      name: "honey soy glazed salmon with peppers",
      price: 7.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "lunch",
      image: "https://i.ibb.co/3v8Wy4V/lunch1.png"
    },
    {
      id: 13,
      name: "salmon with grapefruit and lentil salad",
      price: 9.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "dinner",
      image: "https://i.ibb.co/mR49nX9/dinner2.png"
    },
    {
      id: 14,
      name: "lemony salmon piccata",
      price: 10.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "dinner",
      image: "https://i.ibb.co/BVwZJxH/dinner3.png"
    },
    {
      id: 15,
      name: "pork tenderloin with quinoa pilaf",
      price: 12.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "dinner",
      image: "https://i.ibb.co/6nsTRPH/dinner4.png"
    },
    {
      id: 16,
      name: "Bagel and cream cheese",
      price: 6.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "dinner",
      image: "https://i.ibb.co/KsnFdDZ/dinner5.png"
    },
    {
      id: 17,
      name: "french fries with cheese",
      price: 8.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "dinner",
      image: "https://i.ibb.co/znM9SKF/dinner6.png"
    },
    {
      id: 18,
      name: "garlic butter baked salmon",
      price: 6.99,
      description: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prospous increasing surrounded.",
      category: "dinner",
      image: "https://i.ibb.co/1QFb54d/dinner1.png"
    }
  ]


const FoodDetails = () => {
    const { foodId } = useParams();
    const [quantity, setQuantity] = useState(1);

    const plus = () => {
        setQuantity(quantity + 1);
    }

    const minus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }
    
    let displayFood = foods.find(food => food.id === parseInt(foodId));
    return (
        <div className="my-4">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h2 className="text-capitalize fs-4 mb-4">{displayFood.name}</h2>
                        <p className="text-muted pe-5">{displayFood.description}</p>
                        <div className="d-flex gap-5">
                            <h4 className="fw-bold fs-1">${displayFood.price}</h4>
                            <div className="border border-1 border-secondary w-25 p-2 rounded-pill d-flex  justify-content-around fs-3 pointer">
                                <span
                                    onClick={minus}
                                    style={{ cursor: 'pointer' }}>-
                                </span>
                                <span>{quantity}</span>
                                <span
                                    onClick={plus}
                                    style={{ cursor: 'pointer' }}
                                    className="text-danger">+
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <img className="img-fluid" src={displayFood.image} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FoodDetails;