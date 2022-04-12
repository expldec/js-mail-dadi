//dichiaro gli indirizzi email validi
const validEmails = ['bill@microsoft.com','silvio@forzaitalia.it','joe@joebiden.com'];
// chiedo all'utente il suo indirizzo email
const userEmail = prompt('inserisci la tua mail');
//dichiaro una variabile per determinare se l'utente "può accedere". Di default è false.
userIsAllowed = false;

//facciamo partire un loop che girerà tante volte quante sono le email nell'array delle email valide
for (let i = 0; i < validEmails.length; i++) {
    //se l'email dell'utente è tra quelle valide, allora può accedere.
    if (userEmail === validEmails[i]) {
        userIsAllowed = true;
    }
}

//con le informazioni ottenute nel loop, posso decidere se far entrare l'utente oppure dirgli di andare via.
if (userIsAllowed) {
    alert('Benvenuto a bordo.');
}
else {
    alert('non ti conosco, vai via.')
}