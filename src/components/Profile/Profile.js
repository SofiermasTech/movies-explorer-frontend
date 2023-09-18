import useFormAndValidation from '../../hooks/useFormAndValidation';
import './Profile.css';



const Profile = ({ onUpdateUser, onLogOut }) => {
   const { values, handleChange } = useFormAndValidation();

   const handleSubmit = (evt) => {
      evt.preventDefault();

      onUpdateUser({
         name: values.name,
         email: values.email,
      });
   };

   return (
      <main className="profile">

         <div className="profile__container">

            <h1 className="profile__title">Привет, София!</h1>
            <form className="profile__form" onSubmit={handleSubmit}>
               <div className="profile__container-name">
                  <label className="profile__label">Имя</label>
                  <input className="profile__input" type="text" name="name" placeholder="Имя" required minLength="2"
                     maxLength="30" value={values.name || ""} onChange={handleChange} />
               </div>
               <div className="profile__container-email">
                  <label className="profile__label">E-mail</label>
                  <input className="profile__input" name="email" type="email" placeholder="E-mail"
                     required value={values.email || ""} onChange={handleChange} />
               </div>
               <div className="profile__container-btn-save">
                  <button className="btn profile__btn-save" type="submit">Сохранить</button>
               </div>
               <div className="profile__container-btn">
                  <button className="btn profile__btn-edit" type="button">Редактировать</button>
                  <button className="btn profile__btn-out" type="button" onClick={onLogOut} >Выйти из аккаунта</button>
               </div>
            </form>

         </div>


      </main>
   )
};

export default Profile;
