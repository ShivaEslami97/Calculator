const darkModeBtn = document.querySelector('.theme-mode');
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});