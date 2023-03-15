function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var minutos = new Date()
    var min = minutos.getMinutes()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#a5a4a0'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#90491b'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#3e3050'
    }
}
