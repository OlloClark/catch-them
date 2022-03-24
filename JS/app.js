//NOTES:

// CITATION: inspiration for intro/outro screen code found at www.jacobenfield.com/jakeWeb/JS_GAMES

//Initial functions:\\

//Button functions- starting/replaying the game:

function startGame(){
    document.getElementById("gameIntro").style.visibility = "hidden";
}

function replayGame(){
    document.getElementById("gameEvilOutro").style.visibility = "hidden";
    document.location.reload();
}

function goodReplayGame(){
    document.getElementById("gameGoodOutro").style.visibility = "hidden";
    document.location.reload();
}

//Check if game is over:

const EvilGameWin = document.getElementById("gameGrid").addEventListener("mouseup", checkEvilWin);
const GoodGameWin = document.getElementById("gameGrid").addEventListener("mouseup", checkGoodWin);

// Check if both start and end of victim names have been found:

let foundAaronS = false;
let foundAaronE = false;
let foundAaronName = false;

let foundAbigailS = false;
let foundAbigailE = false;
let foundAbigailName = false;

let foundElijahS = false;
let foundElijahE = false;
let foundElijahName = false;

let foundEstherS = false;
let foundEstherE = false;
let foundEstherName = false;

let foundJethroS = false;
let foundJethroE = false;
let foundJethroName = false;

let foundMiriamS = false;
let foundMiriamE = false;
let foundMiriamName = false;

let foundSimonS = false;
let foundSimonE = false;
let foundSimonName = false;

// Check if both start and end of secret words have been found:

let foundPleaseS = false;
let foundPleaseE = false;
let foundPleaseTotal = false;

let foundStopS = false;
let foundStopE = false;
let foundStopTotal = false;

let foundListenS = false;
let foundListenE = false;
let foundListenTotal = false;

let foundSaveusS = false;
let foundSaveusE = false;
let foundSaveusTotal = false;

let foundRitualS = false;
let foundRitualE = false;
let foundRitualTotal = false;

let foundWentS = false;
let foundWentE = false;
let foundWentTotal = false;

let foundAwryS = false;
let foundAwryE = false;
let foundAwryTotal = false;

let foundKillS = false;
let foundKillE = false;
let foundKillTotal = false;

let foundThatS = false;
let foundThatE = false;
let foundThatTotal = false;

let foundThingS = false;
let foundThingE = false;
let foundThingTotal = false;


//Find the Victim list:\\

//Aaron start-end selections:

let findAaronStart = document.getElementById("aaronStart").addEventListener("mousedown", startAaronSelection);
let findAaronEnd = document.getElementById("aaronEnd").addEventListener("mouseup", endAaronSelection);

//Find Aaron functions:

function startAaronSelection(){
    foundAaronS = true;
    console.log("selectionStarted");
}

function endAaronSelection(){
    foundAaronE = true;
    console.log("selectionEnded");
    if (foundAaronS === true && foundAaronE === true) {
        document.getElementById("listAaron").style.color = "red";
        document.getElementById("listAaron").style.textDecoration = "line-through";
        foundAaronName = true;
        console.log("found Aaron");
    }    
}

//Abigail start-end selections:

let findAbigailStart = document.getElementById("abigailStart").addEventListener("mousedown", startAbigailSelection);
let findAbigailEnd = document.getElementById("abigailEnd").addEventListener("mouseup", endAbigailSelection);

//Find Abigail functions:

function startAbigailSelection(){
    foundAbigailS = true;
    console.log("selectionStarted");
}

function endAbigailSelection(){
    foundAbigailE = true;
    console.log("selectionEnded");
    if (foundAbigailS === true && foundAbigailE === true) {
        document.getElementById("listAbigail").style.color = "red";
        document.getElementById("listAbigail").style.textDecoration = "line-through";
        foundAbigailName = true;
        console.log("found Abigail");
    }    
}

//Elijah start-end selections:

let findElijahStart = document.getElementById("elijahStart").addEventListener("mousedown", startElijahSelection);
let findElijahEnd = document.getElementById("elijahEnd").addEventListener("mouseup", endElijahSelection);

//Find Elijah functions:

function startElijahSelection(){
    foundElijahS = true;
    console.log("selectionStarted");
}

function endElijahSelection(){
    foundElijahE = true;
    console.log("selectionEnded");
    if (foundElijahS === true && foundElijahE === true) {
        document.getElementById("listElijah").style.color = "red";
        document.getElementById("listElijah").style.textDecoration = "line-through";
        foundElijahName = true;
        console.log("found Elijah");
    }    
}

//Esther start-end selections:

let findEstherStart = document.getElementById("estherStart").addEventListener("mousedown", startEstherSelection);
let findEstherEnd = document.getElementById("estherEnd").addEventListener("mouseup", endEstherSelection);

//Find Esther functions:

function startEstherSelection(){
    foundEstherS = true;
    console.log("selectionStarted");
}

