let contenedor = document.getElementById("contenedor");

fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    .then(resp => resp.json())
    .then(data => {
        data.results.forEach(pokemon => {
            fetch(pokemon.url)
                .then(resp => resp.json())
                .then(pokemonData => {
                   
                    let cardHTML = `
                        <div class="card">
                            <h3>${pokemon.name}</h3>
                            
                            <p>ID: ${pokemonData.id}</p>
                            <p>Tipo: ${pokemonData.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                        </div>
                    `;
                    contenedor.innerHTML += cardHTML;
                })
                .catch(err => console.log(err));
        });
    })
    .catch(err => console.log(err));


