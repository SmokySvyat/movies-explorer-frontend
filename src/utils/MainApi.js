import {BASE_MYAPI_URL} from '../utils/constants'

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
      .then(res => this._isResultOk(res))
    };
  
    // getCard() {
    //   return fetch(`${this._baseUrl}cards`, {
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
    //       'content-type': 'application/json'
    //     }
    //   }).then(res => this._isResultOk(res))
    // };
  
    // postCard(data) {
    //   return fetch(`${this._baseUrl}cards`, {
    //     method: 'POST',
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
    //       'content-type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       name: data.place,
    //       link: data.link
    //     })
    //   })
    //   .then(res => this._isResultOk(res))
    // };

    // deleteCard(cardId) {
    //   return fetch(`${this._baseUrl}cards/${cardId}`, {
    //     method: "DELETE",
    //     headers: {
    //       authorization: `Bearer ${localStorage.getItem('jwt')}`,
    //       'content-type': 'application/json'
    //     },
    //   }).then(this._isResultOk);
    // }
  
    // like(cardId, isLiked) {
    //   if (!isLiked) {
    //     return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
    //       method: "PUT",
    //       headers: {
    //         authorization: `Bearer ${localStorage.getItem('jwt')}`,
    //         'content-type': 'application/json'
    //       }
    //     }).then(this._isResultOk);
    //   } else {
    //     return fetch(`${this._baseUrl}cards/${cardId}/likes`, {
    //       method: "DELETE",
    //       headers: {
    //         authorization: `Bearer ${localStorage.getItem('jwt')}`,
    //         'content-type': 'application/json'
    //       },
    //     }).then(this._isResultOk);
    //   }
    // }
  };

export const api = new Api ({
  url: BASE_MYAPI_URL,
    // url: 'http://localhost:3000/',
//   headers: {
//     authorization: `Bearer ${localStorage.getItem('jwt')}`,
//     'content-type': 'application/json'
//   }
  }
);
