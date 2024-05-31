var arraySum = function(numbers) {
    var sums = [];
    for (var i = 0; i < numbers.length; i++) {
      var sum = 0;
      for (var j = 0; j < numbers[i].length; j++) {
        sum += numbers[i][j];
      }
      sums.push(sum);
    }
    return sums;
  }
  var numbers=[
    [1,2,3,4],
    [5,6,7],
    [8,9,10,11,12]
  ];
  console.log(arraySum(numbers));
  