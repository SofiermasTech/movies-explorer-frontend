const BASE_API_URL = 'http://localhost:3000';
//'https://api.volserma-movies.nomoredomainsicu.ru';

const URL_MOVIE = "https://api.nomoreparties.co";

const headers = {
   Accept: 'application/json',
   'Content-Type': 'application/json',
};

const checkResponse = (res) => {
   if (res.ok) {
      return res.json();
   }
   return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ({ name, email, password }) => {
   return fetch(`${BASE_API_URL}/signup`, {
     method: 'POST',
     headers,
     body: JSON.stringify({
       name,
       email,
       password
     }),
   }).then((res) => checkResponse(res));
 };
 
 export const authorize = ({ email, password }) => {
   return fetch(`${BASE_API_URL}/signin`, {
     method: 'POST',
     headers,
     body: JSON.stringify({ email, password }),
   }).then((res) => checkResponse(res));
 };
 
 export const getContent = () => {
   const token = localStorage.getItem('token');
   return fetch(`${BASE_API_URL}/users/me`, {
     method: 'GET',
     headers: {
       ...headers,
       'Authorization': `Bearer ${token}`,
     }
   }).then((res) => checkResponse(res));
 };
 
 export const updateUserInfo = (data) => {
   const token = localStorage.getItem('token');
   return fetch(`${BASE_API_URL}/users/me`, {
     method: 'PATCH',
     headers: {
       ...headers,
       'Authorization': `Bearer ${token}`,
     },
     body: JSON.stringify({
       name: data.name,
       email: data.email,
     }),
   }).then((res) => checkResponse(res));
 };
 
 export const getSavedMovies = () => {
   const token = localStorage.getItem('token');
   return fetch(`${BASE_API_URL}/movies`, {
     method: 'GET',
     headers: {
       ...headers,
       'Authorization': `Bearer ${token}`,
     }
   }).then((res) => checkResponse(res));
 };
 
 export const saveMovie = ({
   country,
   director,
   duration,
   year,
   description,
   image,
   trailerLink,
   id,
   nameRU,
   nameEN,
 }) => {
   const token = localStorage.getItem('token');
   return fetch(`${BASE_API_URL}/movies`, {
     method: 'POST',
     credentials: "include",
     headers: {
       ...headers,
       'Authorization': `Bearer ${token}`,
     },
     body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image: `${URL_MOVIE}${image.url}`,
      trailerLink,
      thumbnail: `${URL_MOVIE}${image.formats.thumbnail.url}`,
      movieId: id,
      nameRU,
      nameEN,
    }),
   })
   .then((res) => checkResponse(res))
   
 };
 
 export const deleteMovie = (movieId) => {
   const token = localStorage.getItem('token');
   return fetch(`${BASE_API_URL}/movies/${movieId}`, {
     method: 'DELETE',
     headers: {
       ...headers,
       'Authorization': `Bearer ${token}`,
     },
   }).then((res) => checkResponse(res));
 };
