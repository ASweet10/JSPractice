counterText = document.getElementById("counter");
decreaseBtn = document.getElementById("decrease-btn");
resetBtn = document.getElementById("reset-btn");
increaseBtn = document.getElementById("increase-btn");

counter = 0;

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




