import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';


const SearchForm = () => {
   return (
      <section className="search-form">

         <div className="search-form__container">
            <form action="" className="search-form__form">
               <input className="search-form__input" type="text" placeholder="Фильм" />
               <button className="search-form__btn" type="submit">Найти</button>
               <FilterCheckbox />
            </form>
            
         </div>

         <span className="search-form__border"></span>
      </section>
   )
};

export default SearchForm;
