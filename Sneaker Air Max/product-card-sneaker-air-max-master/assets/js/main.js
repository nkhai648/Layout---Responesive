/*----- MENU -----*/
const showMenu = (toggleId, navId) => {
    const navToggle = document.getElementById(toggleId),
    navMenu = document.getElementById(navId)

    if(navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*----- CAMBIO COLORS -----*/
const sizes = document.querySelectorAll('.size__tallas')
const colors = document.querySelectorAll('.sneaker__color')
const sneakers = document.querySelectorAll('.sneaker__img')

function changeSize() {
    sizes.forEach(size => size.classList.remove('active'))
    this.classList.add('active')
}

function changeColor() {
     let primary = this.getAttribute('primary')
     let color = this.getAttribute('color')
     
     // ! ------------------------------------------------------------------------
     let sneakerColor = document.querySelector(`.sneaker__img[color="${color}"]`)
     sneakers.forEach(s => s.classList.remove('shows'))
     sneakerColor.classList.add('shows')
     
     colors.forEach(c => c.classList.remove('active'))
     this.classList.add('active')
     // ! ------------------------------------------------------------------------


     document.documentElement.style.setProperty('--primary', primary)

}
sizes.forEach(size => size.addEventListener('click', changeSize))
colors.forEach(c => c.addEventListener('click', changeColor))