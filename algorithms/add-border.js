// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

//   Example
// For

// picture = ["abc",
//   "ded"]
// the output should be

// solution(picture) = ["*****",
//   "*abc*",
//   "*ded*",
//   "*****"]

function solution(picture) {
  // adding the * on the top of the picture array as equal to the lenght of the top element of the array.
  const top = '*'.repeat(picture[0].length);
  picture.unshift(top);

  // looping through the array and concat the * at the end and the start of the array
  for (let i = 0; i < picture.length; i++) {
    picture[i] = picture[i] + '*';
    picture[i] = '*' + picture[i];
  }

  // adding the * on the bottom of the picture array as equal to the lenght of the last element of the array.
  const bottom = '*'.repeat(picture[1].length);
  picture.push(bottom);

  return picture;
}

solution();
