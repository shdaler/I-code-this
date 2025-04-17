const modalButton = document.getElementById("show-modal");
const mainModalContainer = document.getElementById("modal-container");
const closeMainModalButton = document.getElementById("close-modal-button");

const modalOk = document.getElementById("modal-ok");
const modalCancel = document.getElementById("modal-cancel");

const modalAcceptContainer = document.getElementById("modal-accept-container");
const closeModalAcceptContainer = document.getElementById("close-accept-modal");

modalButton.addEventListener("click", () => {
  mainModalContainer.classList("show");
});

modalOk.addEventListener("click", () => {
  modalAcceptContainer.classList.add("show");
  mainModalContainer.classList.remove("show");
});

closeModalAcceptContainer.addEventListener("click", () => {
  modalAcceptContainer.classList.remove("show");
});

modalCancel.addEventListener("click", () => {
  mainModalContainer.classList.remove("show");
});

closeMainModalButton.addEventListener("click", () => {
  mainModalContainer.classList.remove("show");
});
