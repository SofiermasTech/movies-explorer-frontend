import React, { useState, useEffect } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import useScreenResize from '../../hooks/useScreenResize';
import { checkSavedCard } from '../../utils/utils';
import {
   BIG_SCREEN_WIDTH,
   SMALL_SCREEN_WIDTH,
   CARDS_MOVIES_BIG,
   CARDS_MOVIES_MIDDLE,
   CARDS_MOVIES_SMALL,
} from '../../utils/constant';


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
      if (screenWidth > BIG_SCREEN_WIDTH) {
         setShowMovieList(movies.slice(0, showMovieList.length + 3))
      } else {
         setShowMovieList(movies.slice(0, showMovieList.length + 2))
      }
   }

   useEffect(() => {
      if (screenWidth > BIG_SCREEN_WIDTH) {
         setShowMovieList(movies.slice(0, CARDS_MOVIES_BIG))
      } else if (screenWidth > SMALL_SCREEN_WIDTH && screenWidth <= BIG_SCREEN_WIDTH) {
         setShowMovieList(movies.slice(0, CARDS_MOVIES_MIDDLE));
      } else if (screenWidth <= SMALL_SCREEN_WIDTH) {
         setShowMovieList(movies.slice(0, CARDS_MOVIES_SMALL));
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
            {isSavedMoviesPage && showMovieList && searchedMoviesCount !== showMovieList.length && (
               <button className="btn movies__btn-else" onClick={handleMoreClick}               >
                  Ещё
               </button>
            )}
         </div>
      </section>
   )
};

export default MoviesCardList;
