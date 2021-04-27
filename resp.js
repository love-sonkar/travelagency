burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.right-nav')

burger.addEventListener('click', ()=>{
    navlist.classlist.toggle('v-class-resp')
    rightnav.classlist.toggle('v-class-resp')
    navbar.classlist.toggle('h-nav-resp')
})