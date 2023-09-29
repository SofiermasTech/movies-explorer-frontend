import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import useFormAndValidation from '../../hooks/useFormAndValidation';

const SearchForm = ({
   isMovieFilter,
   onSearchMovies,
   onFilter,
   isSavedMoviesPage,
   disabled
}) => {
   const location = useLocation().pathname;
   const { values, isValid, resetForm, handleChange } = useFormAndValidation();

   const handleFormSubmit = (event) => {
      event.preventDefault();
      onSearchMovies(values.searchRequest, isMovieFilter, isValid);
   };

   function handleSavedMoviesFormSubmit(evt) {
      evt.preventDefault()
      onSearchMovies(values.searchRequest, isMovieFilter, resetForm);
   }

   useEffect(() => {
      if (location === '/movies' && localStorage.getItem('searchRequest')) {
         const searchValue = localStorage.getItem('searchRequest');
         values.searchRequest = searchValue;
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [location]);

   return (
      <section className="search-form">
         {isSavedMoviesPage ? (
            <>
               <div className="search-form__container">
                  <form className="search-form__form" name="searchFormSave" onSubmit={handleSavedMoviesFormSubmit} noValidate>
                     <div className="search-form__input-container">
                        <input
                           name="searchRequest"
                           className="search-form__input"
                           type="text"
                           placeholder="Фильм"
                           required
                           value={values.searchRequest || ''}
                           onChange={handleChange}
                           disabled={disabled}
                        />
                        <button className="btn search-form__btn" type="submit">Найти</button>
                     </div>
                     <FilterCheckbox
                        isMovieFilter={isMovieFilter}
                        onFilter={onFilter}
                        disabled={disabled}
                     />
                  </form>

               </div>
            </>
         ) : (
            <>
               <div className="search-form__container">
                  <form className="search-form__form" name="searchForm" onSubmit={handleFormSubmit} noValidate>
                     <div className="search-form__input-container">
                        <input
                           name="searchRequest"
                           className="search-form__input"
                           type="text"
                           placeholder="Фильм"
                           required
                           value={values.searchRequest || ''}
                           onChange={handleChange}
                           disabled={disabled}
                        />
                        <button className="btn search-form__btn" type="submit">Найти</button>
                     </div>
                     <FilterCheckbox
                        isMovieFilter={isMovieFilter}
                        onFilter={onFilter}
                        disabled={disabled}
                     />
                  </form>
               </div>
            </>
         )}

         <span className="search-form__border"></span>
      </section>
   )
};

export default SearchForm;
