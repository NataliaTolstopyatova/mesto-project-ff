import "../pages/index.css";
import {createCard, deleteCard, likeCard} from "./card.js";
import {openModal, closeModal} from "./modal.js";
import {enableValidation, clearValidation} from "./validation.js";
import {loadingData, editProfile, addNewCard, updateUsersAvatar} from "./api.js";

const placesList = document.querySelector('.places__list');

const profileButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileImageButton = document.querySelector('.profile__image-button');
const profileImage = document.querySelector('.profile__image');

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

const popupTypeAvatar = document.querySelector('.popup_type_avatar');
const formAvatar = popupTypeAvatar.querySelector('.popup__form');
const avatarCloseButton = popupTypeAvatar.querySelector('.popup__close');
const avatarLink = formAvatar.querySelector('.popup__input_type_url_avatar');

const popupButton = document.querySelector('.popup__button');

let userId;

// ---------------------------------------------------------------------

loadingData().then((res) => {
  const [userElement, cardsElement] = res;

  const userName = userElement.name;
  const userAbout = userElement.about;
  const userAvatar = userElement.avatar;
  userId = userElement._id;

  profileImage.style.backgroundImage = `url(${userAvatar})`;
  profileTitle.textContent = userName;
  profileDescription.textContent = userAbout;

  cardsElement.forEach((card) => {
    const cardElement = createCard(
      userId,
      card,
      deleteCard,
      likeCard,
      openImage,
    );
    placesList.append(cardElement);
  });
})
.catch((err) => {
  console.error(err);
});

// ---------------------------------------------------------------------

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

enableValidation(validationConfig);

// ---------------------------------------------------------------------

function openImage(imageSrc, captionText) {
  popupImage.src = imageSrc;
  popupImage.alt = captionText;
  popupCaption.textContent = captionText;
  openModal(popupTypeImage);
};

// ---------------------------------------------------------------------

function openFormSubmit() {
 clearValidation(formEditProfile, validationConfig);
 openModal(popupEditProfile);
 nameInput.value = profileTitle.textContent;  
 jobInput.value = profileDescription.textContent;
};

function submitAddCardForm(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupButton.textContent = "Сохранение...";

  editProfile(nameInput.value, jobInput.value)
  .then((element) => {
    const userName = element.name;
    const userAbout = element.about;
    
    profileTitle.textContent = userName;
    profileDescription.textContent = userAbout;
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    popupButton.textContent = "Сохранить";
  });

  closeModal(popupEditProfile);
};

// ---------------------------------------------------------------------

function openHandleFormSubmitCard() {
  clearValidation(popupFormCard, validationConfig);
  openModal(popupAddCard);
  placeName.value = '';
  placeLink.value = '';
};

function handleFormSubmitCard(evt) {
  evt.preventDefault();

  popupButton.textContent = "Сохранение...";

  addNewCard(placeName.value, placeLink.value)
    .then((element) => {
      const createNewCard = createCard(
        userId,
        element,
        deleteCard, 
        likeCard,
        openImage,
      );

      placesList.prepend(createNewCard);
      popupFormCard.reset();
      closeModal(popupAddCard);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      popupButton.textContent = "Сохранить";
    });
};

// ---------------------------------------------------------------------

function openHandleFormSubmitAvatar() {
  clearValidation(formAvatar, validationConfig);
  openModal(popupTypeAvatar);
  avatarLink.value = '';
};

function handleFormSubmitAvatar(evt) {
  evt.preventDefault();

  popupButton.textContent = "Сохранение...";

  updateUsersAvatar(avatarLink.value)
    .then((element) => {
      const avatarImage = element.avatar;
      profileImage.style.backgroundImage = `url(${avatarImage})`;
      closeModal(popupTypeAvatar);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      popupButton.textContent = "Сохранить";
    });

    formAvatar.reset();
};

// ---------------------------------------------------------------------

profileButton.addEventListener('click', openFormSubmit);
formEditProfile.addEventListener('submit', submitAddCardForm);
profileAddButton.addEventListener('click', openHandleFormSubmitCard);
popupFormCard.addEventListener('submit', handleFormSubmitCard);
profileImageButton.addEventListener('click', openHandleFormSubmitAvatar);
formAvatar.addEventListener('submit', handleFormSubmitAvatar);
popupTypeEditClose.addEventListener('click', () => closeModal(popupEditProfile));
popupTypeImageClose.addEventListener('click', () => closeModal(popupTypeImage));
popupTypeNewCardClose.addEventListener('click', () => closeModal(popupAddCard));
avatarCloseButton.addEventListener('click', () => closeModal(popupTypeAvatar));


