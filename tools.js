
//hide an element
function hide(element){
    element.style.display='none';
}

//show an element
function show(element){
    element.style.display='block';
}

//colour a background
function colourBkg(id,color){
    document.getElementById(id).style.backgroundColor=color;
}

//know if Game Motor has to be active
function isComputer(){
    var bkg2 = document.getElementById('td_player2');
    if(bkg2.innerHTML=='COMPUTER') return true;
    else return false;
}

//detect computer's pawn's color
function detectCptColor(){
    var bkg2 = document.getElementById('td_player2');
    if(bkg2.style.backgroundColor=='red') return 'rouge';
    else return 'jaune';
}

//onmouseover and onmouseout jquery functions
function onmouse(type,color){
    if(type=='over'){
        $(document).on("mouseover","."+color,function() {
            if (position[$(this).data("indice")].n == 5) return; 
            if (!modeDeplacement)
                $("img",$(this)).attr("src","pictures/"+color+"2.png");
            else if (topo[indiceDepart].adj.indexOf($(this).data("indice")) != -1)
                $("img",$(this)).attr("src","pictures/"+color+"2.png");
        });
    }
    else if(type=='out'){
        $(document).on("mouseout","."+color,function() {
            if ((!modeDeplacement) || (indiceDepart != $(this).data("indice")))
                $("img",$(this)).attr("src","pictures/"+color+".png");
        });
    }
}

//know the tower's summit's color
function detectSummit(color){
    if(color==1) return 'yellow';
    else return 'red';
}

//know if the tower is composed of 5 pawns
function towerIsFull(depart,arrivee){
    if(position[depart].n + position[arrivee].n == 5) return true; 
    else return false;
}

//increase number of towers won
function increaseScore(summit,color2){
    if(summit == 'yellow'){
        if(color2 == 'jaune') document.getElementById('nbTower2').innerHTML++;
        else document.getElementById('nbTower1').innerHTML++;
    } 
    else{	
        if(color2 == 'rouge') document.getElementById('nbTower2').innerHTML++;
        else document.getElementById('nbTower1').innerHTML++;
    }
}

//decrease number of towers won
function decreaseScore(summit,color2){
    if(summit == 'yellow'){	
        if(color2 == 'jaune') document.getElementById('nbTower2').innerHTML--;
        else document.getElementById('nbTower1').innerHTML--;
    } 
    else{	
        if(color2 == 'rouge') document.getElementById('nbTower2').innerHTML--;
        else document.getElementById('nbTower1').innerHTML--;
    }
}

//display who is the winner
function detectWinner(){
    var nbPl1 = document.getElementById('nbTower1');
    var nbPl2 = document.getElementById('nbTower2');
    var pl1 = document.getElementById('td_player1');
    var pl2 = document.getElementById('td_player2');

    if( nbPl1.innerHTML>nbPl2.innerHTML ) alert(pl1.innerHTML+' has won !');
    else if( nbPl1.innerHTML<nbPl2.innerHTML ) alert(pl2.innerHTML+' has won !');
    else if( nbPl1.innerHTML==nbPl2.innerHTML ) alert('Equality !');
}

//know if it's the second player's turn
function isPl2Turn(){
    if(document.getElementById('player2Turn').style.display == 'block') return true;
    else return false;
}