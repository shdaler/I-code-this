const moreBtn = document.querySelector(".more-btn");
const moreMenu = document.querySelector("#more-menu");

moreBtn.addEventListener("click", () => {
  moreMenu.classList.toggle("show");
});
