const secciones = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

function actualizarNavActivo() {
    let seccionActual = '';

    // ¿Estamos al fondo de la página?
    const alFondo = window.innerHeight + window.scrollY >= 
                    document.body.offsetHeight - 50;

    if (alFondo) {
        seccionActual = 'contacto';
    } else {
        secciones.forEach(seccion => {
            const rect = seccion.getBoundingClientRect();
            if (rect.top <= 100) {
                seccionActual = seccion.id;
            }
        });
    }

    navLinks.forEach(link => {
        link.classList.remove('activo');
        if (link.getAttribute('href') === `#${seccionActual}`) {
            link.classList.add('activo');
        }
    });
}

window.addEventListener('scroll', actualizarNavActivo);
actualizarNavActivo();