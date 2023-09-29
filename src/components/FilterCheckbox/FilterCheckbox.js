import './FilterCheckbox.css';

const FilterCheckbox = ({ isMovieFilter, onFilter }) => {

   return (
      <div className="checkbox__form">
         <input
            className="checkbox__input"
            type="checkbox"
            onChange={onFilter}
            checked={isMovieFilter}
         />
         <span className="checkbox__name">Короткометражки</span>
      </div>
   )
};

export default FilterCheckbox;
