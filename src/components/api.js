const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/wff-cohort-8',
  headers: {
    authorization: 'a4df32b8-640f-4aea-b0e7-c7da0abeffbd',
    'Content-Type': 'application/json',
  }
};
  
function checkRequest(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};
  
const uplodingUserInfo = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  })
  .then(checkRequest);
};
  
const uploadingCard = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  })
  .then(checkRequest);
};

export const loadingData = () => {
  return Promise.all([uplodingUserInfo(), uploadingCard()]);
};

export const editProfile = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
    name: name,
    about: about,
    }),
  })
  .then(checkRequest);
};

export const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
    name: name,
    link: link,
    }),
  })
  .then(checkRequest);
};

export const deleteNewCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
    })
  .then(checkRequest);
};

export const addLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
    })
  .then(checkRequest);
};

export const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
    })
  .then(checkRequest);
};

export const updateUsersAvatar = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
    avatar: avatar,
    }),
  })
  .then(checkRequest);
};

  