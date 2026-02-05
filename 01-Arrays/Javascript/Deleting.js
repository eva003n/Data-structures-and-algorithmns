console.log("Deleting from beginning")

let arr = [10, 20, 30, 40, 0];
let n = arr.length


console.log("Method 1: Built-in");
console.log("Before deletion");
console.log(arr.join(" "));

arr.shift();
console.log("After deletion");
console.log(arr.join(" "));

console.log("Method 1: Custom");
arr = [10, 20, 30, 40, 0];
console.log("Before deletion");
console.log(arr.join(" "));
for(let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
}
arr.length = n - 1;
console.log("After deletion")
console.log(arr.join(" "))

console.log("Deleting from given position");

console.log("Method 1: Custom");
arr = [10, 20, 30, 40, 0];
n = arr.length
let position = 2;
console.log("Before deletion");
console.log(arr.join(" "));

for(let i = position -1; i < n; i++) {
    arr[i] = arr[i + 1];
}
arr.length = n - 1;
console.log("After deletion");
console.log(arr.join(" "));

console.log("Method 1: Built-in");
arr = [10, 20, 30, 40, 0];
n = arr.length;
 position = 2;
console.log("Before deletion");
console.log(arr.join(" "));


arr.splice(position - 1, 1)
console.log("After deletion");
console.log(arr.join(" "));


console.log("Deleting first occurence of an element");

console.log("Method 1: Custom");
arr = [10, 20, 20, 20, 30, 40, 0];
// arr = [10, 20, 30, 40];
n = arr.length;
let element = 20;
console.log("Before deletion");
console.log(arr.join(" "));
//traverse - linear
let frequency = 0;
for (let i = 0; i < n; i++) {
  if(arr[i] === element && !frequency) {
    frequency++
    for(let a = i; a < n; a++) {
        arr[a] = arr[a + 1];
    }
    arr.length = n - 1;
  }
}
console.log("After deletion");
console.log(arr.join(" "));

console.log("Method 1: Built-in");
arr = [10, 20, 20, 20, 30, 40, 0];
// arr = [10, 20, 30, 40];
n = arr.length;
element = 20;
console.log("Before deletion");
console.log(arr.join(" "));

const index = arr.indexOf(element)
arr.splice(index, 1);
console.log("After deletion");
console.log(arr.join(" "));

console.log("Deleting all occurences of an element");

console.log("Method 1: Custom");
arr = [0, 1, 3, 0, 2, 2, 4, 2];
element = 2;
n = arr.length;

console.log("Before deletion");
console.log(arr.join(" "));

let k = 0;
function removeElement(arr, element) {
    for(let i = 0; i < n; i++) {
        //subarray
        if(arr[i] !== element) {
            arr[k] = arr[i];
    
            k++;
        }
    }
    return k;

}
console.log("After deletion");
// Driver Code
console.log(removeElement(arr, element));
console.log(arr.join(" "));


console.log("Method 1: Custom");
arr = [10, 20, 20, 20, 30, 40, 0];
// arr = [10, 20, 30, 40];
n = arr.length;
element = 20;
console.log("Before deletion");
console.log(arr.join(" "));

let notEqual = [];

for(let i = 0; i < n; i++) {
    //subarray
    if(arr[i] !== element) {
        notEqual.push(arr[i])
    }
}
console.log("After deletion");
console.log(notEqual.join(" "));
console.log(notEqual.length);


console.log("Deleting an element from the end ");

console.log("Method 1: Custom");
arr = [10, 20, 20, 20, 30, 40, 0];
// arr = [10, 20, 30, 40];
n = arr.length;
element = 20;
console.log("Before deletion");
console.log(arr.join(" "));

console.log("After deletion");
arr.length = n - 1
console.log(arr.join(" "));

console.log("Method 1: Built-in");
arr = [10, 20, 20, 20, 30, 40, 0];

console.log("Before deletion");
console.log(arr.join(" "));

console.log("After deletion");

console.log(arr.pop());










