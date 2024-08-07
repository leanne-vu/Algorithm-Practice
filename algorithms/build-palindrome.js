// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
//   Example

// For st = "abcdc", the output should be
// solution(st) = "abcdcba".

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [memory limit]1 GB

//   [input] string st

// A string consisting of lowercase English letters.

// Guaranteed constraints:
// 3 ≤ st.length ≤ 10.

// [output] string
function solution(st) {
  var i = 0;
  var aux;
  while (st != st.split('').reverse().join('')) {
    aux = st.split('')
    aux.splice(st.length - i, 0, st[i])
    st = aux.join('');
    i++;
  }
  return st;
}

solution()
