const navList = document.getElementById("nav-list");
const mobileBars = document.getElementById("mobile-bars");
const closeBtn = document.getElementById("close-btn");

mobileBars.addEventListener("click", () => {
  navList.classList.toggle("nav-list-active");
});

closeBtn.addEventListener("click", () => {
  navList.classList.remove("nav-list-active");
});
