log("Bienvenue sur morpion war");

//PSEUDO CODE
/*********************************************************************
 * DONNEES
 * Player : String username Number index String className
 * Game : Number turnCount Data [[][][]] Players [] 
 * 
 * FONCTIONS
 * 
 * checkVictory() return le joueur gagnant
 * --variable won avec le className si il y a un gagnant
 * --vérifie à chaque tour de jeu
 * 
 * play(event)
 * --trouver la cellule cell
 * --identifier le joueur
 * --ajouter le symbole à la case
 * 
 * 
 * 
 * 
*********************************************************************/


//fonction d'envoi des logs
function log(e) {
  console.log(e);
}

let table = document.getElementsByClassName('morpion')[0];

//Utilisation d'une IIFE (Immediately invoked function expression)
//---anonyme et immédiatement éxécutée
(function () {
  //-------------POINT SUR LE JSON et PSEUDO CLASS-------------
  //creation d'une pseudo class pour créer des joueurs
  //---on peut passer une fonction et l'attribuer à une variable
  //---fonction de haut ordre : fonction qui manipule des fonctions

  let Player = function (username, className, ) {
    this.username = username;
    this.className = className;

    //attention différent du JAVA pas obligatoire car existence
    //de la valeur undefined
    this.index = null;
    this.getName = function () {
      return this.username;
    };
  };

  let Game = function () {

    this.turnCount = 0;
    //
    this.players = [
      new Player('Joueur 1', 'croix'),
      new Player('Joueur 2', 'cercle')
    ];
    //données de ce qui a été joué
    this.data = [
      [], [], []
    ];
    //permet de vérifier si le jeu est en cours
    this.playing = false;
    this.initialize = function () {
      //récupérer chaque TD de la table et associer
      //la fonction play

      let cell = document.getElementsByTagName("td");
      log(cell);
    }

  };

  //variable globale
  window.morpionwar = new Game();

  //------------------------------------------------------


})();



//-----------OLD VERSION DEPRECIATED---------------
// let joueur = 1;
// let tour = 0;

// table.addEventListener('click', function (event) {

//   if (event.target.localName != "div" && tour < 10) {
//     //modulo pour vérifier 
//     if (joueur % 2 == 1) {

//       //event.target.id = "red";
//       let croix = document.createElement('div');
//       croix.append("X");
//       croix.className = "croix";
//       event.target.append(croix);
//       joueur++;
//       tour++;

//     } else {

//       let cercle = document.createElement('div');
//       cercle.className = "cercle";
//       event.target.append(cercle);
//       joueur++;
//       tour++;

//     }
//   } else {
//     if (tour >= 9) {

//       alert("EGALITE");

//     } else {

//       alert("case déjà prise");

//     }
//   }

// });

