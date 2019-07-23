//DECLARED VARIABLES//
var playerAdded = document.getElementById('playerAdded');

//#playerAdded EMPTY//
playerAdded.innerHTML='';


//add a player in #playerAdded//
function addPlayer(){
    playerAdded.innerHTML+='<input type=\'text\'/ ><br />';
}

function confirmPlayer(){
    playerAdded.innerHTML='';
}
