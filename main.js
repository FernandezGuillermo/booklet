//Unidad 1
//Actividad 1

/* let name = "Guillermo";
let surname = "Fernandez";
let age = "36";
console.log(name);
console.log(surname);
console.log(age); */

//Actividad 2
/* const ARGENTINA = "Argentina";
const BRASIL = "Brasil";
const ESTADOS_UNIDOS = "Estados Unidos";
const CHILE = "Chile";
const PERU = "Peru"; */

//Actividad 3

/* let nameId =  "Guillermo";
let surnameId = "Fernandez";
let countryId = "Argentina";

let Id = "Name: " + nameId + " Surname: " + surnameId + " Country: " + countryId; 
console.log(Id); */

//Actividad 4

/* let padre = prompt("Nombre del padre");
let madre = prompt("Nombre de la madre");
let hermana = prompt("Nombre de la hermana");
let hermano = prompt("Nombre del hermano");
let perro = prompt("Nombre del perro");

let familia = padre + "," + madre + "," + hermana + "," + hermano + "," + perro ;
console.log("Los integrantes de la familia son " + familia); */

//ACtividad 5
/* let precio = prompt("Cual es el precio del producto");

precio *= 0.80; //Amplico descuento del 20%
alert("El precio con descuento es "+ precio); */

//Unidad 2
//Actividad 1

/* let nombre = prompt("Digite su nombre");
let respuesta = "Florencia";

if(nombre === respuesta){
    alert("Yo fui");
}
else{
    alert("Yo no fui");
} */

//Actividad 2

/* let tecla = prompt("Presione una tecla");

if((tecla === "y") || (tecla ==="Y")){
    alert("correcto");
}
else{
    alert("ERROR");
} */

//Actividad 3
/* let numeroPersonaje = prompt("Elija a su personaje del 1 al 4");

switch(numeroPersonaje){
    case "1": alert("Elejiste a Homero");
            break;
    case "2": alert("Elegiste a Marge");
            break;
    case "3": alert("Elegiste a Bart");
            break
    case "4": alert("Elegiste a Lisa");
            break;
} */

//Actividad 4

/* let number = parseFloat(prompt("Cual es tu presupuesto"));

if((number>=0) && (number<=1000)){
    alert("Presupuesto bajo");
}else if((number>=1001) && (number<=3000)){
    alert("Presupuesto medio");
}else if(number>=3000){
    alert("Presupuesto alto")
}else{
    alert("Error");
} */

//Actividad 5

/* alert("Cargue 4 productos");
let producto1 =  prompt("Ingrese un producto");
let producto2 =  prompt("Ingrese un producto");
let producto3 =  prompt("Ingrese un producto");
let producto4 =  prompt("Ingrese un producto");

if((producto1 !="") && (producto2 !="") && (producto3 !="") && (producto4 != "")){
    alert("1-"+producto1);
    alert("2-"+producto2);
    alert("3-"+producto3);
    alert("4-"+producto4);
}else{
    alert("Error: es necesario cargar todos los productos");
} */

//Unidad 3
//Actividad 1
/* let number = prompt("Cuantas veces quieres que se repita");
let text = prompt("Escriba lo que quiera repetir");

for (let i = 1;i<=number;i++){
    alert(text);
} */

//Actividad 2
/* let repeticiones = prompt("Digite un numero");

for (let i=1;i<=repeticiones;i++){
    alert("lado "+i);
    if(i===4){
        break;
    }
} */


//Actividad 3
/* let student="";
for (let i=1;i<=10;i++){
    student +=  prompt("Ingrese un estudiante")+"\n";
}
alert(student); */

//Actividad 4
/* let entrada    = prompt("INGRESAR NOMBRE");
let ingresados = '';
while (entrada != 'Voldemort') {
    ingresados += entrada +"\n";
    entrada     = prompt("INGRESAR NOMBRE");
}
alert(ingresados); */


//Actividad 5

/* while(opcion != "ESC"){
    let opcion = prompt("Ingrese un numero");
    switch(number){
        case "1": alert ("Tomate");
        break;
        case "2": alert ("Papa");
        break;
        case "3": alert ("Carne");
        break;
        case "4":alert ("Pollo");
        break;
        default: alert("ERROR");
        break;
    }
    opcion = prompt("Ingrese un numero");
}
 */

//Unidad 4
//Actividad 1

/* function entrada(){
    return prompt("Ingrese su usuario");
}

function procesamiento(valor){
    return "Hola " + valor;
}

function salida(valor){
    alert(valor);
}

salida(procesamiento(entrada())); */

//Actividad 2

/* function redondear(valor){
    Math.round(valor);
}

for(let i=0;i<=5;i++){
    let number = prompt("Digite un valor");
    alert(redondear(number));
}
 */

//Actividad 3

