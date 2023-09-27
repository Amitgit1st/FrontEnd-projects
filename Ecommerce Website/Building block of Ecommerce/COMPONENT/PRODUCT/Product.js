import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const productsArr = [

    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },

    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },

    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },

    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }

]


const Product = () => {
    const ProductList = productsArr.map((item, index) => (

        <Col key={index} xs={12} lg={4} className="mb-4">

            <Row>
                <div className="fw-bold text-center" >{item.title}</div>
                <div>
                    <img src={item.imageUrl} alt={item.title} className="mt-10" />
                </div>
                <div className="fw-bold">
                    ${item.price}
                    <Button variant="success" size="sm" >ADD TO CART</Button>
                </div>
            </Row>

        </Col>



    ));

    return (
        <Container>
            <Row className="justify-content-center">{ProductList}</Row>
            <div className="text-center mt-4"> {/* Center horizontally */}
                <Button variant="secondary" size="sm" className="mb-4" href="#cart">SEE THE CART</Button>
            </div>
        </Container>
    );
};

export default Product;
