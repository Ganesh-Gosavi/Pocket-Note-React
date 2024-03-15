import React from 'react'
import "./DesktopHome.css"
import home from "../../assets/home.png"
import lock from "../../assets/icons/lock.png"

function DesktopHome() {
  return (
    <div className='desktop__home'>
      <img src={home} alt="home" />
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
      <div className="desktop__home__bottom">
        <img src={lock} alt="lock" />
        <span>end-to-end encrypted</span>
      </div>
    </div>
  )
}

export default DesktopHome