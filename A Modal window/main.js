const modalOverlay = document.getElementById("modal-overlay");
const modalButton = document.getElementById("show-modal");
const mainModalContainer = document.getElementById("modal-container");
const closeMainModalButton = document.getElementById("close-modal-button");

const modalOk = document.getElementById("modal-ok");
const modalCancel = document.getElementById("modal-cancel");

const modalAcceptContainer = document.getElementById("modal-accept-container");
const closeModalAcceptContainer = document.getElementById("close-accept-modal");

const openMainModal = () => {
  mainModalContainer.classList.add("show");
  modalOverlay.classList.add("show");
};

const closeMainModal = () => {
  mainModalContainer.classList.remove("show");
  modalOverlay.classList.remove("show");
};

const closeAcceptModal = () => {
  modalAcceptContainer.classList.remove("show");
  modalOverlay.classList.remove("show");
};
