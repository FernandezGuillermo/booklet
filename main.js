//Unidad 1
//Actividad 1

let name = "Guillermo";
let surname = "Fernandez";
let age = "36";
console.log(name);
console.log(surname);
console.log(age);

//Actividad 2
const ARGENTINA = "Argentina";
const BRASIL = "Brasil";
const ESTADOS_UNIDOS = "Estados Unidos";
const CHILE = "Chile";
const PERU = "Peru";

//Actividad 3

let nameId =  "Guillermo";
let surnameId = "Fernandez";
let countryId = "Argentina";

let Id = "Name: " + nameId + " Surname: " + surnameId + " Country: " + countryId; 
console.log(Id);

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


while(opcion != "ESC"){
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


