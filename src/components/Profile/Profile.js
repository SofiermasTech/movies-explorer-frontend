import React, { useEffect, useState, useContext } from 'react';

import './Profile.css';
import useFormAndValidation from '../../hooks/useFormAndValidation';
import CurrentUserContext from '../../context/CurrentUserContext';

const Profile = ({ onUpdateUser, onLogOut }) => {
   const { values, handleChange, isValid, resetForm, errors } = useFormAndValidation();
   const [isEditProfile, setIsEditProfile] = useState(false);
   const currentUser = useContext(CurrentUserContext);
   const isValueSameAsWas = (!isValid || (currentUser.name === values.name && currentUser.email === values.email));

   function handleEditProfile(evt) {
      evt.preventDefault();
      setIsEditProfile(true);
   }

   const handleSubmit = (evt) => {
      evt.preventDefault();

      onUpdateUser({
         name: values.name,
         email: values.email,
      });
   };

   useEffect(() => {
      currentUser ? resetForm(currentUser) : resetForm();
   }, [currentUser, resetForm]);

   return (
      <main className="profile">
         <div className="profile__container">
            <h1 className="profile__title">Привет, {currentUser.name || "User"}!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
               <div className="profile__container-name">
                  <label className="profile__label">Имя</label>
                  <input
                     className="profile__input"
                     type="text"
                     name="name"
                     placeholder="Имя"
                     required
                     minLength="2"
                     maxLength="30"
                     value={values.name || ""}
                     onChange={handleChange}
                     autoComplete="off"
                  />
               </div>
               {!isValid && (<span className="profile__input-error">{errors.name}</span>)}
               <div className="profile__container-email">
                  <label className="profile__label">E-mail</label>
                  <input
                     className="profile__input"
                     name="email"
                     type="email"
                     placeholder="E-mail"
                     required
                     value={values.email || ""}
                     onChange={handleChange}
                     pattern={'^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,}$'}
                  />
               </div>
               {!isValid && (<span className="profile__input-error">{errors.email}</span>)}
               {isEditProfile ?
                  (<div className="profile__container-btn-save">
                     <button className="btn profile__btn-save" type="submit" disabled={isValueSameAsWas}>Сохранить</button>
                  </div>) :
                  (<div className="profile__container-btn">
                     <button className="btn profile__btn-edit" type="button" onClick={handleEditProfile}>Редактировать</button>
                     <button className="btn profile__btn-out" type="button" onClick={onLogOut} >Выйти из аккаунта</button>
                  </div>)
               }
            </form>
         </div>
      </main>
   )
};

export default Profile;