function endEstherSelection(){
    foundEstherE = true;
    console.log("selectionEnded");
    if (foundEstherS === true && foundEstherE === true) {
        document.getElementById("listEsther").style.color = "red";
        document.getElementById("listEsther").style.textDecoration = "line-through";
        foundEstherName = true;
        console.log("found Esther");
    }    
}

//Jethro start-end selections:

let findJethroStart = document.getElementById("jethroStart").addEventListener("mousedown", startJethroSelection);
let findJethroEnd = document.getElementById("jethroEnd").addEventListener("mouseup", endJethroSelection);

//Find Jethro functions:

function startJethroSelection(){
    foundJethroS = true;
    console.log("selectionStarted");
}

function endJethroSelection(){
    foundJethroE = true;
    console.log("selectionEnded");
    if (foundJethroS === true && foundJethroE === true) {
        document.getElementById("listJethro").style.color = "red";
        document.getElementById("listJethro").style.textDecoration = "line-through";
        foundJethroName = true;
        console.log("found Jethro");
    }    
}

//Miriam start-end selections:

let findMiriamStart = document.getElementById("miriamStart").addEventListener("mousedown", startMiriamSelection);
let findMiriamEnd = document.getElementById("miriamEnd").addEventListener("mouseup", endMiriamSelection);


//Find Miriam functions:

function startMiriamSelection(){
    foundMiriamS = true;
    console.log("selectionStarted");
}

function endMiriamSelection(){
    foundMiriamE = true;
    console.log("selectionEnded");
    if (foundMiriamS === true && foundMiriamE === true) {
        document.getElementById("listMiriam").style.color = "red";
        document.getElementById("listMiriam").style.textDecoration = "line-through";
        foundMiriamName = true;
        console.log("found Miriam");
    }    
}

//Simon start-end selections:

let findSimonStart = document.getElementById("simonStart").addEventListener("mousedown", startSimonSelection);
let findSimonEnd = document.getElementById("simonEnd").addEventListener("mouseup", endSimonSelection);


//Find Simon functions:

function startSimonSelection(){
    foundSimonS = true;
    console.log("selectionStarted");
}

function endSimonSelection(){
    foundSimonE = true;
    console.log("selectionEnded");
    if (foundSimonS === true && foundSimonE === true) {
        document.getElementById("listSimon").style.color = "red";
        document.getElementById("listSimon").style.textDecoration = "line-through";
        foundSimonName = true;
        console.log("found Simon");
    }    
}

//Find the Secret List:\\

//Please! start-end selection:

let findPleaseStart = document.getElementById("please!Start").addEventListener("mousedown", startPleaseSelection);
let findPleaseEnd = document.getElementById("please!End").addEventListener("mouseup", endPleaseSelection);

//Find Please! functions:

function startPleaseSelection(){
    foundPleaseS = true;
    console.log("selectionStarted");
}

function endPleaseSelection(){
    foundPleaseE = true;
    console.log("selectionEnded");
    if (foundPleaseS === true && foundPleaseE === true) {
        document.getElementById("listPlease!").innerText = "pLeAsE!";
        foundPleaseTotal = true;
    }    
}

//Stop! start-end selection:

let findStopStart = document.getElementById("stop!Start").addEventListener("mousedown", startStopSelection);
let findStopEnd = document.getElementById("stop!End").addEventListener("mouseup", endStopSelection);

//Find Stop! functions:

function startStopSelection(){
    foundStopS = true;
    console.log("selectionStarted");
}

function endStopSelection(){
    foundStopE = true;
    console.log("selectionEnded");
    if (foundStopS === true && foundStopE === true) {
        document.getElementById("listStop!").innerText = "StOp!";
        foundStopTotal = true;
    }    
}

//Listen! start-end selection:

let findListenStart = document.getElementById("listen!Start").addEventListener("mousedown", startListenSelection);
let findListenEnd = document.getElementById("listen!End").addEventListener("mouseup", endListenSelection);

//Find Listen! functions:

function startListenSelection(){
    foundListenS = true;
    console.log("selectionStarted");
}

function endListenSelection(){
    foundListenE = true;
    console.log("selectionEnded");
    if (foundListenS === true && foundListenE === true) {
        document.getElementById("listListen!").innerText = "LiStEn!";
        foundListenTotal = true;
    }    
}

//Saveus! start-end selection:

let findSaveusStart = document.getElementById("saveus!Start").addEventListener("mousedown", startSaveusSelection);
let findSaveusEnd = document.getElementById("saveus!End").addEventListener("mouseup", endSaveusSelection);

//Find Saveus! functions:

function startSaveusSelection(){
    foundSaveusS = true;
    console.log("selectionStarted");
}

function endSaveusSelection(){
    foundSaveusE = true;
    console.log("selectionEnded");
    if (foundSaveusS === true && foundSaveusE === true) {
        document.getElementById("listSaveus!").innerText = "sAvE uS!";
        foundSaveusTotal = true;
    }    
}

