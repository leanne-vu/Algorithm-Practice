// Given a string, return its encoding defined as follows:
// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
//   Example

// For s = "aabbbc", the output should be
// solution(s) = "2a3bc".

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [memory limit]1 GB

//   [input] string s

// String consisting of lowercase English letters.

// Guaranteed constraints:
// 4 ≤ s.length ≤ 15.

// [output] string

// Encoded version of s.
function solution(s) {
  return s.replace(/([a-z])\1*/g, (it) => (it.length > 1 ? it.length + it[0] : it[0]))

}

solution()
