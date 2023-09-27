import React, { useState, useEffect } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useScreenResize from '../../hooks/useScreenResize';
import { checkSavedCard } from '../../utils/utils';

const MoviesCardList = ({
   isSavedMoviesPage,
   movies,
   savedMovies,
   onSave,
   onDelete
}) => {
   const screenWidth = useScreenResize();
   const [showMovieList, setShowMovieList] = useState(movies);
   const searchedMoviesCount = movies ? movies.length : 0;

   const handleMoreClick = () => {
      if (screenWidth > 910) {
         setShowMovieList(movies.slice(0, showMovieList.length + 3))
      } else {
         setShowMovieList(movies.slice(0, showMovieList.length + 2))
      }
   }

   useEffect(() => {
      if (screenWidth > 910) {
         setShowMovieList(movies.slice(0, 12))
      } else if (screenWidth > 500 && screenWidth <= 910) {
         setShowMovieList(movies.slice(0, 8));
      } else if (screenWidth <= 500) {
         setShowMovieList(movies.slice(0, 5));
      } else {
         setShowMovieList(movies);
      }
   }, [screenWidth, movies])

   return (
      <section className="movies">

         <ul className="movies__list">
            {showMovieList.sort().map(movie => {
               return <MoviesCard
                  key={isSavedMoviesPage ? movie.movieId : movie.id}
                  movie={movie}
                  isSavedMoviesPage={isSavedMoviesPage}
                  onSave={onSave}
                  onDelete={onDelete}
                  saved={checkSavedCard(savedMovies, movie)}
               />
            })}
         </ul>
         <div className="movies__btn-container">
            {!isSavedMoviesPage && showMovieList && searchedMoviesCount !== showMovieList.length && (
               <button
                  className="btn movies__btn-else"
                  onClick={handleMoreClick}
               >
                  Ещё
               </button>
            )}
         </div>
      </section>
   )
};

export default MoviesCardList;
