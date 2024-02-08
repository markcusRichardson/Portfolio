 
//AboutME JS CODE

let TAM = document.getElementById('TextAboutme');
let AboutMe = document.getElementById('AboutMeH3');
let section = document.getElementById('AboutMe');



function MouseONAboutMe (){
    TAM.style.opacity = 1;
    TAM.style.height = "125px";
    TAM.style.width = "250px";
    TAM.style.marginTop = "238px";
    TAM.style.fontSize = "20px"
    AboutMe.style.display = "Block";
   
    
}
function MouseOFFAboutMe (){
    TAM.style.opacity = 0.7;
    TAM.style.height = "100px";
    TAM.style.width = "200px";
    TAM.style.marginTop = "250px";
    TAM.style.fontSize = "16px"
    AboutMe.style.display = "none";
}

function MouseDownAboutMe(){
    section.scrollIntoView({ behavior: 'smooth' });
}


TAM.addEventListener('mouseenter', MouseONAboutMe);
TAM.addEventListener('mouseleave', MouseOFFAboutMe);
AboutMe.addEventListener('mousedown', MouseDownAboutMe);





// Experience JS CODE
let Exp = document.getElementById('TextExperience');
let TextExperience = document.getElementById('TextExperienceH3');
let section1 = document.getElementById('ExperienceSection');


function MouseONAboutMe1 (){
    Exp.style.opacity = 1;
    Exp.style.height = "125px";
    Exp.style.width = "250px";
    Exp.style.marginTop = "238px";
    Exp.style.fontSize = "20px"
    TextExperience.style.display = "Block";
   
    
}
function MouseOFFAboutMe1 (){
    Exp.style.opacity = 0.7;
    Exp.style.height = "100px";
    Exp.style.width = "200px";
    Exp.style.marginTop = "250px";
    Exp.style.fontSize = "16px"
    TextExperience.style.display = "none";
}
function MouseDownTextExperience(){
    section1.scrollIntoView({ behavior: 'smooth' });
}

Exp.addEventListener('mouseenter', MouseONAboutMe1);
Exp.addEventListener('mouseleave', MouseOFFAboutMe1);
TextExperience.addEventListener('mousedown', MouseDownTextExperience);


// Skills / Hobbies JS CODE
let SkiHob = document.getElementById('TextSkillsHobbies');
let TextSkiHob = document.getElementById('TextSkillsHobbiesH3');
let section2 = document.getElementById('SkillsHobbiesSection');

function MouseONAboutMe2 (){
    SkiHob.style.opacity = 1;
    SkiHob.style.height = "125px";
    SkiHob.style.width = "250px";
    SkiHob.style.marginTop = "238px";
    SkiHob.style.fontSize = "20px"
    TextSkiHob.style.display = "Block";
   
    
}
function MouseOFFAboutMe2 (){
    SkiHob.style.opacity = 0.7;
    SkiHob.style.height = "100px";
    SkiHob.style.width = "200px";
    SkiHob.style.marginTop = "250px";
    SkiHob.style.fontSize = "16px"
    TextSkiHob.style.display = "none";
}
function MouseDownTextSkiHob(){
    section2.scrollIntoView({ behavior: 'smooth' });
}

SkiHob.addEventListener('mouseenter', MouseONAboutMe2);
SkiHob.addEventListener('mouseleave', MouseOFFAboutMe2);
TextSkiHob.addEventListener('mousedown', MouseDownTextSkiHob);
















let OSGImage = document.getElementById('ImageOSG');
let CmetImage = document.getElementById('ImageCardiffMet');
let CavcImage = document.getElementById('ImageCAVC');
let OSGInfo = document.getElementById('OSGInfo');
let CavcInfo = document.getElementById('CAVCInfo');
let CmetInfo = document.getElementById('CardiffmetInfo');

// Entering images
function MouseONOSG(){
    OSGImage.style.opacity = 1;
    OSGInfo.style.fontSize = "22px";
    OSGInfo.style.backgroundColor = "black";
    OSGInfo.style.opacity = 0.5;
    OSGInfo.style.color = "White";
    

}

function MouseONCmet(){
    CmetImage.style.opacity = 1;
    CmetInfo.style.fontSize = "22px";
    CmetInfo.style.backgroundColor = "black";
    CmetInfo.style.opacity = 0.5;
    CmetInfo.style.color = "White";
    
}

function MouseOnCAVC(){
    CavcImage.style.opacity = 1;
    CavcInfo.style.fontSize = "22px";
    CavcInfo.style.backgroundColor = "black";
    CavcInfo.style.opacity = 0.5;
    CavcInfo.style.color = "White";
    
}


OSGImage.addEventListener('mouseenter', MouseONOSG);
CmetImage.addEventListener('mouseenter', MouseONCmet);
CavcImage.addEventListener('mouseenter', MouseOnCAVC);

// Exiting images
function MouseOFFOSG(){
    OSGImage.style.opacity = 0.5;
    OSGInfo.style.fontSize = "20px";
    OSGInfo.style.backgroundColor = "White";
    OSGInfo.style.opacity = 1;
    OSGInfo.style.color = "Black";
}

function MouseOFFCmet(){
    CmetImage.style.opacity = 0.5;
    CmetInfo.style.fontSize = "20px";
    CmetInfo.style.backgroundColor = "White";
    CmetInfo.style.opacity = 1;
    CmetInfo.style.color = "Black";
}

function MouseOFFCAVC(){
    CavcImage.style.opacity = 0.5;
    CavcInfo.style.fontSize = "20px";
    CavcInfo.style.backgroundColor = "White";
    CavcInfo.style.opacity = 1;
    CavcInfo.style.color = "Black";
    
}
OSGImage.addEventListener('mouseleave', MouseOFFOSG);
CmetImage.addEventListener('mouseleave', MouseOFFCmet);
CavcImage.addEventListener('mouseleave', MouseOFFCAVC);