// time complexity O(n^3)  space complexity O(n)
function tripleSumBruteForce(arr) {
  const n = arr.length;
  let sum;
  const target = 0;
  // use hash set to ensure we do not duplicate triplets
  const triplets = new Set();

  // iterate via indexes all together
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sum = arr[i] + arr[j] + arr[k];

        if (sum === target) {
          // sort array to ensure consistent ordering avoid duplicates
          const triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
          triplets.add(triplet.toString()); // convert to string to store in set
        }
      }
    }
  }
  // convert hash set back to and array with each triplet containing numbers
  return Array.from(triplets).map((triplet) => triplet.split(",").map(Number)); // convert back to an array of numbers
}

let arr = [0, -1, 2, -3, 1];
console.log(tripleSumBruteForce(arr));

// find paitr of numbers that when added return value where y + z = target - x
function pairSumSorted(arr, target) {
  // arr here is already sorted
  const n = arr.length;
  let sum;

  // inward traversal
  let leftPtr = 0,
    rightPtr = n - 1;

  for (let i = 0; i < n; i++) {
    sum = arr[leftPtr] + arr[rightPtr];

    // skip prevent duplicate where current value of 'b' is same as previous number

    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    // if indexes are the same no pair found exit
    if (leftPtr === rightPtr) {
      break;
    }

    // return pair that when aadded with x result to target
    if (sum === target) {
      return [arr[leftPtr], arr[rightPtr]];
    }

    // decrease right pointer when the sum of pairs it greater than target to find pairs that result to lesser sum
    if (sum > target) {
      rightPtr--;
    }

    // vice versa of the right pointer
    if (sum < target) {
      leftPtr++;
    }
  }
  // if no pair found return empty array
  return [];
}

function tripleSum(arr) {
  const n = arr.length;
  let sum;

  // triple sum target
  const target = 0;
  // store unique triplets
  const triplets = new Set();

  // sort array
  arr.sort((a, b) => a - b);

  let twoSumTarget;
  for (let i = 0; i < n; i++) {
    twoSumTarget = target - arr[i];

    // part of array excluding current element
    const slicedArray = arr.slice(i + 1);
    // console.log(`Sliced [${slicedArray}]` );

    // (optimization) triplets containing only positive numbers will never sum to zero
    if (arr[i] > 0) break;

    // skip prevent duplicate where current value of 'a' is same as previous number
    //sorted array
    if (i > 0 && slicedArray[i] === slicedArray[i - 1]) {
      continue;
    }

    // find pairs that sum to target '-a' -> b + c = 0 - a
    const pairs = pairSumSorted(slicedArray, twoSumTarget);

    // only when returned pairs are returned
    if (pairs.length >= 2) {
      // add the element to pairs array
      pairs.push(arr[i]);
      // ensure consistent ordering to avoid duplicates
      pairs.sort((a, b) => a - b);

      // add unique triplet
      triplets.add(pairs.toString());
    }
  }
  // convert each triplet to and array of numbers

  return Array.from(triplets).map((triplet) => triplet.split(",").map(Number));
}
// test cases
arr = [-1, 2, -2, 1, -1, 2];
arr = [-4, -4, -2, 0, 0, 1, 2, 3];
arr = [0, 0, 1, -1, 1, -1];
arr = [0, 0, 0]
arr = [1, -1]
arr = [0]
arr = [];
console.log(tripleSum(arr));
