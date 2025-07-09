console.log("Linear search on unsorted array");
console.log("Custom method");

let arr = [30, 40, 50, 10];
let n = arr.length;
let element = 30;

console.log("Before search");
console.log(arr.join(" "));

console.log("After search");
function findElement(arr, element) {
  n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === element) {
      return i;
    } else {
      return -1;
    }
  }
}
let position = findElement(arr, 30);
function logResult() {
  if (position === -1) {
    console.log("Element doesn't exist");
  } else {
    console.log(`Element found at index ${position}`);
  }
}
logResult();

console.log("Built-in method");
console.log("Before search");
console.log(arr.join(" "));

position = arr.findIndex((value) => value === element);
logResult();

console.log("Binary search (sorted array)");
arr = [5, 6, 7, 8, 9, 10];
n = arr.length;
let key = 10;
console.log("Before search");
console.log(arr.join(" "));

function binarySearch(arr, low, high, key) {
  //never go below zere
  if (high < low) return -1;

  let mid = Math.trunc((high + low) / 2);
  //if target is in the middle return its index
  if (key == arr[mid]) return mid;
  if (key > arr[mid]) {
    //larger, search right half
    return binarySearch(arr, mid + 1, high, key);
  }
  //less, search left half
  return binarySearch(arr, mid - 1, high, key);
}

console.log("After search");

console.log(binarySearch(arr, 0, n - 1, key));

function sort(arr, order) {
  console.log("Before sorting");
  console.log(arr.join(" "));

  console.log("Sorting...");
  n = arr.length;

  //sorted array 1 -1
  //  step 1:Reverse Traversal
  for (let i = n - 1; i > 0; i--) {
    if (order == 1) {
      if (arr[i] > arr[i - 1]) {
        //move to right if larger than previous
        arr[i + 1] = arr[i];
      } else if (arr[i] < arr[i - 1]) {
        arr[i + 1] = arr[i - 1];
        //move to the left wen smaller
        arr[i - 1] = arr[i];
      }
    } else {
      //descending
      if (arr[i] > arr[i - 1]) {
        arr[i + 1] = arr[i - 1]; //small move right
        arr[i - 1] = arr[i]; //large moves 
        if (i == 1){
        console.log(arr.join(" "));
        break;


        }
      } else if (arr[i - 1] > arr[i]) {
        //larger moves to the left
        arr[i - 1] = arr[i - 1];
        arr[i + 1] = arr[i];//smaller
      }
    }
  }
  //remove duplicate
  arr[0] = undefined;

  console.log("After sorting");
  console.log(arr.join(" "));
}
sort([1, 20, 3, 20], -1);
