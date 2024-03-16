(()=>{"use strict";var e={baseUrl:"https://mesto.nomoreparties.co/v1/wff-cohort-8",headers:{authorization:"a4df32b8-640f-4aea-b0e7-c7da0abeffbd","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},o={};function c(e,t,n,r,c){var a=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0);a.dataset.id=t._id;var u=a.querySelector(".card__like-button"),i=a.querySelector(".number__likes");i.textContent=t.likes.length;var l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__image");s.src=t.link,s.alt=t.name,a.querySelector(".card__title").textContent=t.name;var d=t._id;return t.likes.some((function(t){return t._id===e}))&&(u.classList.add("card__like-button_is-active"),o[d]=!0),u.addEventListener("click",(function(){r(d,u,i)})),e!==t.owner._id?l.style.visibility="hidden":l.addEventListener("click",(function(){n(d,a)})),s.addEventListener("click",(function(){c(t.link,t.name)})),a}function a(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)})(n).then((function(){r.remove()})).catch((function(e){console.log(e)}))}function u(e,t,c){(o[e]?r:n)(e).then((function(n){t.classList.toggle("card__like-button_is-active"),c.textContent=n.likes.length,o[e]=!o[e]})).catch((function(e){return console.log(e)}))}function i(e){e.classList.add("popup_is-opened"),e.addEventListener("click",s),document.addEventListener("keydown",d)}function l(e){e.classList.remove("popup_is-opened"),e.removeEventListener("click",s),document.removeEventListener("keydown",d)}function s(e){e.target===e.currentTarget&&l(e.target)}function d(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))}var p=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},f=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)};function _(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):f(t,n)}var y=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){p(e,n,t)})),f(r,t)};function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m,h=document.querySelector(".places__list"),S=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),q=document.querySelector(".profile__image-button"),E=document.querySelector(".profile__image"),C=document.querySelector(".popup_type_edit"),L=C.querySelector(".popup__close"),k=C.querySelector(".popup__form"),g=k.querySelector(".popup__input_type_name"),x=k.querySelector(".popup__input_type_description"),A=k.querySelector(".popup__button"),U=document.querySelector(".popup_type_new-card"),w=U.querySelector(".popup__close"),T=U.querySelector(".popup__form"),j=T.querySelector(".popup__input_type_card-name"),O=T.querySelector(".popup__input_type_url"),B=T.querySelector(".popup__button"),D=document.querySelector(".popup_type_image"),P=D.querySelector(".popup__close"),I=D.querySelector(".popup__image"),M=D.querySelector(".popup__caption"),N=document.querySelector(".profile__title"),J=document.querySelector(".profile__description"),H=document.querySelector(".popup_type_avatar"),V=H.querySelector(".popup__form"),z=H.querySelector(".popup__close"),$=V.querySelector(".popup__input_type_url_avatar"),F=V.querySelector(".popup__button");Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],l=o.name,s=o.about,d=o.avatar;m=o._id,E.style.backgroundImage="url(".concat(d,")"),N.textContent=l,J.textContent=s,i.forEach((function(e){var t=c(m,e,a,u,K);h.append(t)}))})).catch((function(e){console.error(e)}));var G={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function K(e,t){I.src=e,I.alt=t,M.textContent=t,i(D)}!function(e){document.querySelectorAll(e.formSelector).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?p(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),_(n,r,t)}))}))}(t,e)}))}(G),S.addEventListener("click",(function(){y(k,G),i(C),g.value=N.textContent,x.value=J.textContent})),k.addEventListener("submit",(function(n){var r,o;n.preventDefault(),A.textContent="Сохранение...",(r=g.value,o=x.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then(t)).then((function(e){var t=e.name,n=e.about;N.textContent=t,J.textContent=n,l(C)})).catch((function(e){console.error(e)})).finally((function(){A.textContent="Сохранить"}))})),b.addEventListener("click",(function(){y(T,G),i(U),j.value="",O.value=""})),T.addEventListener("submit",(function(n){var r,o;n.preventDefault(),B.textContent="Сохранение...",(r=j.value,o=O.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:o})}).then(t)).then((function(e){var t=c(m,e,a,u,K);h.prepend(t),T.reset(),l(U)})).catch((function(e){console.error(e)})).finally((function(){B.textContent="Сохранить"}))})),q.addEventListener("click",(function(){y(V,G),i(H),$.value=""})),V.addEventListener("submit",(function(n){var r;n.preventDefault(),F.textContent="Сохранение...",(r=$.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){var t=e.avatar;E.style.backgroundImage="url(".concat(t,")"),l(H)})).catch((function(e){console.error(e)})).finally((function(){F.textContent="Сохранить"})),V.reset()})),L.addEventListener("click",(function(){return l(C)})),P.addEventListener("click",(function(){return l(D)})),w.addEventListener("click",(function(){return l(U)})),z.addEventListener("click",(function(){return l(H)}))})();