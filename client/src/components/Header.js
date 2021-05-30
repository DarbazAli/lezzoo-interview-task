import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../logo-icon.svg'
import { logout } from '../actions/userAction'
const Header = () => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)
  console.log(userInfo)

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <header>
      <nav className='container'>
        <Link to='/' className='logo'>
          <img src={logo} alt='Lezzoo Logo' width='32' /> <h3>Lezzoo</h3>
        </Link>

        <div className='menu'>
          <Link to='/store'>Stores</Link>

          {userInfo && (
            <Link to={null} onClick={logoutHandler}>
              Logout
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header
