const toggle = document.querySelector('.nav__toggle'),
    nav = document.querySelector('.nav__more'),
    close = document.querySelector('.nav__close')

toggle.addEventListener('click', () => {
    nav.classList.add('show')
})

close.addEventListener('click', () => {
    nav.classList.remove('show')
})


/*===========SLIDER==========*/
const next = document.querySelector('.next'),
    prev = document.querySelector('.prev'),
    slides = document.querySelectorAll('.slide'),
    numOfSlide = slides.length,
    slider = document.querySelector('.slider'),
    // slideWidth = slides[0].offsetWidth,
    dots = document.querySelectorAll('.dot')

var currentSlide = 0

function removeActive() {
    slides.forEach((s) => {
        s.classList.remove('active');
    })
    dots.forEach((d) => {
        d.classList.remove('active')
    })
}

next.addEventListener('click', () => {
    removeActive();
    currentSlide++;

    if(currentSlide > (numOfSlide - 1)) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active')
    dots[currentSlide].classList.add('active')

    // slides[currentSlide].style.transform = "translateX("+ slideWidth +")"
})
prev.addEventListener('click', () => {
    removeActive();
    currentSlide--;

    if(currentSlide < 0) {
        currentSlide = numOfSlide - 1;
    }

    slides[currentSlide].classList.add('active')
    dots[currentSlide].classList.add('active')

})

for(let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        removeActive();
        slides[i].classList.add('active');
        dots[i].classList.add('active');
    })
}

function autoPlay() {
    playSlide = setInterval(function() {
        removeActive();
        currentSlide++;
    
        if(currentSlide > (numOfSlide - 1)) {
            currentSlide = 0;
        }
    
        slides[currentSlide].classList.add('active')
        dots[currentSlide].classList.add('active')
    }, 2500)
} 
autoPlay();

slider.addEventListener('mouseover', () => {
    clearInterval(playSlide);
})
slider.addEventListener('mouseout', () => {
    autoPlay();
})



/*===========FANCYBOX==========*/
$('[data-fancybox]').fancybox({
    AnimationEffect: "zoom",
    transitionEffect: "zoom-in-out",
    loop: true,
    buttons: [
        "zoom",
        //"share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
    ]
});



/*===========Change box shadow Menu==========*/


function changeHeader() {
    const header = document.querySelector('.header')
    if(this.scrollY >= 80) {
        header.classList.add('active')
    }else {
        header.classList.remove('active')
    }
}
window.addEventListener('scroll', changeHeader)

/*===========Slick authors==========*/
$(document).ready(function(){
    $('.data__authors').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        // draggable: false,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,
        cssEase: 'ease-in-out'
    });
  });

/*===========Donors==========*/
$(document).ready(function(){
    $('.list__donors').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 5000,
        // dots: true,
        arrows: false,
        // draggable: false,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotsHover: true,
        cssEase: 'ease-in-out'
    });
  });
  
/*===========Scroll Active Link==========*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__item a[href*='+ sectionId +']').classList.add('active')
        }else {
            document.querySelector('.nav__item a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===========Scroll To Top==========*/
window.addEventListener('scroll', () =>{
    const scrollTop = document.querySelector('.scroll-top')

    if(this.scrollY >= 250) {
        scrollTop.classList.add('active')
    }else {
        scrollTop.classList.remove('active')
    }
})
