const MOVIES_URL = 'https://api.nomoreparties.co';
class MainApi {
  constructor(options) {
      this._url = options.baseUrl;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  _request(url, options) {
      return fetch(url, options).then(this._checkRes)
  }

  getUser(jwt) {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${jwt}`
    },
    }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      });
}

 getSavedMovies() {
  return fetch(`${this._url}/movies`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-type": "application/json",
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  });
}

savedMovie(movie, token) {
  return fetch(`${this._url}/movies`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorization': `Bearer ${localStorage.getItem("jwt")}`
    },
    credentials: 'include',
    body: JSON.stringify(movie)
  }).then(this._checkResponse)
};
getMovies() {
  if (!this.savedMoives) {
    const res =  fetch(`${MOVIES_URL}`, {
      method: 'GET',
    });
    this.savedMoives =  this._checkResponse(res);
  }
  return this.savedMoives;
}
  resetSave() {
    delete this.savedMoives; // удалить свойство из объекта
  }  

  deleteMovie(cardId, token) {
    return fetch(`${this._url}/movies/${cardId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        },
    })
}
  getCards(token) {
      return this._request(`${this._url}/movies`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      })
  }
  signOut() {
    return fetch(`${this._url}/signout`, {
      method: "POST",
      headers: this._headers,
      
      credentials: "include",
    }).then(this._handleResponse);
  }
  setInfoProfile(data, token) {
      return this._request(`${this._url}/users/me`, {
          method: 'PATCH',
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({
              name: data.name,
              email: data.email,
          })
      })
  }

  deleteCardID(cardID, token) {
      return this._request(`${this._url}/movies/${cardID}`, {
          method: 'DELETE',
          headers: {
              "Authorization": `Bearer ${token}`
          }
      })
  }
}

const api = new MainApi({
  // baseUrl: 'https://api.decaid.diplom.nomoredomainswork.ru',
  baseUrl: 'http://localhost:3000',
});

export default api;