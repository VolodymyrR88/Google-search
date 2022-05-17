const themeL = document.getElementById("lightTheme");
const themeD = document.getElementById("darkTheme");
const themeDef = document.getElementById("defaultTheme");
const pageId = document.getElementById("page");
const dropContentList = document.getElementById("dropContent");
// const footerLogoDef = document.getElementById("footerLogoDef");
// const footerLogoL = document.getElementById("footerLogoLight");
// const footerLogoD = document.getElementById("footerLogoDark");

themeL.onclick = function myBgL() {
  // pageId.classList.add("lightTheme");
  // pageId.classList.remove("darkTheme");
  // pageId.classList.remove("defaultTheme");
  // footerLogoDef.classList.remove("footer-logo");
  // footerLogoD.classList.remove("footer-logo");
  // footerLogoL.classList.add("footer-logo");
  dropContentList.classList.remove("show-dropContent");
};

themeD.onclick = function myBgD() {
  // pageId.classList.toggle("darkTheme");
  // pageId.classList.remove("lightTheme");
  // pageId.classList.remove("defaultTheme");
  // footerLogoL.classList.remove("footer-logo");
  // footerLogoDef.classList.remove("footer-logo");
  // footerLogoD.classList.add("footer-logo");
  dropContentList.classList.remove("show-dropContent");
};

themeDef.onclick = function myBgDef() {
  // pageId.classList.toggle("defaultThem");
  // pageId.classList.remove("darkTheme");
  // pageId.classList.remove("lightTheme");
  // footerLogoL.classList.remove("footer-logo");
  // footerLogoD.classList.remove("footer-logo");
  // footerLogoDef.classList.add("footer-logo");
  dropContentList.classList.remove("show-dropContent");
};
