import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/header.scss"


function Header() {
  return (
    <header>
    <div className='container'>
       <nav>
    <div>LOGO</div>
    <ul >
          <li><Link  to="/">Home</Link></li>
    </ul>
   </nav>
   </div>
   </header>
  )
}

export default Header