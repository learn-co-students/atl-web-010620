import React from 'react';
import { Link } from 'react-router-dom';

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
        <li>
          <Link to='/newbook'>
            Add new book
          </Link>
        </li>
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
      </ul>

    </div>
  )
}

export default Header;
