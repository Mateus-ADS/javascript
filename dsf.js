function verificarEntrada() {
    NomeConvidado = document.getElementById('nome').value
    ConvidadosCristian = ['Mateus','Sabrina','Carla','Fabio']
    if (ConvidadosCristian.includes(NomeConvidado)) {
        document.getElementById('res').innerText = 'Você pode Entrar!'
    } else {
        document.getElementById('res').innerText = 'Você não pode entrar'
    }
}
