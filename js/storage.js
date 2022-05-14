const element = document.querySelectorAll(".list-them-item");
const list = [];

let setThem = document.getElementById("page");

setThem.classList.add(localStorage.getItem("them"));

element.forEach((e) => {
  list.push(e.getAttribute("data-color"));

  e.addEventListener("click", function () {
    setThem.classList.remove(...list);
    setThem.classList.add(this.getAttribute("data-color"));
    localStorage.setItem("them", this.getAttribute("data-color"));
  });
});
