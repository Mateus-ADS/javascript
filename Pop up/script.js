let login = document.getElementById('login-container')
let buttonLogin = document.getElementById('entrar')
let body = document.querySelector('body')
let contact = document.getElementById('contact')
let contactList = document.getElementById('contact-list')
let containerContent = document.getElementById('container-content')

buttonLogin.addEventListener('click',() => {
    if (login.style.display == 'none' && body.style.overflow == 'auto') {
        body.style.overflow = 'hidden'
        login.style.display = 'block'
    } else {
        body.style.overflow = 'auto'
        login.style.display = 'none'
    }
})



 