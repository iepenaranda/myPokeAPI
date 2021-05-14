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
  let name = data.name;
  name = name.slice(0,1).toUpperCase() + name.slice(1,name.length);
  this.html += `<div class="card ${data.types[0].type.name} col-lg-3" style="width: 18rem;">
        <img src="${data.sprites.other["official-artwork"].front_default}" class="card-img-top" alt="${name}">
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${data.types[0].type.name.toUpperCase()} - ${data.types.length == 2 ? data.types[1].type.name.toUpperCase() : ""}</p>
        </div>
        </div>`;
  document.getElementById("datosPoke").innerHTML = this.html;
};

const paginacion = (data) => {
    this.html = "";
    let html = `<li class="page-item ${data.previous ? "" : "disabled"}">
    <a class="page-link" onclick="getData('${data.previous}')">Prev</a></li> 
    <li class="page-item ${data.next ? "" : "disabled"}">
    <a class="page-link" onclick="getData('${data.next}')">Next</a></li>`;
    document.getElementById("menu").innerHTML = html;
  };

getData(API);
