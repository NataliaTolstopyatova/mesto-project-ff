(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-8",headers:{authorization:"a4df32b8-640f-4aea-b0e7-c7da0abeffbd","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},o={};function c(e,t,n,r,c){var a=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0);a.dataset.id=t._id;var u=a.querySelector(".card__like-button"),i=a.querySelector(".number__likes");i.textContent=t.likes.length;var l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__image");s.src=t.link,s.alt=t.name,a.querySelector(".card__title").textContent=t.name;var d=t._id;return t.likes.some((function(t){return t._id===e}))&&(u.classList.add("card__like-button_is-active"),o[d]=!0),u.addEventListener("click",(function(){r(d,u,i)})),e!==t.owner._id?l.style.visibility="hidden":l.addEventListener("click",(function(){n(d,a)})),s.addEventListener("click",(function(){c(t.link,t.name)})),a}function a(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)})(n).then((function(){r.remove()})).catch((function(e){console.log(e)}))}function u(e,t,c){(o[e]?r:n)(e).then((function(n){t.classList.toggle("card__like-button_is-active"),c.textContent=n.likes.length,o[e]=!o[e]})).catch((function(e){return console.log(e)}))}function i(e){e.classList.add("popup_is-opened"),e.addEventListener("click",s),document.addEventListener("keydown",d)}function l(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",s),document.removeEventListener("keydown",d)}function s(e){e.target===e.currentTarget&&l(e.target)}function d(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))}var p=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},f=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)};function _(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):f(t,n.inactiveButtonClass)}var v=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){p(e,n,t)})),f(r,t)};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m,h=document.querySelector(".places__list"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__image-button"),C=document.querySelector(".profile__image"),E=document.querySelector(".popup_type_edit"),L=E.querySelector(".popup__close"),k=E.querySelector(".popup__form"),g=k.querySelector(".popup__input_type_name"),x=k.querySelector(".popup__input_type_description"),A=document.querySelector(".popup_type_new-card"),U=A.querySelector(".popup__close"),w=A.querySelector(".popup__form"),T=w.querySelector(".popup__input_type_card-name"),j=w.querySelector(".popup__input_type_url"),O=document.querySelector(".popup_type_image"),B=O.querySelector(".popup__close"),D=O.querySelector(".popup__image"),P=O.querySelector(".popup__caption"),I=document.querySelector(".profile__title"),M=document.querySelector(".profile__description"),N=document.querySelector(".popup_type_avatar"),J=N.querySelector(".popup__form"),H=N.querySelector(".popup__close"),V=J.querySelector(".popup__input_type_url_avatar"),z=document.querySelector(".popup__button");Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],l=o.name,s=o.about,d=o.avatar;m=o._id,C.style.backgroundImage="url(".concat(d,")"),I.textContent=l,M.textContent=s,i.forEach((function(e){var t=c(m,e,a,u,F);h.append(t)}))})).catch((function(e){console.error(e)}));var $={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function F(e,t){D.src=e,D.alt=t,P.textContent=t,i(O)}!function(e){document.querySelectorAll(e.formSelector).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?p(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),_(n,r,t)}))}))}(t,e)}))}($),S.addEventListener("click",(function(){v(k,$),i(E),g.value=I.textContent,x.value=M.textContent})),k.addEventListener("submit",(function(n){var r,o;n.preventDefault(),I.textContent=g.value,M.textContent=x.value,z.textContent="Сохранение...",(r=g.value,o=x.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){var t=e.name,n=e.about;I.textContent=t,M.textContent=n})).catch((function(e){console.error(e)})).finally((function(){z.textContent="Сохранить"})),l(E)})),b.addEventListener("click",(function(){v(w,$),i(A),T.value="",j.value=""})),w.addEventListener("submit",(function(n){var r,o;n.preventDefault(),z.textContent="Сохранение...",(r=T.value,o=j.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:o})}).then(t)).then((function(e){var t=c(m,e,a,u,F);h.prepend(t),w.reset(),l(A)})).catch((function(e){console.error(e)})).finally((function(){z.textContent="Сохранить"}))})),q.addEventListener("click",(function(){v(J,$),i(N),V.value=""})),J.addEventListener("submit",(function(n){var r;n.preventDefault(),z.textContent="Сохранение...",(r=V.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){var t=e.avatar;C.style.backgroundImage="url(".concat(t,")"),l(N)})).catch((function(e){console.error(e)})).finally((function(){z.textContent="Сохранить"})),J.reset()})),L.addEventListener("click",(function(){return l(E)})),B.addEventListener("click",(function(){return l(O)})),U.addEventListener("click",(function(){return l(A)})),H.addEventListener("click",(function(){return l(N)}))})();