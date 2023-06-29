//código da Hayanne inicio
var usuario = JSON.parse(localStorage.getItem("usuario"));

if (usuario == null || usuario.logado == false) {
    document.location.href = './login.html';
}
//código da Hayanne fim

window.onload = () => {
    pessoa = load_user_info(page);
}

function load_user_info() {
    var pessoa = JSON.parse(localStorage.getItem("dadosUsuario"));

    let enabled_or_disabled = '';
    if (page == 'perfil') {
        enabled_or_disabled = 'disabled'
    }
    user_table_info = `<tbody>
        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-user  text-primary"></span>
                    Nome
                </strong>
            </td>
            <td>
                <input id="first-name" ${enabled_or_disabled} required value=${pessoa.nome}></input>
            </td>
        </tr>
        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-cloud text-primary"></span>
                    Sobrenome
                </strong>
            </td>
            <td>
                <input id="last-name" ${enabled_or_disabled} required value=${pessoa.sobrenome}></input>
            </td>
        </tr>

        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-eye-open text-primary"></span>
                    Contato
                </strong>
            </td>
            <td>
                <input id="telefone" ${enabled_or_disabled} required value=${pessoa.celular}></input>
            </td>
        </tr>
        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-envelope text-primary"></span>
                    Email
                </strong>
            </td>
            <td>
                <input type="email" id="email" ${enabled_or_disabled} required value=${pessoa.email}></input>
            </td>
        </tr>
        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Cidade
                </strong>
            </td>
            <td>
                <input id="cidade" ${enabled_or_disabled} required value=${pessoa.cidade}></input>
            </td>
        </tr>
    </tbody>`

    window.document.getElementById('user-information').innerHTML = user_table_info;
    return pessoa;
}