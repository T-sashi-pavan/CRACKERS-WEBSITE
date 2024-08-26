import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import QuickBuy from './QuickBuy';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Products from './products';
import Pricelist from './Pricelist';
import Sparkles from './Sparkles';
import Candles from './Candles';
import Sounds from './Sounds';
import Flowerpots from './Flowerpots';
import Bombs from './Bombs';
import Chakkras from './Chakkras';
import Cart from './Cart';

import Register from './Register';
import Login from './Login';
import { addItem } from './itemServices/itemServices'; 
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Modal from 'react-bootstrap/Modal';
import {  ListGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';

const App = ({ imageSrc }) => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timer, setTimer] = useState(60);
  
  // State management
  const [counts, setCounts] = useState([1, 1, 1, 1, 1]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showBuyNowModal, setShowBuyNowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

 const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  // Handler functions
  const handleForgotPasswordClick = () => setShowForgotPassword(true);


  const [hoveredCard, setHoveredCard] = useState(null);

  const renderTooltip = (props, text) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const username = event.target.newUsername.value;
    const password = event.target.newPassword.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (username === '' || password === '' || confirmPassword === '') {
      alert('All fields must be filled out');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Password has been reset successfully!');
    setShowForgotPassword(false);
  };

  const basePrices = [220, 320, 400, 550, 800];

  const handleClick = (index) => {
    const newCounts = [...counts];
    newCounts[index]++;
    setCounts(newCounts);
  };

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleBuyNowClick = (index) => {
    setModalContent(index);
    setOrderConfirmed(false);
    setShowBuyNowModal(true);
  };

  const handleConfirmOrder = () => setOrderConfirmed(true);

  const handleCloseModal = () => setShowBuyNowModal(false);

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


    const [clickedIcon, setClickedIcon] = useState(null);

  const handleIconClick = (iconName) => {
    setClickedIcon(clickedIcon === iconName ? null : iconName);
  };

 const styles = {
    body: {
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    },
    code: {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
    },
    headingclass: {
      color: 'orange'
    },
    headingclassc1: {
      color: 'black'
    },
    h2: {
      textAlign: 'center'
    },
    sarayuParagraph: {
      textAlign: 'center',
      margin: '0 auto',
      maxWidth: '600px',
      lineHeight: 1.5,
      display: 'block',
      position: 'relative'
    },
    yUsTitleBorder: {
      color: 'orange'
    },
    row1:{
      padding:'60px 0px',
      margin:'0px 0px'
    },
     row2:{
      padding:'10px 40px'
    },
    col1:{
      padding:'0px 50px',
      margin:'0px 5px 0px 0px'

          },
          col2:{
      padding:'0px 50px',
      margin:'0px 5px 0px 0px'

          },
    iconCircle: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      backgroundColor: 'brown',
      borderRadius: '50%',
      color: 'white',
      fontSize: '20px',
      marginRight: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    iconCircleClicked: {
      backgroundColor: 'orange'
    },
    iconCircleIcon: {
      margin: 0
    },
    whyContainer: {
      maxWidth: '800px',
      lineHeight: 1.5,
      textAlign: 'left',
      margin: '0 auto'
    },
    h4: {
      color: 'orange'
    },
    yUsContent: {
      marginBottom: '30px'
    },
    dFlexColumn: {
      display: 'flex',
      flexDirection: 'column',
            padding:'0px 0px'

    },
    mb4: {
      marginBottom: '1.5rem'
    }
  };


  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
 const Home = () => (
    <app/>
  );

  return (
    <>
      <Router>
        <div>
          <Navbar expand="lg" className="bg-white" style={{ backgroundColor: 'coral' }}>
            <Container fluid>
              <Navbar.Brand href="/" style={{ maxHeight: '100px', padding: '0px 0px 0px 130px' }}>
                <Figure.Image
                  width={170}
                  height={160}
                  alt="171x180"
                  src="https://www.kausikcrackers.com/image/catalog/logo/Kausik-Crackers-Logo-web.jpg"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  <Form className="d-flex text-white" style={{ borderRadius: '0.25rem', height: '50%', padding: '30px' }}>
                    <div className="input-container" style={{ width: '100%', backgroundColor: 'black' }}>
                      <FormControl
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        className="form-control-custom custom-placeholder"
                        style={{
                          flex: 1,
                          border: '0',
                          backgroundColor: 'black',
                          color: 'white',
                          paddingLeft: '0.75rem',
                        }}
                      />
                      <Button
                        variant="outline-dark"
                        className="button-custom"
                        style={{
                          backgroundColor: '#ffc107',
                          color: 'white',
                        }}
                      >
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </Button>
                    </div>
                  </Form>
                  <Nav.Link as={Link} to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 35px' }}>
                    <i className="fa fa-home" aria-hidden="true" style={{ fontSize: '30px', color: '#FF9100' }}></i>
                    <span style={{ marginTop: '5px' }}><b>Home</b></span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/quickbuy" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 35px' }}>
                    <i className="fa fa-shopping-bag" aria-hidden="true" style={{ fontSize: '30px', color: '#FF9100' }}></i>
                    <span style={{ marginTop: '5px' }}><b>Quick Buy</b></span>
                  </Nav.Link>
                <Nav.Link as={Link} to="/cart" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 35px' }}>
          <i className="fa fa-shopping-cart" aria-hidden="true" style={{ fontSize: '30px', color: '#FF9100' }}></i>
          <span style={{ marginTop: '5px' }}><b>Cart list({cartItems.length})</b></span>
        </Nav.Link>
                  <Nav.Link style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px 35px' }}>
                    <i className="fa fa-user-circle" aria-hidden="true" style={{ fontSize: '30px', color: '#FF9100', padding: '20px 40px 0px 40px' }}></i>
                    <b style={{ color: 'black' }}>
                      <NavDropdown title="Sign In" id="navbarScrollingDropdown" style={{ padding: '0px 0px 13px 0px' }}>
                        <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
                      </NavDropdown>
                    </b>
                  </Nav.Link>
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>


<Navbar  style={{ padding: '0px',backgroundColor:'#FFAF00' }}>
  <Container>
    <Nav className="me-auto">
      <Nav.Link
        as={Link} to="/quickbuy"
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 10px', // Padding around the text
          margin: '0 10px', // Space between links
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', // Optional: rounded corners
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        ALLPRODUCTS
      </Nav.Link>
       <Nav.Link
          as={Link} to="/price-list"      
           style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 10px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        GIFTBOX
      </Nav.Link>
       <Nav.Link
          as={Link} to="/pricelist"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px',
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        PRICELIST
      </Nav.Link>
       <Nav.Link
          as={Link} to="/sparkles"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 5px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        SPARKLERS
      </Nav.Link>
       <Nav.Link
          as={Link} to="/candles"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 5px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        CANDLESANDPENCILS
      </Nav.Link>
       <Nav.Link
          as={Link} to="/sounds"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px',
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        SOUNDCRACKERS
      </Nav.Link>
       <Nav.Link
          as={Link} to="/flowerpots"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        FLOWERPOTS
      </Nav.Link>
       <Nav.Link
          as={Link} to="/chakkras"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', // Bootstrap warning color
          padding: '5px 20px', // Padding around the text
          margin: '0 10px', // Space between links
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', // Optional: rounded corners
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        CHAKKRAS
      </Nav.Link>
      <Nav.Link
          as={Link} to="/bombs"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 5px', 
           // Space between links
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        BOMBS
      </Nav.Link>
      
    </Nav>
  </Container>
</Navbar>


<Navbar  style={{ padding: '5px',backgroundColor:'#FFAF00' }}>
  <Container>
    <Nav className="me-auto">
      <Nav.Link
          as={Link} to="/chakkras"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',
          fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        PAPERBOMBS
      </Nav.Link>
       <Nav.Link
          as={Link} to="/candles"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        BIJILI
      </Nav.Link>
       <Nav.Link
          as={Link} to="/flowerpots"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px',
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        NOVELTIES
      </Nav.Link>
       <Nav.Link
          as={Link} to="/bombs"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px',
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        ROCKETS
      </Nav.Link>
       <Nav.Link
          as={Link} to="/sparkles"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        FANCY
      </Nav.Link>
       <Nav.Link
          as={Link} to="/sounds"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px',
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        SHOTS
      </Nav.Link>
       <Nav.Link
          as={Link} to="/bombs"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 20px', 
          margin: '0 10px', 
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        MATCHBOXES
      </Nav.Link>
      <Nav.Link
          as={Link} to="/chakkras"      
        style={{
          color: 'black',
          backgroundColor: '#FFAF00', 
          padding: '5px 5px', 
           // Space between links
          textDecoration: 'none',
          display: 'inline-block',
          borderRadius: '4px', 
          transition: 'background-color 0.3s, color 0.3s',fontSize:'13px'
        }}
        onMouseEnter={(e) => {
          e.target.style.color = 'white';
          e.target.style.backgroundColor = 'black';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = 'black';
          e.target.style.backgroundColor = '#FFAF00';
        }}
      >
        ROLLCAPSANDGUNS
      </Nav.Link>
      
    </Nav>

  </Container>
</Navbar>








         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          <Route path="/quickbuy" element={<QuickBuy />} />
      <Route path="/price-list" element={<Products   addItemToCart={addItemToCart}/>} />
            <Route path="/pricelist" element={<Pricelist />} />
            <Route path="/sparkles" element={<Sparkles addItemToCart={addItemToCart} />} />
            <Route path="/candles" element={<Candles addItemToCart={addItemToCart} />} />
            <Route path="/sounds" element={<Sounds />} />
            <Route path="/flowerpots" element={<Flowerpots />} />
            <Route path="/bombs" element={<Bombs />} />
            <Route path="/chakkras" element={<Chakkras />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />

          </Routes>
        </div>
      </Router>





  <div>
 <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kausikcrackers.com/image/cache/catalog/banner/banner-3-1140x380.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kausikcrackers.com/image/cache/catalog/banner/kaushik-banner_5-1140x380.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kausikcrackers.com/image/cache/catalog/banner/kaushik-banner-4-1140x380.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kausikcrackers.com/image/cache/catalog/banner/banners2-1140x380.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
       <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.kausikcrackers.com/image/cache/catalog/banner/banners-4-1140x380.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
</div>




 <div className="MainBox p-5">
      <div className="heading" style={{ textAlign: "center",fontFamily:"serif",fontSize:"20px" }}>
        <h3 >
          <strong style={{ color: "#FFB22C" }}>WELCOME TO </strong>
          <span style={{ color: "lightbrown" }}>
            <strong>KAUSIK CRACKERS</strong>
          </span>
        </h3>
      </div>
      <div className="content1" style={{padding:"10px 30px"}}>
        <article style={{ fontSize:"18px",fontFamily:"serif",color:"black" }}><p>
          Kausik Crackers has earned its reputation as the best online crackers shop in Sivakasi, the heart of the Indian firecracker industry. When it comes to celebrating festivals like Diwali with a bang, this Online Pattasu Kadai is the ultimate destination for all your firecracker needs. With an enticing 80% discount offer, Kausik Crackers is not just a name but a promise of quality and affordability. In the digital age, the concept of Online Crackers in Sivakasi has revolutionized the way we shop for fireworks. Kausik Crackers has embraced this change, making it easier than ever to indulge in the joy of Sivakasi Crackers Online. Their user-friendly website allows you to Order Crackers Online effortlessly, ensuring a hassle-free experience. What sets Kausik Crackers apart from the rest is their dedication to providing Sivakasi Firecrackers Online of the highest quality. They offer an extensive range of Indian Crackers that capture the true essence of the festival of lights. Whether you're looking for vibrant sparklers, thunderous rockets, or dazzling flower pots, you can find it all at this Online Pattasu Kadai. Diwali, the festival of lights, is incomplete without the mesmerizing display of fireworks. Kausik Crackers understands the significance of this tradition and offers a wide variety of Diwali Crackers Online in Sivakasi. With their exceptional discounts, you can now light up the night sky without burning a hole in your pocket. The convenience of Online Crackers Shopping cannot be overstated. Kausik Crackers brings the fireworks store to your fingertips, eliminating the need for crowded streets and long queues. Their commitment to Online Crackers Purchase in Sivakasi ensures that your festive preparations are stress-free and efficient. The safety of their customers is a top priority for Kausik Crackers. They adhere to strict quality standards and safety regulations, ensuring that every purchase from their Online Pattasu Kadai is a responsible one. Their expert team is always available to guide you on the safe usage of the purchased items, making your celebration worry-free. When it comes to Crackers Online Shopping, Kausik Crackers is the undisputed leader. Their vast selection, unbeatable prices, and commitment to customer satisfaction make them the preferred choice for anyone looking to Buy Diwali Crackers Gift Box Online. Whether you're celebrating Diwali, weddings, or any other special occasion, Kausik Crackers has you covered with the finest Indian Crackers. In conclusion, Kausik Crackers is the go-to destination for all your Fireworks Online needs. With their extensive range, exceptional discounts, and dedication to safety, they have earned their place as the best Online Crackers Shop in Sivakasi. So, don't miss out on the 80% discount offer; visit Kausik Crackers today for an unforgettable Diwali celebration filled with the magic of firecrackers.
          </p>

        </article>
      </div>
    </div>

<div className="services p-5">
  <div className="MainBox">
      <div className="heading" style={{ textAlign: "center",fontSize:"10px" , boderColor:"#FFA823"}}>
        <h1 >
          <strong style={{ color: "#FFA823" }}>Explore Our</strong>
          <span style={{ color: "lightbrown" }}>
            <strong> Services</strong>
          </span>
        </h1>
      </div>
      <div className="fullblock">
        <div className="content">
          <h5  style={{padding:"10px" }} >
            <i class="fa fa-tags" aria-hidden="true" style={{ color: "#FFA823",fontSize:"40px",gap:"10px" }}></i>
            <span style={{ color: "lightbrown" }}>
              <strong style={{padding:"20px" }}>Minimum Order</strong>
            </span>
          </h5>
          <br/>
          <p style={{paddingLeft:"30px" }}>Below Rs.3000 order will not be acceptable</p>
          
        </div>
        <div className="content">
          <h5  style={{padding:"10px" }}>
            <i class="fa fa-puzzle-piece" aria-hidden="true" style={{ color: "#FFA823",fontSize:"40px" }}></i>
            <span style={{ color: "lightbrown" }}>
              <strong style={{padding:"20px" }}>Speed Services</strong>
            </span>
          </h5>
          <br/>
          <p style={{paddingLeft:"30px" }}>Your Order will be dispated within week at most.</p>
          
          
        </div>
        <div className="content">
        <h5  style={{padding:"10px" }}>
            <i class="fa fa-users" aria-hidden="true" style={{ color: "#FFA823" ,fontSize:"40px"}}></i>
            <span style={{ color: "lightbrown" }}>
              <strong style={{padding:"20px" }}>Who We Are</strong>
            </span>
          </h5>
          <br/>
          <p style={{paddingLeft:"30px" }}>We are the one stop shop for all crackers online shopping.</p>
          
          
        </div>
      </div>

    </div>


<div>
 <Container fluid>
  <h1 style={{textAlign:"center"}}>
        <span style={{ color: 'gold' }}><i>Explore Our </i></span>
        <span style={{ color: '#3F302A' }}><i>Categories</i></span>
    </h1>
    <Row style={{margin:"0px 0px 0px 0px"}}>

    <Col >
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/giftboxkk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 1 ? 'gold' : '#3F302A',
                color: hoveredCard === 1 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 1 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
                ) : ('GIFTBOX')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/soundcrackersk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 2 ? 'gold' : '#3F302A',
                color: hoveredCard === 2 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 2 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : ('SOUND CRAKERS')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/Bombk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 3 ? 'gold' : '#3F302A',
                color: hoveredCard === 3 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 3 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : ('BOMBS')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(4)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/flowerpotsk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 4 ? 'gold' : '#3F302A',
                color: hoveredCard === 4 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 4 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : ('FLOWER POTS')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>


    <Row style={{margin:"0px 0px 0px 0px"}}>
    <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(5)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/chakkarakk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 5 ? 'gold' : '#3F302A',
                color: hoveredCard === 5 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 5 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
                ) : ('CHAKKARA')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(6)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/sparklesk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 6 ? 'gold' : '#3F302A',
                color: hoveredCard === 6 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 6 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : ('SPARKLES')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(7)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/candlesk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 7 ? 'gold' : '#3F302A',
                color: hoveredCard === 7 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 7 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : ('CANDLES')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(8)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/kidskk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 8 ? 'gold' : '#3F302A',
                color: hoveredCard === 8 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 8 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : ('KIDS FAV')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>

    

    <Row style={{margin:"0px 0px 0px 0px"}}>
    <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(9)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/fancyk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 9 ? 'gold' : '#3F302A',
                color: hoveredCard === 9 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 9 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
                ) : ('FANCY')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(10)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/shotsk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 10 ? 'gold' : '#3F302A',
                color: hoveredCard === 10 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 10 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : ('SHOTS')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(11)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/walak.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 11 ? 'gold' : '#3F302A',
                color: hoveredCard === 11 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 11 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : ('GARLAND')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>

      <Col>
        <Card style={{ width: '15rem' }} className="zoom"
          onMouseEnter={() => setHoveredCard(12)}
          onMouseLeave={() => setHoveredCard(null)}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Image src={imageSrc="https://www.kausikcrackers.com/catalog/view/theme/default/stylesheet/imges/rocketsk.png"} width="45%" height="100em" textAlign="center" style={{ display: 'block', margin: '0 auto' }} />
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                backgroundColor: hoveredCard === 12 ? 'gold' : '#3F302A',
                color: hoveredCard === 12 ? 'yellow' : 'white',
                textAlign: 'center',
              }}
            >
              {hoveredCard === 12 ? (
                <table style={{ width: '100%' }}>
                  <tbody>
                    <tr>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '46')}
                        >
                          <span>HITS</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, '81')}
                        >
                          <span>WEBSITES</span>
                        </OverlayTrigger>
                      </td>
                      <td style={{ width: '5rem', textAlign: 'center' }}>
                        <OverlayTrigger
                          placement="top"
                          overlay={(props) => renderTooltip(props, 'SOCIAL')}
                        >
                          <span>SHARE</span>
                        </OverlayTrigger>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : ('ROCKETS')}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </Container>

