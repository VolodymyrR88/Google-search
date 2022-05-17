// const themeLight = document.getElementById("lightTheme");
// const themeDark = document.getElementById("darkTheme");
// const themeDefault = document.getElementById("defaultTheme");

const elementsTheme = document.querySelectorAll(".list-theme-item");
console.log(elementsTheme);
const arrayTheme = [];
console.log(arrayTheme);
const pageTheme = document.getElementById("page");

if (document.cookie == undefined) {
  page.classList.add("defaultTheme");
} else {
  document.cookie = elementsTheme.forEach((e) => {
    arrayTheme.push(e.getAttribute("data-color"));

    e.addEventListener("click", function () {
      page.classList.remove(...arrayTheme);
      page.classList.add(this.getAttribute("data-color"));
    });
  });
  // document.cookie = getCookie;
}
console.log(document.cookie);
