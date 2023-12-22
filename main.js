//variabili
// let nomeUtente = prompt('Inserisci nome');
// let cognomeUtente = prompt('Inserisci cognome');
// let colorePreferito = prompt('Inserisci colore preferito');


// console.log(nomeUtente + cognomeUtente + colorePreferito);
// document.writeln('<p class="password">' + nomeUtente, cognomeUtente, colorePreferito + '</p>');


//FUNCTION TRY

let nomeUtente = document.getElementById("name");
let cognomeUtente = document.getElementById("surname");
let colorePreferito = document.getElementById("color");
let randomNumber = Math.floor(Math.random() * 100);


console.log(nomeUtente.value + cognomeUtente.value + colorePreferito.value + randomNumber);

function showInput() {
    document.getElementById("result").innerHTML = (nomeUtente.value + cognomeUtente.value + colorePreferito.value + randomNumber);
}

