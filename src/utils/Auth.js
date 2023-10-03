import {BASE_MYAPI_URL} from '../utils/constants'

const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
};

const isOk = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then((res) => {
    throw res;
  });
}

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_MYAPI_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => isOk(res))
};

export const authorize = (email, password) => {
  return fetch(`${BASE_MYAPI_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => isOk(res))
};