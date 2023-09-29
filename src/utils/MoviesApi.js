import { MOVIE_API_URL } from './constant';

class MoviesApi {
  constructor(movieUrl) {
    this._movieUrl = movieUrl;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._movieUrl)
      .then(res => this._parseResponse(res));
  }
}

const moviesApi = new MoviesApi(MOVIE_API_URL);

export default moviesApi;