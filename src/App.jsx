import React from 'react'
import './App.css'
import Layout from './Components/Layout'
import Welcome from './Pages/Welcome'
import Curriculum from './Pages/Curriculum'
import Contact from './Pages/Contact'


function App() {
  return (
    <div className="App">
      <Layout/>
      <Welcome/>
      <Curriculum/>
      <Contact/>
  </div>
  )
}

export default App