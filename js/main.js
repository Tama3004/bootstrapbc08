document.addEventListener("DOMContentLoaded", function() {
   // Mã JavaScript của bạn ở đây
   var toggleButton = document.getElementById('toggle-button');
   toggleButton.addEventListener('click', toggleMode);
   const moonIcon = document.getElementById("moon-icon");


   // Hàm thay đổi chế độ
 function toggleMode() {
   var body = document.body;
   body.classList.toggle('dark-mode');

   if (moonIcon.classList.contains("fa-moon")) {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  } else {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  }
}
});

