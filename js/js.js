let contraseña = "matecito";
let usuario = "Gon";

function login(intentos) {
  let ingresar = false;

  for (let i = intentos; i >= 0; i--) {
    let userPass = prompt("Ingresá tu contraseña.");
    if (userPass === contraseña) {
      ingresar = true;
      break;
    } else {
      alert("Contraseña invalida.");
    }
  }
  return ingresar;
}
if (login(2)) {
  const div = document.createElement("div");
  div.textContent = "Bienvenido Gon";
  nuevoNav.appendChild(div);
  div.style.textAlign = "right";
  div.style.paddingRight = "10px";
  div.style.backgroundColor = "#E6D5CF";
} else {
  alert("Supero el numero de intentos permitidos. Intente en un rato.");
}

const collares = [
  {
    id: 1,
    nombre: "Japa Mala Onix",
    material: "onix",
    imagen: "./img/rosario.jpg",
    precio: 10000,
    descripcion: "Japa mala hecho de piedras Onix negro.",
  },
  {
    id: 2,
    nombre: "Japa Mala de madera",
    material: "madera",
    imagen: "./img/JAPA-MALA.jpg",
    precio: 5000,
    descripcion: "Japa mala hecho de madera pintado a mano.",
  },
  {
    id: 3,
    nombre: "Japa Mala corazon",
    material: "piedras",
    imagen: "./img/collar-piedras-naturales.jpg",
    precio: 1000,
    descripcion: "Japa mala hecho de piedras naturales.",
  },
];
const pulcera = [
  {
    id: 1,
    nombre: "Pulceras Japa Mala de Madera",
    material: "madera",
    imagen: "./img/pulceras.jpg",
    precio: 2000,
  },
  {
    id: 2,
    nombre: "Pulceras Japa Mala de Piedra",
    material: "piedra",
    imagen: "./img/pulceras.jpg",
    precio: 3000,
  },
];

const carrito = [];
// // // // // // // // // COLLAR// // // // // // // // // COLLAR
let collar = document.getElementById("collares");
collar.addEventListener("click", function cantidad() {
  document.getElementById("cards-collares-container").style.display =
    "inline-block";
  document.getElementById("cards-pulceras-container").style.display = "none";
  let respuesta = prompt(
    "Tenemos 3 tipos de Japa Malas a disposición: Onix, de madera o corazon. ¿Cual desea?"
  );
  alert(`Japa mala de   ${respuesta}  se ha agregado al carrito de compras. `);
  carrito.push("Japa Mala de " + respuesta);
});

// // // // // // // // // PULCERAS// // // // // // // // // PULCERAS

/*
-------- LAS CARDS MOSTRANDO LOS COLLARES QUE QUIERO MOSTRAR AL SELECCIONAR 
CIERTA OPCION ---------
*/

const cardsContainer = document.getElementById("cards-collares-container");

for (let i = 0; i < collares.length; i++) {
  const collar = collares[i];

  const card = document.createElement("div");
  card.classList.add("card");

  const imagen = document.createElement("img");
  imagen.src = collar.imagen;
  imagen.alt = collar.nombre;
  imagen.classList.add("card-image");

  const nombre = document.createElement("h3");
  nombre.textContent = collar.nombre;
  nombre.classList.add("card-titulo");

  const precio = document.createElement("p");
  precio.textContent = "$" + collar.precio.toFixed(2);
  precio.classList.add("card-precio");

  const descripcion = document.createElement("p");
  descripcion.textContent = collar.descripcion;
  descripcion.classList.add("card-descripcion");

  const btn = document.createElement("button");
  btn.textContent = "Comprar";
  descripcion.classList.add("card-btn");

  card.appendChild(imagen);
  card.appendChild(nombre);
  card.appendChild(precio);
  card.appendChild(descripcion);
  card.appendChild(btn);

  cardsContainer.appendChild(card);
}
// // // // // // PULCERAS/ // // // // // PULCERAS/ // // // // // PULCERAS

let pulceras = document.getElementById("pulceras");
pulceras.addEventListener("click", function cantidad() {
  document.getElementById("cards-collares-container").style.display = "none";
  document.getElementById("cards-pulceras-container").style.display =
    "inline-block";
  let respuesta = prompt(
    "Tenemos 2 tipos de pulceras de Japa Malas a disposición: de madera o de piedras. ¿Cual desea?"
  );
  alert(
    `Pulcera Japa mala de   ${respuesta}  se ha agregado al carrito de compras. `
  );
  carrito.push("Pulcera Japa Mala de " + respuesta);
});

