function mergeSort(list) {
  const size = list.length;

  // base case(list has only one element is considered sorted)
  if (size === 1) {
    return;
  }

  /* __________ Divide(unsorted list) ___________ */
  // split list into halves when elements are greater than one
  const midPoint = Math.floor(size / 2);
  const leftList = list.slice(0, midPoint);
  const rightList = list.slice(midPoint);

  // recursively both the left and right list into halves
  mergeSort(leftList);
  mergeSort(rightList);

  /* ______ Conquer ______ */
  // merge while sorting the pieces together]
  merge(leftList, rightList, list);
  // return the fully sorted array
  return list;
}

function merge(leftList, rightList, list) {
  let index = 0;

  while (leftList.length && rightList.length) {
    if (rightList[0] < leftList[0]) {
      list[index++] = rightList.shift();
    } else {
      list[index++] = leftList.shift();
    }
  }

  while(leftList.length) {
    console.log("Left list is: ", leftList)
    list[index++] = leftList.shift()
  }
  while(rightList.length) {
    console.log("Right list is: ", rightList)
    list[index++] = rightList.shift()
  }

  console.log("**End of merge** list is ", list)
}

const arr = [5, 1, 7, 3, 2, 8, 6, 4, 12]
mergeSort(arr)