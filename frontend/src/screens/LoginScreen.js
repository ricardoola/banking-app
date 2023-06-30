import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Colors from '../Colors';
import './css/welcome.css';
import axios from 'axios';



const LoginScreen = () => {

  
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    const handleSignup = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('https://mypythonproject.com:5000/signup', formData);
        console.log(response.data); // Do something with the response if needed
        setSuccess(true);

      } catch (error) {

        if (error.response && error.response.status === 409) {
        setError('Account already exists');
      } else {
        setError('An error occurred');
      }
      }
    };


  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleClose = () => {
    setShow(false);
    setError('');
    setSuccess(false);
  };

  const handleShow = () => {
    setShow(true);
    setError('');
    setSuccess(false);
  };
  return (
  <>
    <main className=' welcomeScreen' style={{backgroundColor:Colors.blue1}}>
    
      <div className='left-side'>
        <div className='align header-container'>
        <h2 className='text-center'>My Budgeting App</h2>
        <p className='text-center'>A personal budgeting app that helps you track your expenses and income.</p>
        </div>
      </div>
      <div className='login header-container'>
        <Form className='mx-auto my-4' style={{width:"500px"}}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="mt-3">
          Don't have an account? <Button variant="link" onClick={handleShow}>Sign up</Button>
          </div>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

          <Form.Group className="mb-3" controlId="formSignupFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formSignupLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSignupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSignupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSignupConfPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </Form.Group>

            {/* Add any additional form fields here */}
          </Form>
          {error && <p className="error">{error}</p>}
          {success && <p className="success">Account created successfully!</p>}


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSignup}>
            Sign Up
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      
    </main>
    </>
  )
}

export default LoginScreen

