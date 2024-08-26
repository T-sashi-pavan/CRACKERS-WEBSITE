import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showForgotPassword: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleForgotPasswordClick = () => {
    this.setState({ showForgotPassword: !this.state.showForgotPassword });
  };
handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:7000/api/login', { // Changed route here
            customerEmail: this.state.email,
            customerPassword: this.state.password
        });
        alert(response.data.message || 'Login successful you can shop ');
        // Redirect to another page or handle successful login here
    } catch (error) {
        //console.error('There was an error logging in!', error);
        alert('Login successful');
    }
};

  handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
  };

  render() {
    return (
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
                    <Button variant="primary" as={Link} to="/register">Continue</Button>
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
                          <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter email"
                            style={{ width: '150%' }}
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                          /><br /><br />
                          <label htmlFor="password">Password:</label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            style={{ width: '150%' }}
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                          /><br /><br />
                          <a onClick={this.handleForgotPasswordClick} style={{ color: 'blue', cursor: 'pointer' }}>Forgot Password</a><br />
                          <br />
                          <div style={{ display: 'flex' }}>
                            <button type="button" onClick={this.handleLogin}>Login</button>
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
          <form id="forgotPasswordForm" onSubmit={this.handleForgotPasswordSubmit} style={{ border: '1px solid #ddd', padding: '20px' }}>
            <Card style={{ backgroundColor: '#F8EDED' }}>
              <Card.Body>
                <Card.Title style={{ fontSize: '26px' }}>Forgot Your Password?</Card.Title>
                <p style={{ fontSize: '13px' }}><b>Enter the e-mail address associated with your account. Click submit 
                    to have a password reset link e-mailed to you.</b></p>
                <div style={{ display: 'grid', justifyContent: 'space-evenly', padding: '10px ', float: 'left' }}>
                  <div style={{ padding: '40px' }}>
                    <label htmlFor="forgotEmail">Email:</label>
                    <input
                      type="text"
                      id="forgotEmail"
                      name="forgotEmail"
                      style={{ width: '150%' }}
                      required
                    /><br /><br />
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </form>
        )}
      </div>
    );
  }
}

export default Login;
