var pessoas = JSON.parse(localStorage.getItem("pessoas"))

//Danielle, continuar o cadastro de pessoas e de locais
if (!pessoas){
    pessoas = [
        {
            "id" : 1,
            "nome": "Davi",
            "sobrenome": "Martins",
            "cidade": "Belo Horizonte",
            "celular": "31997270845",
            "email": "davimartinsfreitas@gmail.com",
            "casado": false,
            "filhos": 0,
            "experiencia_natureza": "baixo",
            "destinos_favoritos": ["Cachoeira", "Camping"],
            "transporte":["Transporte Público", "Bicicleta"],
            "usuario":{
                "senha": "teste",
                "login": "davimartinsfreitas@gmail.com"
            }      
        }
    ];
}

