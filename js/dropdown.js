document.getElementById("dropBtn").onclick = function () {
  dropDownBtn();
};

function dropDownBtn() {
  document.getElementById("dropContent").classList.toggle("show-dropContent");
}
