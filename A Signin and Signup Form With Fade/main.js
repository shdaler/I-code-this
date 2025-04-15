const tabBtnContainer = document.getElementById("tab-btn-container");
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtnContainer.addEventListener("click", (e) => {
  const selectedBtn = e.target;

  if (selectedBtn.classList.contains("tab-btn")) {
    const actionName = selectedBtn.getAttribute("data-subject");

    tabContents.forEach((item) => {
      item.style.display = "none";
    });

    tabBtns.forEach((btn) => {
      btn.classList.remove("active");
    });

    document.getElementById(actionName).style.display = "block";
    selectedBtn.classList.add("active");
  }
});

document.querySelector(".tab-btn").click();
