import React, { useState } from 'react';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormAndValidation from '../../hooks/useFormAndValidation';

const SearchForm = ({
   isMovieFilter,
   onSearchMovies,
   onFilter,
   isSavedMoviesPage
}) => {
   const [movieRequest, setMovieRequest] = useState('');
   const { isValid, resetForm } = useFormAndValidation();

   const handleFormSubmit = (event) => {
      event.preventDefault();
      onSearchMovies(movieRequest, isMovieFilter, isValid);
   };

   function handleSavedMoviesFormSubmit(evt) {
      evt.preventDefault()
      onSearchMovies(movieRequest, isMovieFilter, resetForm);
   }


   return (
      <section className="search-form">
         {isSavedMoviesPage ? (
            <>
               <div className="search-form__container">
                  <form className="search-form__form" name="searchFormSave" onSubmit={handleSavedMoviesFormSubmit} noValidate>
                     <div className="search-form__input-container">
                        <input name="searchRequest" className="search-form__input" type="text" placeholder="Фильм" required
                           value={movieRequest || ''}
                           onChange={e => setMovieRequest(e.target.value)} />
                        <button className="btn search-form__btn" type="submit">Найти</button>
                     </div>
                     <FilterCheckbox isMovieFilter={isMovieFilter} onFilter={onFilter} />
                  </form>

               </div>
            </>
         ) : (
            <>
               <div className="search-form__container">
                  <form className="search-form__form" name="searchForm" onSubmit={handleFormSubmit} noValidate>
                     <div className="search-form__input-container">
                        <input name="searchRequest" className="search-form__input" type="text" placeholder="Фильм" required
                           value={movieRequest || ''}
                           onChange={e => setMovieRequest(e.target.value)} />
                        <button className="btn search-form__btn" type="submit">Найти</button>
                     </div>
                     <FilterCheckbox isMovieFilter={isMovieFilter} onFilter={onFilter} />
                  </form>
               </div>
            </>
         )}

         <span className="search-form__border"></span>
      </section>
   )
};

export default SearchForm;
