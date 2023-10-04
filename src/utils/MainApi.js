import { BASE_MYAPI_URL, BASE_IMG_URL} from '../utils/constants'

class Api {
    constructor({ url, imgUrl}) {
      this._baseUrl = url;
      this._baseImgUrl = imgUrl;
    }
  
    _isResultOk(res) {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Ошибка: ${res.status}`)
    };

    _isOk = (res) => {
      if (res.ok) {
        return res.json();
      }
      return res.json().then((res) => {
        throw res;
      });
    }
  
    getProfile() {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'content-type': 'application/json'
        }
        })
          .then(res => this._isResultOk(res))
          .catch(err => console.log(err))
    };
  
    patchProfile(values) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      .then(res => this._isOk(res))
    };
  
    saveCard(card) {
      return fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          country: card.country,
             director: card.director,
             duration: card.duration,
             year: card.year,
             description: card.description,
             image: this._baseImgUrl + card.image.url,
             trailerLink: card.trailerLink,
             nameRU: card.nameRU,
             nameEN: card.nameEN,
             thumbnail: this._baseImgUrl + card.image.formats.thumbnail.url,
             movieId: card.id,
        })
      })
      .then(res => this._isResultOk(res))
    };

    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/movies/${cardId}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
          'content-type': 'application/json'
        },
      }).then(res => this._isResultOk(res));
    }
  
    getSavedMovies() {
      return fetch(`${this._baseUrl}/movies`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        },
      }).then(res => this._isResultOk(res));
    }
  };

export const api = new Api ({
  url: BASE_MYAPI_URL,
  imgUrl: BASE_IMG_URL,
    // url: 'http://localhost:3000/',
//   headers: {
//     authorization: `Bearer ${localStorage.getItem('jwt')}`,
//     'content-type': 'application/json'
//   }
  }
);
