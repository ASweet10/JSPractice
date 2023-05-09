window.onload = function () {
    const startButton = document.getElementById("start-button");
    const stopButton = document.getElementById("stop-button");
    const resetButton = document.getElementById("reset-button");
    
    var secondsElement = document.getElementById("seconds");
    var tensElement = document.getElementById("tens-place");
    
    var seconds = 00;
    var tens = 00;
    var interval;

    startButton.addEventListener("click", (event) =>{
        
        //Cancels timed/repeating action from SetInterval
        clearInterval(interval);
        //Calls function at set interval (1000ms = 1 sec)
        interval = setInterval(updateTimer, 10);
    })
    stopButton.addEventListener("click", (event) =>{

        clearInterval(interval);
    })
    resetButton.addEventListener("click", (event) =>{

        clearInterval(interval);
        tens = "00";
        seconds = "00";
        secondsElement.innerHTML = seconds;
        tensElement.innerHTML = tens;
    })

    function updateTimer() {
        tens++;

        if(tens <= 9){
            tensElement.innerHTML = "0" + tens;
          }
          
          if (tens > 9){
            tensElement.innerHTML = tens;
            
          } 
          
          if (tens > 99) {
            console.log("seconds");
            seconds++;
            secondsElement.innerHTML = "0" + seconds;
            tens = 0;
            tensElement.innerHTML = "0" + 0;
          }
          
          if (seconds > 9){
            secondsElement.innerHTML = seconds;
          }
    }
}






