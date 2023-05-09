window.onload = function () {
    const houseInput = document.getElementById("houseInput");
    const houseOutput = document.getElementById("houseOutput");
    
    var startButton = document.getElementById("startButton");
    var numHouses;
    var numWalls;

    //https://www.youtube.com/watch?v=Giosc0kZU1M
    //Create function that takes number (step) and returns # of matchsticks
    // needed to create house
    //  1 house (6)   2 houses (11)   3 houses (16)   87 houses (436)
    //  /_\           /_\/_\            /_\/_\/_\
    //  |_|           |_|_|             |_ |_| _|


    function ComputeWalls(numHouses) {
      var walls = (numHouses * 6) - (numHouses - 1);
      return walls;
    }

    startButton.addEventListener("click", (event) =>{        
      numHouses = houseInput.value;
      numWalls = ComputeWalls(numHouses);
      houseInput.value = "";
      if(numWalls == 0) {
        houseOutput.innerHTML = "Number can't be 0";
      }
      houseOutput.innerHTML = numWalls.toString();
    })
}






