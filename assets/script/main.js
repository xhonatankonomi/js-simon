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

    timerId = setInterval(function() {
        tempoRimanente = tempoRimanente - 1;
        messaggiElement.innerHTML = 'Tempo rimanente: ' + tempoRimanente + ' secondi';
        
        if (tempoRimanente <= 0) {
            clearInterval(timerId);
            passaAllaFaseInput();
        }
    }, 1000);
}

function validaInput(inputElement) {
    let valore = inputElement.value.trim();
    let numero = parseInt(valore);
    let isNumeroValido = !isNaN(numero) && valore !== '' && numero > 0 && numero <= 100 && valore === numero.toString();

    let isDuplicato = false;
    if (isNumeroValido) {
        let inputs = document.querySelectorAll('.input-numero');
        inputs.forEach(function(altroInput) {
            if (altroInput !== inputElement && altroInput.value === valore) {
                isDuplicato = true;
            }
        });
    }

    if (!isNumeroValido || isDuplicato) {
        inputElement.classList.add('errore-input');
    } else {
        inputElement.classList.remove('errore-input');
    }
    
    aggiornaStatoPulsante();
}

function aggiornaStatoPulsante() {

}

function calcolaRisultato() {

}

function passaAllaFaseInput() {

}