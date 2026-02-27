function tripleSumBruteForce(arr) {
  const n = arr.length;
  let sum;
  const target = 0;
  const triplets = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sum = arr[i] + arr[j] + arr[k];

        if (sum === target) {
          // sort array to avoid duplicates
          const triplet = [arr[i], arr[j], arr[k]].sort((a, b) => a - b);
          triplets.add(triplet.toString()); // convert to string to store in set
        }
      }
    }
  }

  return Array.from(triplets).map((triplet) => triplet.split(",").map(Number)); // convert back to an array of numbers
}

const arr = [0, -1, 2, -3, 1];
console.log(tripleSumBruteForce(arr));

function pairSumSorted(arr, target) {
  const n = arr.length;
  let sum;

  // sort array first to enable predictive dynamics
  arr.sort((a, b) => a - b);
  // inward traversal
  let leftPtr = 0, 
    rightPtr = n - 1;

  for (let i = 1; i < n; i++) {
    sum = arr[leftPtr] + arr[rightPtr];

   // if indexes are the same exit
    if(leftPtr === rightPtr) {
        break;
    }

    if (sum === target) {
      return [arr[leftPtr], arr[rightPtr]];
    }

    // decrease to match target
    if (sum > target) {
      rightPtr--;
    }

    // in crease to match target
    if (sum < target) {
      leftPtr++;
    }
  }
  return [];
}

function tripleSum(arr) {
  const n = arr.length;
  let sum;
  const target = 0;
  const triplets = new Set();

  for (let i = 0; i < n; i++) {
    const pairs = pairSumSorted(arr, target - arr[i]);
    if (pairs.length >= 2) {
      pairs.push(arr[i]);
      pairs.sort((a, b) => a - b)

      triplets.add(pairs.toString());
    }else {
        return [];
    }
  }

  return Array.from(triplets).map((triplet) => triplet.split(",").map(Number));
}

console.log(tripleSum(arr));
