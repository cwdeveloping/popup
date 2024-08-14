function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('show');
}
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show');
    }
});
