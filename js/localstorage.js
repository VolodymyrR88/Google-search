let defaultTheme = localStorage.getItem("pageTheme");

if (defaultTheme == null) {
  $(".container").addClass("defaultTheme");
  localStorage.setItem("pageTheme", "defaultTheme");
} else {
  $(".container").addClass(localStorage.getItem("pageTheme"));
}

const button = $(".list-theme-item");
button.on("click", function (element) {
  let attributeClass = $(this).attr("data-color");
  $(".container").removeClass("defaultTheme darkTheme lightTheme");
  $(".container").addClass(attributeClass);
  localStorage.setItem("pageTheme", attributeClass);
});
