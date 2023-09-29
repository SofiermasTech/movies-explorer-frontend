import React from 'react';
import { Link } from 'react-router-dom';

import './Register.css';
import Logo from '../Logo/Logo';
import useFormAndValidation from '../../hooks/useFormAndValidation';

const Register = ({ onRegister }) => {
   const { values, errors, isValid, handleChange } = useFormAndValidation();

   const handleSubmit = (event) => {
      event.preventDefault();
      onRegister(values);
   };

   return (
      <main>
         <section className="register-form">
            <div className="register-form__container">
               <Logo />
               <h1 className="register-form__title">Добро пожаловать!</h1>
               <form className="register-form__form" onSubmit={handleSubmit}>
                  <label className="register-form__label">Имя</label>
                  <input
                     className="register-form__input"
                     type="text"
                     required
                     placeholder="Имя"
                     minLength="2"
                     maxLength="30"
                     name="name"
                     value={values.name || ""}
                     onChange={handleChange}
                     autoComplete="off"
                  />
                  {!isValid && (<span className="register-form__error">{errors.name}</span>)}
                  <label className="register-form__label">E-mail</label>
                  <input
                     className="register-form__input"
                     type="email"
                     required
                     placeholder="E-mail"
                     name="email"
                     value={values.email || ""}
                     onChange={handleChange}
                     pattern={'^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,}$'}
                  />
                  {!isValid && (<span className="register-form__error">{errors.email}</span>)}
                  <label className="register-form__label">Пароль</label>
                  <input
                     className="register-form__input"
                     type="password"
                     required
                     placeholder="Пароль"
                     minLength="8"
                     name="password"
                     value={values.password || ""}
                     onChange={handleChange}
                     autoComplete="off"
                  />
                  {!isValid && (<span className="register-form__error">{errors.password}</span>)}
                  <button className="btn register-form__btn" type="submit" disabled={!isValid}>Зарегистрироваться</button>
               </form>
               <div className="register-form__container-link">
                  <span className="register-form__text">Уже зарегистрированы?</span>
                  <Link to="/signin" className="link register-form__link">Войти</Link>
               </div>
            </div>
         </section>
      </main>
   )
};

export default Register;
