function solution(inputArray) {
  let longboys = [];
  let max = 0;
  for (const str of inputArray) {
    if (str.length > max) {
      longboys = [];
      max = str.length;
      longboys.push(str);
    } else if (str.length === max) {
      longboys.push(str);
    }
  }
  return longboys;
}solution();
