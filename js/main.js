document.addEventListener("DOMContentLoaded", function () {
  // Mã JavaScript của bạn ở đây
  var toggleButton = document.getElementById("toggle-button");
  toggleButton.addEventListener("click", toggleMode);
  const moonIcon = document.getElementById("moon-icon");

  // Hàm thay đổi chế độ
  function toggleMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    if (moonIcon.classList.contains("fa-moon")) {
      moonIcon.classList.remove("fa-moon");
      moonIcon.classList.add("fa-sun");
    } else {
      moonIcon.classList.remove("fa-sun");
      moonIcon.classList.add("fa-moon");
    }
  }
});

function scrollTop() {
  const scrollBtn = document.querySelector("#scroll-top-btn");
  if (this.scrollY > 300) {
    scrollBtn.classList.add("d-flex");
    scrollBtn.classList.remove("d-none");
  } else {
    scrollBtn.classList.add("d-none");
    scrollBtn.classList.remove("d-flex");
  }
}

window.addEventListener("scroll", scrollTop);
