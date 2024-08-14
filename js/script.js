document.addEventListener('DOMContentLoaded', () => {
    const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('closePopup');

    openPopupButton.addEventListener('click', () => {
        popup.classList.add('show');
    });

    closePopupButton.addEventListener('click', () => {
        popup.classList.remove('show');
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.remove('show');
        }
    });
});
