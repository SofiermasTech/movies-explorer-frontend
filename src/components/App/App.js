import { Route, Routes } from 'react-router-dom';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';

function App() {
   return (
      <div className="page">
         <Header />
         <Routes>
            <Route exact path="/" element={<Main />}
            />
            <Route path="/sign-in" element={<Login />}
            />
            <Route path="/sign-up" element={<Register />}
            />
            <Route path="/movies" element={<Movies />}
            />
            <Route path="/saved-movies" element={<SavedMovies />}
            />
            <Route path="/profile" element={<Profile />}
            />
            <Route path="*" element={<PageNotFound />}
            />
         </Routes>

         <Footer />

      </div>
   );
}

export default App;
