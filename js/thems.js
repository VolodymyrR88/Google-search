let themL = document.getElementById("lightThem");
let themD = document.getElementById("darkThem");
let bgThem = document.getElementById("page");
let setElem = document.getElementById("dropContent");

themL.onclick = function myBgL() {
  bgThem.classList.toggle("lightThem");
  bgThem.classList.remove("darkThem");
  setElem.classList.remove("show-dropContent");
};

themD.onclick = function myBgD() {
  bgThem.classList.toggle("darkThem");
  bgThem.classList.remove("lightThem");
  setElem.classList.remove("show-dropContent");
};
