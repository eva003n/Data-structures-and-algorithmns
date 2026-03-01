// a string is a palindrome if it reads the same forward and backwards

function isPalindromeBruteForce(text) {
  // ensure some consistency
  text = text.toLowerCase();
  // reverse the string
  const reversedString = text.split("").reverse().join(""); // -> time O(n) space O(n)
  // check if they match
  console.log(reversedString);

  return text === reversedString;
}

// test cases
const s1 = "racecar";
const s2 = "Radar";
const s3 = "abcdef";

console.log(isPalindromeBruteForce(s1));
console.log(isPalindromeBruteForce(s2));
console.log(isPalindromeBruteForce(s3));

function isPalindrome(text) {
  // two pointers space O(n)
  let leftPtr = 0;
  let rightPtr = text.length - 1;

  // time -> 0(n)
  while (leftPtr < rightPtr) {
    if (text[leftPtr] !== text[rightPtr]) {
      return false;
    }
  }

  return true;
}

console.log("---- Two pointer ----")
console.log(isPalindrome(s1));
console.log(isPalindrome(s2));
console.log(isPalindrome(s3));