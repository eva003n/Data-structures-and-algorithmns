function bubbleSort(arr) {
  const n = arr.length
  // pass left to right (array size bounded)
  for (let i = 0; i < n; i++) {
    let swapped = false; // track swaps
    // with each pass access and compare adjacent elements(using comparison operator)
    for (let j = 0; j < n - i - 1; j++) {
      // current element is greater than the next
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true;
      }
    }

    // if their no swaps after  pass then exit(list is already sorted)
    if (!swapped) break;
  }
  return arr;
}

function generateInputs(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr[i] = Math.round(Math.random() * length);
  }
  return arr;
}


let arr = [
  842, 153, 967, 421, 75, 689, 234, 918, 506, 312, 47, 781, 199, 654, 890, 28,
  473, 135, 799, 560,
];
// arr = generateInputs(10);
// console.log(arr);

// console.time("Bubble sort")
arr = bubbleSort(arr);
// console.timeEnd("Bubble sort")
console.log(arr);
