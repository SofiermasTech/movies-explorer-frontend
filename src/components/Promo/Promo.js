import './Promo.css';
import Header from '../Header/Header';

const Promo = ({loggedIn}) => {
   return (
      <section className="promo">
         <Header loggedIn={loggedIn} />
         <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>

      </section>
   )
};

export default Promo;