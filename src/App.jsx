import React from 'react'
import './App.css'
import Home from './Components/Home'
import ContactUs from './Components/ContactUs'
import Navbar from './Components/Navbar'
import Curriculum from './Components/Curriculum'

function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <Curriculum />
    <ContactUs />
  </div>
  )
}

export default App