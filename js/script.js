const popup = document.getElementById('popup');
function togglePopup() {
    popup.classList.toggle('show');
}
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show');
    }
});
