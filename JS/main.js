var toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('click', toggleMode);

// Hàm thay đổi chế độ
function toggleMode() {
   var body = document.body;
   body.classList.toggle('dark-mode');
}