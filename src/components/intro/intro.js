const toggleBtn = document.getElementById('toggle_Btn')
const navBar = document.getElementById('nav_Bar')

toggleBtn.addEventListener('click', function(){
    navBar.classList.add('show')
})

const nav = document.querySelectorAll('.navLink')
nav.forEach(n => {
    n.addEventListener('click', function(){
        navBar.classList.remove('show')
    })
})