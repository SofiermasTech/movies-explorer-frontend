import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';


const Header = ({ loggedIn }) => {
   const location = useLocation().pathname;

   return (
      <header className={`header ${location === '/' ? "header_color" : ""}`}>
         <Link to="/">
            <img className="header__logo" src={logo} alt="Логотип" />
         </Link>
                  <Navigation loggedIn={loggedIn} />
      </header>
   )
};

export default Header;
