var usuario = JSON.parse(localStorage.getItem("usuario"));

if(usuario == null || usuario.logado == false){
    document.location.href = './paginas/login.html';
}