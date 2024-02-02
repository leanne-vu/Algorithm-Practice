/*
Check if the given string is a correct time representation of the 24-hour clock.
Example
For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.
*/

function solution(time) {
  let firstTwo = time.slice(0, 2);
  let lastTwo = time.slice(3, 5);

  if (firstTwo < 0 || firstTwo > 23) {
    return false;
  }
  else if (lastTwo < 0 || lastTwo > 59) {
    return false;
  }
  else {
    return true;
  }
}

solution()
