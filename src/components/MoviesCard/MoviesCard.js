import React from 'react';

import './MoviesCard.css';
import { convertMinToHours } from '../../utils/utils';
import { URL_MOVIE } from '../../utils/constant';

const MoviesCard = ({
   isSavedMoviesPage,
   movie,
   saved,
   onSave,
   onDelete
}) => {

   const handleSaveCard = () => {
      onSave(movie);
   };

   const handleDeleteCard = () => {
      onDelete(movie);
   };

   return (
      <li className="card">
         <a href={movie.trailerLink} className="card__link" target="_blank" rel="noreferrer">
            <img
               src={isSavedMoviesPage ? movie.image : `${URL_MOVIE}${movie.image.url}`}
               alt={movie.nameRU}
               className="card__image"
            />
         </a>
         <div className="card__container">
            <h2 className="card__name">{movie.nameRU}</h2>
            <p className="card__time">{convertMinToHours(movie.duration)}</p>
         </div>
         {saved && !isSavedMoviesPage &&
            <button type="button" className="btn card__btn-saved" onClick={handleDeleteCard} />}
         {isSavedMoviesPage ? (
            <button type="button" className="btn card__btn-delete" onClick={handleDeleteCard} />
         ) : (
            <button type="button" className={!saved ? "btn card__btn" : "card__btn_hidden"} onClick={handleSaveCard}>
               Сохранить
            </button>
         )}
      </li>
   )
};

export default MoviesCard;
