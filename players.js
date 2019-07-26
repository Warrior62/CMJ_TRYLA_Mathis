//DECLARED VARIABLES//
var addButton = document.getElementById('buttonAdd');
var playerAdded = document.getElementById('playerAdded');
var players_area = document.getElementById('players_area');
var player1 = document.getElementById('player1');

var result = document.getElementById('result');
var yourTurn = document.getElementById('yourTurn');
var computerTurn = document.getElementById('computerTurn');

//#playerAdded EMPTY//
playerAdded.innerHTML='';


//add a player in #playerAdded//
function addPlayer(){
    playerAdded.innerHTML+='<input type=\'text\' id=\'player2\'/ ><br />';
    addButton.style.display='none';
}

//display results area//
function confirmPlayer(){
    
    var player2 = document.getElementById('player2');
        
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
                    +       '<td>'
                    +           '<div id=\'td_player2\'>COMPUTER</div>'
                    +           '<select id=\'colorChoice2\'>'
                    +               '<option>Red</option>'
                    +               '<option>Yellow</option>'
                    +           '</select>'
                    +       '</td>'
                    +   '</tr>'
                    +   '<tr>'
                    +       '<td>24</td>'
                    +       '<td>24</td>'
                    +   '</tr>'
                    +'</table>'
                    +'<button style=\'width:10%;margin-left:45%\' onclick=\'hideButton(this);optionChosen();startGame();displayYourTurn()\'>Start</button>';
    document.getElementById('td_player1').innerHTML=player1.value;
    player1.value='';

    if(player2.value!='') document.getElementById('td_player2').innerHTML=player2.value; 
    else document.getElementById('td_player2').innerHTML='COMPUTER';
}

//add cell's background of color chosen by the player// 
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

//hide Start button//
function hideButton(button){
    button.style.display='none';
}

function displayYourTurn(){
    yourTurn.style.display='block';
}

//GAME'S MOTOR//
function startGame(){
    var audio = new Audio('sound.mp3'); 

    if(yourTurn.style.display == 'block'){
        audio.play();
        yourTurn.style.display='none';
        computerTurn.style.display='block';
    } 
    else{ 
        audio.play();
        yourTurn.style.display='block';
        computerTurn.style.display='none';
    } 

    setTimeout("startGame()",30000);
}

