// Given an array of equal - length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character.Return true if it's possible, and false if not.

// Note: You're only rearranging the order of the strings, not the order of the letters within the strings!

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// solution(inputArray) = false.

// There are 6 possible arrangements for these strings:

//   ["aba", "bbb", "bab"]
//   ["aba", "bab", "bbb"]
//   ["bbb", "aba", "bab"]
//   ["bbb", "bab", "aba"]
//   ["bab", "bbb", "aba"]
//   ["bab", "aba", "bbb"]
// None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.

// For inputArray = ["ab", "bb", "aa"], the output should be
// solution(inputArray) = true.

//   It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so return true.

function solution(inputArray) {
  var possible = false;

  // helper function to check permutations of the input array
  var permute = function (arr, m = []) {
    if (arr.length === 0) {
      // iterate through all permutations and check for a single character difference
      for (var i = 0; i < m.length - 1; i++) {
        var diff = 0;
        for (var j = 0; j < m[i].length; j++) {
          if (m[i][j] !== m[i + 1][j]) {
            diff++;
          }
        }
        // if more than one character difference, return
        if (diff !== 1) {
          return;
        }
      }
      possible = true;
    } else {
      for (var q = 0; q < arr.length; q++) {
        var curr = arr.slice();
        var next = curr.splice(q, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
    // call permute function to check all permutations
  permute(inputArray);
  return possible;
}
solution();
