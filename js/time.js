//HORA
function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem1')
    var dados = new Date()
    var hora = dados.getHours()
    //var hora = 1
    msg.innerHTML = `<strong>Agora são: ${hora} horas.</strong>`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        document.body.style.background= '#DCDCDC'
        img.src = '../js/fotodia.jpg'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        document.body.style.background= '#696969'
        img.src = '../js/fototarde.jpg'
    } else {
        //BOA NOITE!
        document.body.style.background= '#363636'
        img.src = '../js/fotonoite.png'
    }
}
