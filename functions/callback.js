function exibir(num) {
    console.log(num)
}
function soma(a,b,callback) {
    var op = a + b
    callback(op)
}
function multiplicacao(a,b,callback) {
    var op = a * b
    callback(op)
}
soma(2,2,exibir)
multiplicacao (2,4,exibir)