// Ir arriba al hacer clic en el botón "Ir arriba"
let goTop = document.querySelector('.go-top');
goTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Ir abajo al hacer clic en el enlace correspondiente
let abajo = document.querySelector('#abajo');
abajo.addEventListener('click', () => {
    window.scrollTo({
        top: 600,
        behavior: 'smooth'
    });
});

