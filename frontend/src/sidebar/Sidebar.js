import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>
        ABOUT ME
        
      </span>
      <img className='sidebarImg'
        src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
          </div>
         <div className='sidebarItem'>
         <span className='sidebarTitle'>
        CATEGERIES
        
      </span>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>
          Life
        </li>
        <li className='sidebarListItem'>
          Music
        </li>
        <li className='sidebarListItem'>
          Style
        </li>
        <li className='sidebarListItem'>
          Sport
        </li>
        <li className='sidebarListItem'>
          Tech
        </li>
        <li className='sidebarListItem'>
          Cinema
        </li>
      </ul>
         </div>
         <div className='sidebarItem'>
         <span className='sidebarTitle'>
      FOLLOW US
      </span>
      <div className='sidebarSocial'>
      <i className="sidebarIcon fa-brands fa-square-facebook"></i>
    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
      </div>

         </div>
    </div>
  )
}
