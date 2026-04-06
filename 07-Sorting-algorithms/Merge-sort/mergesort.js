function mergeSort(arr, n) {
  // divide the array into half until array is at unit length
  if (n == 1) {
    return;
  }
  // get whole numbers even when halving the array is not even
  let middle = Math.round(n / 2);

  // create sub arrays
  let arr1 = arr.slice(0, middle );
  let arr2 = arr.slice(middle, n);

  console.log(arr1, arr2)

  // repeat the same sequence
  mergeSort(arr1, arr1.length);
  mergeSort(arr2, arr2.length);


}
let arr = [38, 27, 43, 10];

mergeSort(arr, arr.length)

function merge(arr1, arr2) {
    if(arr1[0] > arr2[0]) {
        let temp = arr[0]
        arr1[0] = arr2[0];
        arr2[0] = temp
    }
    return [arr1, arr2]

}