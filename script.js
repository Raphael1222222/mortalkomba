document.addEventListener('DOMContentLoaded', () => {
    const reptile = document.getElementById('reptile-egg');
    if (reptile) {
        reptile.addEventListener('click', () => {
            window.location.href = 'reptile.html';
        });
    }
});