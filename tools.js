
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

function towerIsFull(depart,arrivee){
    if(position[depart].n + position[arrivee].n == 5) return true; 
    else return false;
}


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


function updateScore(button){
    var color2 = detectCptColor();
    for(a=0; a<topo.length; a++){
        if( position[a].n!=0 && position[a].n!=5){
            var summit = detectSummit(position[a].col);
            increaseScore(summit,color2);
        }
    }
    hide(button);
    hide(yourTurn);
    hide(player2turn);
    clock.remove(clock);

    restartBtn.innerHTML='<button>Restart</button>'
                        +'<button>Change player\'s name</button>';
}
