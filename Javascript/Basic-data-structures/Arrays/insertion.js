//beginning
let arr = [10, 20, 30, 40, 0];
let n = arr.length; 
let element = 50;
// console.log("Before insertion")
// console.log(arr.join(" "))
// arr.unshift(50)
// console.log("Before insertion");
// console.log(arr.join(" "));

//custom method

console.log("Before insertion");
// console.log(arr.splice(0, n).join(" "));
//reverse traversal
for(let i = n - 1; i >= 0; i--) {
    arr[i + 1] = arr[i];
}
arr[0] = element;
console.log("After insertion");
console.log(arr.join(" "));

//specific position
console.log("Insertion at specific position")
console.log("Method 1: Custom method")
console.log("Before insertion");
console.log(arr.join(" "));

let position = 2;
element = 25;
//50 10 20 30 40 0
for(let i = n - 1; i >= position - 1; i-- ) {
    arr[ i + 1] = arr[i];
}
arr[position - 1] = element;
console.log("After insertion");
console.log(arr.join(" "));

console.log("Method 2: Built-in method")
element = 3;
console.log("Before insertion");
console.log(arr.join(" "));

console.log(arr.splice(position - 1, 0, element))
console.log("After insertion");
console.log(arr.join(" "));

//specific position
console.log("Insertion at end of array")

console.log("Method 1: Custom method")
console.log("Before insertion");
console.log(arr.join(" "));

element = 100;
n = arr.length
arr[n] =  element;

console.log("After insertion");
console.log(arr.join(" "));

console.log("Method 1:Built-in method")
console.log("Before insertion");
console.log(arr.join(" "));

element = 67;
arr.push(element)
console.log("After insertion");
console.log(arr.join(" "));