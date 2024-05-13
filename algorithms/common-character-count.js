// Given two strings, find the number of common characters between them.
//   Example
// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function solution(s1, s2) {
  var count = 0;
  s1 = Array.from(s1);
  s2 = Array.from(s2);

  s1.forEach(e => {
    if (s2.includes(e)) {
      count++;
      s2.splice(s2.indexOf(e), 1);
    }
  });

  return count;
}

solution();
