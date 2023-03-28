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
    nombre: "Pulceras Japa Mala con Ojo de Tigre",
    material: "madera",
    imagen: "./img/pulcera1.jpg",
    precio: 2000,
  },
  {
    id: 2,
    nombre: "Pulceras Japa Mala con Cuarzo Verde",
    material: "piedra",
    imagen: "./img/pulcera2.jpg",
    precio: 3000,
  },
];
const sahumerios = [
  {
    id: 1,
    nombre: "Sahumerios",
    material: "Palo santo",
    imagen: "./img/sahumerio.jpg",
    precio: 500,
  },
  {
    id: 2,
    nombre: "Sahumerios artesanales",
    material: "Palo santo",
    imagen: "./img/sahumerio1.jpg",
    precio: 300,
  },
];

const carrito = [];
// // // // // // // // // COLLAR// // // // // // // // // COLLAR
let collar = document.getElementById("collares");
collar.addEventListener("click", function cantidad() {
  document.getElementById("cards-pulceras-container").style.display = "none";
  document.getElementById("cards-sahumerios-container").style.display = "none";
  document.getElementById("cards-collares-container").style.display = "flex";
  document.getElementById("cards-collares-container").style.flexWrap = "wrap";
  document.getElementById("cards-collares-container").style.justifyContent =
    "center";
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
  document.getElementById("cards-sahumerios-container").style.display = "none";
  document.getElementById("cards-pulceras-container").style.display = "flex";
  document.getElementById("cards-pulceras-container").style.flexWrap = "wrap";
  document.getElementById("cards-pulceras-container").style.justifyContent =
    "center";
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

// // // // // // // // SAHUMERIOS// // // // // // // //

const cardsConteinerSahumerios = document.getElementById(
  "cards-sahumerios-container"
);

const sahumerio = document.getElementById("sahumerios");

sahumerio.addEventListener("click", function cantidad() {
  document.getElementById("cards-collares-container").style.display = "none";
  document.getElementById("cards-pulceras-container").style.display = "none";
  document.getElementById("cards-sahumerios-container").style.display = "flex";
  document.getElementById("cards-sahumerios-container").style.flexWrap = "wrap";
  document.getElementById("cards-sahumerios-container").style.justifyContent =
    "center";
});

for (let i = 0; i < sahumerios.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");

  const imagen = document.createElement("img");
  imagen.src = sahumerios[i].imagen;
  imagen.alt = sahumerios[i].nombre;
  imagen.classList.add("card-image");

  const nombre = document.createElement("h3");
  nombre.textContent = sahumerios[i].nombre;
  nombre.classList.add("card-titulo");

  const precio = document.createElement("p");
  precio.textContent = "$" + sahumerios[i].precio.toFixed(2);
  precio.classList.add("card-precio");

  const descripcion = document.createElement("p");
  descripcion.textContent = sahumerios[i].descripcion;
  descripcion.classList.add("card-descripcion");

  const btn = document.createElement("button");
  btn.textContent = "Comprar";
  btn.classList.add("card-btn");

  card.appendChild(imagen);
  card.appendChild(nombre);
  card.appendChild(precio);
  card.appendChild(descripcion);
  card.appendChild(btn);

  cardsConteinerSahumerios.appendChild(card);
}

//// LOGIN //// LOGIN //// LOGIN //// LOGIN //// LOGIN //// LOGIN //// LOGIN ////

// const usuarioRegistrado = "gon@gon.com";
// const contraseñaUsuario = "matecito";

// // let btnLogin = document.getElementById("btnLogin");
// let btnVaciarTodo = document.getElementById("btnVaciarLocalStorage");
// let btnVaciarSessionStorage = document.getElementById(
//   "btnVaciarSessionStorage"
// );
// let recordar = document.getElementById("rememberMe");

// function guardarDatos(storage) {
//   let user = document.getElementById("emailAddress").value;
//   let pass = document.getElementById("password").value;

//   const usuario = {
//     user: user,
//     pass: pass,
//   };
//   storage.setItem("user", JSON.stringify(usuario));
// }
// function borrarDatos(storage) {
//   storage.clear();
// }
// function borrarDatoUnico(key, storage) {
//   storage.removeItem(key);
// }
// btnVaciarTodo.addEventListener("click", () => {
//   borrarDatos(localStorage);
//   borrarDatos(sessionStorage);
// });
// btnVaciarSessionStorage.addEventListener("click", () => {
//   borrarDatos(sessionStorage);
// });
// btnLogin.addEventListener("click", () => {
//   if (recordar.checked) {
//     guardarDatos(localStorage);
//   } else {
//     guardarDatos(sessionStorage);
//   }
// });

const mailLogin = document.getElementById("emailLogin"),
  passLogin = document.getElementById("passwordLogin"),
  recordar = document.getElementById("recordarme"),
  btnLogin = document.getElementById("login"),
  btnLogout = document.getElementById("btnLogout"),
  modalEl = document.getElementById("modalLogin"),
  nombreUsuario = document.getElementById("nombreUsuario"),
  modal = new bootstrap.Modal(modalEl),
  toggles = document.querySelectorAll(".toggles");

const usuarios = [
  {
    nombre: "Luffy",
    mail: "futuroreypirata@onepiece.com",
    pass: "carne",
  },
  {
    nombre: "Zoro",
    mail: "reydelinfierno@santoriu.com",
    pass: "sake",
  },
  {
    nombre: "Saitama",
    mail: "calvoconcapa@heroe.com",
    pass: "rentagratis",
  },
];

//La función de validar se aprovecha del tipo de return que hace el método find (el objeto si lo encuentra, o undefined si no encuentra ninguno que cumpla con la condición)
function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((userDB) => userDB.mail == user);

  //console.log('Usuario encontrado por validate '+ typeof isFound);
  if (typeof encontrado === "undefined") {
    return false;
  } else {
    //si estoy en este punto, quiere decir que el mail existe, sólo queda comparar la contraseña
    if (encontrado.pass != pass) {
      return false;
    } else {
      return encontrado;
    }
  }
}

//Guardamos los datos que recuperamos de la database en el storage
function guardarDatos(usuarioDB, storage) {
  const usuario = {
    name: usuarioDB.nombre,
    user: usuarioDB.mail,
    pass: usuarioDB.pass,
  };

  storage.setItem("usuario", JSON.stringify(usuario));
}
//Recupero los datos que se guardaron y los retorno
function recuperarUsuario(storage) {
  let usuarioEnStorage = JSON.parse(storage.getItem("usuario"));
  return usuarioEnStorage;
}

function presentarInfo(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}

function saludar(usuario) {
  nombreUsuario.innerHTML = `Bienvenido/a ${usuario.name}`;
  nombreUsuario.style.justifyContent = "center";
}
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (!mailLogin.value || !passLogin.value) {
    alert("Todos los campos son requeridos");
  } else {
    let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);
    if (!data) {
      alert(`Usuario y/o contraseña erróneos`);
    } else {
      if (recordar.checked) {
        guardarDatos(data, localStorage);
        saludar(recuperarUsuario(localStorage));
      } else {
        guardarDatos(data, sessionStorage);
        saludar(recuperarUsuario(sessionStorage));
      }
      modal.hide();
      presentarInfo(toggles, "d-none");
    }
  }
});
function borrarDatos() {
  localStorage.clear();
  sessionStorage.clear();
}
btnLogout.addEventListener("click", () => {
  borrarDatos();
  presentarInfo(toggles, "d-none");
});

function estaLogueado(usuario) {
  if (usuario) {
    saludar(usuario);
    presentarInfo(toggles, "d-none");
  }
}

estaLogueado(recuperarUsuario(localStorage));