</div>

</div>
<div className="chooseus ">
    <Container id="sarayu">
        <Row>
          <Col>
            <h2 style={styles.h2}>
              <span style={styles.headingclass}>WHY CHOOSE </span>
              <span style={styles.headingclassc1}>US</span>
            </h2>
            <p style={styles.sarayuParagraph}>
              We provide all top branded deepavali crackers & other occasional firecrackers
              retail and wholesale. We build your surprising occasion with lighting and
              sensational Gift boxes with our inspiring crackers.
            </p>
            <center><span style={styles.yUsTitleBorder}>_____</span></center>
          </Col>
        </Row>
      </Container>

      <Container id="why" style={styles.whyContainer}>
        <Row style={styles.row1}>
          <Col md={6} style={styles.dFlexColumn}>
            <div className="y-us-content mb-4" style={styles.yUsContent}>
              <h4 style={styles.h4}>
                <div
                  style={{
                    ...styles.iconCircle,
                    ...(clickedIcon === 'safe' ? styles.iconCircleClicked : {})
                  }}
                  onClick={() => handleIconClick('safe')}
                >
                  <i className="fas fa-fire" style={styles.iconCircleIcon}></i>
                </div>
                Safe To Use
              </h4>
              <p>
                The colorful crackers are manufactured by utilizing optimum quality chemical elements and sophisticated techniques in adherence to international quality standards.
              </p>
            </div>
          </Col>
          <Col style={styles.col1}>
            <div className="y-us-content" style={styles.yUsContent}>
              <h4 style={styles.h4}>
                <div
                  style={{
                    ...styles.iconCircle,
                    ...(clickedIcon === 'quality' ? styles.iconCircleClicked : {})
                  }}
                  onClick={() => handleIconClick('quality')}
                >
                  <i className="fa fa-pagelines" aria-hidden="true" style={styles.iconCircleIcon}></i>
                </div>
                Quality
              </h4>
              <p>
                Our skilled quality controllers scan the products on well-defined quality parameters using modern testing tools and devices to ensure perfect products.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Container id="why1" style={styles.whyContainer}>
        <Row style={styles.row1}>
          <Col md={6} style={styles.dFlexColumn}>
            <div className="y-us-content mb-4" style={styles.yUsContent}>
              <h4 style={styles.h4}>
                <div
                  style={{
                    ...styles.iconCircle,
                    ...(clickedIcon === 'satisfaction' ? styles.iconCircleClicked : {})
                  }}
                  onClick={() => handleIconClick('satisfaction')}
                >
                  <i className="fa fa-heart" aria-hidden="true" style={styles.iconCircleIcon}></i>
                </div>
                Customer Satisfaction
              </h4>
              <p>
                Our easy payment modes, transparent dealings, competitive price range, and ethical business policies have enabled our customers to get satisfied with our services.
              </p>
            </div>
          </Col>
          <Col style={styles.col2}>
            <div className="y-us-content" style={styles.yUsContent}>
              <h4 style={styles.h4}>
                <div
                  style={{
                    ...styles.iconCircle,
                    ...(clickedIcon === 'price' ? styles.iconCircleClicked : {})
                  }}
                  onClick={() => handleIconClick('price')}
                >
                  <i className="fa fa-tags" aria-hidden="true" style={styles.iconCircleIcon}></i>
                </div>
                Genuine Price
              </h4>
              <p>
                We are producing safe and compliant crackers with the highest quality at a low price, enabling you to spread joy and happiness in all occasions by offering them quality-assured products.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
