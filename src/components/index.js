import "../pages/index.css";
import {initialCards} from "./cards.js";
import {createCard, deleteCard, likeCard} from "./card.js";
import {openModal, closeModal} from "./modal.js";

const placesList = document.querySelector('.places__list');

const profileButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupTypeEditClose = popupEditProfile.querySelector('.popup__close');
const formEditProfile = popupEditProfile.querySelector('.popup__form');
const nameInput = formEditProfile.querySelector('.popup__input_type_name');
const jobInput = formEditProfile.querySelector('.popup__input_type_description');

const popupAddCard = document.querySelector('.popup_type_new-card');
const popupTypeNewCardClose = popupAddCard.querySelector('.popup__close');
const popupFormCard = popupAddCard.querySelector('.popup__form');
const placeName = popupFormCard.querySelector('.popup__input_type_card-name');
const placeLink = popupFormCard.querySelector('.popup__input_type_url');

const popupTypeImage = document.querySelector('.popup_type_image');
const popupTypeImageClose = popupTypeImage.querySelector('.popup__close');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupCaption = popupTypeImage.querySelector('.popup__caption');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

function renderCard(element) {
  const newCard = createCard(element, deleteCard, likeCard, openImage);
  placesList.prepend(newCard);
}; 

initialCards.forEach((element) => {
  renderCard(element);
});

function openImage(imageSrc, captionText) {
  popupImage.src = imageSrc;
  popupImage.alt = captionText;
  popupCaption.textContent = captionText;
  openModal(popupTypeImage);
};

function openFormSubmit() {
  openModal(popupEditProfile);
  nameInput.value = profileTitle.textContent;  
  jobInput.value = profileDescription.textContent;
};

function submitAddCardForm(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupEditProfile);
};

function openHandleFormSubmitCard() {
  openModal(popupAddCard);
  placeName.value = '';
  placeLink.value = '';
};

function handleFormSubmitCard(evt) {
  evt.preventDefault();

  const card = {
    name: placeName.value,
    link: placeLink.value,
  };

  renderCard(card);
  closeModal(popupAddCard); 
};

profileButton.addEventListener('click', () => openModal(popupEditProfile));
profileAddButton.addEventListener('click', () => openModal(popupAddCard));

popupTypeEditClose.addEventListener('click', () => closeModal(popupEditProfile));
popupTypeNewCardClose.addEventListener('click', () => closeModal(popupAddCard));
popupTypeImageClose.addEventListener('click', () => closeModal(popupTypeImage));

profileButton.addEventListener('click', openFormSubmit);
formEditProfile.addEventListener('submit', submitAddCardForm);

profileAddButton.addEventListener('click', openHandleFormSubmitCard);
popupFormCard.addEventListener('submit', handleFormSubmitCard);
