/**
 * Utiliser le tableau suivant
 */
const visiteurs = [
  ['Gérard', 'Freschi', 'gfreschi0@discuz.net'],
  ['Bendicty', 'Foster-Smith', 'bfostersmith1@mysql.com'],
  ['Michelle', 'Draude', 'mdraude2@csmonitor.com'],
  ['Cathee', 'Meineck', 'cmeineck3@t-online.de'],
  ['Marianna', 'Coal', 'mcoal4@creativecommons.org'],
];

/**
 * 1. Vérifier si le nom de famille "Meineck" existe dans le tableau. Afficher un message en conséquence.
 */
 
// solution 1

 for (let i = 0; i < visiteurs.length; i++) {
  
  // console.log (visiteurs[index]);
  
   for(let j = 0; j < visiteurs[j].length; j++){
//console.log(visiteurs[i][j]);

  if(visiteurs[i][j] === 'Meineck' ){
console.log("Heya there , whatsup?");
break;
  }
  else {
    console.log("I dont know you");
  }

   }
  };

// solution 2
// includes() permet de verifier si une valeur est presents
//Dans le tableau

visiteurs.forEach(visiteur => {

  if(visiteur.includes('Meineck')){
console.log("Heya");
  }
});


/**
 * 2. Trier le tableau par ordre alphabétique selon les prénoms.
 */

visiteurs.sort();
console.log(visiteurs);


/**
 * 3. Créer un tableau contenant que les adresses e-mails en utilisant l'instruction map().
 */

const emails = visiteurs.map(visiteur =>{
  return visiteur[2]
});
console.log(emails);