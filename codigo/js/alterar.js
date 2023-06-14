var erros = [];

window.onload = () => {
    pessoa = load_user_info(page);

    document.getElementById('btn-save').addEventListener('click', () => {
        erros = [];
        var nome = {"field":"nome", "value": document.getElementById('first-name').value};
        var sobrenome = {"field":"sobrenome", "value": document.getElementById('last-name').value};
        var telefone = {"field":"celular", "value": document.getElementById('telefone').value};
        var email = {"field":"email", "value": document.getElementById('email').value};
        var filhos = {"field":"filhos", "value": document.getElementById('filhos').value};
        var cidade = {"field":"cidade", "value": document.getElementById('cidade').value};
        var experiencia = {"field":"experiencia_natureza", "value": document.getElementById('experiencia').value};
        var transporte = {"field":"transporte", "value": document.getElementById('transporte').value};

        fields = [nome, sobrenome, telefone, email, filhos, cidade, experiencia, transporte];
        
        validateNotEmpty(fields, pessoa);

        pessoas = JSON.parse(localStorage.getItem('pessoas'));

        for(let i = 1; i <= pessoas.length; i++){
            if(pessoas[i].id = pessoa.id){
                pessoas[i] = pessoa;
                break;
            }
        }
    
        if(erros.length > 0){
            strErros = '';
            erros.forEach(erro => {
                strErros += erro + "\n";
            })
            alert(strErros)
        }else{
            localStorage.setItem('dadosUsuario', JSON.stringify(pessoa));
            localStorage.setItem('pessoas', JSON.stringify(pessoas));
            window.location.href = './perfil.html';
        }
    })

    document.getElementById('btn-cancel').addEventListener('click', () => {
        window.location.href = './perfil.html';
    })

}

function validateNotEmpty(fields, pessoa){
    fields.forEach(item => {
        if(item.value == ''){
            erros.push(`${item.field} inválido !`);
        }
        else{
            pessoa[item.field] = item.value;
        }   
    });
}

function load_user_info() {
    var pessoa = JSON.parse(localStorage.getItem("dadosUsuario"));
    
    user_table_info = `<tbody>
        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-user  text-primary"></span>
                    Nome
                </strong>
            </td>
            <td>
                <input id="first-name" required value=${pessoa.nome}></input>
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
                <input id="last-name" required value=${pessoa.sobrenome}></input>
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
                <input id="telefone" required value=${pessoa.celular}></input>
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
                <input type="email" id="email" required value=${pessoa.email}></input>
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
                <input id="cidade" required value=${pessoa.cidade}></input>
            </td>
        </tr>
        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Experiência natureza
                </strong>
            </td>
            <td>
                <input id="experiencia" required value=${pessoa.experiencia_natureza}></input>
            </td>
        </tr>
        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Nº filhos
                </strong>
            </td>
            <td>
                <input id="filhos" required value=${pessoa.filhos}></input>
            </td>
        </tr>
        <tr>
            <td>
                <strong>
                    <span class="glyphicon glyphicon-calendar text-primary"></span>
                    Transporte
                </strong>
            </td>
            <td>
                <input id="transporte" required value=${pessoa.transporte}></input>
            </td>
        </tr>
    </tbody>`

    window.document.getElementById('user-information').innerHTML = user_table_info;
    return pessoa;
}