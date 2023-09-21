import React, { useState } from 'react';
import { Route, Routes, useNavigate, Navigate, } from 'react-router-dom';

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
   const navigate = useNavigate();
   const [loggedIn, setLoggedIn] = useState(false);

   function onSignOut() {
      // localStorage.removeItem('token');
      setLoggedIn(false);
      navigate('/');
   }

   return (
      <div className="page">
         <Header loggedIn={true} />
         <Routes>
            <Route exact path="/" element={<Main loggedIn={loggedIn} />}
            />
            <Route path="/signin" element={loggedIn ? (<Navigate to="/movies" replace />) : (<Login />)}
            />
            <Route path="/signup" element={loggedIn ? (<Navigate to="/movies" replace />) : (<Register />)}
            />


            <Route path="/movies" element={<Movies loggedIn={loggedIn} />}
            />
            <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} />}
            />
            <Route path="/profile" element={<Profile loggedIn={loggedIn} onLogOut={onSignOut} />}
            />
            <Route path="*" element={<PageNotFound />}
            />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
