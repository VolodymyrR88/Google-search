// ? theme ==========================================================
const themeElements = document.querySelectorAll(".list-theme-item");
const themeArray = [];
const page = document.getElementById("page");
// * ===================

// TODO: theme =========
if (localStorage.getItem("theme") == null) {
  page.classList.add("defaultTheme");
} else {
  page.classList.add(localStorage.getItem("theme"));
}

themeElements.forEach((e) => {
  themeArray.push(e.getAttribute("data-color"));

  e.addEventListener("click", function () {
    page.classList.remove(...themeArray);
    page.classList.add(this.getAttribute("data-color"));
    localStorage.setItem("theme", this.getAttribute("data-color"));
  });
});
// ! ================================================================
