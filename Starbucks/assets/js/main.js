function imgSlider(anything) {
    document.querySelector('.starbucks').src = anything
}
function changeColor(color) {
    const circle = document.querySelector('.circle')
    circle.style.background = color
}

const toggle = document.getElementById('toggle'),
nav = document.getElementById('nav'),
close = document.getElementById('close')

toggle.addEventListener('click', () => {
    nav.classList.toggle('show')
})

close.addEventListener('click', () => {
    nav.classList.remove('show')
})