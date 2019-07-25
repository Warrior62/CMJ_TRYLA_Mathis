//DECLARED VARIABLES//
var playerAdded = document.getElementById('playerAdded');
var players_area = document.getElementById('players_area');
var player1 = document.getElementById('player1');
var result = document.getElementById('result');
var yourTurn = document.getElementById('yourTurn');

//#playerAdded EMPTY//
playerAdded.innerHTML='';


//add a player in #playerAdded//
function addPlayer(){
    playerAdded.innerHTML+='<input type=\'text\'/ ><br />';
}

function confirmPlayer(){
    playerAdded.innerHTML='';
    players_area.style.display='none';
    result.innerHTML='<table>'
                    +   '<thead>'
                    +       '<tr>'
                    +           '<th colspan=\'2\'>Results</th>'
                    +       '</tr>'
                    +   '</thead>'
                    +   '<tr>'
                    +       '<td style=\'width:50%\'>'
                    +           '<div id=\'td_player1\'></div>'
                    +           '<select id=\'colorChoice\'>'
                    +               '<option>Red</option>'
                    +               '<option>Yellow</option>'
                    +           '</select>'
                    +       '</td>'
                    +       '<td id=\'computer\'>Computer</td>'
                    +   '</tr>'
                    +   '<tr>'
                    +       '<td>24</td>'
                    +       '<td>24</td>'
                    +   '</tr>'
                    +'</table>'
                    +'<button style=\'width:10%;margin-left:45%\' onclick=\'hideButton(this);optionChosen();startGame()\'>Start</button>';
    document.getElementById('td_player1').innerHTML=player1.value;
    player1.value='';
}

function optionChosen(){
    var colorChoice = document.getElementById('colorChoice');
    var index = colorChoice.selectedIndex;
    var choice = colorChoice[index].value;
    
    colorChoice.style.display='none';
    switch(choice)
    {
        case 'Red':     
                document.getElementById('td_player1').style.backgroundColor='red';
                document.getElementById('computer').style.backgroundColor='yellow';
                break;
        case 'Yellow':  
                document.getElementById('td_player1').style.backgroundColor='yellow';
                document.getElementById('computer').style.backgroundColor='red';
                break;
    }
}

function hideButton(button){
    button.style.display='none';
}


//GAME'S MOTOR//
function startGame(){
    yourTurn.style.display='block';
}
