import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import React from 'react'
import { Container } from 'react-bootstrap'


const App = () => {
  return (
    
    <Router>
        <main className='py-3'>
        <Routes>  
          <Route path='/' element={<LoginScreen/>} exact/>
        </Routes>
        </main>
        <Footer />
    </Router>
    
  )
}

export default App



