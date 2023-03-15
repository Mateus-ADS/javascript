function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    var nasc = document.getElementById('txtano')
    var data_nasc = (nasc.value)
    if (nasc.value.length == 0 ||  data_nasc > ano){
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(data_nasc)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','bebe-h.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','jovem-h.jpg') 
            } else if (idade < 50) {
                img.setAttribute('src','adulto-h.jpg')
            } else {
                img.setAttribute('src','idoso-h.jpg')
            }
        }
        if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','bebe-m.jpg')
            } else if (idade < 21) {
                img.setAttribute('src','jovem-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src','adulto-m.jpg')
            } else {
                img.setAttribute('src','idosa-m.jpg')
            }
        }
        }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}
