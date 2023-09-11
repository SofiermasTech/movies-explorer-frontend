import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import logo from '../../images/logo.svg';
import profileLogo from '../../images/profileLogo.svg';


const Header = () => {
   return (
      <header className="header">
         <Link to="/">
            <img className="header__logo" src={logo} alt="Логотип" />
         </Link>
         <div className="header__container">
            <ul className="header__list">
               <li className="header__item">
                  <a className="link header__link" href=".">
                     Фильмы
                  </a>
               </li>
               <li className="header__item">
                  <a
                     className="link header__link" href=".">
                     Сохранённые фильмы
                  </a>
               </li>
            </ul>
            <div className="header__button-container">
               <button className="header__button-account">
                  Аккаунт
               </button>
               <img className="header__logo-account" src={profileLogo} alt="Ссылка на аккаунт" />
            </div>
         </div>
      </header>
   )
};

export default Header;
