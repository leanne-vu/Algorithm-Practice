// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top - left and in clockwise direction.

//   Example

// For n = 3, the output should be

// solution(n) = [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]
// Input / Output

// [execution time limit]4 seconds(js)

// [memory limit]1 GB

// [input] integer n

// Matrix size, a positive integer.

// Guaranteed constraints:
// 3 ≤ n ≤ 100.

// [output] array.array.integer
function solution(n) {
  var res = Array(n * n).fill(null).map((el, i) => i + 1);
  var m = [];
  var i = 0;
  while (res.length) {
    m.reverse();
    m = m.length ? m[0].map((col, i) => m.map(row => row[i])) : m;
    m.unshift(res.splice(-(Math.floor(i / 2) + 1)));
    i++;
  }
  return m;
}

solution()
