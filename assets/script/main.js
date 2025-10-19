let numeriDaIndovinare = [];
let timerId;

function generaNumeriCasuali() {
    numeriDaIndovinare = [];
    for (let contatore = 0; contatore < 100 && numeriDaIndovinare.length < 5; contatore++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        let trovato = false;
        for (let i = 0; i < numeriDaIndovinare.length; i++) {
            if (numeriDaIndovinare[i] === numero) {
                trovato = true;
            }
        }

        if (trovato === false) {
            numeriDaIndovinare.push(numero);
        }
    }
}

function avviaTimer(durataInSecondi) {
    let tempoRimanente = durataInSecondi;
    let messaggiElement = document.getElementById('messaggi');
    messaggiElement.innerHTML = 'Tempo rimanente: ' + tempoRimanente + ' secondi';
}