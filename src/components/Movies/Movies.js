import React, { useState, useEffect } from 'react';
import moviesApi from '../../utils/MoviesApi';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { filterMovies, filterShortMovies } from '../../utils/utils';

const Movies = ({
   isLoading,
   onLoading,
   savedMovies,
   onSave,
   onDelete,
   setPopupMessage,
   setIsPopupOpen,
}) => {
   const [movies, setMovies] = useState([]);

   const [errorMessage, setErrorMessage] = useState('');
   const [isMovieFilter, setIsMovieFilter] = useState(false);
   const [searchedMovies, setSearchedMovies] = useState([]);

   const [notFound, setNotFound] = useState(false);
   const [initialMovies, setInitialMovies] = useState([]);

   useEffect(() => {
      if (localStorage.getItem('movies')) {
         const movies = JSON.parse(
            localStorage.getItem('movies')
         );
         setInitialMovies(movies);
         if (
            localStorage.getItem('shortMovies') === 'true'
         ) {
            setSearchedMovies(filterShortMovies(movies));
         } else {
            setSearchedMovies(movies);
         }
      }
   }, []);



   const handleFilteredMovies = (movies, userQuery, moviesCheckbox) => {
      const moviesList = filterMovies(movies, userQuery, false);
      if (moviesList.length === 0) {
         setNotFound(true);
         setPopupMessage('Ничего не найдено.');
         setIsPopupOpen(true);
      } else {
         setNotFound(false);
      }
      setInitialMovies(moviesList);
      setSearchedMovies(
         moviesCheckbox ? filterShortMovies(moviesList) : moviesList
      );
      localStorage.setItem('movies', JSON.stringify(moviesList));
   }


   const searchMovies = (searchRequest) => {
      if (searchRequest.trim().length === 0) {
         setPopupMessage('Нужно ввести ключевое слово.');
         setIsPopupOpen(true);
         return;
      }

      localStorage.setItem('searchRequest', searchRequest);
      localStorage.setItem('shortMovies', isMovieFilter);

      if (movies.length === 0) {
         onLoading(true);
         moviesApi
            .getMovies()
            .then((movies) => {
               setMovies(movies);
               localStorage.setItem('searchedMovies', JSON.stringify(movies));
               handleFilteredMovies(movies, searchRequest, isMovieFilter);
            })
            .catch((err) => {
               setPopupMessage(err);
               setIsPopupOpen(true);
            })
            .finally(() => {
               onLoading(false);
            })
      } else {
         handleFilteredMovies(movies, searchRequest, isMovieFilter);
      }
   }


   const handleShortFilms = () => {
      setIsMovieFilter(!isMovieFilter);
      if (!isMovieFilter) {
         setSearchedMovies(filterShortMovies(initialMovies));
         if (filterMovies.length === 0) {
            setNotFound(true);
         }
      } else {
         setSearchedMovies(initialMovies);
      }
      localStorage.setItem('shortMovies', !isMovieFilter);
   }


   return (
      <main>
         <section className="movies__page">
            <SearchForm isMovieFilter={isMovieFilter} onSearchMovies={searchMovies} onFilter={handleShortFilms} />
            {isLoading && (
               <Preloader />
            )}
            {(errorMessage && !isLoading) && (
               <p className="movies__message">{errorMessage}</p>
            )}
            {(!isLoading && !errorMessage) && (
               <MoviesCardList
                  isLoading={isLoading}
                  isSavedMoviesPage={false}
                  movies={searchedMovies}
                  savedMovies={savedMovies}
                  onSave={onSave}
                  onDelete={onDelete}
               />
            )}
         </section>
      </main>
   )
};

export default Movies;
