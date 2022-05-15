const element = document.querySelectorAll(".list-theme-item");
const list = [];

const setTheme = document.getElementById("page");

setTheme.classList.add(localStorage.getItem("theme"));

element.forEach((e) => {
  list.push(e.getAttribute("data-color"));

  e.addEventListener("click", function () {
    setTheme.classList.remove(...list);
    setTheme.classList.add(this.getAttribute("data-color"));
    localStorage.setItem("theme", this.getAttribute("data-color"));
  });
});
