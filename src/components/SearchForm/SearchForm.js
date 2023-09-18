import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


const SearchForm = () => {
   return (
      <section className="search-form">

         <div className="search-form__container">
            <form className="search-form__form">
               <div className="search-form__input-container">
                  <input className="search-form__input" type="text" placeholder="Фильм" required />
                  <button className="btn search-form__btn" type="submit">Найти</button>
               </div>
               <FilterCheckbox />
            </form>

         </div>

         <span className="search-form__border"></span>
      </section>
   )
};

export default SearchForm;
