
import React from 'react'
import './topbar.css'

export default function TopBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <ul className='topList'>
        <li className='topListItem'>HOME</li>
        <li className='topListItem'>ABOUT</li>
        <li className='topListItem'>CONTACT</li>
        <li className='topListItem'>WRITE</li>
        <li className='topListItem'>LOGOUT</li>
      </ul>
      <div className='topRight'>
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
