let btnActive = document.getElementById("dropBtn");
let dropContent = document.getElementById("dropContent");
let setList = document.getElementById("settings");

btnActive.onclick = function () {
  dropContent.classList.toggle("show-dropContent");
};

setList.onclick = function () {
  dropContent.classList.toggle("show-dropContent");
};
