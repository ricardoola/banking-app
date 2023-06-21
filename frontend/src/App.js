import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import LoginScreen from './screens/LoginScreen'
import React from 'react'

const App = () => {
  return (
    <>
    <LoginScreen />
    <Footer />
    </>
  )
}

export default App



