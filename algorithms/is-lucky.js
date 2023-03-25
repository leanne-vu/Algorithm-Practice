// Ticket numbers usually consist of an even number of digits.A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// solution(n) = true;
// For n = 239017, the output should be
// solution(n) = false.

function solution(n) {
  n = n.toString();
  var half = n.length / 2; var first = 0; var second = 0;
  for (var i = 0; i < half; i++) {
    first += parseInt(n[i]);
  }
  for (var j = half; j < n.length; j++) {
    second += parseInt(n[j]);
  }
  return first === second;
}

solution();
