 
//AboutME JS CODE

let TAM = document.getElementById('TextAboutme');
let TAMH3 = document.getElementById('AboutMeH3');

function MouseON (){
    TAM.style.opacity = 1;
    TAM.style.height = "125px";
    TAM.style.width = "250px";
    TAM.style.marginTop = "238px";
    TAM.style.fontSize = "20px"
    TAMH3.style.display = "Block";
   
    
}
function MouseOFF (){
    TAM.style.opacity = 0.7;
    TAM.style.height = "100px";
    TAM.style.width = "200px";
    TAM.style.marginTop = "250px";
    TAM.style.fontSize = "16px"
    TAMH3.style.display = "none";
}


TAM.addEventListener('mouseenter', MouseON);
TAM.addEventListener('mouseleave', MouseOFF);


function openAboutMe (){

    
}

function closeAboutMe (){
    

}




TAMH3.addEventListener('click', )


