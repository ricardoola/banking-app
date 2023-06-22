import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Colors from '../Colors';
import './css/welcome.css'


const LoginScreen = () => {
  return (
    <>
  <main className='py-3 welcomeScreen' style={{backgroundColor:Colors.blue1}}>
    
      <div>
        <h1 className='text-center left-side'>My Budgeting App</h1>
      </div>
      <div>
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
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </main>
    </>
  )
}

export default LoginScreen

