console.log("asYouWish")

// start and end of victimList

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

//Aaron start-end selections

let findAaronStart = document.getElementById("aaronStart").addEventListener("mousedown", startAaronSelection);
let findAaronEnd = document.getElementById("aaronEnd").addEventListener("mouseup", endAaronSelection);

//Find Aaron functions

function startAaronSelection(x,y){
    foundAaronS = true;
    console.log("selectionStarted");
}

function endAaronSelection(x,y){
    foundAaronE = true;
    console.log("selectionEnded");
    if (foundAaronS === true && foundAaronE === true) {
        document.getElementById("listAaron").style.color = "red";
        document.getElementById("listAaron").style.textDecoration = "line-through";
        foundAaronName = true;
        console.log("found Aaron");
    }    
}

//Abigail start-end selections

let findAbigailStart = document.getElementById("abigailStart").addEventListener("mousedown", startAbigailSelection);
let findAbigailEnd = document.getElementById("abigailEnd").addEventListener("mouseup", endAbigailSelection);

//Find Abigail functions

function startAbigailSelection(x,y){
    foundAbigailS = true;
    console.log("selectionStarted");
}

function endAbigailSelection(x,y){
    foundAbigailE = true;
    console.log("selectionEnded");
    if (foundAbigailS === true && foundAbigailE === true) {
        document.getElementById("listAbigail").style.color = "red";
        document.getElementById("listAbigail").style.textDecoration = "line-through";
        foundAbigailName = true;
        console.log("found Abigail");
    }    
}

//Elijah start-end selections

let findElijahStart = document.getElementById("elijahStart").addEventListener("mousedown", startElijahSelection);
let findElijahEnd = document.getElementById("elijahEnd").addEventListener("mouseup", endElijahSelection);

//Find Elijah functions

function startElijahSelection(x,y){
    foundElijahS = true;
    console.log("selectionStarted");
}

function endElijahSelection(x,y){
    foundElijahE = true;
    console.log("selectionEnded");
    if (foundElijahS === true && foundElijahE === true) {
        document.getElementById("listElijah").style.color = "red";
        document.getElementById("listElijah").style.textDecoration = "line-through";
        foundElijahName = true;
        console.log("found Elijah");
    }    
}

//Esther start-end selections

let findEstherStart = document.getElementById("estherStart").addEventListener("mousedown", startEstherSelection);
let findEstherEnd = document.getElementById("estherEnd").addEventListener("mouseup", endEstherSelection);

//Find Esther functions

function startEstherSelection(x,y){
    foundEstherS = true;
    console.log("selectionStarted");
}

function endEstherSelection(x,y){
    foundEstherE = true;
    console.log("selectionEnded");
    if (foundEstherS === true && foundEstherE === true) {
        document.getElementById("listEsther").style.color = "red";
        document.getElementById("listEsther").style.textDecoration = "line-through";
        foundEstherName = true;
        console.log("found Esther");
    }    
}

//Jethro start-end selections

let findJethroStart = document.getElementById("jethroStart").addEventListener("mousedown", startJethroSelection);
let findJethroEnd = document.getElementById("jethroEnd").addEventListener("mouseup", endJethroSelection);

//Find Jethro functions

function startJethroSelection(x,y){
    foundJethroS = true;
    console.log("selectionStarted");
}

function endJethroSelection(x,y){
    foundJethroE = true;
    console.log("selectionEnded");
    if (foundJethroS === true && foundJethroE === true) {
        document.getElementById("listJethro").style.color = "red";
        document.getElementById("listJethro").style.textDecoration = "line-through";
        foundJethroName = true;
        console.log("found Jethro");
    }    
}

//Miriam start-end selections

let findMiriamStart = document.getElementById("miriamStart").addEventListener("mousedown", startMiriamSelection);
let findMiriamEnd = document.getElementById("miriamEnd").addEventListener("mouseup", endMiriamSelection);


//Find Miriam functions

function startMiriamSelection(x,y){
    foundMiriamS = true;
    console.log("selectionStarted");
}

function endMiriamSelection(x,y){
    foundMiriamE = true;
    console.log("selectionEnded");
    if (foundMiriamS === true && foundMiriamE === true) {
        document.getElementById("listMiriam").style.color = "red";
        document.getElementById("listMiriam").style.textDecoration = "line-through";
        foundMiriamName = true;
        console.log("found Miriam");
    }    
}

//Simon start-end selections

let findSimonStart = document.getElementById("simonStart").addEventListener("mousedown", startSimonSelection);
let findSimonEnd = document.getElementById("simonEnd").addEventListener("mouseup", endSimonSelection);