</div>




<div>
   <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#FFF1DB",width:"100%",padding:"80px",margin:"20px",height:"300px"}}>
      <div className="textblock" style={{margin:"20px"}}>
      <strong><i class="fa fa-window-restore" aria-hidden="true" style={{fontSize:"50px"}}></i></strong>
      <h1 style={{fontSize:"40px"}}><strong> 12 + </strong></h1>
      <p style={{fontSize:"20px"}}>Categories</p>
      </div>

      <div className="textblock" style={{margin:"20px"}}>
        <strong><i class="fa fa-magic" aria-hidden="true" style={{fontSize:"50px"}}></i></strong>
        <h1 style={{fontSize:"40px"}}><strong> 250 +</strong></h1>
        <p style={{fontSize:"20px"}}>Products</p>
      
      </div>

      <div className="textblock" style={{margin:"20px"}}>
       <strong><i class="fa fa-handshake-o" aria-hidden="true"  style={{fontSize:"50px"}}></i></strong>
        <h1 style={{fontSize:"40px"}}><strong> 1000 +</strong></h1>
        <p style={{fontSize:"20px"}}>Happy Customers</p>
      
      </div>

      <div className="textblock" style={{margin:"20px"}}>
       <strong><i class="fa fa-heartbeat" aria-hidden="true"  style={{fontSize:"50px"}}></i></strong>
        <h1 style={{fontSize:"40px"}}><strong>100 %</strong></h1>
        <p style={{fontSize:"20px"}}>Satisfaction</p>
      
      </div>
      
    </div>

