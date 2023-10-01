import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { filterMovies, filterShortMovies } from '../../utils/utils';
import { ERROR_TEXT_NOTFOUND, ERROR_TEXT_NOT_SAVE, ERROR_TEXT_KEY_WORD } from '../../utils/constant';


const SavedMovies = ({
   savedMovies,
   isLoading,
   onDelete,
   setPopupMessage,
   setIsPopupOpen,
}) => {
   const location = useLocation().pathname;
   const [renderedMovies, setRenderedMovies] = useState(savedMovies);
   const [errorMessage, setErrorMessage] = useState('');
   const [isMovieFilter, setIsMovieFilter] = useState(false);
   const [searchQuery, setSearchQuery] = useState('');
   // eslint-disable-next-line no-unused-vars
   const [notFound, setNotFound] = useState(false);
   const [searchedMovies, setSearchedMovies] = useState(renderedMovies);
  

   useEffect(() => {
      if (savedMovies.length === 0) {
         setErrorMessage(ERROR_TEXT_NOT_SAVE);
      } else {
         setRenderedMovies(savedMovies);
         setErrorMessage('');
      }
   }, [savedMovies])

   function handleSearchSavedMovies(searchRequest) {
      if ((searchRequest || '').trim().length === 0) {
         setPopupMessage(ERROR_TEXT_KEY_WORD);
         setIsPopupOpen(true);
         return;
      }
      const moviesList = filterMovies(savedMovies, searchRequest, isMovieFilter);
      setSearchQuery(searchRequest);
      if (moviesList.length === 0) {
         setNotFound(true);
         setPopupMessage(ERROR_TEXT_NOTFOUND);
         setIsPopupOpen(true);

      } else {
         setNotFound(false);
         setSearchedMovies(moviesList);
         setRenderedMovies(moviesList);
      }
   }

   const handleShortSavedFilms = () => {
      if (!isMovieFilter) {
         setIsMovieFilter(true);
         localStorage.setItem('shortSavedMovies', true);
         setRenderedMovies(filterShortMovies(searchedMovies));
         filterShortMovies(searchedMovies).length === 0 ? setNotFound(true) : setNotFound(false);
      } else {
         setIsMovieFilter(false);
         localStorage.setItem('shortSavedMovies', false);
         searchedMovies.length === 0 ? setNotFound(true) : setNotFound(false);
         setRenderedMovies(searchedMovies);
      }

   }

   useEffect(() => {
      if (localStorage.getItem('shortSavedMovies') === 'true') {
         setIsMovieFilter(true);
         setRenderedMovies(filterShortMovies(savedMovies));
      } else {
         setIsMovieFilter(false);
         const moviesList = filterMovies(savedMovies, searchQuery, isMovieFilter);
         setRenderedMovies(moviesList);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [savedMovies, location, isMovieFilter]);

   useEffect(() => {
      setSearchedMovies(savedMovies);
      savedMovies.length !== 0 ? setNotFound(false) : setNotFound(true);
   }, [savedMovies]);

   return (
      <main>
         <SearchForm
            isSavedMoviesPage={true}
            isMovieFilter={isMovieFilter}
            onSearchMovies={handleSearchSavedMovies}
            onFilter={handleShortSavedFilms}
         />
         {isLoading && (
            <Preloader />
         )}
         {(errorMessage && !isLoading) && (
            <p className="saved-movies__message">{errorMessage}</p>
         )}
         {(!isLoading && !errorMessage) && (
            <MoviesCardList
               isSavedMoviesPage={true}
               movies={renderedMovies}
               savedMovies={savedMovies}
               onDelete={onDelete}
            />
         )}
      </main>
   )
};

export default SavedMovies;