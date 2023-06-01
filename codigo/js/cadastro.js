window.onload = () => {

    document.getElementById('btn_cadastro').addEventListener('click', validaDados)

}


function validaDados(){

    erro = false;
    limparMensagens();

    var nome = document.getElementById('username').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var cidade = document.getElementById('cidade').value;
    var number = document.getElementById('number').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var confirmacao = document.getElementById('confirmacao').value;

    if(nome == ''){
        paragrafo = document.getElementById('erro_nome');
        erro_nome.textContent = 'Nome inválido';
        erro = true;
    }

    if(sobrenome == ''){
        paragrafo = document.getElementById('erro_sobrenome');
        erro_sobrenome.textContent = 'Sobrenome inválido';
        erro = true;
    }

    if(cidade == ''){
        paragrafo = document.getElementById('erro_cidade');
        erro_cidade.textContent = 'Cidade inválido';
        erro = true;
    }

    if(number == ''){
        paragrafo = document.getElementById('erro_number');
        erro_number.textContent = 'Número inválido';
        erro = true;
    }

    if(email == ''){
        paragrafo = document.getElementById('erro_email');
        erro_email.textContent = 'Email inválido';
        erro = true;
    }

    
    if(senha == ''){

    }

    if(confirmacao == ''){

    }

    if(senha != confirmacao){
        paragrafo = document.getElementById('erro_senha');
        paragrafo.textContent = 'As senhas não correspondem';
    }

    cadastrar(erro);

}

function cadastrar(erro){

    if(!erro){
        //
    }
}

function limparMensagens(){
    paragrafos = document.getElementsByClassName('invalido');

    for(let i = 0; i < paragrafos.length; i++){
        paragrafos[i].textContent = '';
    }
}