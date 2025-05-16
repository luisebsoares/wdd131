// footer date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

// hamburger manu
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('primaryNav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.textContent = nav.classList.contains('open') ? '✖' : '☰';
});
