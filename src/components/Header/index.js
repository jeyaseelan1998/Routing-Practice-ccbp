// Write your JS code here
import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <header>
      <div>
        <img src='https://assets.ccbp.in/frontend/react-js/wave-logo-img.png' alt='wave' className='logo' />
        <h1 className='logo-text'>Wave</h1>
      </div>

      <nav className='nav-link-items'>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header