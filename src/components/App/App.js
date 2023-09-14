import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../Main/Main';
// import Footer from '../Footer/Footer';
// import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';


function App() {
   const [loggedIn, setLoggedIn] = useState(true);

   return (
      <div className="page">
         {/*  <Header isloggedIn={true} /> */}
         <Routes>
            <Route exact path="/" element={<Main loggedIn={loggedIn} />}
            />
            <Route path="/signin" element={<Login />}
            />
            <Route path="/signup" element={<Register />}
            />
            <Route path="/movies" element={<Movies loggedIn={loggedIn} />}
            />
            <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} />}
            />
            <Route path="/profile" element={<Profile loggedIn={loggedIn} />}
            />
            <Route path="*" element={<PageNotFound />}
            />
         </Routes>

      </div>
   );
}

export default App;
