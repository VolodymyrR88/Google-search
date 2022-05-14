let themL = document.getElementById("lightThem");
let themD = document.getElementById("darkThem");
let bgThem = document.getElementById("page");

function myBgL() {
  bgThem.classList.toggle("lightThem");
  bgThem.classList.remove("darkThem");
}

function myBgD() {
  bgThem.classList.toggle("darkThem");
  bgThem.classList.remove("lightThem");
}

themL.onclick = function () {
  myBgL();
};

themD.onclick = function () {
  myBgD();
};
