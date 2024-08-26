import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Products({ addItemToCart }) {
  const basePrices = [220, 320, 400, 550, 800];
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);

  const handleClick = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleBuyNowClick = (index) => {
    console.log("Clicked index:", index);
    setModalContent(index);
    setOrderConfirmed(false);
    setShowBuyNowModal(true);
  };

  const handleConfirmOrder = () => setOrderConfirmed(true);

  const handleCloseModal = () => {
    console.log("Modal closed, resetting modalContent");
    setShowBuyNowModal(false);
    setSaveMessage(null);
  };

  const cardStyle = (isHovered) => ({
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
    overflow: 'hidden',
  });

  const cardImgStyle = (isHovered) => ({
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    width: '100%',
  });

  const handleSaveClick = async (index) => {
    const itemData = {
      itemImage: `https://www.kausikcrackers.com/image/cache/catalog/sparkels/${[
        '7cm%20ele',
                  '7cm%20color',
                  '7cm%20green',
                  '7cm%20green%20(1)',
                  '10cm%20green'
      ][index]}-228x228.png`,
      itemName: [
        'Little Hearts',
        'ANGRYBIRDS (26-ITEM)',
        'FUNTIME (32-ITEM)',
        'THUNDER FALLS (40-ITEM)',
        'CELEBRITY'
      ][index],
      itemPrize: basePrices[index] * counts[index],
      quantity: counts[index]
    };

    addItemToCart(itemData); 

    try {
      const response = await axios.post('http://localhost:7000/items', itemData);
      setSaveMessage(`Your item "${itemData.itemName}" with quantity ${counts[index]} and a total cost of ₹${itemData.itemPrize} is saved successfully.`);
    } catch (error) {
      console.error('There was an error saving the item!', error);
      setSaveMessage('There was an error saving the item.');
    }
  };

  return (
    <Container style={{ padding: '20px' }}>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Products
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Sparkles</Breadcrumb.Item>
      </Breadcrumb>
      <h1 style={{ color: '#FFB22C', textAlign: 'center' }}>KIDS LIKE PRODUCTS</h1>
      <br />
      <Row className="g-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <Col md={3} key={index}>
            <div
              style={cardStyle(hoveredIndex === index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Card style={{ width: '100%' }}>
                <Card.Img
                  variant="top"
                  src={`https://www.kausikcrackers.com/image/cache/catalog/sparkels/${index === 0 ? '7cm%20ele' : index === 1 ? '7cm%20color' : index === 2 ? '7cm%20green' : index === 3 ? '7cm%20green%20(1)' : '10cm%20green'}-228x228.png`}
                  style={cardImgStyle(hoveredIndex === index)}                                
                />
                <Card.Body>
                  <Card.Title>
                    <a href="#" style={{ fontSize: '20px' }}>
                      {index === 0 ? 'Little Hearts' : index === 1 ? 'ANGRYBIRDS (26-ITEM)' : index === 2 ? 'FUNTIME (32-ITEM)' : index === 3 ? 'THUNDER FALLS (40-ITEM)' : 'CELEBRITY'}
                    </a>
                  </Card.Title>
                  <Card.Text>
                    <p style={{ fontSize: '10px' }}>
                      {index === 0 ? 'Little Hearts (16 ITEM).' : index === 1 ? 'ANGRYBIRDS (26-ITEM)..' : index === 2 ? 'FUNTIME (32-ITEM)..' : index === 3 ? 'THUNDER FALLS (40-ITEM)..' : 'Little Hearts (16 ITEM).'}
                    </p>
                  </Card.Text>
                  <br />
                  <Card.Text>
                    <p>
                      <b>₹{basePrices[index] * counts[index]}</b>
                    </p>
                    <p>Ex Tax: ₹{basePrices[index] * counts[index]}</p>
                  </Card.Text>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Button
                      className="but1"
                      style={{ height: '40px', width: '100%', textAlign: 'center', backgroundColor: 'white', color: 'black' }}
                    >
                      {counts[index]}
                    </Button>
                    <Button
                      className="but"
                      style={{
                        height: '40px',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: 'brown',
                      }}
                      onClick={() => handleClick(index)}
                    >
                      Add to cart
                    </Button>
                    <Button
                      className="buy-now"
                      style={{
                        height: '40px',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: 'green',
                      }}
                      onClick={() => handleBuyNowClick(index)}
                    >
                      Buy Now
                    </Button>
                    <Button
                      className="save"
                      style={{
                        height: '40px',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        backgroundColor: 'blue',
                      }}
                      onClick={() => {
                        handleSaveClick(index); 
                        handleBuyNowClick(index); 
                      }}
                    >
                      Save
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={showBuyNowModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent !== null && (
            <div>
              <img
                src={`https://www.kausikcrackers.com/image/cache/catalog/giftbox/${[
                  '7cm%20ele',
                  '7cm%20color',
                  '7cm%20green',
                  '7cm%20green%20(1)',
                  '10cm%20green'
                ][modalContent]}-400x400.png`}
                alt="Product"
                style={{ width: '100%' }}
              />
              <h3>{[
                'Little Hearts',
                'ANGRYBIRDS (26-ITEM)',
                'FUNTIME (32-ITEM)',
                'THUNDER FALLS (40-ITEM)',
                'CELEBRITY'
              ][modalContent]}</h3>
              <p>
                {[
                  'Little Hearts (16 ITEM).',
                  'ANGRYBIRDS (26-ITEM)..',
                  'FUNTIME (32-ITEM)..',
                  'THUNDER FALLS (40-ITEM)..',
                  'CELEBRITY'
                ][modalContent]}
              </p>
              <h4>Price: ₹{basePrices[modalContent] * counts[modalContent]}</h4>
            </div>
          )}
          {orderConfirmed && (
            <div>
              <h4>Your order is confirmed!</h4>
              <p>Thank you for shopping with us.</p>
            </div>
          )}
          {saveMessage && (
            <div>
              <p>{saveMessage}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!orderConfirmed ? (
            <>
              <Button variant="secondary" onClick={handleCloseModal}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleConfirmOrder}>
                Confirm Your Order
              </Button>
            </>
          ) : (
            <Button variant="primary" onClick={handleCloseModal}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Products;
