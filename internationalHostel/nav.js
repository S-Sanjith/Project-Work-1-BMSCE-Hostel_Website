//navbar
const toggle= document.getElementsByClassName('toggle-button')[0]
const links= document.getElementsByClassName('navbar-links')[0]

toggle.addEventListener('click', ()=>{
    links.classList.toggle('active')
})
