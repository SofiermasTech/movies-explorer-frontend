import React from 'react';
import { Link, useLocation } from 'react-router-dom';

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
               {loggedIn ? (
                  <Navigation loggedIn={loggedIn} />
               ) : (
                  <div className="navigation__btn-auth">
                     <Link className="link navigation__btn-register" to="/signup">Регистрация</Link>
                     <Link className="link navigation__btn-login" to="/signin">Войти</Link>
                  </div>
               )}
            </header>
         ) : (
            ''
         )}
      </>
   )

};

export default Header;
