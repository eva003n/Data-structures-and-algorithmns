function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let temp = arr[i];
    for (let j = i + 1; j < n; j++) {
      // compare to find the smallest element
      if (arr[i] < arr[j]) {
        temp = arr[j];
      }
    }
    arr[i] = temp;
  }
  return arr
}

let arr = [
  842, 153, 967, 421, 75, 689, 234, 918, 506, 312, 47, 781, 199, 654, 890, 28,
  473, 135, 799, 560,
];
console.log(selectionSort(arr));