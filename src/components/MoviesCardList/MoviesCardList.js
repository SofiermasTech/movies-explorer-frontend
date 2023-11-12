import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';


const MoviesCardList = ({ isLoading=false, movies, isSavedMoviesPage }) => {
   return (
      <section className="movies">
         {isLoading ? <Preloader /> : (
         <ul className="movies__list">
         {movies.map((movie) => {
          return <MoviesCard key={movie.movieId} movie={movie} />
        })}
         </ul>
         )}
         <div className="movies__btn-container">
            <button type="button" className="btn movies__btn-else">Ещё</button>
         </div>
      </section>
   )
};

export default MoviesCardList;
