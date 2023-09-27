import './FilterCheckbox.css';

const FilterCheckbox = ({ isMovieFilter, onFilter }) => {

   const filterMovies = (evt) => {
      onFilter(evt.target.checked);
      localStorage.setItem('filter', evt.target.checked);
   };

   return (
      <div className="checkbox__form">
         <input className="checkbox__input" type="checkbox" onInput={filterMovies} value={isMovieFilter} />
         <span className="checkbox__name">Короткометражки</span>
      </div>
   )
};

export default FilterCheckbox;
