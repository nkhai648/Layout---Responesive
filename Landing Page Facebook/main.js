const dots = document.querySelectorAll('.dot'),
slides = document.querySelectorAll('.slide')

function removeActive() {
    dots.forEach(d => {
        d.classList.remove('active')
    })
    slides.forEach(s => {
        s.classList.remove('active')
    })
}

for(let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function(){
        removeActive()
        slides[i].classList.add('active')
        dots[i].classList.add('active')
    })
}