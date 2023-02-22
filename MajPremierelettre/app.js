function maj(str) {
    //  je vais tout mettre en minuscule pour partir de zéro. ensuite je créé mon tableau.
   let array=str.toLowerCase().split(' ')

//    je boucle sur la valeur de départ de mon tableau et je remplace la 1ère lettre en minuscule par une majuscule
    let resultat= array.map(function(valDeBase){
        return valDeBase.replace(valDeBase.charAt(0), valDeBase.charAt(0).toUpperCase())
    });
// j'utilise join pour former une chaine de caractère
  return resultat.join(' ')
}

console.log(maj("Les sanglots longs des violons de l'automne..."));


// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui prends une phrase en argument et qui retourne cette meme
// phrase avec la premiere lettre de chaque mots en Majuscule.