/* function impuesto(precio,porcentaje){
    return precio * (1+ porcentaje / 100); 
}

for(let i=0;i<=5;i++){
    let resultado = impuesto(prompt("Digite un precio"),prompt("Digite el porcentaje del impuesto"));
    alert(resultado);
} */

//Actividad 4

/* const valorDolar = 300;

function cotizarDolar(pesos){
    dolares = pesos / valorDolar;
    alert("Serian " + dolares + " dolares");
}

function cotizarPesos(dolares){
    pesos = dolares * valorDolar;
    alert("Son " + pesos + " pesos");
}

cotizarDolar(parseInt(prompt("Digite la cantidad de pesos que tiene")));
cotizarPesos(parseInt(prompt("Digite la canitidad de dolares que tiene"))); */

//Actividad 5

/* function validacion(cadena){
    return cadena != '';
}
let entrada =  prompt("INGRESAR CADENA");
while (entrada != 'ESC') {
    alert(validacion(entrada));
    entrada = prompt("INGRESAR CADENA");
} */

//Unidad 5
//Actividad 1

/* class Tienda{
    constructor(nombre,direccion,propietario,rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto(hora){
        if((hora>=8) && (hora<=12) || (hora>=15) && (hora<=19)){
            return true;
        }else{
            return false;
        }
    }
    esPropietario(nombre){
        if(nombre == this.propietario){
            return true;
        }else{
            return false;
        }
    }
}

let tiendaJuguetes = new Tienda("Pepelopo","Berutti 1255","Ramon","Jugueteria");
 */

//Actividad 2

/* let ingresados = '';
for(let i=0;i<=5;i++){
    let tienda = new Tienda(prompt("NOMBRE"),
                            prompt("DIRECCION"),
                            prompt("PROPIETARIOS"),
                            prompt("RUBRO"));
    ingresados += "Tienda: " + tienda.nombre + " " +
                "Direccion: "+ tienda.direccion + " " +
                "Propietarios: " + tienda.propietario + " " +
                "Rubro: " + tienda.rubro + "\n";
}
alert(ingresados); */

//Actividad 3

/* for(let i=0;i<3;i++){
    let entrada = parseInt(prompt("A que hora quiere ir a la tienda"));
    if(tiendaJuguetes.estaAbierto(entrada)){
        alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
    }else{
        alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
    }
} */

//ACtividad 4

/* for(let i=0;i<5;i++){
    let entrada = prompt("Ingrese su nombre");
    if(tiendaJuguetes.esPropietario(entrada)){
        alert("ES PROPIETARIO");
    }else{
        alert("NO ES PROPIETARIO");
    }
} */

//Actividad 5

/* class Cliente{
    constructor(nombre,presupuesto,tarjetaDescuento,telefono){
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.tarjetaDescuento = tarjetaDescuento;
        this.telefono = telefono;
    }
    transferirDinero(valor){
        if(this.presupuesto >= valor){
            return true;
        }else{
            return false;
        }
    }
}

const cliente1 = new Cliente("Homero", 2000, true, "1234560");
const cliente2 = new Cliente("Carlos", "1000", false, "21234560");
const cliente3 = new Cliente("Barny", "50", false, "231234560");

for(let i=0;i<5;i++){
    let entrada = parseInt(prompt("Ingrese el valor "));
    if (cliente1.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente2.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente3.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+entrada);
    }
} */

//Unidad 6
//Actividad 1

/* const equipo = ["Guillermo","Florencia","Morcilla","Milo"];

for (let i=0;i<equipo.length;i++){
    alert("El integrante numero " + i + " es " + equipo[i]);
} */

//Actividad 2

/* const equipo = [];

let entrada = prompt("Ingrese un integrante del equipo");
while(entrada !== "ESC"){
    equipo.push(entrada);
    entrada = prompt("Ingrese un integrante del equipo");
}

for (let i=0;i<equipo.length;i++){
    alert("El integrante numero " + i + " es " + equipo[i]);
} */

//Actividad 3

/* class Jugador{
    constructor(nombre,nCamiseta,edad,lesionado){
        this.nombre = nombre;
        this.nCamiseta = nCamiseta;
        this.edad = edad;
        this.lesionado = lesionado;
    }
}

const roberto = new Jugador ("Roberto",25,18,false);
const jona = new Jugador ("Jonathan",36,09,false);
const guillermo = new Jugador ("Guillermo",32,36,true);
const jorge = new Jugador("Jorge",14,30,false);
const raul = new Jugador("Raul",74,25,false);

const equipo = [];

equipo.push(roberto);
equipo.push(jona);
equipo.push(guillermo);
equipo.push(jorge);
equipo.push(raul);

console.log(equipo); */

