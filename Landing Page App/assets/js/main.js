const showMenu = (toggleId, navId) => {

    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(nav && toggle) {
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu' )
