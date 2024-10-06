import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Curriculum from './pages/Curriculum';
import Contact from './Pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


const App = () => {
    return (
        <Router>
            <Layout/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/curriculum" element={<Curriculum />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
        </Router>
    );
};

export default App;
