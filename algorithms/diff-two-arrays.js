// This algorithm is about to compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.In other words, return the symmetric difference of the two arrays.

// We can have a function that will take in the two arrays as arguments then return the difference.
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(item => !arr1.includes(item) || !arr2.includes(item));
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
