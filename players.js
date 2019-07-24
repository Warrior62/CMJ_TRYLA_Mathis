//DECLARED VARIABLES//
var playerAdded = document.getElementById('playerAdded');
var result = document.getElementById('result');

//#playerAdded EMPTY//
playerAdded.innerHTML='';


//add a player in #playerAdded//
function addPlayer(){
    playerAdded.innerHTML+='<input type=\'text\'/ ><br />';
}

function confirmPlayer(){
    playerAdded.innerHTML='';
    result.innerHTML='<table>'
                    +   '<thead>'
                    +       '<tr>'
                    +           '<th colspan=\'2\'>Results</th>'
                    +       '</tr>'
                    +   '</thead>'
                    +   '<tr>'
                    +       '<td id=\'player1\'></td>'
                    +       '<td>Computer</td>'
                    +   '</tr>'
                    +   '<tr>'
                    +       '<td>24</td>'
                    +       '<td>24</td>'
                    +   '</tr>'
                    +'</table>';
}
