import React from 'react';
import { useLocation } from 'react-router-dom';

import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = ({ loggedIn }) => {
   const location = useLocation().pathname;

   return (
      <>
         {location === '/'
            || location === '/movies'
            || location === '/saved-movies'
            || location === '/profile' ? (
            <header className={`header ${location === '/' ? "header_color" : ""}`}>
               <Logo />
               <Navigation loggedIn={loggedIn} />
            </header>
         ) : ('')}
      </>
   )
};

export default Header;
