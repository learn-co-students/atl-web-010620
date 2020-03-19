import React from 'react';
import { Link } from 'react-router-dom';

const renderLoginSignup = () => {
  return (
    <>
      <li>
        <Link to='/login'>
          Login
        </Link>
      </li>
      <li>
        <Link to='/signup'>
          Signup
        </Link>
      </li>
    </>
  )
}

const renderLogout = () => (
  <>
    <li>
      <Link to='/newbook'>
        Add new book
      </Link>
    </li>
    <li>
      <Link to='/logout'>
        Logout
      </Link>
    </li>
  </>
)

const Header = (props) => {
  return (
    <div className='navbar'>
      <div className='header'> Books App (not Amazon duh!) </div>
      <ul className='menu'>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        {
          localStorage.getItem('auth_token')
           ? renderLogout() //render logout button
            : renderLoginSignup() // render login && signup
        }
      </ul>

    </div>
  )
}

export default Header;
