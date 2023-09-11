import './Profile.css';
// import logo from '../../images/logo.svg';


const Profile = () => {
   return (
      <section className="profile">
         <div className="profile__container">

            <h1 className="profile__title">Привет, Виталий!</h1>
            <form className="profile__form">
               <div className="profile__container_name">
                  <label className="profile__label">Имя</label>
                  <input className="profile__input" type="" value="Виталий" />
               </div>
               <div className="profile__line"></div>
               <div className="profile__container_email">
                  <label className="profile__label">E-mail</label>
                  <input className="profile__input" type="email" value="pochta@yandex.ru" />
               </div>
               <div className="profile__container_btn-save">
                  <button className="profile__btn-save" type="submit">Сохранить</button>
               </div>
               <div className="profile__container_btn">
                  <button className="profile__btn-edit" type="submit">Редактировать</button>
                  <a href="." className="profile__link-out">Выйти из аккаунта</a>
               </div>
            </form>

         </div>


      </section>
   )
};

export default Profile;
