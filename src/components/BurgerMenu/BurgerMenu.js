import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = ({ onClose }) => {
   const location = useLocation().pathname;

   return (
      <div className="burger">
         <div className="burger__menu">
            <div className="burger__container">
               <button type="button" className="btn burger__close-btn" onClick={() => onClose()} />
               <div className="burger__list">
                  <NavLink to="/" className={`link burger__link ${location === '/' ? "burger__link_active" : ""}`}>
                     Главная
                  </NavLink>
                  <NavLink to="/movies" className={`link burger__link ${location === '/movies' ? "burger__link_active" : ""}`}>
                     Фильмы
                  </NavLink>
                  <NavLink to="/saved-movies" className={`link burger__link ${location === '/saved-movies' ? "burger__link_active" : ""}`}>
                     Сохранённые фильмы
                  </NavLink>
               </div>
               <Link to="/profile" className="link burger__link-account">
                  Аккаунт
                  <button type="button" className="btn burger__btn-account"></button>
               </Link>
            </div>
         </div>
      </div >
   )
};

export default BurgerMenu;