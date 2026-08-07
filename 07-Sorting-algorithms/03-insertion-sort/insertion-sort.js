function insertionSort(arr) {
    const n = arr.length;
    let i = 1;

    for(i; i < n; i++) {
      let j = i;
      let key = arr[i];// current card from pile of cards in table
      // find the correct position to put the current card on the left hand
      while (j > 0 && arr[j - 1] < key) {
        swap(j, arr);
        j = j - 1;
      }
      // smallest left shits to the left
      arr[j] = key; 
    }

    return arr

}



function swap(j, arr) {
// shift the sorted cards on the left hand to the right 
  arr[j] = arr[j - 1]; 
}

let arr = [
  842, 153, 967, 421, 75, 689, 234, 918, 506, 312, 47, 781, 199, 654, 890, 28,
  473, 135, 799, 560,
];
console.log(insertionSort(arr))

arr = [31, 41, 59, 26, 41, 58]
console.log(insertionSort(arr))