function bubbleSort(arr, n) {
  // pass left to right (array size bounded)
  for (let i = 0; i < n - 1; i++) {
    let flag = 0; // track swaps
    // with each pass access and compare adjacent elements(using comparison operator)
    for (let j = 0; j < n - i - 1; j++) {
      // current element is greater than the next
      if (arr[j] > arr[j + 1]) {
        // swap
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        flag++;
      }
    }

    // if their no swaps after first pass then exit(list is already sorted)
    if (flag == 0) break;
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

console.log(process.pid);

let arr = [100, 20, 340, 4, 700, 1];
// arr = generateInputs(50_000);
// console.log(arr);

// console.time("Bubble sort")
arr = bubbleSort(arr, arr.length);
// console.timeEnd("Bubble sort")
console.log(arr);
