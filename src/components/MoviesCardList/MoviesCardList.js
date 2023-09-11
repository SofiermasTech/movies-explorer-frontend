import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


const MoviesCardList = () => {
   return (
      <section className="movies">
         <ul className="movies__list">
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />

         </ul>
         <div className="movies-list__btn-container">
            <button className="movies-list__btn">Ещё</button>
         </div>
      </section>
   )
};

export default MoviesCardList;
