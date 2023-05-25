window.onload = () => {
    /*let param = new URLSearchParams(window.location.search);
    let personId = param.get("id");*/
    pessoa = load_user_info();

    liberaCampos(false);

    document.getElementById('btn-cancel').addEventListener('click', () => {
        cancel();
    });

    document.getElementById('btn-save').addEventListener('click', () => {
        alterar();
    });
}

function load_user_info() {
    var pessoa = JSON.parse(localStorage.getItem("usuarioLogado"));
    
    user_table_info = `<tbody>
        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-user  text-primary"></span>
                    Nome
                </strong>
            </td>
            <td>
                <input id="first-name" disabled required value=${pessoa.nome}></input>
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
                <input id="last-name" disabled required value=${pessoa.sobrenome}></input>
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
                <input id="telefone" disabled required value=${pessoa.celular}></input>
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
                <input type="email" id="email" disabled required value=${pessoa.email}></input>
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
                <input id="cidade" disabled required value=${pessoa.cidade}></input>
            </td>
        </tr>
    </tbody>`

    window.document.getElementById('user-information').innerHTML = user_table_info;
    return pessoa;
}

function liberaCampos(libera) {
    button_change = window.document.getElementById('button-change');
    button_save = window.document.getElementById('save');
    button_cancel = window.document.getElementById('cancel');
    inputs = window.document.getElementsByTagName('input');

    if (libera) {
        button_save.hidden = false;
        button_cancel.hidden = false;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
    } else {
        button_save.hidden = true;
        button_cancel.hidden = true;

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
    }
}

function alterar() {
    liberaCampos(false);
    var first_name = window.document.getElementById('first-name').value;
    var last_name = window.document.getElementById('last-name').value;
    var telefone = window.document.getElementById('telefone').value;
    var email = window.document.getElementById('email').value;
    var cidade = window.document.getElementById('cidade').value;

    pessoa.nome = first_name;
    pessoa.sobrenome = last_name;
    pessoa.celular = telefone;
    pessoa.cidade = cidade;
    pessoa.email = email;

    localStorage.setItem('usuarioLogado', JSON.stringify(pessoa));

    for(let i = 0; i < pessoas.length; i++){
        if(pessoa.id = pessoas[i].id){
            pessoas[i] = pessoa;
        }
    }
    
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
}

function cancel() {
    liberaCampos(false);
    load_user_info();
}