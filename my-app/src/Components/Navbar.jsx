import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="logo">
        <Link className="navbar-brand" style={{textDecoration:'none',color:'white'}} to="#">NewsHunt</Link>
      </div>
      <div className="options">
        <ul className='lists'>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/business"> Business</Link>
          </li>
          <li>
            <Link to="/sports"> Sports</Link>
          </li>
          <li>
            <Link to="/entertainment"> Entertainment</Link>
          </li>
          {/* <li>
            <Link to="/general"> General</Link>
          </li> */}
          <li>
            <Link to="/technology"> Technology</Link>
          </li>
          <li>
            <Link to="/health"> Health</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;  //export