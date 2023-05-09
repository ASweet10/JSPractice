import evaluate from 'mathjs';

addButton = document.getElementById("add-btn");
subtractButton = document.getElementById("subtract-btn");
multiplyButton = document.getElementById("multiply-btn");
divideButton = document.getElementById("divide-btn");
input = document.getElementById("input");

counter = 0;

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var expression = "";

window.addEventListener("load", (event) => {
    console.log("window load");
    createNumberButtons();
  });

function decreaseCounter(){
    counter --;
    setCounterValue();
}

function resetCounter(){
    counter = 0;
    setCounterValue();
}

function increaseCounter(){
    counter ++;
    setCounterValue();
}

function addToExpression(text){
    expression += text;
    console.log(expression);

    input.innerHTML = answer;
}

function setCounterValue(){
    if(counter < 0){
        counterText.style.color = "red";
    } else if(counter == 0){
        counterText.style.color = "black";
    } else{
        counterText.style.color = "green";
    }
    counterText.innerHTML = counter;
}

function createNumberButtons(){
    for(i = 0; i < numbers.length; i++) {
        var button = document.createElement("button");
        button.innerHTML = numbers[i];
        button.className = "number-btn";
        var buttonDiv = document.getElementById("number-btns");
        buttonDiv.appendChild(button);
    }
}





