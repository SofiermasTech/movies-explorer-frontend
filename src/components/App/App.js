import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';

import * as mainApi from '../../utils/MainApi';
import CurrentUserContext from '../../context/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';

import { ERROR_TEXT_REGISTER, ERROR_TEXT_LOGIN } from '../../utils/constant';


function App() {
   const navigate = useNavigate();

   const [loggedIn, setLoggedIn] = useState(false);
   const [currentUser, setCurrentUser] = useState({});
   const [isLoading, setIsLoading] = useState(false);

   const [savedMovies, setSavedMovies] = useState([]);
   const [searchedMovies, setSearchedMovies] = useState([]);

   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [popupMessage, setPopupMessage] = useState('');


   function handleTokenCheck() {
      const token = localStorage.getItem('token');
      setIsLoading(true);
      if (token) {
         mainApi
            .getContent(token)
            .then((data) => {
               setLoggedIn(true);
               setCurrentUser(data)
            })
            .catch((err) => { console.log(`Возникла ошибка, ${err}`) })
            .finally(() => setIsLoading(false));
      }
   }

   useEffect(() => {
      handleTokenCheck();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


   /*------------------SAVE & DELETED MOVIES------------------------ */

   const handleSaveMovie = ({ country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN, }) => {
      mainApi
         .saveMovie({
            country, director, duration, year, description, image, trailerLink, id, nameRU, nameEN,
         })
         .then((newSavedMovie) => {
            setSavedMovies([newSavedMovie, ...savedMovies]);
         })
         .catch((error) => {
            setPopupMessage(error);
            setIsPopupOpen(true);
            console.log(`Ошибка: ${error}`);
         })
   }

   const handleDeleteMovie = (movie) => {
      const film = savedMovies.find(({ movieId }) => movieId === movie.id);
      if (movie._id) {
         mainApi
            .deleteMovie(movie._id)
            .then(() => {
               setSavedMovies(...[state => state.filter(c => c._id !== movie._id)]);
               setPopupMessage('Фильм удален из сохраненных.');
               setIsPopupOpen(true);
            })
            .catch(console.error);
      } else {
         mainApi
            .deleteMovie(film._id)
            .then(() => {
               setSavedMovies(state => state.filter(c => c._id !== film._id));
            })
            .catch(console.error);
      }
   };


   /*-----------------POPUP------------------------- */

   const handleClosePopup = () => {
      setIsPopupOpen(false);
      setPopupMessage('');
   };


   /*------------------REGISTER & LOGIN------------------------ */

   const handleRegistration = ({ name, email, password }) => {
      return mainApi
         .register({ name, email, password })
         .then(() => {
            handleLogin({ email, password });
         })
         .catch((err) => {
            console.log(err);
            setPopupMessage(ERROR_TEXT_REGISTER);
            setIsPopupOpen(true);
         });
   };


   function handleLogin({ email, password }) {
      return mainApi
         .authorize({ email, password })
         .then((data) => {
            if (data) {
               setLoggedIn(true);
               localStorage.setItem('token', data.token);
               navigate('/movies');
            }
         })
         .catch((err) => {
            console.log(err);
            setPopupMessage(ERROR_TEXT_LOGIN);
            setIsPopupOpen(true);
         })
   }


   /*------------------USERS DATA------------------------ */

   const handleUpdateUser = (newUserInfo) => {
      setIsLoading(true);
      mainApi
         .updateUserInfo(newUserInfo)
         .then((data) => {
            setCurrentUser(data);
            setPopupMessage('Данные успешно изменены!');
            setIsPopupOpen(true);
         })
         .catch(() => {
            setPopupMessage('При обновлении профиля произошла ошибка.');
            setIsPopupOpen(true);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   useEffect(() => {
      if (loggedIn) {
         Promise.all([mainApi.getContent(), mainApi.getSavedMovies()])
            .then(([userData, userMovies]) => {
               setCurrentUser(userData);
               localStorage.setItem('savedMovies', JSON.stringify(userMovies));
               setSavedMovies(userMovies);
            })
            .catch((err) => {
               console.log(`Ошибка: ${err}`);
            });
      }
   }, [loggedIn]);


   /*------------------LOG OUT------------------------ */

   function onSignOut() {
      localStorage.clear();
      setLoggedIn(false);
      navigate('/');

   }

   return (
      <CurrentUserContext.Provider value={currentUser}>
         <div className="page">
            <Header loggedIn={loggedIn} />

            <Routes>
               <Route exact path="/" element={<Main loggedIn={loggedIn} />}
               />
               <Route path="/signin" element={loggedIn ? (<Navigate to="/movies" replace />
               ) : (<Login onLogin={handleLogin} />)}
               />
               <Route path="/signup" element={loggedIn ? (<Navigate to="/movies" replace />
               ) : (<Register onRegister={handleRegistration} />)}
               />

               <Route path="/movies" element={
                  <ProtectedRoute
                     element={Movies}
                     loggedIn={loggedIn}
                     movies={searchedMovies}
                     savedMovies={savedMovies}
                     onLoading={setIsLoading}
                     isLoading={isLoading}
                     onSave={handleSaveMovie}
                     onDelete={handleDeleteMovie}
                     setPopupMessage={setPopupMessage}
                     setIsPopupOpen={setIsPopupOpen}
                  />
               }
               />
               <Route path="/saved-movies" element={
                  <ProtectedRoute
                     element={SavedMovies}
                     loggedIn={loggedIn}
                     savedMovies={savedMovies}

                     isLoading={isLoading}
                     onDelete={handleDeleteMovie}
                     setPopupMessage={setPopupMessage}
                     setIsPopupOpen={setIsPopupOpen}
                  />
               }
               />
               <Route path="/profile" element={
                  <ProtectedRoute
                     element={Profile}
                     loggedIn={loggedIn}
                     currentUser={currentUser}
                     onUpdateUser={handleUpdateUser}
                     onLogOut={onSignOut}
                  />
               }
               />
               <Route path="*" element={<PageNotFound />}
               />
            </Routes>
            <Footer />

            <InfoTooltip
               isOpen={isPopupOpen}
               onClose={handleClosePopup}
               message={popupMessage}
            />
         </div>
      </CurrentUserContext.Provider>
   );
}

export default App;
