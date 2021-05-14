// Llamado a API
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";

// Consumir API
const prueba = (api) => {
  let allPokes = fetch(api);
};

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      getPokeData(json.results);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
};

const getPokeData = (pokes) => {
  pokes.forEach((poke) => {
    fetch(poke.url)
      .then((response) => response.json())
      .then((json) => {
        dibujarData(json);
      })
      .catch((error) => {
        console.log("Error getting pokeData: ", error);
      });
  });
};

const dibujarData = (data) => {
  let html = document.getElementById("datosPoke").innerHTML;

  html += `<div class="col-lg-4" style="width: 18rem;">
        <img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data.name}">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
        </div>
        </div>`;
  document.getElementById("datosPoke").innerHTML = html;
};

getData(API);
