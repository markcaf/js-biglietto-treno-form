// Creo una variabile costante per il pulsante di invio
// Creo due variabili let per la distanza in km e l'età
const calcButton = document.querySelector("#calc-button");
let userDistance = "";
let userAge = "";

// Catturo i dati inseriti negli input all'evento del click sul pulsante
calcButton.addEventListener("click", function()
    {
        console.log("Km da percorrere: " + document.getElementById("user-distance").value);
        userDistance = document.getElementById("user-distance").value;
        userDistance = parseInt(userDistance);
        console.log("variabile userDistance aggiornata: " + userDistance);

        console.log("Età utente: " + document.getElementById("user-age").value);
        userAge = document.getElementById("user-age").value;
        userAge = parseInt(userAge);
        console.log("variabile userAge aggiornata: " + userAge);
    }
)