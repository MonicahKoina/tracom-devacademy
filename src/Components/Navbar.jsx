import React from "react";
import logo from '../assets/tracom_services_cover.jpg'
const Navbar = () => {
    return (  
        <nav className="navigation">
        <div className="navigation-links">
        <img src={logo} alt="tracom" />
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>Benefits</li>
                <li>Contact</li>
            </ul>
            <div className="navigation-buttons">
            <button className="nav-btn">Log In</button>
            <button className="nav-btn">Sign Up</button>
            </div>
        </div>
        </nav>
    );
}
 
export default Navbar;