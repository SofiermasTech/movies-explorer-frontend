import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import moviesApi from '../../utils/MoviesApi';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { filterMovies, filterShortMovies } from '../../utils/utils';
import { ERROR_TEXT_NOTFOUND, ERROR_TEXT_KEY_WORD } from '../../utils/constant';

const Movies = ({
   isLoading,
   onLoading,
   savedMovies,
   onSave,
   onDelete,
   setPopupMessage,
   setIsPopupOpen,
}) => {
   const location = useLocation().pathname;
   const [movies, setMovies] = useState([]);
   const [errorMessage, setErrorMessage] = useState('');
   const [isMovieFilter, setIsMovieFilter] = useState(false);
   const [searchedMovies, setSearchedMovies] = useState([]);
   // eslint-disable-next-line no-unused-vars
   const [notFound, setNotFound] = useState(false);


   useEffect(() => {
      if (searchedMovies.length === 0) {
         setErrorMessage('Вы еще ничего не искали.')
      } else {
         setSearchedMovies(searchedMovies);
         setErrorMessage('');
      }
   }, [searchedMovies])

   useEffect(() => {
      if (localStorage.getItem('movies')) {
         const movies = JSON.parse(
            localStorage.getItem('movies')
         );
         setSearchedMovies(movies);
         if (
            localStorage.getItem('shortMovies') === 'true'
         ) {
            setSearchedMovies(filterShortMovies(movies));
         } else {
            setSearchedMovies(movies);
         }
      }
   }, [location]);

   useEffect(() => {
      if (localStorage.getItem('shortMovies') === 'true') {
         setIsMovieFilter(true);
      } else {
         setIsMovieFilter(false);
      }
   }, [location]);

   const handleFilteredMovies = (movies, userQuery, moviesCheckbox) => {
      const moviesList = filterMovies(movies, userQuery, false);
      if (moviesList.length === 0) {
         setNotFound(true);
         setPopupMessage(ERROR_TEXT_NOTFOUND);
         setIsPopupOpen(true);
      } else {
         setNotFound(false);
      }
      setSearchedMovies(moviesList);
      setSearchedMovies(
         moviesCheckbox ? filterShortMovies(moviesList) : moviesList
      );
      localStorage.setItem('movies', JSON.stringify(moviesList));
   }


   const searchMovies = (searchRequest) => {
      if (searchRequest.trim().length === 0) {
         setPopupMessage(ERROR_TEXT_KEY_WORD);
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
         setSearchedMovies(filterShortMovies(searchedMovies));
         if (filterMovies.length === 0) {
            setNotFound(true);
         }
      } else {
         setSearchedMovies(searchedMovies);
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
