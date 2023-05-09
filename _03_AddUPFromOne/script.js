window.onload = function () {
    const output = document.getElementById("output");
    const input = document.getElementById("input");
    const startButton = document.getElementById("start-button");

    //https://www.youtube.com/watch?v=5UyRWPKVMqs
    //Take number as argument. Add all numbers from 1 to number passed & get sum
    // getSum(4) = 10
    // getSum(5) = 15
    // getSum(6) = 21
    //Note: Expect any positive integer between 1 and 1000


    function getSum(numToSum) {
      var sum;
    }
    startButton.addEventListener("click", (event) => {
      var numToSum = input.value;
      getSum(numToSum);
    })
    MinMax()
}






