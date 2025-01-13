const dotsEl = document.getElementById("dots");

const themeSelect = document.getElementById("theme");

const cardEl = document.getElementById("card");
const joinedButton = document.getElementById("joined");

dotsEl.addEventListener("click", () => {
  themeSelect.classList.toggle("show");
});

themeSelect.addEventListener("change", () => {
  const selectedTheme = themeSelect.value;

  if (themeSelect === "blue") {
    document.body.classList.add("dark-mode");
    cardEl.classList.add("dark-mode");
    joinedButton.classList.add("dark");
  } else {
    document.body.classList.remove("dark-mode");
    cardEl.classList.remove("dark-mode");
    joinedButton.classList.remove("dark");
  }
});