//Find Simon functions

function startSimonSelection(x,y){
    foundSimonS = true;
    console.log("selectionStarted");
}

function endSimonSelection(x,y){
    foundSimonE = true;
    console.log("selectionEnded");
    if (foundSimonS === true && foundSimonE === true) {
        document.getElementById("listSimon").style.color = "red";
        document.getElementById("listSimon").style.textDecoration = "line-through";
        foundSimonName = true;
        console.log("found Simon");
    }    
}

//winning conditions:

const gameWin = document.getElementById("gameGrid").addEventListener("mouseup", checkWin);

function checkWin() {
    if (foundAaronName === true && foundAbigailName === true &&
        foundElijahName === true && foundEstherName === true &&
        foundJethroName === true && foundMiriamName === true &&
        foundSimonName === true
        ) {
            console.log("winner!")
        }
}





// //get start coordinates

// document.addEventListener("mousedown", function(e){
//     console.log(`x: ${e.x}, y:${e.y}`);
// })

// //get end coordinates

// document.addEventListener("mouseup", function(e){
//     console.log(`x: ${e.x}, y:${e.y}`);
// })










// Constants:

//const victimNameArray = ["AARON", "ABIGAIL", "ELIJAH", "ESTHER", "JETHRO", "MIRIAM", "SIMON"];
//const secretMessageArray = ["PLEASE!", "STOP!", "LISTEN!", "RITUAL", "WENT", "AWRY!", "SAVEUS!", "KILL", "THAT", "THING!"]
//const OpenMessageOne = "HELP. ME."
//const OpenMessageTwo = "STOP.THEM."
//const closeBadMessageOne = "THANK. YOU. THEY. WERE."
//const closeBadMessageTwo = "DELICIOUS."
//const closeGoodMessageOne = "Ye gods, thank you- you saved us!"
//const closeGoodMessageTwo = "Now, we are free"
//const closeGoodMessageThree = "to do it again."
//const closeGoodMessageFour = "And do it right."
//const winningMessage = "You Win?"
//const letterTile?



//--OPENING---\\



//Browser loads:

//WISHLIST: grid fades in
//WISHLIST: spookyAudio fades in and loops until ENDGAME
//function gridPopulates

// Starting messages:

// after a short timer, messageBoxOne displays "help. me."
// after a short second timer, messageBoxTwo displays "catch. them."
// WISHLIST: after a third timer, both messages disappear

//function gridPopualtes:

//letters appear in grid.

//function victimListPopulates:

//names appear in victim list



//--GAMEPLAY--\\



//function selectWord:

// onClick, the user starts a word selection. On [drag and release? Second click?] the selection ends.
//tiles clicked on [cursored through?] return their innerText letter.
//letters are made into a string called chosenWord.

//function isVictimName:

//Establishes whether chosenWord is present in victimName.
// If chosenWord is in victimNameArray:
// A red line is drawn through the chosenWord.
// A red line is drawn through the name in victimNameBox.
//WISHLIST: the chosenWord and the line fade out.

//If chosenWord is not in victimNameArray:
//Selection is returned.

//function isSecretMessage:

//Establishes whether chosenWord is present in secretMessageArray.
// If chosenWord is in secretMessageArray:
// the chosenWord letter tiles turn sky blue.
//WISHLIST: the chosenWord and the line fade out.

//WISHLIST: function lastChance:

// When 6/7 of victimNameArray are found-
// "PLEASE!" briefly flashes blue.

//WISHLIST? function truthEmerges():

//When 4/10 of secretMessageArray are found-
//'hangman' _s appear in secretMessageBox to show what's left

//--ENDGAME--\\

//If 7/7 victimNames are found first:

//No more buttons can be clicked

// function playBadEnding();
//Bad closing messages:
//const closeBadMessageOne = "THANK. YOU. THEY. WERE."
//after a short timer: const closeBadMessageTwo = "DELICIOUS."

//function offerReplay()
//after a short timer: const winningMessage = "You Win?"
//Message displays with againBtn with innerText "Play Again"
// againBtn.onClick resets the browser [WISHLIST: and the spookyAudio]

//If 10/10 secretMessages are found first:

//No more buttons can be clicked

// function playGoodEnding();
// Good closing messages:
///const closeGoodMessageOne = "Ye gods, thank you- you saved us!"
//after a short timer: const closeGoodMessageTwo = "Now, we are free"
//after a short timer: const closeGoodMessageThree = "to do it again."
//after a short timer: const closeGoodMessageFour = "And do it right."

//function offerReplay()
//as above
