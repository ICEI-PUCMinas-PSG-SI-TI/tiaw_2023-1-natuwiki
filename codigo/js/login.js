window.onload = () => {
    let userpadrao = "admin@natuwiki";
    let senhapadrao = "1234";
    form = document.getElementById("form-login");
    error = document.getElementById("error");
    limpar = document.getElementById("limpar");
    entrar = document.getElementById("link-entrar");//gambiarra

    /*form.addEventListener('submit', (event) =>{
        validaAutenticacao(event, userpadrao, senhapadrao);
    });*/

    entrar.addEventListener('click', (event) =>{
        validaAutenticacao(event, userpadrao, senhapadrao);//gambiarra parte 2
    })

    limpar.addEventListener('click', () =>{
        error.style.display = 'none';
        limpar.style.display = 'none';
    });
};

function validaAutenticacao(event, username, password){
    var entradaUsuario = document.getElementById("username").value;
    var entradaSenha = document.getElementById("password").value;

    if(entradaUsuario != username.toLowerCase()
    || entradaSenha != password.toLowerCase()){
        event.preventDefault();
        error.style.display = 'block';
        limpar.style.display = 'inline-block';  
        error.textContent = "Senha e/ou usuário inválidos";        
    }
}

