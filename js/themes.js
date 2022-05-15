const themeL = document.getElementById("lightTheme");
const themeD = document.getElementById("darkTheme");
const bgTheme = document.getElementById("page");
const setElem = document.getElementById("dropContent");

themeL.onclick = function myBgL() {
  bgTheme.classList.toggle("lightTheme");
  bgTheme.classList.remove("darkTheme");
  setElem.classList.remove("show-dropContent");
};

themeD.onclick = function myBgD() {
  bgTheme.classList.toggle("darkTheme");
  bgTheme.classList.remove("lightTheme");
  setElem.classList.remove("show-dropContent");
};
