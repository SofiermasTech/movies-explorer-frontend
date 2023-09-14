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
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
            <MoviesCard />
         </ul>
         <div className="movies__btn-container">
            <button className="btn movies__btn-else">Ещё</button>
         </div>
      </section>
   )
};

export default MoviesCardList;
