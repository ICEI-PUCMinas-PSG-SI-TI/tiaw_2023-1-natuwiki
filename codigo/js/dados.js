listaPessoas = [
    {
        "id": 1,
        "nome": "Admin",
        "sobrenome": "Natuwiki",
        "cidade": "Belo Horizonte",
        "celular": "31997270845",
        "email": "admin@natuwiki",
        "casado": false,
        "filhos": 0,
        "experiencia_natureza": "baixo",
        "destinos_favoritos": ["Cachoeira", "Camping"],
        "transporte": ["Transporte Público", "Bicicleta"],
        "usuario": {
            "senha": "1234",
            "login": "admin"
        }
    },
    {
        "id": 2,
        "nome": "Juliana",
        "sobrenome": "Alves",
        "cidade": "Belo Horizonte",
        "celular": "31978675677",
        "email": "julianalves@gmail.com",
        "casado": false,
        "filhos": 1,
        "experiencia_natureza": "baixo",
        "destinos_favoritos": ["Esportes radicais", "Trilha"],
        "transporte": ["Carro"],
        "usuario": {
            "senha": "12345",
            "login": "julianalves@gmail.com"
        }
    }
    , {
        "id": 3,
        "nome": "Carlos",
        "sobrenome": "Silva",
        "cidade": "São Paulo",
        "celular": "11987654321",
        "email": "carlos.silva@outlook.com",
        "casado": true,
        "filhos": 2,
        "experiencia_natureza": "médio",
        "destinos_favoritos": ["Camping", "Trilha"],
        "transporte": ["Moto", "Carro"],
        "usuario": {
            "senha": "12345",
            "login": "carlos.silva@outlook.com"
        }
    },
    {
        "id": 4,
        "nome": "Ana",
        "sobrenome": "Gomes",
        "cidade": "Rio de Janeiro",
        "celular": "21976543210",
        "email": "ana.gomes@gmail.com",
        "casado": false,
        "filhos": 0,
        "experiencia_natureza": "alto",
        "destinos_favoritos": ["Cachoeira", "Camping"],
        "transporte": ["Transporte Público"],
        "usuario": {
            "senha": "12345",
            "login": "ana.gomes@gmail.com"
        }
    },
    {
        "id": 5,
        "nome": "Mariana",
        "sobrenome": "Santos",
        "cidade": "Belo Horizonte",
        "celular": "31987654321",
        "email": "mariana.santos@gmail.com",
        "casado": false,
        "filhos": 0,
        "experiencia_natureza": "alto",
        "destinos_favoritos": ["Trilha", "Esportes radicais"],
        "transporte": ["Carro"],
        "usuario": {
            "senha": "12345",
            "login": "mariana.santos@gmail.com"
        }

    }
];

dadosLocais = [
    {
        "id": 1,
        "nome": "Cachoeira Alta Vale de Altamira",
        "descrição": "A Cachoeira Alta é uma bela queda d'água localizada no Vale de Altamira , próximo à cidade de Nova União, em Minas Gerais. Com uma paisagem exuberante e águas cristalinas, é um local perfeito para relaxar e se conectar com a natureza",
        "endereço": "Vale de Altamira, Nova União, MG",
        "como chegar": "Recomenda-se utilizar um veículo particular ou serviço de transporte até Nova União e, em seguida, seguir conforme indicações para o Vale de Altamira.",
        "horário de funcionamento": "Não há informações disponíveis sobre o horário de funcionamento específico. Geralmente, o acesso à cachoeira é permitido durante o dia.",
        "oferece estadia?": "Não, não há opções de estadia disponíveis no local"
    },
    {
        "id": 2,
        "nome": "Chalé Canto da Siriema",
        "descrição": "O Chalé Canto da Siriema é um charmoso chalé localizado em Lavras Novas, Minas Gerais. Com uma atmosfera acolhedora e cercada por belas paisagens naturais, é um refúgio perfeito para quem busca paz e tranquilidade.",
        "endereço": "Lavras Novas, MG",
        "como chegar": "Recomenda-se utilizar um veículo particular ou serviço de transporte Lavras Novas, seguindo até as indicações disponíveis na região.",
        "horário de funcionamento": "Como é um estabelecimento de hospedagem, geralmente está aberto o ano todo, mas é necessário fazer uma reserva antecipada.",
        "oferece estadia?": "Sim, o Chalé Canto da Siriema oferece estadia para os hóspedes que desejam desfrutar da tranquilidade de Lavras Novas."
    }, {
        "id": 3,
        "nome": "Trilha Cachoeira do Lageado",
        "descrição": "A Trilha Cachoeira do Lageado é um percurso de caminhada que leva até uma bela cachoeira no Vale de Altamira, próximo à cidade de Nova União, em Minas Gerais. A trilha é conhecida por sua beleza natural e paisagens deslumbrantes ao longo do percurso.",
        "endereço": "Vale de Altamira, Nova União, MG",
        "como chegar": "Recomenda-se utilizar um veículo particular ou serviço de transporte Nova União e, em seguida até, seguir as indicações para o Vale de Altamira, onde a trilha tem início.",
        "horário de funcionamento": "Não há restrições de horário conhecidos para a trilha. No entanto, é recomendável fazer a caminhada durante o dia e estar atento às condições climáticas.",
        "oferece estadia?": "Não, a trilha não oferece opções de estadia. É uma atividade para ser realizada durante o dia.",
    }, {
        "id": 4,
        "nome": "Parque da Cachoeira Congonhas",
        "descrição": "O Parque da Cachoeira Congonhas é um belo parque localizado na cidade de Congonhas, Brasil. É conhecido por suas deslumbrantes cachoeiras, trilhas naturais e paisagens exuberantes.",
        "endereço": "Rua das Cachoeiras, s/n, Congonhas, Brasil.",
        "como chegar": "O Parque da Cachoeira Congonhas está localizado a cerca de 10 km do centro da cidade de Congonhas. Você pode chegar lá de carro, seguindo pela Rua das Cachoeiras até o parque.",
        "horário de funcionamento": "O parque está aberto todos os dias, das 8h às 17h.",
        "oferecer estadia?": "O Parque da Cachoeira Congonhas não oferece estadia. No entanto, existem opções de hospedagem disponíveis nas proximidades.",
    }, {
        "id": 5,
        "nome": "Cachoeira Véu da Noiva - Serra do Cipó",
        "descrição": "A Cachoeira Véu da Noiva é uma impressionante queda d'água localizada na Serra do Cipó, em Minas Gerais, Brasil. Com aproximadamente 70 metros de altura, é uma das principais atrações naturais da região.",
        "endereço": "Estrada da Serra, km 12, Serra do Cipó, Minas Gerais, Brasil.",
        "como chegar": "Para chegar à Cachoeira Véu da Noiva, siga pela Estrada da Serra até o km 12, na Serra do Cipó.",
        "horário de funcionamento": "A cachoeira pode ser visitada diariamente, das 9h às 17h.",
        "oferecer estadia?": "A Cachoeira Véu da Noiva - Serra do Cipó não oferece estadia, mas há diversas opções de hospedagem disponíveis na região da Serra do Cipó."
    }
]


localStorage.setItem('pessoas', JSON.stringify(listaPessoas))
localStorage.setItem('locais', JSON.stringify(dadosLocais));
