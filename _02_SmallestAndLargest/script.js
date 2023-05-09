window.onload = function () {

    //https://www.youtube.com/watch?v=JzNxy0g2b6c
    //Create function that takes array of ints & return the min & max values in order
    // minMax([1, 2, 3, 4, 5]) => [1, 5]
    // minMax([2343435, 5]) => [5, 2343435]
    // minMax([1]) => [1, 1]


    function MinMax(...array) {
      var min = Math.min(array);
      var max = Math.max(array);
      var result = [min, max];
      console.log(result);
    }

    MinMax([1, 4, 27, 88, 317, 2, 88, 11, 88, 12])
}






