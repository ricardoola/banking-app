import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Colors from '../Colors';
import './css/footer.css'

const Footer = () => {
  return (
      <footer style={{backgroundColor:Colors.blue4 }}>
        <Container>
            <Row className= 'pba'>
                <Col className= 'text-center py-3 '> Personal Banking App</Col>
            </Row>
        </Container>
      </footer>
  
  )
}

export default Footer
