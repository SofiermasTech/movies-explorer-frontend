import './MoviesCard.css';
import poster from '../../images/poster.png';


const MoviesCard = () => {
   return (
      <li className="card">
         <img className="card__image" src={poster} alt="Фильм" />
         <div className="card__container">
            <h3 className="card__name">Баския: Взрыв реальности</h3>
            <p className="card__time">1ч 17м</p>
         </div>
         <button className="btn card__btn">Сохранить</button>
         <button className="btn card__btn-saved"></button>
      </li>
   )
};

export default MoviesCard;
