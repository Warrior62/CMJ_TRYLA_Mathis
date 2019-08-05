
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
    if(isComputer()){
        if(bkg2.style.backgroundColor=='red') return 'rouge';
        else return 'jaune';
    } 
    else return false;
}