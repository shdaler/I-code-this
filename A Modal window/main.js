// Получаем элементы
const modalButton = document.getElementById("show-modal");
const mainModalContainer = document.getElementById("modal-container");
const closeMainModalButton = document.getElementById("close-modal-button");

const modalOk = document.getElementById("modal-ok");
const modalCancel = document.getElementById("modal-cancel");

const modalAcceptContainer = document.getElementById("modal-accept-container");
const closeModalAcceptContainer = document.getElementById("close-accept-modal");

const modalOverlay = document.getElementById("modal-overlay");

// Функция: открыть главное модальное окно
const openMainModal = () => {
  mainModalContainer.classList.add("show");
  modalOverlay.classList.add("show");
};

// Функция: закрыть главное модальное окно
const closeMainModal = () => {
  mainModalContainer.classList.remove("show");
  modalOverlay.classList.remove("show");
};

// Функция: открыть окно "Success"
const openAcceptModal = () => {
  modalAcceptContainer.classList.add("show");
  modalOverlay.classList.add("show");
};

// Функция: закрыть окно "Success"
const closeAcceptModal = () => {
  modalAcceptContainer.classList.remove("show");
  modalOverlay.classList.remove("show");
};

// Событие: открыть модальное окно при нажатии на кнопку
modalButton.addEventListener("click", openMainModal);

// Событие: нажатие OK → закрыть основное окно, открыть "Success"
modalOk.addEventListener("click", () => {
  closeMainModal();
  openAcceptModal();
});

// Событие: закрыть модалку по Cancel и по крестику
modalCancel.addEventListener("click", closeMainModal);
closeMainModalButton.addEventListener("click", closeMainModal);

// Событие: закрыть окно "Success"
closeModalAcceptContainer.addEventListener("click", closeAcceptModal);

// Событие: клик по фону → закрыть оба окна
modalOverlay.addEventListener("click", () => {
  closeMainModal();
  closeAcceptModal();
});
