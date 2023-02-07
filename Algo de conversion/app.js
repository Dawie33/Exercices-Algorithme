


function conversion (degCel)  {

    const conversFar = (degCel * (9/5) + 32)

    
    if(typeof degCel === 'number'){
        return conversFar;
    } else {
        return "Données non correctes."
    }


}

console.log(conversion(5));



// ----------------- ÉNONCÉ -----------------

// Créer un algorithme qui sert à convertir des degrés Celsius
// en degrés Fahrenheit.
// Le résultat doit être de type nombre.
// Si on donne un autre type qu'un nombre en argument, vous
// devez retourner "Données en entrée non correctes."
// Bonne Chance !

