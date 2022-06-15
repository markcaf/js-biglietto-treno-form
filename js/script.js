// Creo una variabile costante per il pulsante di invio
// Creo due variabili let per la distanza in km e l'età
const calcButton = document.querySelector("#calc-button");

// All'evento del click sul pulsante
calcButton.addEventListener("click", function()
    {
        // Catturo i dati inseriti
        console.log("Km da percorrere: " + document.getElementById("user-distance").value);
        const userDistance = parseInt(document.getElementById("user-distance").value);
        console.log("variabile userDistance creata: " + userDistance + "km");

        console.log("Età utente: " + document.getElementById("user-age").value);
        const userAge = parseInt(document.getElementById("user-age").value);
        console.log("variabile userAge creata: " + userAge + " anni");

        //Calcolo del prezzo del biglietto in base ai km
    }
)