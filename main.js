"use strict";
const contact = document.querySelector(".contact-circle");
const modal = document.querySelector(".section1");
const overlay = document.querySelector(".overlay");
function showmodal() {
  modal.classList.remove("hide");
}
function hideModal() {
  modal.classList.add("hide");
}

contact.addEventListener("click", showmodal);

overlay.addEventListener("click", hideModal);
