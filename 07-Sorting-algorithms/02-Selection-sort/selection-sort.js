function selectionSort(arr) {
  const n = arr.length;
  // [9, ... n-1] represents the sorted list
  for (let i = 0; i < n - 2; i++) {
    let temp = arr[i];
    // assume the first element is sorted(even if its not)
    let minimumId = i;

    /* _______ Unsorted list [1, ...n - 1] _________ */
    for (let j = i + 1; j < n; j++) {
      // select for the smallest element
      if (arr[j] < arr[minimumId]) {
        minimumId = j;
      }
    }
    // swap the values
    arr[i] = arr[minimumId];
    arr[minimumId] = temp;
  }
  return arr;
}

let arr = [
  842, 153, 967, 421, 75, 689, 234, 918, 506, 312, 47, 781, 199, 654, 890, 28,
  473, 135, 799, 560,
];
console.log(selectionSort(arr));
