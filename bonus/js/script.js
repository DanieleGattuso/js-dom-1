


// selezione degli elementi

const bottone = document.querySelector('.button');



// Gestiamo l'evento

bottone.addEventListener('click', function(){
// Vogliamo accendewre la lampadina cambaindo immagine con una funzione
const cambiareImmagine = document.getElementById("immagine1")


// Cambiamo src immagine
cambiareImmagine.src = "./img/yellow_lamp.png"



})