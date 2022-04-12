const userEmail = prompt('inserisci la tua mail');
const validEmails = ['bill@microsoft.com','silvio@forzaitalia.it','joe@joebiden.com'];

userIsAllowed = false;

for (let i = 0; i < validEmails.length; i++) {
    if (userEmail === validEmails[i]) {
        userIsAllowed = true;
    }
}

if (userIsAllowed) {
    alert('Benvenuto a bordo.');
}
else {
    alert('non ti conosco, vai via.')
}