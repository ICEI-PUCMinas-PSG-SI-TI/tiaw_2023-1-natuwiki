var usuario = JSON.parse(localStorage.getItem("usuario"));

if(usuario.logado == false){
    document.location.href = './paginas/login.html';
}