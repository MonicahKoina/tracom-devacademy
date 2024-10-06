import React from "react";
import logo from '../assets/tracom_services_cover.jpg'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <nav className="navigation">
        <div className="navigation-links">
        <img src={logo} alt="tracom" />
            <ul>
                <li><Link to='/'>Welcome</Link></li>
                <li><Link to={'/curriculum'}>Curriculum</Link></li>
                <li>Benefits</li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
            <div className="navigation-buttons">
                <Link to={'/login'}>
                <button className="nav-btn">Log In</button>
                </Link>
                <Link to={'/signup'}>
                <button className="nav-btn">Sign Up</button>
                </Link>
            </div>
        </div>
        </nav>
    );
}
 
export default Navbar;