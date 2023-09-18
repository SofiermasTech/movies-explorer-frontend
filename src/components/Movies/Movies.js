import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const movies = [
   {
      nameRU: 'Баския: Взрыв реальности',
      image: 'https://img1.goodfon.ru/wallpaper/nbig/e/c0/nachalo-inception-aktery-stoyat.jpg',
      duration: '1ч 17м',
      movieId: '1bv1f',
      save: false
   },
   {
      nameRU: 'Баския: Взрыв реальности',
      image: 'https://thenewbev.com/wp-content/uploads/2019/06/Hollywood-poster-header-1250x813.jpg',
      duration: '1ч 17м',
      movieId: '1bv1ffh',
      save: false
   },
];

const Movies = () => {
   return (
      <>
         <main>
            <SearchForm />
            <MoviesCardList isSavedMoviesPage={false} movies={movies} />
         </main>
      </>
   )
};

export default Movies;