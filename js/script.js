var editarFila =null

function onStartCadastro() {
    var lerDados = lerDadosCadastro();
    if (editarFila==null)
        inserirDados(lerDados);
    else
        atualizarDados(lerDados)
    resetaCadastro();
}

function lerDadosCadastro() {
    var lerDados = {};
    lerDados["nomeCom"] = document.querySelector("#nomeCom").value;
    lerDados["email"] = document.querySelector("#email").value;
    lerDados["tel"] = document.querySelector("#tel").value;
    lerDados["insta"] = document.querySelector("#insta").value;
    return lerDados;
}

function inserirDados(dados) {
    var table = document.querySelector("#listaAgenda").getElementsByTagName('tbody')[0];
    var novaLista = table.insertRow(table.length);
    celula1 = novaLista.insertCell(0);
    celula1.innerHTML = dados.nomeCom;
    celula2 = novaLista.insertCell(1);
    celula2.innerHTML = dados.email;
    celula3 = novaLista.insertCell(2);
    celula3.innerHTML = dados.tel;
    celula4 = novaLista.insertCell(3);
    celula4.innerHTML = dados.insta;
    celula4 = novaLista.insertCell(4);
    celula4.innerHTML = `<a onClick="editar(this)">Editar</a>
                        <a onClick="deletar(this)">Deletar</a>`;
}

function resetaCadastro() {
    document.querySelector("#nomeCom").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#tel").value = "";
    document.querySelector("#insta").value = "";
    editarFila = null;
}
function editar(td) {
    editarFila = td.parentElement.parentElement;
    document.querySelector("#nomeCom").value = editarFila.cells[0].innerHTML;
    document.querySelector("#email").value = editarFila.cells[1].innerHTML;
    document.querySelector("#tel").value = editarFila.cells[2].innerHTML;
    document.querySelector("#insta").value = editarFila.cells[3].innerHTML;
}

function atualizarDados(lerDados) {
    editarFila.cells[0].innerHTML = lerDados.nomeCom;
    editarFila.cells[1].innerHTML = lerDados.email;
    editarFila.cells[2].innerHTML = lerDados.tel;
    editarFila.cells[3].innerHTML = lerDados.insta;
}
function deletar(td) {
    if (confirm('Tem certeza que deseja excluir ?')) {
        fila = td.parentElement.parentElement;
        document.querySelector("#listaAgenda").deleteRow(fila.rowIndex);
        resetaCadastro();
    }
}