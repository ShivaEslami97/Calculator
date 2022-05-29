const darkModeBtn = document.querySelector('.theme-mode');
const theme = window.localStorage.getItem("theme");
if (theme === "dark") {
    document.body.classList.add("dark");
}
darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    }
    else {
        window.localStorage.setItem("theme", "dark");
    }

});