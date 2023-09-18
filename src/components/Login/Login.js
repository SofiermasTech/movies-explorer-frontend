import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css';
import Logo from '../Logo/Logo';
import useFormAndValidation from '../../hooks/useFormAndValidation';

const Login = () => {
   const { values, errors, isValid, handleChange } = useFormAndValidation();

   return (
      <main>
         <section className="login">
            <div className="login__container">
               <Logo />
               <h1 className="login__title">Рады видеть!</h1>
               <form className="login__form">
                  <label className="login__label">E-mail</label>
                  <input className="login__input" type="email" name="email" required placeholder="E-mail"
                     value={values.email || ""}
                     onChange={handleChange} />
                  {!isValid && (<span className="login__error">{errors.email}</span>)}
                  <label className="login__label">Пароль</label>
                  <input className="login__input" type="password" name="password" required placeholder="Пароль"
                     minLength="8"
                     value={values.password || ""}
                     onChange={handleChange} />
                  {!isValid && (<span className="login__error">{errors.password}</span>)}
                  <button className="btn login__btn" type="submit">Войти</button>
               </form>
               <div className="login__container-link">
                  <span className="login__text">Ещё не зарегистрированы?</span>
                  <Link to="/signup" className="link login__link">Регистрация</Link>
               </div>
            </div>
         </section>
      </main>
   )
};

export default Login;
