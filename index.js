document.addEventListener('DOMContentLoaded', () => {
    const siButton = document.getElementById('si');
    const noButton = document.getElementById('no');

    noButton.addEventListener('mouseover', () => {
        noButton.style.position = 'absolute';
        noButton.style.top = `${Math.random() * 80 + 10}%`;
        noButton.style.left = `${Math.random() * 80 + 10}%`;
    });

    siButton.addEventListener('click', () => {
        window.location.href = 'mensaje.html';
    });
});
