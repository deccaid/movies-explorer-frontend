class Auth {
  constructor({ url }) {
    this._url = url;
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

  registration(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, password })
    })
      .then(this._checkResponse)
  }

  Login(email, password) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password } )
    })
      .then(this._checkResponse)
  }

  checkToken(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

}

export const auth = new Auth({
  url: "https://api.decaid.diplom.nomoredomainswork.ru"
});

