function solution(inputString) {
  var first = inputString;
  var second = inputString.split('').reverse().join('');
  return (first === second);
}
solution();

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.
