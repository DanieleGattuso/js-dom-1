


// selezione degli elementi

const bottone = document.querySelector('.button');

console.log(bottone);

// Gestiamo l'evento

bottone.addEventListener('click', function(){
// Vogliamo accendewre la lampadina cambaindo immagine con una funzione
const cambiareImmagine = document.getElementById("immagine1")

cambiareImmagine.src = "./img/yellow_lamp.png"
console.log(cambiareImmagine);

})