 //código da Hayanne inicio
 var usuario= JSON.parse(localStorage.getItem("usuario"));

if(usuario == null || usuario.logado == false){
    document.location.href = './login.html';
}
//código da Hayanne fim

window.onload = () => {
    
    pessoa = load_user_info(page);
    load_map_info(pessoa);

}

function load_map_info(pessoa){
    
    fetch(`https://nominatim.openstreetmap.org/ui/search.html?city=${pessoa.cidade}&limit=1`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })

    // Creating map options
    var mapOptions = {
        center: [-19.9227, -44.0311],
        zoom: 10
    }

    // Creating a map object
    var map = new L.map('my-map', mapOptions);

    // Creating a Layer object
    var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Adding layer to the map
    map.addLayer(layer);
}

function load_user_info() {
    var pessoa = JSON.parse(localStorage.getItem("dadosUsuario"));
    
    let enabled_or_disabled = '';
    if(page == 'perfil'){
        enabled_or_disabled = 'disabled'
    }
    console.log(pessoa.nome)
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