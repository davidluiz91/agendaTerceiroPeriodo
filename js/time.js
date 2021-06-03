//HORA
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem1')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        document.body.style.background= '#EEE8AA'
        img.src = '../js/fotodia.jpg'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        document.body.style.background= '#008B8B'
        img.src = '../js/fototarde.jpg'
    } else {
        //BOA NOITE!
        document.body.style.background= '#363636'
        img.src = '../js/fotonoite.png'
    }
}
