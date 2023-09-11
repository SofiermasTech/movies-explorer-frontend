import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';


const Register = () => {
   return (
      <section className="register-form">
         <div className="register-form__container">
            <Link to="/">
               <img className="register-form__logo" src={logo} alt="Логотип" />
            </Link>
            <h1 className="register-form__title">Добро пожаловать!</h1>
            <form className="register-form__form">
               <label className="register-form__label">Имя</label>
               <input className="register-form__input" type="text" />
               <label className="register-form__label">E-mail</label>
               <input className="register-form__input" type="email" />
               <label className="register-form__label">Пароль</label>
               <input className="register-form__input" type="password" />
               <button className="register-form__btn" type="submit">Зарегистрироваться</button>
            </form>
            <div className="register-form__container-link">
               <span className="register-form__text">Уже зарегистрированы?</span>
               <Link to="/signin" className="register-form__link">Войти</Link>
            </div>
         </div>


      </section>
   )
};

export default Register;
