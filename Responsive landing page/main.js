const mobileBtn = document.getElementById("mobile-bar-btn");
const navLinks = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-menu-btn");

mobileBtn.addEventListener("click", () => {
  navLinks.classList.add("show");
});
