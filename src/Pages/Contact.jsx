import React from 'react'

function Contact() {
  return (
   <div className="contact-us">
    <h1>Contact Us</h1>
    <div className="contact-form">
    <form action="/" className='contact-form'>
    <ul>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Type your message" />
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