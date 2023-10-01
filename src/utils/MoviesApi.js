import { BASE_MOVIE_URL } from "./constants";

class Api {
    constructor({url}) {
      this._baseUrl = url;
    //   this._headers = headers;
    }
  
    _isResultOk(res) {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    };
  
    getCard() {
      return fetch(this._baseUrl)
        // .then(res => console.log(this._isResultOk(res)))
        .then(res => this._isResultOk(res))
    };
  };

export const apiMovies = new Api ({
  url: BASE_MOVIE_URL,
//   headers: {
//     'content-type': 'application/json'
//   }
  }
);