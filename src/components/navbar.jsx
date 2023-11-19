import Logo from '../components/Images/dmk 1.png';
import './navbar.css'
import { Link, NavLink } from 'react-router-dom';
import {links} from '../data';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return (
        <nav>
          <div className="container nav__container">
            <Link to="/" className="logo">
              <img src={Logo} alt="nav Logo" />
            </Link>
            <ul className='nav__links'>
              {
                links.map(({ name, path}, index) => {
                  return (
                  <li>
                    <NavLink to={path}>{name}</NavLink>
                  </li>
                  )
                })
              }
            </ul>
            <button className="nav__toggle-btn">
            <GiHamburgerMenu />
            </button>
          </div>
        </nav>
    )
  }
  export default Navbar;