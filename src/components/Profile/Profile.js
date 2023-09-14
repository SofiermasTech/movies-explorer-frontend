import './Profile.css';
import Header from '../Header/Header';
// import logo from '../../images/logo.svg';


const Profile = ({loggedIn}) => {
   return (
      <section className="profile">
         <Header loggedIn={loggedIn} />
         <div className="profile__container">

            <h1 className="profile__title">Привет, София!</h1>
            <form className="profile__form">
               <div className="profile__container_name">
                  <label className="profile__label">Имя</label>
                  <input className="profile__input" type="" value="София" />
               </div>
               <div className="profile__line"></div>
               <div className="profile__container_email">
                  <label className="profile__label">E-mail</label>
                  <input className="profile__input" type="email" value="pochta@yandex.ru" />
               </div>
               <div className="profile__container_btn-save">
                  <button className="btn profile__btn-save" type="submit">Сохранить</button>
               </div>
               <div className="profile__container_btn">
                  <button className="btn profile__btn-edit" type="submit">Редактировать</button>
                  <button className="btn profile__btn-out" type="button">Выйти из аккаунта</button>
               </div>
            </form>

         </div>


      </section>
   )
};

export default Profile;
