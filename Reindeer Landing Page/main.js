gsap.to('.overlay h1', {
    duration:2,
    opacity: 0,
    y:-60,
    ease: Expo.easeInOut
})
gsap.to('.overlay span', {
    duration:2,
    delay: .3,
    opacity: 0,
    y:-60,
    ease: Expo.easeInOut
})
gsap.to('.overlay', {
    duration:2,
    delay: 1,
    top:"-100%",
    ease: Expo.easeInOut
})
gsap.from('.ellipes-container', {
    duration:1,
    delay: 2,
    opacity:0,
    ease: Expo.easeInOut
})
gsap.from('.yellow', {
    duration:1,
    delay: 1.5,
    opacity:0,
    ease: Expo.easeInOut
})
gsap.from('.circle1', {
    duration:1,
    delay: 2.4,
    opacity:0,
    ease: Expo.easeInOut
})
gsap.from('.circle2', {
    duration:1,
    delay: 2.6,
    opacity:0,
    ease: Expo.easeInOut
})
gsap.from('.logo', {
    duration:1,
    delay: 3,
    opacity:0,
    y:-100,
    ease: Expo.easeInOut
})
gsap.from('.menu ul li', {
    duration:1.2,
    delay: 3.2,
    opacity:0,
    x:-100,
    stagger: 0.08
})
gsap.from('.scrolldown', {
    duration:1,
    delay: 3,
    opacity:0,
    y:100,
    ease: Expo.easeInOut,
})
gsap.from('.text .title', {
    duration:1,
    delay: 3,
    opacity:0,
    y:200,
    ease: Expo.easeInOut,
})
gsap.from('.text p', {
    duration:1,
    delay: 3.2,
    opacity:0,
    y:200,
    ease: Expo.easeInOut,
})
gsap.from('.watchnow',{
    duration:1,
    delay: 3.4,
    opacity:0,
    x:200,
    ease: Expo.easeInOut,
})
gsap.from('.social ul li',{
    duration:1,
    delay: 3,
    opacity:0,
    y:100,
    stagger: 0.08
})