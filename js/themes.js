const themeL = document.getElementById("lightTheme");
const themeD = document.getElementById("darkTheme");
const themeDef = document.getElementById("defaultTheme");
const bgTheme = document.getElementById("page");
const setElem = document.getElementById("dropContent");

themeL.onclick = function myBgL() {
  // bgTheme.classList.add("lightTheme");
  // bgTheme.classList.remove("darkTheme");
  // bgTheme.classList.remove("defaultTheme");
  setElem.classList.remove("show-dropContent");
};

themeD.onclick = function myBgD() {
  // bgTheme.classList.toggle("darkTheme");
  // bgTheme.classList.remove("lightTheme");
  // bgTheme.classList.remove("defaultTheme");
  setElem.classList.remove("show-dropContent");
};

themeDef.onclick = function myBgDef() {
  // bgTheme.classList.toggle("defaultThem");
  // bgTheme.classList.remove("darkTheme");
  // bgTheme.classList.remove("lightTheme");
  setElem.classList.remove("show-dropContent");
};
