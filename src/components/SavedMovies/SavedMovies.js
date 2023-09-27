import React, { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import './SavedMovies.css';

import { filterMovies, filterShortMovies } from '../../utils/utils';


const SavedMovies = ({
   savedMovies,
   isLoading,
   onDelete,
   setPopupMessage,
   setIsPopupOpen,
}) => {
   const [renderedMovies, setRenderedMovies] = useState(savedMovies);
   const [errorMessage, setErrorMessage] = useState('');
   const [isMovieFilter, setIsMovieFilter] = useState(false);
   const [searchQuery, setSearchQuery] = useState('');
   const [notFound, setNotFound] = useState(false);
   const [searchedMovies, setSearchedMovies] = useState(renderedMovies);


   useEffect(() => {
      if (savedMovies.length === 0) {
         setErrorMessage('Вы еще ничего не сохранили.')
      } else {
         setRenderedMovies(savedMovies);
         setErrorMessage('');
      }
   }, [savedMovies])

   function handleSearchSavedMovies(searchRequest) {
      if (searchRequest.trim().length === 0) {
         setPopupMessage('Нужно ввести ключевое слово.');
         setIsPopupOpen(true);
         return;
      }

      const moviesList = filterMovies(savedMovies, searchRequest, isMovieFilter);
      setSearchQuery(searchRequest);
      if (moviesList.length === 0) {
         setNotFound(true);
         setPopupMessage('Ничего не найдено.');
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

   return (
      <main>
         <SearchForm isSavedMoviesPage={true} isMovieFilter={isMovieFilter} onSearchMovies={handleSearchSavedMovies}
            onFilter={handleShortSavedFilms} />

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
               isLoading={isLoading}
            />
         )}
      </main>
   )
};

export default SavedMovies;