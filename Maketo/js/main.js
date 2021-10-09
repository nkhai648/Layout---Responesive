let menu = document.querySelector('.navbar');
let toggle = document.getElementById('nav-toggle');
let navLink = document.querySelectorAll('.nav-link');

function actionLink() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}
navLink.forEach(n => n.addEventListener('click', actionLink))

toggle.onclick = () =>{
    toggle.classList.toggle('bx-x');
    menu.classList.toggle('active');
}

window.onscroll = () =>{
    toggle.classList.remove('bx-x');
    menu.classList.remove('active');
}

