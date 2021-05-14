// Llamado a API
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";
let html = "";

// Consumir API
const prueba = (api) => {
  let allPokes = fetch(api);
};

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      getPokeData(json.results), paginacion(json);
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
  this.html += `<div class="col-lg-4" style="width: 18rem;">
        <img src="${data.sprites.other.dream_world.front_default}" class="card-img-top" alt="${data.name}">
        <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
        </div>
        </div>`;
  document.getElementById("datosPoke").innerHTML = this.html;
};

const paginacion = (data) => {
    this.html = "";
    let html = `<li class="page-item ${
      data.previous ? "" : "disabled"
    }"><a class="page-link" onclick="getData('${data.previous}')">Prev</a></li> 
    <li class="page-item ${
      data.next ? "" : "disabled"
    }"><a class="page-link" onclick="getData('${data.next}')">Next</a> </li>`;
    document.getElementById("menu").innerHTML = html;
  };

getData(API);
