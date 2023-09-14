import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Navigation.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navigation = ({ loggedIn }) => {
   const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
   const location = useLocation().pathname;

   const toggleBurgerMenu = () => {
      setIsBurgerMenuOpen(!isBurgerMenuOpen);
   }

   return (
      <nav className="navigation">
         {loggedIn ? (
            <>
               <div className="navigation__movies">
                  <ul className="navigation__list">
                     <li className="navigation__item">
                        <NavLink className={location === "/movies" ? "link navigation__link navigation__link_active" : "link navigation__link"} to="/movies">
                           Фильмы
                        </NavLink>
                     </li>
                     <li className="navigation__item">
                        <NavLink
                           className={location === "/saved-movies" ? "link navigation__link navigation__link_active" : "link navigation__link"} to="/saved-movies">
                           Сохранённые фильмы
                        </NavLink>
                     </li>
                  </ul>
               </div>
               <div className="navigation__button-container">
                  <NavLink to="/profile" className="link navigation__link-account" >
                     Аккаунт
                     <button className={`btn navigation__button-account ${location === '/' ? "navigation__button-account_color" : ""}`}></button>
                  </NavLink>
               </div>
            </>
         ) : (
            <div className="navigation__btn-auth">
               <Link className="link navigation__btn-register" to="/signup">Регистрация</Link>
               <Link className="link navigation__btn-login" to="/signin">Войти</Link>
            </div>

         )}
         {!isBurgerMenuOpen && loggedIn ? (
            <button className='btn burger__btn' onClick={toggleBurgerMenu} />
         ) : <BurgerMenu onClose={toggleBurgerMenu} />
         }
      </nav>

   )
}


export default Navigation;