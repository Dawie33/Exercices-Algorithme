// en utilisant la récursion

function factoriser(num) {
    if(num===0){
        return num=1;
    }

    return num * factoriser(num-1);
}

console.log(factoriser(5));

// en utilisant une boucle for
function factoriser(num) {

    for (i=1; num > 1; num--){

        i= num * i
        
    }

    return i
}

console.log(factoriser(5));

// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va factoriser le nombre qu'on
// lui passe en argument.
