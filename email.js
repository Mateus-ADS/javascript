
function validarEmail(email) {
    var regExp = /^[\w \d]+@[\w]+\.[\w]+\.([\w]+)?$/i
    found = regExp.exec(email)
    if (found) {
        return email
    } else {
       return 'email invalido ou não encontrado'
    }

}
console.log(validarEmail('joao123@gmail.com.br'))