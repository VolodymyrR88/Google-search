const btnActive = document.getElementById("dropBtn");
const dropContent = document.getElementById("dropContent");
const setList = document.getElementById("settings");

function showDrop() {
  dropContent.classList.toggle("show-dropContent");
}

btnActive.onclick = function () {
  showDrop();
};

setList.onclick = function () {
  showDrop();
};
