function quickSort(arr, low, high) {
    if(low >= high) {
        return
    }

    if (low < high) {
      // pivot index
      let pivot = partition(arr, low, high);
      console.log(arr)

      // recursively call smaller elements and greater or equal elements
      quickSort(arr, low, pivot - 1);
      quickSort(arr, pivot + 1, high);

    }  
}

let arr = [10, 7, 8, 9, 1, 5];
const n = arr.length

quickSort(arr, 0, n - 1)
console.log(arr)

function partition (arr, low, high) {

    // choose the pivot(first, middle or the last)
    let pivot = arr[high];

    // index of the smaller element and indicate the right position of the pivot found so far
    let i = low - 1;

    // traverse the array [low, ...high]
    // move smaller elements to the left
    // all elements from [low, ...i] are the smallest at each iteration
    for(let j = low; j < high - 1; j++) {
        if(arr[j] < pivot) {
            i++;
            swap(arr, i, j)
        }
    }

    // move pivot after smaller elements and return its position
    swap(arr, i + 1, high)
    return i + 1
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j];
    arr[j] = temp;

    return arr

}

