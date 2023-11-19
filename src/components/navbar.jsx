import Logo from '../components/Images/dmk 1.png';
import './navbar.css'
import { Link, NavLink } from 'react-router-dom';
import {links} from '../data';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import {MdOutlineClose} from 'react-icons/md'
const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <nav>
          <div className="container nav__container">
            <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
              <img src={Logo} alt="nav Logo" />
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__Nav' :
          'hide__Nav'}`} >
              {
                links.map(({ name, path}, index) => {
                  return (
                  <li key={index}>
                    <NavLink to={path} className={({isActive}) => isActive ? 'active-nav':
                    '' } onClick={() => setIsNavShowing(prev => !prev)} >{name}</NavLink>
                  </li>
                  )
                })
              }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
            
              {
                isNavShowing ? <MdOutlineClose/>  : <GiHamburgerMenu />
              }
            
            </button>
          </div>
        </nav>
    )
  }
  export default Navbar;