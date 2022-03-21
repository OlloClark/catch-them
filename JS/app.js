console.log("asYouWish")


//attempt to draw line

let isDrawing = false;
let x = 0;
let y = 0;




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
