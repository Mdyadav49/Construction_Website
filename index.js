const navBar = document.querySelector('.nav-bar')
const menuIcon = document.querySelector('#menu-bar')
const closeIcon = document.querySelector('#close-btn')


menuIcon.addEventListener('click', (e)=>{
    navBar.classList.add('open')
})
closeIcon.addEventListener('click',(e)=>{
    navBar.classList.remove('open')
})

window.addEventListener('resize',(e)=>{
    navBar.classList.remove('open')
})

