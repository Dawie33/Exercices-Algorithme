

function factoriser(num) {

    for (i=1; num > 1; num--){

        i= num * i
        
    }

    return i
}

console.log(factoriser(3));

// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va factoriser le nombre qu'on
// lui passe en argument.
