const themeL = document.getElementById("lightTheme");
const themeD = document.getElementById("darkTheme");
const themeDef = document.getElementById("defaultTheme");
const pageId = document.getElementById("page");
const dropContentList = document.getElementById("dropContent");

themeL.onclick = function myBgL() {
  // pageId.classList.add("lightTheme");
  // pageId.classList.remove("darkTheme");
  // pageId.classList.remove("defaultTheme");
  dropContentList.classList.remove("show-dropContent");
};

themeD.onclick = function myBgD() {
  // pageId.classList.toggle("darkTheme");
  // pageId.classList.remove("lightTheme");
  // pageId.classList.remove("defaultTheme");
  dropContentList.classList.remove("show-dropContent");
};

themeDef.onclick = function myBgDef() {
  // pageId.classList.toggle("defaultThem");
  // pageId.classList.remove("darkTheme");
  // pageId.classList.remove("lightTheme");
  dropContentList.classList.remove("show-dropContent");
};
