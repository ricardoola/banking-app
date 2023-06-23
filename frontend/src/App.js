import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import React from 'react'
import { Container } from 'react-bootstrap'
import Colors from './Colors';
import './screens/css/welcome.css';

const App = () => {
  return (
    
    <Router>
     
        <Routes>  
          <Route path='/' element={<LoginScreen/>} exact/>
          
        </Routes>
        <Footer />
   
    </Router>
    
  )
}

export default App



