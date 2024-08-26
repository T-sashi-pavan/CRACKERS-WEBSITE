import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Cart({ cartItems }) {
  return (
    <Container style={{ padding: '20px' }}>
      <h1 style={{ color: '#FFB22C', textAlign: 'center' }}>Your Cart</h1>
      <Row className="g-4">
        {cartItems.map((item, index) => (
          <Col md={3} key={index}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src={item.itemImage} />
              <Card.Body>
                <Card.Title>{item.itemName}</Card.Title>
                <Card.Text>
                  <p><b>₹{item.itemPrize}</b></p>
                  <p>Quantity: {item.quantity}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cart;
