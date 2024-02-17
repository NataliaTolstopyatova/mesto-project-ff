import "../pages/index.css";
import {initialCards} from "./cards.js";
import {createCard, deleteCard, likeCard} from "./card.js";
import {openModal, closeModal} from "./modal.js";

const placesList = document.querySelector('.places__list');

const popupTypeImage = document.querySelector('.popup_type_image');
const popupTypeImageClose = popupTypeImage.querySelector('.popup__close');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupCaption = popupTypeImage.querySelector('.popup__caption');
const profileButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupTypeEdit = document.querySelector('.popup_type_edit');
const popupTypeEditClose = popupTypeEdit.querySelector('.popup__close');
const popupTypeNewCard = document.querySelector('.popup_type_new-card');
const popupTypeNewCardClose = popupTypeNewCard.querySelector('.popup__close');
const edit = document.querySelector('.popup_type_edit');
const card = document.querySelector('.popup_type_new-card');
export const popupFormCard = card.querySelector('.popup__form');
const img = document.querySelector('.popup_type_image');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formElement = popupTypeEdit.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

const placeName = popupFormCard.querySelector('.popup__input_type_card-name');
const placeLink = popupFormCard.querySelector('.popup__input_type_url');

function addNewCardPopup(element) {
  const newCard = createCard(element, deleteCard, likeCard, openImage);
  placesList.prepend(newCard);
}; 

initialCards.forEach((element) => {
  addNewCardPopup(element);
});

function openImage(imageSrc, captionText) {
  popupImage.src = imageSrc;
  popupCaption.textContent = captionText;
  openModal(popupTypeImage);
};

function openFormSubmit() {
  openModal(edit);
  nameInput.value = profileTitle.textContent;  
  jobInput.value = profileDescription.textContent;
};

function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(edit);
};

function handleFormSubmitCard(evt) {
  evt.preventDefault();

  const addNewCard = {
    name: placeName.value,
    link: placeLink.value,
  };

  addNewCardPopup(addNewCard);
  closeModal(popupTypeNewCard); 
};

profileButton.addEventListener('click', () => openModal(edit));
profileAddButton.addEventListener('click', () => openModal(card));

popupTypeEditClose.addEventListener('click', () => closeModal(edit));
popupTypeNewCardClose.addEventListener('click', () => closeModal(card));
popupTypeImageClose.addEventListener('click', () => closeModal(img));

profileButton.addEventListener('click', openFormSubmit);
formElement.addEventListener('submit', handleFormSubmit);

popupFormCard.addEventListener('submit', handleFormSubmitCard);
