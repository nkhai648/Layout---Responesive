// HOVER EFFECT 
new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: '/assets/img/01.png',
    image2: '/assets/img/02.png',
    displacementImage: '/assets/img/diss.png',
    imagesRatio: 380 / 300
})

// NAV 
gsap.from('.nav div', {opacity: 0, duration: 1.5, delay: 1.5, y: 20, ease: Expo.easeInPut, stagger: 0.08})

// MEDIA 
gsap.from('.media ul li', {opacity: 0, duration: 1.5,delay: 1.5, x: -20, ease: Expo.easeInOut, stagger:0.08})

// TEXT 
gsap.from('.text h1 .hidetext', {opacity: 0, duration: 1.5,delay: 1, y: 100, ease: Expo.easeInOut})

gsap.from('.text h3 .hidetext', {opacity: 0, duration: 1.5,delay: 1.2, y: 100, ease: Expo.easeInOut})

gsap.from('.text p .hidetext', {opacity: 0, duration: 1.5,delay: 1.3, y: 100, ease: Expo.easeInOut})

gsap.from('.text h2', {opacity: 0, duration: 1.5,delay: 1.5, x: -1000, ease: Expo.easeInOut})

// SPONSOR 
gsap.from('.sponsor img', {opacity: 0, duration: 1.5,delay: 1.5, y: 20, ease: Expo.easeInOut})

gsap.from('.sponsor p', {opacity: 0, duration: 1.5,delay: 1.6, y: 20, ease: Expo.easeInOut})

// DISTORTION 
gsap.from('.distortion', {opacity: 0, duration: 1.5,delay: 2, y: 20 , ease: Expo.easeInOut})

// OVERLAY 
gsap.to('.first', {opacity: 0, duration: 1.5,delay: .5, top: "-100%" , ease: Expo.easeInOut})
gsap.to('.second', {opacity: 0, duration: 1.5,delay: .7, top: "-100%" , ease: Expo.easeInOut})
gsap.to('.third', {opacity: 0, duration: 1.5,delay: .9, top: "-100%" , ease: Expo.easeInOut})
