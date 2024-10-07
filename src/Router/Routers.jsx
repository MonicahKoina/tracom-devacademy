import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "../Pages/Login.jsx"
import Home from "../Pages/Home.jsx"
import Curriculum from "../Pages/Curriculum.jsx"
import Contact from "../Pages/Contact.jsx"
import Signup from '../Pages/Signup.jsx'
import Layout from "../Components/Layout.jsx"
function Routers() {
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default Routers