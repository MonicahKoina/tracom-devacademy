import React from 'react'

function Signup() {
  return (
    <form action="/">
        <ul>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Type your message" />
        </ul>
        <div class="form-button">
          <button class="btn">Send</button>
        </div>
    </form>
  )
}

export default Signup