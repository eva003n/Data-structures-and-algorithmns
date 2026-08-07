function linearSearch(arr, element) {
  let i = 0; // initialization

  // maintainance
  for (i; i < arr.length; i++) {
    if (arr[i] == element) {
      return i; // termination
    }
  }
  return null; // termination
}

let arr = [31, 41, 59, 26, 41, 58];
console.log(linearSearch(arr, 59))
