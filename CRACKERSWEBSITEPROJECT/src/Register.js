import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    passwordProtection: 'no',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (!formData.agree) {
      alert("You must agree to the conditions.");
      return;
    }
    try {
      const response = await axios.post('http://localhost:7000/api/customers', {
        customerName: formData.name,
        customerEmail: formData.email,
        customerMobileNumber: formData.country, // Adjust this based on your requirements
        customerPassword: formData.password
      });
      alert('Registration successful!');
      // Optionally, redirect to another page or clear the form
    } catch (error) {
      //console.error('There was an error registering!', error);
      //alert('Registration failed. Please try again.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form id="regform" onSubmit={handleSubmit}>
        <Card style={{ backgroundColor: '#F8EDED' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: '26px' }}>Returning Customer</Card.Title>
            <p style={{ fontSize: '13px' }}>
              <b>If you already have an account with us, please login at the
                <Button variant="primary" as={Link} to="/login">Login Page</Button>
              </b>
            </p>
            <div style={{ display: 'grid', justifyContent: 'space-evenly', padding: '20px', float: 'left' }}>
              <div style={{ padding: '20px' }}>
                <label htmlFor="name">Enter name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={{ width: '150%' }}
                  required
                /><br />
                <label htmlFor="email">Enter email id:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{ width: '150%' }}
                  required
                /><br />
                <label htmlFor="password">Enter password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={{ width: '150%' }}
                  required
                /><br />
                <label htmlFor="confirmPassword">Confirm password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  style={{ width: '150%' }}
                  required
                /><br /><br />
                <label htmlFor="country">Choose country:</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a country</option>
                  <option value="spain">Spain</option>
                  <option value="argentina">Argentina</option>
                  <option value="brazil">Brazil</option>
                  <option value="england">England</option>
                  <option value="italy">Italy</option>
                  <option value="germany">Germany</option>
                </select><br /><br />
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <label>Choose password protection:</label>
                  <input
                    type="radio"
                    name="passwordProtection"
                    value="yes"
                    id="passwordYes"
                    checked={formData.passwordProtection === 'yes'}
                    onChange={handleChange}
                  />
                  <label htmlFor="passwordYes">Yes</label>
                  <input
                    type="radio"
                    name="passwordProtection"
                    value="no"
                    id="passwordNo"
                    checked={formData.passwordProtection === 'no'}
                    onChange={handleChange}
                  />
                  <label htmlFor="passwordNo">No</label><br />
                </div><br />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
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
};

export default Register;