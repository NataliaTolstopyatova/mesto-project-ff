import {deleteNewCard, addLike, deleteLike} from "./api.js";

const likeStatus = {};

function createCard(userId, element, deleteCard, likeCard, openImage) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.dataset.id = element._id;
  
  const likeButton = cardElement.querySelector('.card__like-button');
  const numberLikes = cardElement.querySelector('.number__likes');
  numberLikes.textContent = element.likes.length; 
  const deleteButton = cardElement.querySelector('.card__delete-button');
  
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = element.link;
  cardImage.alt = element.name;
  
  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = element.name;

  const cardId = element._id;
  const isLiked = element.likes.some(like => like._id === userId);
  if (isLiked) {
    likeButton.classList.add('card__like-button_is-active');
    likeStatus[cardId] = true; 
  };
  
  likeButton.addEventListener('click', () => {  
    likeCard(cardId, likeButton, numberLikes);
  });  

  if (userId !== element.owner._id) {
    deleteButton.style.visibility = 'hidden';
  } else {
    deleteButton.addEventListener("click", function () {
      deleteCard(cardId, cardElement);
    });
  };
  
  cardImage.addEventListener("click", function () {
    openImage(element.link, element.name);
  });

  return cardElement;
};

function deleteCard(cardId, cardElement) {
  deleteNewCard(cardId, cardElement).then(() => {
    cardElement.remove();
})
  .catch((error) => {
    console.log(error);
});
};

function likeCard(cardId, likeButton, numberLikes) {
  const like = likeStatus[cardId] ? deleteLike: addLike;
    like(cardId).then(element => { 
      likeButton.classList.toggle('card__like-button_is-active'); 
      numberLikes.textContent = element.likes.length; 
      likeStatus[cardId] = !likeStatus[cardId]; 
    }).catch(err => console.log(err));
};

export {createCard, deleteCard, likeCard};
