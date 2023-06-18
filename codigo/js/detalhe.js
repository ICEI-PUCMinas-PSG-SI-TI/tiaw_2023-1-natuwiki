const locais = JSON.parse(localStorage.getItem('locais'));

window.onload = () => {

    parametros = new URLSearchParams(window.location.search);
    idLocal = parametros.get('id');

    fillDetails(idLocal);
}

function fillDetails(id) {
    var local = locais.find(obj => obj.id == id);

    imagens =
        `<div class="carousel-item active">
        <img src="${local.imagensdetalhe[0]}" class="d-block w-100 m-auto carousel-image"
        alt=${local.nome}>
    </div>`;

    local.imagensdetalhe.forEach(source => {
        if (local.imagensdetalhe.indexOf(source) > 0) {
            imagens +=
                `<div class="carousel-item">
            <img src="${source}" class="d-block w-100 m-auto carousel-image"
            alt=${local.nome}>
            </div>`
        }
    })

    document.getElementById('carousel-images').innerHTML = imagens;

    fields = ['descricao', 'nome', 'description', 'como_chegar', 'horario'];

    fillFields(fields, local);

    if (local.contato != null) {
        document.getElementById('email').textContent = local.contato.email;
        document.getElementById('telefone').textContent = local.contato.telefone;
    }

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

function fillFields(fields, local) {
    fields.forEach(field => {
        if (local[field] != null) {
            document.getElementById(field).textContent = local[field];
        }
    })
}