//Actividad 4
/* 
    let buscarJugador = (equipo,entrada) =>{

    /* let buscarJugador = (equipo,entrada) =>{
        let busqueda = equipo.find(jugador => jugador.nombre === entrada);
        if(busqueda === undefined){
            alert("No existe el jugador");
        }
        else{
            alert(busqueda.nombre + " tiene " + busqueda.edad + " a??os " + ", su camiseta es la " + busqueda.nCamiseta);
        }
} */

/* buscarJugador(equipo,prompt("Escribe el jugador que deseas buscar")); */

//Actividad 5

/* 
let filtroJugadores = (equipo,entrada)=>{
/* let filtroJugadores = (equipo,entrada)=>{
    let filtro = equipo.filter(jugador=>jugador.edad === entrada);
    if(filtro === undefined){
        alert("No hay jugador con esa edad");
    }else{
        console.log(filtro);
    }
}

filtroJugadores(equipo,parseInt(prompt("Digite una edad "))); */

//Unidad 8
//Actividad 1

/* let div = document.getElementById("div");

const ciudades = ["Buenos Aires","New York","Londres","Barcelona"];

for(const ciudad of ciudades){
let div = document.getElementById("div")

/*let ciudades = ["Esperanza","Santa Fe","Carlos Pellegrini","Maria Juana"];

for (const ciudad of ciudades){

    let h2 = document.createElement('h2');
    h2.innerHTML = ciudad;
    document.body.appendChild(h2);
} */

//Actividad 2

/* const tareas = []; 

for(let i=0;i<5;i++){
    let tarea = prompt("Digite una tarea");
    tareas.push(tarea);
}

let ul = document.createElement('ul');
let inner ='';
for (const tarea of tareas){
    inner += `<li>${tarea}</li>`;
}
ul.innerHTML = inner;
document.body.appendChild(ul); */

//Actividad 3

//Declarar un array de pa??ses -- check
//crear una etiqueta select.  -- check
//Por cada pa??s concatenar una etiqueta option a una template de caracteres, asignando el resultado al interior de la etiqueta padre. //
//El value de cada opci??n es la posici??n de la ciudad en la colecci??n. Por ??ltimo, agregar el select al body.

/* let paises = ["Argentina","Brasil","Chile","Uruguay"];

let select = document.createElement('select');

for (let index = 0;index < paises.length; index++){
    select.innerHTML += `<option value='${index}'>${paises[index]}</option>`;
}

document.body.appendChild(select); */

//Actividad 4 - Actividad 5

/* class Cantante { //creo clase cantante
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}

//Instacio 5 cantantes 
const roberto = new Cantante("Roberto", 1);
const guillermo = new Cantante("Guillermo", 2);
const florencia = new Cantante("Florencia", 3);
const elisa = new Cantante("Elisa", 4);
const carolina = new Cantante("Carolina", 5);

//creo array banda
const banda = [];

//Agrego al array los cantantes
banda.push(roberto);
banda.push(guillermo);
banda.push(florencia);
banda.push(elisa);
banda.push(carolina);

for (const cantante of banda) {
    let div = document.createElement('div');
    div.innerHTML = `<h2>${cantante.nombre}</h2>
    <button id='${cantante.id}'>Contratar</button>
    <hr>`;
    document.body.appendChild(div);
} */

//Unidad 9
//Actividad 1 

/* let div = document.createElement('div');
div.innerHTML = `
                <button id='btnNucleo'>Destruccion</button>
                `;

document.body.appendChild(div);

let botonNucleo = document.getElementById('btnNucleo');

botonNucleo.addEventListener("click",()=>{
    console.log("Hice click");
}) */

//Actividad 2

/* const asignaturas = ["Matematica","Geometria","Lengua","Ciencias Sociales"];

let select = document.createElement('select');

for(let index =0;index<asignaturas.length;index++){
    select.innerHTML += `
                        <option value='${index}'>${asignaturas[index]}</option>
                        `
}

document.body.appendChild(select);

let div = document.createElement('div');

select.addEventListener("change",function(e){
    div.innerHTML = asignaturas[e.target.value];
    document.body.appendChild(div); 
}) */

//Actividad 3
/* class Estudiante{
    constructor(nombre,apellido,email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

const estudiantes = [];

let divFormulario = document.createElement('div');

divFormulario.innerHTML += `
                            <form id="formulario">
                                <input type="text" name="nombre">Nombre</input>
                                <input type="text" name="apellido">Apellido</input>
                                <input type="e-mail" name="e-mail">E-mail</input>
                                <button type="submit" value="Ingresar">Ingresar</button>
                            </form>
                        `

document.body.appendChild(divFormulario);

let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit",validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    const inputs = e.target.children;
    console.log("Formulario Enviado");
    miFormulario = e.target;
    estudiantes.push(new Estudiante({ nombre: inputs[0].value, apellido: inputs[1].value, email: inputs[2].value }));
    document.body.append('Alumno registrado');
}
 */




