//DECLARED VARIABLES//
var playerAdded = document.getElementById('playerAdded');
var i=1;

//#playerAdded EMPTY//
playerAdded.innerHTML='';


//add a player in #playerAdded//
function addPlayer(){
    i++;
    playerAdded.innerHTML+='<label for=\'player'+i+'\'>'+'Player°'+i+':'+'</label>'+'<input type=\'text\' id=\'player'+i+'\'/ >'+'<br />';
}

function confirmPlayer(){
    i=1;
    playerAdded.innerHTML='';
}
