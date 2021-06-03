//REGISTROS
function cadastro(){
    var nom = window.document.getElementById('nome')
    var tela = window.document.getElementById('tela')
    var resNome = String(nome.value)
    tela.innerHTML = `<p><strong>Nome:</strong> ${resNome}</p>`
}