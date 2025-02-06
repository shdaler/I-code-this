const mobileMenuButton = document.getElementById("mobile-menu-btn");
const closeButton = document.getElementById("close-btn");
const navList = document.getElementById("nav-list");

const messageContainer = document.getElementById("message-container");
const closeMessageBtn = document.getElementById("close-message");

closeMessageBtn.addEventListener("click", () => {
  messageContainer.style.display = "none";
});

mobileMenuButton.addEventListener("click", () => {
  navList.classList.add("active");
});

closeButton.addEventListener("click", () => {
  navList.classList.remove("active");
});
