/*================Show Menu===============*/
const navMenu = document.querySelector('#nav-menu'),
toggle = document.querySelector('#nav-toggle')

toggle.addEventListener('click',() =>{
    navMenu.classList.toggle('show-menu')
} )

/*================Remove Menu Mobile===============*/
const navLink = document.querySelectorAll('.nav__link')

function removeMenu() {
    navMenu.classList.remove('show-menu')
}
navLink.forEach(l => l.addEventListener('click', removeMenu))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
            
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== Change background menu ===============*/
function changeHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 80) {
        header.classList.add('scroll-active')
    }else {
        header.classList.remove('scroll-active')
    }
}
window.addEventListener('scroll', changeHeader)

/*=============== Scroll Up===============*/
window.addEventListener('scroll', () => {
    const scrollUp = document.getElementById('scroll-up')
    if(this.scrollY >= 560) {
        scrollUp.classList.add('scroll-up')
    }else {
        scrollUp.classList.remove('scroll-up')
    }
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
  }

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
