// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector('.places__list');

function createCard(element, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  const deleteButton = cardElement.querySelector('.card__delete-button');

  const cardImage = cardElement.querySelector('.card__image');
  cardImage.src = element.link;
  cardImage.alt = element.name;

  const cardTitle = cardElement.querySelector('.card__title');
  cardTitle.textContent = element.name;

  deleteButton.addEventListener('click', deleteCard);

  return cardElement;
}

function deleteCard() {
  const closeCard = document.querySelector('.places__item');
  closeCard.remove();
}

initialCards.forEach((element) => {
  placesList.append(createCard(element, deleteCard));
});









