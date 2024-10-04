import React from "react";
import profile1 from '../assets/trcm.jpeg'
const Welcome = () => {
    return ( 
        <div className="welcome">
            <div className="message">
                <h1>Enhance Your Tech skill.<span>Learn With Us</span></h1>
                <p>Welcome to Tracom Academy, a payment academy that focuses on software development and security, for Web, mobile, POS terminals, and ATMs</p>
                <p>Our mission is to develop innovative software engineers through use of emerging technologies to solve local problems, improve penetration of financial services and the use of financial technology in Africa and the rest of the world.</p>
                <button className="learn">Learn More</button>
            </div>
            <div className="welcome-img">
                <img src={profile1} alt="profile1" />
            </div>
        </div>
     );
}
 
export default Welcome;