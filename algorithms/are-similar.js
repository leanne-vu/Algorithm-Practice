// Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.
//   Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// solution(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// solution(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// solution(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

function solution(a, b) {
  var i = 0;
  var length = a.length;
  var diff = [];
  for (;i < length; i++) {
    // if corresponding elements in a and b are not equal, push their position to diff array to be used later.
    if (a[i] !== b[i]) {
      diff.push(i);
    }
  }
  // if there are no differences then the arrays are similar.
  if (diff.length === 0) {
    return true;
  }
  // if there are 2 differences, check to see if you would be able to swap the elemenst to make the arrays equal.
  if (diff.length === 2) {
    if (a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]) {
      return true;
    }
  }
  // if previous conditionals don't return true, the arrays are not similar.
  return false;
}

solution();
