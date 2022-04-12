//generiamo 2 numeri casuali da 1 a 6 (uno per l'utente e uno per il pc)

let userDieRoll = Math.floor(Math.random() * 6) + 1;
let computerDieRoll = Math.floor(Math.random() * 6) + 1;

// inizializziamo la variabile con il risultato
let result = '';

//assegnamo il risultato confrontando i due valori
if (userDieRoll > computerDieRoll) {
    result = 'Hai vinto!';
} 
else if (userDieRoll < computerDieRoll) {
    result = 'Hai perso!';
} 
else {
    result = 'Pareggio!';
}


// comunichiamo il risultato nella console
console.log(`Tuo dado: ${userDieRoll}; Dado PC: ${computerDieRoll}`);
console.log(result);