function include(fileName){
      document.write("<script type='text/javascript' src='"+fileName+"'></script>" );
}
include('tools.js');

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


//display results table
function displayResults(){
    result.innerHTML='<table>'                                                        //results table is created and displayed
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
}


//add a player in #playerAdded//
function addPlayer(){
    
    if(player1.value=='') alert('You didn\'t indicate the player\'s name.');
    else{
        playerAdded.innerHTML+='<input type=\'text\' id=\'player2\'/ ><br />';
        hide(addButton);
    }
}


//display results area//
function confirmPlayer(){
    
    var player2 = document.getElementById('player2');

    
    if(player1.value=='') alert('You didn\'t indicate the player\'s name.');                            //if the first name isn't indicated
    else if(player1.value!='' || player1.value!=player2.value){                                         //if CORRECT
        playerAdded.innerHTML='';
        hide(players_area);
        displayResults();
        document.getElementById('td_player1').innerHTML=player1.value;
    
        if(player2.value!='') document.getElementById('td_player2').innerHTML=player2.value; 
        else document.getElementById('td_player2').innerHTML='COMPUTER';                                //if only one player's name is indicated,                                                                                                                       
    }                                                                                                   // so this one plays against the COMPUTER
   
}

//GAME'S MOTOR//
function startGame(){
    var audio = new Audio('sound.mp3'); 
    var cpt_color=detectCptColor();
    show(document.getElementById('avalam'));                            //make avalam support visible
    audio.play(); 
    
    onmouse('over','jaune');
    onmouse('over','rouge');
    onmouse('out','jaune');
    onmouse('out','rouge');
    
    if(yourTurn.style.display == 'none'){                               //if the first player turn picture is hidden                         
        hide(player2turn);
        show(yourTurn);
    } 
    else{                                                               //if the first player turn picture is displayed
        show(player2turn);                                              //yourTurn picture is hidden
        hide(yourTurn);
    } 
    setTimeout("startGame()",30000);
}


//add a 30 seconds clock to show time remaining//
var time = 31;
function chrono(){ 
    show(document.getElementById('clock'));
    time--;
    document.getElementById('clock').innerHTML=time;
    if(time==1) time=31;            //when time is over, clock restart for 30 seconds
    setTimeout("chrono()",1000);    //time decreases of 1 each second   
}


//add cell's background of color chosen by the player// 
function optionChosen(button){
    
    var colorChoice = document.getElementById('colorChoice');
    var colorChoice2 = document.getElementById('colorChoice2');
    var index = colorChoice.selectedIndex;
    var index2 = colorChoice2.selectedIndex;
    var choice = colorChoice[index].value;
    var choice2 = colorChoice2[index2].value;
    
    
    if(choice==choice2) alert('You can\'t choose the same color for both players.');     //if two reds or two yellows are indicated, show an alert
    else{                                                                                //else the game starts
        switch(choice)
        {
            case 'Red':     
                    colourBkg('td_player1','red');
                    colourBkg('td_player2','yellow');
                    break;
            case 'Yellow':  
                    colourBkg('td_player1','yellow');
                    colourBkg('td_player2','red');
                    break;
        }
        hide(colorChoice);                  //hide player1's select
        hide(colorChoice2);                 //hide player2's select
        hide(button);                       //hide Start button
        startGame();                        //Game Motor starts
        chrono();                           //a 30seconds chrono starts
    }
}







