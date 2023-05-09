livesText = document.getElementById("lives-text");
alphabetButtons = document.getElementById("alphabet-btns");
blankSpaces = document.getElementById("blank-spaces");
categoryText = document.getElementById("category");

const startingLives = 10;
var currentLives;

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var cities = ["Cities", "Buffalo", "Albuquerque", "Rochester", "Green Bay", "Chicago", "Boise", "Bakersfield", "San Luis Obispo"];
var americanStates = ["American States", "Alabama", "Alaska", "Delaware", "Colorado", "New York", "New Mexico", "Idaho"];
var famousLastNames = ["Famous Last Names", "Churchill", "Lindbergh", "Armstrong", "Aldrin", "Wright", "Gandhi", "Einstein", "Roosevelt"];
var countries = ["Countries", "Canada", "Brazil", "Spain", "France", "Austria", "Russia", "China", "Ethiopia"];


var categories = [cities, americanStates, famousLastNames, countries];
var chosenWord;
var chosenCategory;
var randInt;

var canGuess = true;

for(var i = 0; i < alphabetButtons.length; i++) {
    alphabetButtons[i].addEventListener("click", guessLetter());
}

//On window load / Page refresh...
window.addEventListener('load', (event) => {
    livesText.innerHTML = "You have " + startingLives + " lives left";
    currentLives = startingLives;
    chosenCategory = chooseRandomCategory();
    chosenCategory.shift(); //Shift first element, title
    chosenWord = chooseRandomWord(chosenCategory);
    createBlankSpaces(chosenWord.length);
    canGuess = true;
    console.log('Chosen word: ' + chosenWord);
    console.log('Chosen cat: ' + chosenCategory);
  });


function guessLetter(letter){
    if(canGuess) {
        //Make letter button disappear
        // Button.style.display ='none';

        //If letter is in word...
        // make letter appear in slots at all occurrences

        if(chosenWord.includes(letter)) {

        } else {
            currentLives --;
        }

        if(currentLives === 0) {
            livesText.innerHTML = "GAME OVER";
            canGuess = false;
        }

        //If letter is NOT in word...
        // Take life away
        currentLives --;
    }

}




function chooseRandomCategory(){
    randInt = Math.floor(Math.random() * categories.length);
    chosenCategory = categories[randInt];
    categoryText.innerHTML = chosenCategory[0];
    return chosenCategory;
}
function chooseRandomWord(wordArray){
    chosenWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    return chosenWord;
}


function createBlankSpaces(numSpaces){

    var htmlElements = "";
    for(var i = 0; i < numSpaces; i++){
        
        htmlElements += '<div class="blank-space">____</div>';
    }
    blankSpaces.innerHTML += htmlElements;
}




