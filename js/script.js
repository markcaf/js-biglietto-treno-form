// Creo una variabile costante per il pulsante di invio
// Creo due variabili let per la distanza in km e l'età
const calcButton = document.querySelector("#calc-button");

// All'evento del click sul pulsante
calcButton.addEventListener("click", function()
    {
        // Catturo i dati inseriti
        console.log("Nome passeggero: " + document.getElementById("user-name").value);
        const userName = document.getElementById("user-name").value;
        document.querySelector(".user-name-output").innerHTML += userName;
        
        console.log("Km da percorrere: " + document.getElementById("user-distance").value);
        const userDistance = parseInt(document.getElementById("user-distance").value);
        document.querySelector(".user-distance-output").innerHTML += userDistance +"km";

        console.log("Età utente: " + document.getElementById("user-age").value);
        const userAge = parseInt(document.getElementById("user-age").value);
        document.querySelector(".user-age-output").innerHTML += userAge + " anni";

        //Calcolo del prezzo del biglietto in base ai km
        let ticketPrice = 0.26 * userDistance;

        //Sconti: 15% minorenne e 35% over 65
        if (userAge < 18){
            ticketPrice = ticketPrice - (ticketPrice * 15) / 100;
            console.log("Sconto 15% per minorenni");
            document.querySelector(".type-of-sale").innerHTML = "15% per minorenni";
        }   else if (userAge >= 65){
                ticketPrice = ticketPrice - (ticketPrice * 35) / 100;
                console.log("Sconto 35% per over65");
                document.querySelector(".type-of-sale").innerHTML = "35% per over65";
            }
        ticketPrice = ticketPrice.toFixed(2);
        console.log("Prezzo finale: €" + ticketPrice);
        document.querySelector(".ticket-price").innerHTML += "€" + ticketPrice;
    }
)