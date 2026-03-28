
/**
 * Time O(m + n)
 * m represents the extra space required 
 * n represents the no of elements we need to search
 * Space O(m), extra space required to store the parent array in hash table
 
 */
function checkIsSubset(arr1, arr2) {
  // store parent array in hash table so that its easier to search

  const hashTable = new Set(arr1); 

  // ensure the child array is a subset of parent
  for (const element of arr2) {
    // once the element doesnt exists
    if (!hashTable.has(element)) {
      return false;
    }
  }
  // all elements exists
  return true;
}

let arr1 = [11, 1, 13, 21, 3, 7];
let arr2 = [11, 3, 7, 1];

arr1 = [1, 2, 3, 4, 5, 6];
arr2 = [1, 2, 4];

// arr1 = [10, 5, 2, 23, 19],
// arr2 = [19, 5, 3] 
console.log(checkIsSubset(arr1, arr2));
