import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo-icon.svg'

const Header = () => {
  return (
    <header>
      <nav className='container'>
        <Link to='/' className='logo'>
          <img src={logo} alt='Lezzoo Logo' width='32' /> <h3>Lezzoo</h3>
        </Link>

        <Link to='/stores'>Stores</Link>
      </nav>
    </header>
  )
}

export default Header
