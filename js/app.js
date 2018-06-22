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


//fonction racourci des logs
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

    //Function Play
    this.play = function () {
      //récupère la cellule
      let cell = event.target;
      log('lets play');

      //selectionner le joueur qui joue
      let tour = morpionwar.turnCount;
      log(tour);
      //récupérer le className du joueur courant
      let joueur = morpionwar.players[(tour%2)];
      let token = joueur.className;

      //ajouter le className à la cellule
      let elmt = document.createElement('div');
      elmt.className = token;
      cell.append(elmt);
      log(token);

      //remplir data
      //---recup ligne et colonne à partir des class CSS
      //---split class CSS et recup de l'indice de colonne sur TD
      let colonne = cell.className.split("-");
      let indexColonne= colonne[1];

      //---split class CSS et recup de l'indice de colonne sur TR
      let ligne = cell.parentElement.className.split("-");
      let indexLigne = ligne[1];
      
      morpionwar.data[indexLigne][indexColonne]=token;
      log(morpionwar.data);

      //vérifier les conditions de victoire
      let result = morpionwar.checkVictory();
      log(result);
      log(morpionwar.players[0]);
      //Condition sur result pour continuer le jeu
      if(result == morpionwar.players[0] || result == morpionwar.players[1] || tour == 8){
        log("fin de la partie");

      }else{
        //incrémente le nombre de tour
        morpionwar.turnCount++;
        log(tour);
        //retirer listener
        cell.removeEventListener('click', morpionwar.play);
      }
    }
  
    //FUNCTION checkVictory
    this.checkVictory = function () {
      let won = null;

      if(morpionwar.data[0][0]!=null && morpionwar.data[0][0] == morpionwar.data[0][1] && morpionwar.data[0][0] == morpionwar.data[0][2]){
        won = morpionwar.data[0][0];
      }
      if(morpionwar.data[1][0]!=null && morpionwar.data[1][0] == morpionwar.data[1][1] && morpionwar.data[1][0] == morpionwar.data[1][2]){
        won = morpionwar.data[1][0];
      }
      if(morpionwar.data[2][0]!=null && morpionwar.data[2][0] == morpionwar.data[2][1] && morpionwar.data[2][0] == morpionwar.data[2][2]){
        won = morpionwar.data[2][0];
      }
      if(morpionwar.data[0][0]!=null && morpionwar.data[0][0] == morpionwar.data[1][0] && morpionwar.data[0][0] == morpionwar.data[2][0]){
        won = morpionwar.data[0][0];
      }
      if(morpionwar.data[0][1]!=null && morpionwar.data[0][1] == morpionwar.data[1][1] && morpionwar.data[0][1] == morpionwar.data[2][1]){
        won = morpionwar.data[0][1];
      }
      if(morpionwar.data[0][2]!=null && morpionwar.data[0][2] == morpionwar.data[1][2] && morpionwar.data[0][2] == morpionwar.data[2][2]){
        won = morpionwar.data[0][2];
      }
      if(morpionwar.data[0][0]!=null && morpionwar.data[0][0] == morpionwar.data[1][1] && morpionwar.data[0][0] == morpionwar.data[2][2]){
        won = morpionwar.data[0][0];
      }
      if(morpionwar.data[0][2]!=null && morpionwar.data[0][2] == morpionwar.data[1][1] && morpionwar.data[0][2] == morpionwar.data[2][0]){
        won = morpionwar.data[0][2];
      }
      
      if(won!=null){
        if(won==morpionwar.players[0].className){
          alert("player1 gagne");
          return morpionwar.players[0]
        }
        if(won==morpionwar.players[1].className){
          alert("player2 gagne");
          return morpionwar.players[1]
        }
      }
      //retourne une variable result ou avec un joueur ou null
      return won;
    }
    //FUNCTION stopGame
    this.stopGame = function () {
      log("Bien joué joueur");
      //remove listener sur toutes les cellules de la grille
      //---cas des parties gagnées sans grille pleine
      cells.forEach((cell, index, list)=>{
        cell.removeEventListener('click', morpionwar.play)
      });

      //
    }


    this.initialize = function () {
      //récupérer tous les TD dans un tableau
      let cells = document.querySelectorAll('table.morpion td');

      //forEach dispo sur tous les tableaux JS
      cells.forEach((cell, index, list) => {
        log(cell, index, list);
        // cell.addEventListener('click', play);
        cell.addEventListener('click', this.play);
        // cell.addEventListener('click', play());

      });

    }


  }; //END OF GAME FUNCTION

  //variable globale
  window.morpionwar = new Game();

  //------------------------------------------------------


})();//END of ANONYM FNCTION



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

