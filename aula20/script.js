let num = document.getElementById('txtn')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
} 
function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if(isNumber(num.value) && !inLista(num.value,valores)) {
        let item = document.createElement('option')
        item.text = `Valor ${Number(num.value)} adicionado`
        lista.appendChild(item)
        valores.push(Number(num.value))
        res.innerHTML = ''
    } else {
        alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar () {
    if (valores.length == 0) {
        alert('Digite um valor antes de finalizar')
    } else {
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/valores.length
        res.innerHTML += `Foram encontrados um total de ${valores.length} valores <p>`
        res.innerHTML += `O maior valor encontrado foi ${maior} <p>`
        res.innerHTML += `O menor valor encontrado foi${menor} <p>`
        res.innerHTML += `A soma de todos os valores é igual a ${soma} <p>`
        res.innerHTML += `A media de todos os valores é igual a ${parseInt(media)} <p>`
       
    }
}
