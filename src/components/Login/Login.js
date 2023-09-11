import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';


const Login = () => {
   return (
      <section className="login">
         <div className="login__container">
            <Link to="/">
               <img className="login__logo" src={logo} alt="Логотип" />
            </Link>
            <h1 className="login__title">Рады видеть!</h1>
            <form className="login__form">
               <label className="login__label">E-mail</label>
               <input className="login__input" type="email" />
               <label className="login__label">Пароль</label>
               <input className="login__input" type="password" />
               <button className="login__btn" type="submit">Войти</button>
            </form>
            <div className="login__container-link">
               <span className="login__text">Ещё не зарегистрированы?</span>
               <Link to="/signup" className="login__link">Регистрация</Link>
            </div>
         </div>


      </section>
   )
};

export default Login;
