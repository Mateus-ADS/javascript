function contar () {
    let c = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (c.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Preencha todos os campos')
    } else {
        res.innerHTML = `Contando: <br>`
        let cont = Number(c.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido considerando passo 1')
            p = 1
        }
        if (cont < f) {
            for (let c = cont;c <= f;c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = cont;c >= f;c -= p) {
                res.innerHTML += `${c} \u{1F448}`
            }       
        } 
    }
}

