function finSimilaire(str, fin) {


    const finDuMot =str.slice(-fin.length)
    if(finDuMot === fin) {
        return "La fin est similaire"
    } else {
        return "La fin ne correspond pas"
    }
}

console.log(finSimilaire("ours", "rs"));



// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui vous informe si les lettres(second arguments),
// correspondent à la fin du mot(premier argument).
// Si elles correspondent, retournez "La fin est similaire"
// Sinon "La fin ne correspond pas".