console.log(carrito);
const cardsContainerpulceras = document.getElementById(
  "cards-pulceras-container"
);

for (let i = 0; i < pulcera.length; i++) {
  const pulceras = pulcera[i];

  const card = document.createElement("div");
  card.classList.add("card");

  const imagen = document.createElement("img");
  imagen.src = pulceras.imagen;
  imagen.alt = pulceras.nombre;
  imagen.classList.add("card-image");

  const nombre = document.createElement("h3");
  nombre.textContent = pulceras.nombre;
  nombre.classList.add("card-titulo");

  const precio = document.createElement("p");
  precio.textContent = "$" + pulceras.precio.toFixed(2);
  precio.classList.add("card-precio");

  const descripcion = document.createElement("p");
  descripcion.textContent = pulceras.descripcion;
  descripcion.classList.add("card-descripcion");

  const btn = document.createElement("button");
  btn.textContent = "Comprar";
  descripcion.classList.add("card-btn");

  card.appendChild(imagen);
  card.appendChild(nombre);
  card.appendChild(precio);
  card.appendChild(descripcion);
  card.appendChild(btn);

  cardsContainerpulceras.appendChild(card);
}

/*
--- EL HTML QUE ANTES MOSTRABA FIJO Y AHORA SOLO QUIERO MOSTRAR DESDE JS ----

        <div class="row row-cols-1 row-cols-md-3 g-4">
        
          <div class="col">
            <div class="card h-100">
              <img src="./img/rosario.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Japa Mala Onix</h5>
                <p class="card-text">Piedra: Onix negro.</p>
                <p class="precio">$10.000</p>
                <button id="btnOnix" type="button" class="btn btn-primary">
                  Comprar
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="./img/pulceras.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Pulceras de Japa Mala</h5>
                <p class="card-text">Material: madera</p>
                <p class="precio">$2.000</p>
                <button id="btnPulcera" type="button" class="btn btn-primary">
                  Comprar
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img src="./img/JAPA-MALA.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Japa Mala</h5>
                <p class="card-text">Material: Madera.</p>
                <p class="precio">$5.000</p>
                <button id="btnMadera" type="button" class="btn btn-primary">
                  Comprar
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card h-100">
              <img
                src="./img/collar-piedras-naturales.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Japa Mala Corazon</h5>
                <p class="card-text">
                  Material: Piedras Rodonita, Rodocrosita, Jaspes varios.
                </p>
                <p class="precio">$10.000</p>
                <button id="btnCorazon" type="button" class="btn btn-primary">
                  Comprar
                </button>
              </div>
            </div>
          </div>

        </div>
*/
/*

--------- BOTONES CON ALERTAS SOBRE LAS CARDS QUE ESTABAN SOBRE HTML ----------
  let onixNegro = document.getElementById("btnOnix");
  btnOnix.addEventListener("click", function cantidad() {
    var respuesta = parseInt(
      prompt("Ingrese la cantidad de unidades que desea comprar")
    );
    alert(
      respuesta +
        " Japa Mala de Onix negro se ha agregado al carrito de compras"
    );
  });

  let btnPulcera = document.getElementById("btnPulcera");
  btnPulcera.addEventListener("click", function cantidad() {
    var respuesta = parseInt(prompt("Ingrese cuantas pulceras quiere"));
    alert(respuesta + " pulcera se ha agregado al carrito de compras");
  });

  let btnMadera = document.getElementById("btnMadera");
  btnMadera.addEventListener("click", function cantidad() {
    var respuesta = parseInt(prompt("Ingrese cuantas pulceras quiere"));
    alert(
      respuesta + " Japa Mala de madera se ha agregado al carrito de compras"
    );
  });

  let btnCorazon = document.getElementById("btnCorazon");
  btnCorazon.addEventListener("click", function cantidad() {
    var respuesta = parseInt(prompt("Ingrese cuantas pulceras quiere"));
    alert(
      respuesta + " Japa Mala corazon se ha agregado al carrito de compras"
    );
  });
  */
