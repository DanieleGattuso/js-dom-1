


// selezione degli elementi

const bottone = document.querySelector('.button');

let isActive = false

// Gestiamo l'evento

bottone.addEventListener('click', function(){
// Vogliamo accendewre la lampadina cambaindo immagine con una funzione
const cambiareImmagine = document.getElementById("immagine1")

isActive = !isActive
// Cambiamo src immagine




if(isActive){

    cambiareImmagine.src = "./img/yellow_lamp.png"
    bottone.textContent = "Spenta"

}else{
    cambiareImmagine.src = "./img/white_lamp.png"
    bottone.textContent = "Accesa"

}
   


})