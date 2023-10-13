const menuToggle = document.querySelector('.menuToggle');
const closeIcon = document.getElementById('closeIcon');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active');
}

closeIcon.onclick = function() {
    menuToggle.classList.toggle('active');
}
