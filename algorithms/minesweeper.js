
// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
// [false, true, false],
// [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]

function solution(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;

  const outArray = Array.from(Array(height), () => new Array(width));

  let mines = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {

      mines = 0;
      if (i > 0) {
        if (matrix[i - 1][j - 1]) mines += 1;
        if (matrix[i - 1][j]) mines += 1;
        if (matrix[i - 1][j + 1]) mines += 1;
      }

      if (i < height - 1) {
        if (matrix[i + 1][j - 1]) mines += 1;
        if (matrix[i + 1][j]) mines += 1;
        if (matrix[i + 1][j + 1]) mines += 1;
      }

      if (matrix[i][j - 1]) mines += 1;
      // if(matrix[i][j]) mines += 1;  As it seems you can't count the middle square! welp... I didn't know that!
      if (matrix[i][j + 1]) mines += 1;

      outArray[i][j] = mines;

    }
  }

  return outArray;
}

solution();
