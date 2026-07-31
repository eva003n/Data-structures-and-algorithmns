function insertionSort(arr) {
    const n = arr.length;
    let i = 1;

    while(i < n) {
      let j = i;
      let x = arr[i];// current element
      while (j > 0 && arr[j - 1] > x) {
        swap(j, arr);
        // makes sure the element is in the correct position
        j = j - 1;
      }
      // smallest left shits to the left
      arr[j] = x; 
      // move to the next
      i = i + 1;
    }

    return arr

}



function swap(j, arr) {
// shift the largest element to the right
  arr[j] = arr[j - 1]; 
}

let arr = [
  842, 153, 967, 421, 75, 689, 234, 918, 506, 312, 47, 781, 199, 654, 890, 28,
  473, 135, 799, 560,
];
console.log(insertionSortR(arr))