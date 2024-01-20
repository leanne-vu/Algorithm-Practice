// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

//   Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.
function solution(inputArray) {
  var arr = inputArray;
  var x = 0;
  var y = 0;
  var p = -Infinity;
  for (var i = 0; i < arr.length; i++) {
    x = arr[i];
    y = arr[i + 1];
    if (x * y > p) {
      p = x * y;
    }
  }
  return p;
}

solution();
