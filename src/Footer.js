import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div id="footer-head">
      <div className="footer">
      <i class="fa-solid fa-house home"></i>
      <p id="thome">Home</p>
      <div className='profile'>
      <i class="fa-solid fa-user profile"></i>
      <p id="tprofile">my Profile</p>
      </div>
      <div className='team'>
      <i class="fa-solid fa-user-plus team"></i>
      <p id="tteam">My Teams</p>
      </div>
      <div className='setting'>
      <i class="fa-solid fa-gear "></i>
      <p id="tsetting">Setting</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
