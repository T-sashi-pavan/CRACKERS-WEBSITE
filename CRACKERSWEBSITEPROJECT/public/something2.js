import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForgotPassword: false,
      isLoggedIn: false,
    };
  }

  // Handler for "Forgot Password" click
  handleForgotPasswordClick = () => {
    this.setState({ showForgotPassword: true });
  };

  // Handler for the forgot password form submission
  handleRegisterSubmit = (event) => {
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
    this.setState({ showForgotPassword: false });
  };

  // Home Component
  Home = () => (
    <app/>
  );

  // Login Component
  Login = () => (
    <div>
      {!this.state.showForgotPassword ? (
        <div
          className="parallax"
          style={{
            padding: '20px',
            backgroundImage: 'url("https://www.shutterstock.com/image-vector/bursting-fireworks-stars-sparks-isolated-260nw-1913017447.jpg")',
            height: '600px',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Row>
            <Col>
              <Card style={{ backgroundColor: '#F8EDED' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '26px' }}>New Customer</Card.Title>
                  <p style={{ fontSize: '13px' }}><b>Register Account</b></p>
                  <Card.Text>
                    By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
                  </Card.Text>
                  <Button variant="primary" >Continue</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <form id="loginForm" style={{ backgroundColor: '#FFAD60' }}>
                <Card style={{ backgroundColor: '#F8EDED' }}>
                  <Card.Body>
                    <Card.Title style={{ fontSize: '26px' }}>Returning Customer</Card.Title>
                    <p style={{ fontSize: '13px' }}><b>I am a returning customer</b></p>
                    <div style={{ display: 'grid', justifyContent: 'space-evenly', padding: '10px ', float: 'left' }}>
                      <div style={{ padding: '40px' }}>
                        <label htmlFor="email">Email Id:</label>
                        <input type="text" id="email" name="email" placeholder="Enter email" style={{ width: '150%' }} required /><br /><br />
                        <label htmlFor="Password">Password:</label>
                        <input type="password" id="Password" name="Password" placeholder="Enter Password" style={{ width: '150%' }} required /><br /><br />
                        <a onClick={this.handleForgotPasswordClick} style={{ color: 'blue', cursor: 'pointer' }}>Forgot Password</a><br />
                        <br/><div style={{ display: 'flex' }}>
                          <button type="button" onClick={() => alert('Login logic here')}>Login</button>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </form>
            </Col>
          </Row>
        </div>
      ) : (
        <form id="registerForm" onSubmit={this.handleRegisterSubmit} style={{ border: '1px solid #ddd', padding: '20px' }}>
          <Card style={{ backgroundColor: '#F8EDED' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: '26px' }}>Forgot Your Password?</Card.Title>
              <p style={{ fontSize: '13px' }}><b>Enter the e-mail address associated with your account. Click submit 
                  to have a password reset link e-mailed to you.</b></p>
              <div style={{ display: 'grid', justifyContent: 'space-evenly', padding: '10px ', float: 'left' }}>
                <div style={{ padding: '40px' }}>
                  <label htmlFor="newUsername">Username:</label>
                  <input type="text" id="newUsername" name="newUsername" style={{ width: '150%' }} required /><br /><br />
                  <label htmlFor="newPassword">Password:</label>
                  <input type="password" id="newPassword" name="newPassword" style={{ width: '150%' }} required /><br /><br />
                  <label htmlFor="confirmPassword">Confirm Password:</label>
                  <input type="password" id="confirmPassword" name="confirmPassword" style={{ width: '150%' }} required /><br /><br />
                  <button type="submit">Submit</button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </form>
      )}
    </div>
  );

  // Register Component
  Register = () => (
    <div style={{ padding: '20px' }}>
      <form id="regform" onSubmit={(e) => {
        e.preventDefault();
        alert('Registration successful!');
      }}>
        <Card style={{ backgroundColor: '#F8EDED' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: '26px' }}>Returning Customer</Card.Title>
            <p style={{ fontSize: '13px' }}><b>If you already have an account with us, please login at the login page.</b></p>
            <div style={{ display: 'grid', justifyContent: 'space-evenly', padding: '20px', float: 'left' }}>
              <div style={{ padding: '20px' }}>
                <label htmlFor="name">Enter name:</label>
                <input type="text" id="name" name="name" style={{ width: '150%' }} required /><br />
                <label htmlFor="email">Enter email id:</label>
                <input type="email" id="email" name="email" style={{ width: '150%' }} required /><br />
                <label htmlFor="password">Enter password:</label>
                <input type="password" id="password" name="password" style={{ width: '150%' }} required /><br />
                <label htmlFor="confirmPassword">Confirm password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" style={{ width: '150%' }} required /><br /><br/>
                <label htmlFor="country">Choose country:</label>
                <select id="country" name="country" required>
                  <option value="">Select a country</option>
                  <option value="spain">Spain</option>
                  <option value="argentina">Argentina</option>
                  <option value="brazil">Brazil</option>
                  <option value="england">England</option>
                  <option value="italy">Italy</option>
                  <option value="germany">Germany</option>
                </select><br /><br/>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <label>Choose password protection:</label>
                  <input type="radio" name="passwordProtection" value="yes" id="passwordYes" />
                  <label htmlFor="passwordYes">Yes</label>
                  <input type="radio" name="passwordProtection" value="no" id="passwordNo" />
                  <label htmlFor="passwordNo">No</label><br />
                </div> <br/>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="agree" name="agree" required />
                  <label htmlFor="agree">Agree to all conditions</label><br />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input type="submit" value="Register" />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </form>
    </div>
  );

  // QuickBuy Component
  QuickBuy = () => (
    <Container>
      <h1>Quick Buy</h1>
      <Card>
        <Card.Body>
          <Card.Title>Special Offer</Card.Title>
          <Card.Text>Buy now and get a 20% discount!</Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );

  // PriceList Component
  PriceList = () => (
    <Container>
      <h1>Price List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Item 1</td>
            <td>$10.00</td>
          </tr>
          <tr>
            <td>Item 2</td>
            <td>$20.00</td>
          </tr>
          <tr>
            <td>Item 3</td>
            <td>$30.00</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );

  render() {
    return (
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
                  <Nav.Link as={Link} to="/" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 40px' }}>
                    <i className="fa fa-home" aria-hidden="true" style={{ fontSize: '30px', color: '#FF9100' }}></i>
                    <span style={{ marginTop: '5px' }}><b>Home</b></span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/quick-buy" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 40px' }}>
                    <i className="fa fa-shopping-bag" aria-hidden="true" style={{ fontSize: '30px', color: '#FF9100' }}></i>
                    <span style={{ marginTop: '5px' }}><b>Quick Buy</b></span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/price-list" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 40px' }}>
                    <i className="fa fa-list-alt" aria-hidden="true" style={{ fontSize: '30px', color: '#FF9100' }}></i>
                    <span style={{ marginTop: '5px' }}><b>Price List</b></span>
                  </Nav.Link>
                  <Nav.Link style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0px 30px' }}>
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
          <Routes>
            <Route path="/" element={<this.Home />} />
            <Route path="/login" element={<this.Login />} />
            <Route path="/register" element={<this.Register />} />
            <Route path="/quick-buy" element={<this.QuickBuy />} />
            <Route path="/price-list" element={<this.PriceList />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
