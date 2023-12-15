const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // Ajusta el valor para adaptarse a la pantalla de escritorio
    const triggerBottom = window.innerHeight/5 * 4

    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top

        // Añadir la clase 'show' solo a la primera caja inicialmente
        if (index === 0) {
            box.classList.add('show')
        }

        // Verificar si la caja está a punto de entrar en la vista
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}
