
// méthode avec boucle for
function trouverLongueurMax(str){

   let array= str.split(' ');
   let longMax= 0 ;
   
   for (i=0; i< array.length; i++){

        if(array[i].length>longMax){
            longMax=array[i].length;
        }
   }
   return longMax
}

console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));



// méthode avec callback
// function trouverLongueurMax(str){

//     let array = str.split(' ')
//     return array.reduce(function(x,y){
//         return Math.max(x, y.length)
//     },0)
//  }

// console.log(trouverLongueurMax("Du sublime au ridicule il n'y a qu'un pas."));



// ----------------- ÉNONCÉ -----------------

// Trouve la longueur du mot le plus longs dans une phrase et retourne la.