</div>





          <div className="kidsproducts p-5">
            <Container style={{ padding: '20px' }}>
             
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
                          src={`https://www.kausikcrackers.com/image/cache/catalog/giftbox/${index === 0 ? 'LittleCrads%20(1)%20(1)' : index === 1 ? 'AngryBirds%20(1)' : index === 2 ? 'FunTime%20(1)%20(1)' : index === 3 ? 'ThunderFalls%20(1)%20(1)' : 'Celibrity%20(1)%20(1)'}-200x200.png`}
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
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                ))}
              </Row>

              {/* Modal for Buy Now */}
              <Modal show={showBuyNowModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                  <Modal.Title>Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {modalContent !== null && !orderConfirmed && (
                    <div>
                      <img
                        src={`https://www.kausikcrackers.com/image/cache/catalog/giftbox/${modalContent === 0 ? 'LittleCrads%20(1)%20(1)' : modalContent === 1 ? 'AngryBirds%20(1)' : modalContent === 2 ? 'FunTime%20(1)%20(1)' : modalContent === 3 ? 'ThunderFalls%20(1)%20(1)' : 'Celibrity%20(1)%20(1)'}-400x400.png`}
                        alt="Product"
                        style={{ width: '100%' }}
                      />
                      <h3>{modalContent === 0 ? 'Little Hearts' : modalContent === 1 ? 'ANGRYBIRDS (26-ITEM)' : modalContent === 2 ? 'FUNTIME (32-ITEM)' : modalContent === 3 ? 'THUNDER FALLS (40-ITEM)' : 'CELEBRITY'}</h3>
                      <p>
                        {modalContent === 0 ? 'Little Hearts (16 ITEM).' : modalContent === 1 ? 'ANGRYBIRDS (26-ITEM)..' : modalContent === 2 ? 'FUNTIME (32-ITEM)..' : modalContent === 3 ? 'THUNDER FALLS (40-ITEM)..' : 'Little Hearts (16 ITEM).'}
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
          </div>







<div >
<div className="container-fluid bg-light align-items-center">
      <div className="container">
        <section className="customer-logos slider align-items-center">
          <Slider {...settings}>
            <div className="slide"><img src="https://www.kausikcrackers.com/image/cache/catalog/manufactures/sslogo-130x100.png" alt="Logo 2" /></div>
            <div className="slide"><img src="https://www.kausikcrackers.com/image/cache/catalog/manufactures/aklogo-130x100.jpg" alt="Logo 3" /></div>
            <div className="slide"><img src="https://www.kausikcrackers.com/image/cache/catalog/manufactures/nachiyaar-130x100.jpg" alt="Logo 1" /></div>
            <div className="slide"><img style={{ width: '40%', height: '130px'}} src="https://www.miraclecrackers.com/images/miraclecrackers.png" alt="Logo 2" /></div>
            <div className="slide"><img style={{ width: '40%', height: '130px'}} height="10%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNBLuXY29uDjXgQRcxpcgxX6HvSvnDYrXUhkThpGdCURCPZbazmi8AO4Om8dZK7tGxUw&usqp=CAU" alt="Logo 3" /></div>
            <div className="slide"><img style={{ width: '40%', height: '130px'}} height="10%" src="data:image/png;base64,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" alt="Logo 1" /></div>
            <div className="slide"><img style={{ width: '40%', height: '130px'}} height="10%" src="data:image/jpeg;base64,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" alt="Logo 2" /></div>
            <div className="slide"><img style={{ width: '40%', height: '130px'}} height="10%" src="data:image/jpeg;base64,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" alt="Logo 3" /></div>
            <div className="slide"><img style={{ width: '40%', height: '130px'}} height="10%" src="data:image/jpeg;base64,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" height="10%" alt="Logo 1" /></div>
          </Slider>
        </section>
      </div>
    </div>
    </div>




<div>
    <footer className="text-center text-lg-start bg-body-tertiary text-muted container-fluid">
      {/* Section: Links */}
      <section>
        <div className="container-fluid text-center " style={{ backgroundColor: 'orange', paddingTop: '2%' }}>
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold mb-4">Information</h6>
              <p><a href="#!" className="text-reset">About us</a></p>
              <p><a href="#!" className="text-reset">Delivery Information</a></p>
              <p><a href="#!" className="text-reset">Privacy policy</a></p>
              <p><a href="#!" className="text-reset">Terms & Conditions</a></p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Customer Service</h6>
              <p><a href="#!" className="text-reset">Contact Us</a></p>
              <p><a href="#!" className="text-reset">Site map</a></p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">My account</h6>
              <p><a href="#!" className="text-reset">My account</a></p>
              <p><a href="#!" className="text-reset">Order</a></p>
              <p><a href="#!" className="text-reset">History</a></p>
              <p><a href="#!" className="text-reset">Wishlist</a></p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col"  style={{padding:'0px 140px 0px 0px' }}>
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Site Map</h6>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.589645694487!2d77.80669017587284!3d9.439384590639266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cf88fa9136fd%3A0xaf16d67160dc3629!2sKausikCrackers!5e0!3m2!1sen!2sin!4v1723799603344!5m2!1sen!2sin"
                style={{ border: '0', width: '200%', height: '230px',padding:'0px 280px 0px 0px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
           <div className="me-5 d-none d-lg-block" style={{float:'left'}}>
          <span>FOLLOW US ON:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div style={{padding:'30px 950px 0px 0px'}}>
         
         <a href="https://www.instagram.com/kausikcrackers/?igshid=NTc4MTIwNjQ2YQ%3D%3D" className="me-4 text-reset" style={{ fontSize: '30px'}}>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100092994116383&mibextid=2JQ9oc" className="me-4 text-reset" style={{ fontSize: '30px'}}>
          <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </a>
          <a href="https://api.whatsapp.com/send/?phone=%2B916369791151&text=Hi+%2Ckausik+Crackers...%21%2C+I+would+like+to+place+an+enquiry+with+you%21&type=phone_number&app_absent=0" className="me-4 text-reset" style={{ fontSize: '30px'}}>
            <i class="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/pulse/react-reactjs-difference-justacademy-ahmedabad-gsloc#:~:text=React%20is%20a%20JavaScript%20library,refer%20to%20the%20same%20library." className="me-4 text-reset" style={{ fontSize: '30px'}}>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com/@sivakasikausikcrackers-ux3kj" className="me-4 text-reset" style={{ fontSize: '33px'}}>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>

          </a>

        </div>
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="https://www.kausikcrackers.com/"><b>kausikcrackers</b></a>
      </div>
        </div>

      </section>

      

     
    </footer>

</div>




    </>
  );
}

export default App;
