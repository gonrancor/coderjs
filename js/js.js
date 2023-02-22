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
  alert("Ingreso exitoso. Bienvenido " + usuario);
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
} else {
  alert("Supero el numero de intentos permitidos. Intente en un rato.");
}
