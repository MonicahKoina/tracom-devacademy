import React from 'react'

function Contact() {
  return (
   <div className="contact-us">
    <h1>Contact Us</h1>
    <div className="contact-form">
    <form action="/">
    <ul>
          <input type="text" placeholder="Full name" /><br/>
          <input type="text" placeholder="Email" /><br />
          <input type="text" placeholder="Type your message" /><br />
        </ul>
        <div class="form-button">
          <button class="btn">Send</button>
        </div>
    </form>
    </div>
   </div>
  )
}

export default Contact