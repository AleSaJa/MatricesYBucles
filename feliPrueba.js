var carreritas = new Array("Lucía","Roberto","María","Jesús","Andrea","José");
var arrayTemp = new Array();
var aux = null;

//Primera Vuelta: Listado de los corredores

console.log("Primera Vuelta");

list(carreritas);

//Segunda Vuelta: Andrea adelanta a María

console.log("Segunda Vuelta: Andrea adelanta a María");

aux = carreritas.splice(carreritas.indexOf("Andrea"),1);

arrayTemp = carreritas.splice(carreritas.indexOf("María"));

carreritas.push(aux);

insertNewElements(arrayTemp);

list(carreritas);

//Tercera Vuelta: José es descalificado de la carrera

console.log("Tercera Vuelta: José es descalificado de la carrera");

carreritas.pop();

list(carreritas);

//Cuarta Vuelta: Se clasifican tres nuevos corredores

var newPlayers = new Array("Cristóbal","Fernanda","Armando");

console.log("Cuarta Vuelta: Se clasifican tres nuevos corredores");

arrayTemp = carreritas.splice(carreritas.indexOf("Lucía")+1);

insertNewElements(newPlayers);

insertNewElements(arrayTemp);

list(carreritas);

//Quinta Vuelta: Un nuevo Concursante toma el primer lugar

aux = "Feredico";

console.log("Quinta Vuelta: Un nuevo Concursante toma el primer lugar");

carreritas.unshift(aux);

list(carreritas);

function insertNewElements(array){
    for(element of array){
        carreritas.push(element);
    }
    //array.forEach(e => carreritas.push(e));
}

function list(array){
    array.forEach(function(e,i){
        console.log(`Posición: ${i+1}  Jugador: ${e}`);
    });
}

