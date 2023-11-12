import './MoviesCard.css';

const MoviesCard = ({ movie, isSavedMoviesPage }) => {
   return (
      <li className="card">
         <img className="card__image" src={movie.image} alt={movie.nameRU} />
         <div className="card__container">
            <h2 className="card__name">{movie.nameRU}</h2>
            <p className="card__time">{movie.duration}</p>
         </div>
         {movie.save && !isSavedMoviesPage && <button type="button" className="btn card__btn-saved" />}
         {isSavedMoviesPage ? (
            <button type="button" className="btn card__btn-delete" />
         ) : (
            <button type="submit" className="btn card__btn">Сохранить</button>
         )}
      </li>
   )
};

export default MoviesCard;
