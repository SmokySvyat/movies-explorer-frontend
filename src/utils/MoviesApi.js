import { BASE_MOVIE_URL } from "./constants";

class Api {
    constructor({url}) {
      this._baseUrl = url;
    }
  
    _isResultOk(res) {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    };
  
    getCard() {
      return fetch(this._baseUrl)
        .then(res => this._isResultOk(res))
        .catch(err => console.log(err))
    };
  };

export const apiMovies = new Api ({
  url: BASE_MOVIE_URL,
  }
);