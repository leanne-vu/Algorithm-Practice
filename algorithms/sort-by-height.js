
// Some people are standing in a row in a park.There are trees between them which cannot be moved.Your task is to rearrange the people by their heights in a non - descending order without moving the trees.People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function solution(a) {
  const filtered = a.filter(val => val !== -1);
  const sorted = filtered.sort((a, b) => a - b);
  return a.map(val => val === -1 ? -1 : sorted.shift());

}

solution();
