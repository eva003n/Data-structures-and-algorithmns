function insertionSort(arr) {
    const n = arr.length;
    let i = 1;

    while(i < n) {
      let j = i;
      let x = arr[i];// current element
      while (j > 0 && arr[j - 1] > x) {
        swap(j, arr);
        j = j - 1;
      }
      // rightmost element is larger maintain its position
      arr[j] = x; 

      i = i + 1;
    }

    return arr

}

function insertionSortR(arr, n) {
    if(n > 0) {
        insertionSort(arr, n - 1)
        const x = arr[n]
        let j = n - 1
        while(j >= 0 && arr[j] > x) {
            arr[j + 1]= arr[j]
            j = j - 1
        }
        arr[j + 1] = x

    }

}

function swap(j, arr) {
// shit the element to the right
  arr[j] = arr[j - 1]; 
}

let arr = [
  842, 153, 967, 421, 75, 689, 234, 918, 506, 312, 47, 781, 199, 654, 890, 28,
  473, 135, 799, 560,
];
console.log(insertionSort(arr))