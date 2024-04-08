// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

//   Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// solution(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:
// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8. hello
function solution(inputArray, k) {
  var max = inputArray.slice(0, k).reduce((a, b) => a + b);
  var cur = max;
  for (var i = k; i < inputArray.length; i++) {
    cur = cur + inputArray[i] - inputArray[i - k];
    if (cur > max)
      max = cur
  }
  return max
}
solution()
