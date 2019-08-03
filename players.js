//DECLARED VARIABLES//
var addButton = document.getElementById('buttonAdd');
var playerAdded = document.getElementById('playerAdded');
var players_area = document.getElementById('players_area');
var player1 = document.getElementById('player1');

var result = document.getElementById('result');
var yourTurn = document.getElementById('yourTurn');
var player2turn = document.getElementById('player2Turn');

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
                    +       '<td id=\'result1\'>24</td>'
                    +       '<td id=\'result2\'>24</td>'
                    +   '</tr>'
                    +'</table>'
                    +'<button style=\'width:10%;margin-left:45%\' onclick=\'optionChosen(this);\'>Start</button>';
    document.getElementById('td_player1').innerHTML=player1.value;
    player1.value='';

    if(player2.value!='') document.getElementById('td_player2').innerHTML=player2.value; 
    else document.getElementById('td_player2').innerHTML='COMPUTER';
}

//add cell's background of color chosen by the player// 
function optionChosen(button){
   
    var colorChoice = document.getElementById('colorChoice');
    var colorChoice2 = document.getElementById('colorChoice2');
    var index = colorChoice.selectedIndex;
    var index2 = colorChoice2.selectedIndex;
    var choice = colorChoice[index].value;
    var choice2 = colorChoice2[index2].value;
    
    
    if(choice==choice2) alert('You can not choose one color for two players.');     //if two reds or two yellows are indicated, show an alert
    else{                                                                           //else the game starts
        switch(choice)
        {
            case 'Red':     
                    document.getElementById('td_player1').style.backgroundColor='red';
                    document.getElementById('td_player2').style.backgroundColor='yellow';
                    break;
            case 'Yellow':  
                    document.getElementById('td_player1').style.backgroundColor='yellow';
                    document.getElementById('td_player2').style.backgroundColor='red';
                    break;
        }
        colorChoice.style.display='none';   //hide both selects//
        colorChoice2.style.display='none';
        button.style.display='none';        //hide Start button
        startGame();
        chrono();
    }
}

function yellowClicked(){
    document.getElementById('result2').innerHTML-=1;
}

function redClicked(){
    document.getElementById('result1').innerHTML-=1;
}

//add a 30 seconds clock to show time remaining//
var time = 31;
function chrono(){ 
    time--;
    console.log(time);
    if(time==0) time=31;
    setTimeout("chrono()",1000);
}


//GAME'S MOTOR//
function startGame(){
    var audio = new Audio('sound.mp3'); 
    document.getElementById('avalam').style.display='block';    //make avalam support visible

    if(yourTurn.style.display == 'block'){      //if the first player turn picture is displayed
        audio.play();                           
        yourTurn.style.display='none';
        player2turn.style.display='block';
    } 
    else{                                       //if the second player turn picture is displayed
        audio.play();
        yourTurn.style.display='block';         //yourTurn picture is displayed
        player2turn.style.display='none';
    } 
    
    $(document).on("click",".jaune",function() {   
        yellowClicked();
    });
    $(document).on("click",".rouge",function() {   
        redClicked();
    });
    setTimeout("startGame()",30000);
}




