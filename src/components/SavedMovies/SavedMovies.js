import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';

const moviesSaved = [
   {
      nameRU: 'Баския: Взрыв реальности',
      image: 'https://img1.goodfon.ru/wallpaper/nbig/e/c0/nachalo-inception-aktery-stoyat.jpg',
      duration: '1ч 17м',
      movieId: '1bv1f',
      save: true
   },
   {
      nameRU: 'Баския: Взрыв реальности',
      image: 'https://thenewbev.com/wp-content/uploads/2019/06/Hollywood-poster-header-1250x813.jpg',
      duration: '1ч 17м',
      movieId: '1bv1ffh',
      save: true
   },
];

const SavedMovies = () => {
   return (
      <>
         <main>

            <SearchForm />
            <MoviesCardList isSavedMoviesPage={true} movies={moviesSaved}/>

         </main>
      </>
   )
};

export default SavedMovies;