//Ritual start-end selection:

let findRitualStart = document.getElementById("ritualStart").addEventListener("mousedown", startRitualSelection);
let findRitualEnd = document.getElementById("ritualEnd").addEventListener("mouseup", endRitualSelection);

//Find Ritual functions:

function startRitualSelection(){
    foundRitualS = true;
    console.log("selectionStarted");
}

function endRitualSelection(){
    foundRitualE = true;
    console.log("selectionEnded");
    if (foundRitualS === true && foundRitualE === true) {
        document.getElementById("listRitual").innerText = "RiTuAl";
        foundRitualTotal = true;
    }    
}

//Went start-end selection:

let findWentStart = document.getElementById("wentStart").addEventListener("mousedown", startWentSelection);
let findWentEnd = document.getElementById("wentEnd").addEventListener("mouseup", endWentSelection);

//Find Went functions:

function startWentSelection(){
    foundWentS = true;
    console.log("selectionStarted");
}

function endWentSelection(){
    foundWentE = true;
    console.log("selectionEnded");
    if (foundWentS === true && foundWentE === true) {
        document.getElementById("listWent").innerText = "wEnT";
        foundWentTotal = true;
    }    
}

//Awry! start-end selection:

let findAwryStart = document.getElementById("awry!Start").addEventListener("mousedown", startAwrySelection);
let findAwryEnd = document.getElementById("awry!End").addEventListener("mouseup", endAwrySelection);

//Find Awry! functions:

function startAwrySelection(){
    foundAwryS = true;
    console.log("selectionStarted");
}

function endAwrySelection(x,y){
    foundAwryE = true;
    console.log("selectionEnded");
    if (foundAwryS === true && foundAwryE === true) {
        document.getElementById("listAwry!").innerText = "AwRy!";
        foundAwryTotal = true;
    }    
}

//Kill start-end selection:

let findKillStart = document.getElementById("killStart").addEventListener("mousedown", startKillSelection);
let findKillEnd = document.getElementById("killEnd").addEventListener("mouseup", endKillSelection);

//Find Kill functions:

function startKillSelection(){
    foundKillS = true;
    console.log("selectionStarted");
}

function endKillSelection(){
    foundKillE = true;
    console.log("selectionEnded");
    if (foundKillS === true && foundKillE === true) {
        document.getElementById("listKill").innerText = "KILL";
        foundKillTotal = true;
    }    
}

//That start-end selection:

let findThatStart = document.getElementById("thatStart").addEventListener("mousedown", startThatSelection);
let findThatEnd = document.getElementById("thatEnd").addEventListener("mouseup", endThatSelection);

//Find That functions:

function startThatSelection(){
    foundThatS = true;
    console.log("selectionStarted");
}

function endThatSelection(){
    foundThatE = true;
    console.log("selectionEnded");
    if (foundThatS === true && foundThatE === true) {
        document.getElementById("listThat").innerText = "THAT";
        foundThatTotal = true;
    }    
}

//Thing! start-end selection:

let findThingStart = document.getElementById("thing!Start").addEventListener("mousedown", startThingSelection);
let findThingEnd = document.getElementById("thing!End").addEventListener("mouseup", endThingSelection);

//Find Thing! functions:

function startThingSelection(){
    foundThingS = true;
    console.log("selectionStarted");
}

function endThingSelection(){
    foundThingE = true;
    console.log("selectionEnded");
    if (foundThingS === true && foundThingE === true) {
        document.getElementById("listThing!").innerText = "THING!";
        foundThingTotal = true;
    }    
}

//Winning Conditions:\\

function checkEvilWin() {
    if (foundAaronName === true && foundAbigailName === true &&
        foundElijahName === true && foundEstherName === true &&
        foundJethroName === true && foundMiriamName === true &&
        foundSimonName === true
        ) {
            document.getElementById("gameEvilOutro").style.visibility = "visible";
        }
}

function checkGoodWin() {
    if (foundPleaseTotal === true && foundStopTotal === true &&
        foundListenTotal === true && foundSaveusTotal === true &&
        foundRitualTotal === true && foundWentTotal === true &&
        foundAwryTotal === true && foundKillTotal === true &&
        foundThatTotal === true && foundThingTotal === true
        ) {
            document.getElementById("gameGoodOutro").style.visibility = "visible";
        }
}

//Letter highlight function

// const buttonGrid = document.getElementById("gameGrid");

// let anyButton = buttonGrid.children

// let anyButtonPress = anyButton.addEventListener("click", buttonHighlight)

// function buttonHighlight() {
//     console.log(anyButton.innerText);
// }
   

// anyButton.addEventListener("mousedown", function(){
//     anyButton.className = "letter";
// }
// )

// letterButton.addEventListener("mouseup", function(){
//     anyButton.className = null;
// })














