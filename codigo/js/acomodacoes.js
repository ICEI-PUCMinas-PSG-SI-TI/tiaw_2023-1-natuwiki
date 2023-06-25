const locais = JSON.parse(localStorage.getItem('locais'));

window.onload = () => {

    parametros = new URLSearchParams(window.location.search);
    idLocal = parametros.get('id');

    fillDetails(idLocal);
}

function fillDetails(id) {
    var local = locais.find(obj => obj.id == id);

    document.getElementById('nomeH').textContent = local.nome;
    document.getElementById('ImagemHotel').src = local.imagem;   
    document.getElementById('localizacao').textContent = local.endereco;
    document.getElementById('area').textContent = local.area;
    document.getElementById('cama').textContent = local.cama;
    document.getElementById('diaria').textContent = local.valor;
    document.getElementById('alimentacao').textContent = local.alimentacao;

    var caixa_comentarios = document.getElementById('caixa-comentarios');
    htmlComentarios = ``;
    local.comentarios.forEach(comentario => {
        htmlComentarios =
        `<div class="comentario">
            <h5>${comentario.autor}</h5>
            <div>
                <p>
                ${comentario.comentario}
                </p>
            </div>
            </div>
        <br>
        `
        caixa_comentarios.innerHTML += htmlComentarios;
    })
}