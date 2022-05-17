const dropBtn = document.getElementById("dropBtn");
const dropContent = document.getElementById("dropContent");
const setList = document.getElementById("settings");

function showDrop() {
  dropContent.classList.toggle("show-dropContent");
}

dropBtn.onclick = function () {
  showDrop();
};

setList.onclick = function () {
  showDrop();
};
