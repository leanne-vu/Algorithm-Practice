
// Define an integer's roundness as the number of trailing zeroes in it.

// Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.
//   Example

// For n = 902200100, the output should be
// solution(n) = true.

// One of the possible ways to increase roundness of n is to swap digit 1 with digit 0 preceding it: roundness of 902201000 is 3, and roundness of n is 2.

// For instance, one may swap the leftmost 0 with 1.

// For n = 11000, the output should be
// solution(n) = false.

// Roundness of n is 3, and there is no way to increase it.

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [memory limit]1 GB

//   [input] integer n

// A positive integer.

// Guaranteed constraints:
// 100 ≤ n ≤ 109.

// [output] boolean

// true if it's possible to increase n's roundness, false otherwise.

function solution(n) {
  return (
    String(
      Number(
        String(n)
          .split("")
          .reverse()
          .join("")
      )
    ).indexOf("0") >= 0
  );
}
solution()
