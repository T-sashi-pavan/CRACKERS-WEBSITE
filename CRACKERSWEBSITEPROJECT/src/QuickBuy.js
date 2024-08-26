import React, { useState } from 'react';
import { Container, Image, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import axios from 'axios';

const Counter = ({ price, productImage, productName }) => {
  const [count, setCount] = useState(1);
  const [status, setStatus] = useState("Add to Cart");
  const [showModal, setShowModal] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleClick = () => {
    setCount(count + 1);
    if (status === "Add to Cart") {
      setStatus("Add more");
    }
  };

  const handleBuyNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    const handleConfirmOrder = () => setOrderConfirmed(true);

  const handleSaveClick = async () => {
    try {
      const itemData = {
        itemImage: productImage,
        itemName: productName,
        itemPrize: price * count
      };

      const response = await axios.post('http://localhost:7000/items', itemData);
      setSaveMessage(`Your item "${productName}" with quantity ${count} and a total cost of ₹${price * count} is saved successfully.`);
    } catch (error) {
      console.error('There was an error saving the item!', error);
      setSaveMessage('There was an error saving the item.');
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <p style={{ height: '25px', width: '40px', borderRadius: '10%', backgroundColor: 'white', textAlign: 'center', lineHeight: '20px' }}>
            {count}
          </p>
          <button onClick={handleClick} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <i className={status === "Add to Cart" ? "fa fa-shopping-cart" : "fa fa-cart-plus"} aria-hidden="true"></i>
            {status}
          </button>
        </div>
        <button
          onClick={handleBuyNowClick}
          style={{ display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}
        >
          Buy Now
        </button>
        <button
          onClick={handleSaveClick}
          style={{ display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: 'blue', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '5px' }}
        >
          Save
        </button>
        <p>Total Price: ₹{price * count}</p>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Your Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={productImage} rounded fluid />
          <h5>{productName}</h5>
          <p>Quantity: {count}</p>
          <p>Total Price: ₹{price * count}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
          <Button variant="primary" onClick={handleConfirmOrder}>Confirm Your Order</Button>
        </Modal.Footer>
      </Modal>

      {orderConfirmed && (
        <div style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <h4>Your order is confirmed!</h4>
          <p>Thank you for shopping with us.</p>
        </div>
      )}

      {saveMessage && (
        <div style={{ position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', zIndex: 1000 }}>
          <p>{saveMessage}</p>
        </div>
      )}
    </>
  );
};

const QuickBuy = () => {
  const data = [
    { ProductImage: 'https://www.kausikcrackers.com/image/cache/catalog/giftbox/LittleCrads%20(1)%20(1)-200x200.png', ProductName: "Little Hearts", UnitPrice: 220 },
    { ProductImage: 'https://www.kausikcrackers.com/image/cache/catalog/sparkels/7cm%20ele-200x200.png', ProductName: "7 CM ELECTRIC SPARKLERS (10 pcs)", UnitPrice: 7 },
    { ProductImage: 'https://www.kausikcrackers.com/image/cache/catalog/sparkels/7cm%20color-200x200.png', ProductName: "7CM COLOUR SPARKLERS (10 pcs)", UnitPrice: 10 },
    { ProductImage: 'https://www.kausikcrackers.com/image/cache/catalog/sparkels/7cm%20green%20(1)-200x200.png', ProductName: "7CM RED SPARKLERS (10 pcs)", UnitPrice: 15 },
    { ProductImage: 'https://www.kausikcrackers.com/image/cache/catalog/sound%20crackers/kruvi%20(1)-200x200.png', ProductName: "3 1/2 LAKSHMI", UnitPrice: 175 },
    { ProductImage: 'https://www.kausikcrackers.com/image/cache/catalog/giftbox/Celibrity%20(1)%20(1)-200x200.png', ProductName: "THUNDER FALLS (40-ITEM)", UnitPrice: 275 }
  ];

  return (
    <Container>
      <div style={{ padding: '10px', background: 'transparent' }}>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/register">All Products</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <h1>LATEST</h1>

        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#FFDE4D' }}>
          <thead>
            <tr>
              <th style={{ border: '2px solid white', padding: '8px', color: 'black' }}>Product Image</th>
              <th style={{ border: '2px solid white', padding: '8px', color: 'black' }}>Product Name</th>
              <th style={{ border: '2px solid white', padding: '8px', color: 'black' }}>Quantity</th>
              <th style={{ border: '2px solid white', padding: '8px', color: 'black' }}>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={{ border: '2px solid white', padding: '8px' }}><Image src={item.ProductImage} rounded /></td>
                <td style={{ border: '2px solid white', padding: '8px' }}>{item.ProductName}</td>
                <td style={{ border: '2px solid white', padding: '8px' }}><Counter price={item.UnitPrice} productImage={item.ProductImage} productName={item.ProductName} /></td>
                <td style={{ border: '2px solid white', padding: '8px' }}>₹{item.UnitPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default QuickBuy;
