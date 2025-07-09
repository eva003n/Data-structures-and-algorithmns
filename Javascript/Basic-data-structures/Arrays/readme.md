# Array data structure
Array is a colletion of items of the same vriable type stored in contiguous memory locations
Contiguous memory allows efficient access and manipulation

## Types of arrays
Categorised based on
1. Sixe
2. Dimensions

## Sixe
1. Fixed sized array- the array size cannot be altered or updated
2. Dynamic sized array - the raay size changes as the user requirements change at runtime
## Dimension
1. One dimensional array - this is row where elemenys are placed one after another
2. Multi-dimensional array - an array with more than one dimension
2D 0 this is an array of arrays, matrix with rows and columns
3D 0 this is an array of two dimensional arrays

## Operations on arrays
### Traversal
Involves accessing and processing each element of an array sequenrially
1. Linear traversal - start to end
2. Reverse traversal - end to start
### Insertion
Involves adding an new elements to an array at a specific position while maintaining a the order of existing elements
#### How insertion works
1. Identify position
2. Shift elements
3. Insert the new element
4. Update the array size

#### Types of insertion
1. Insertion at the Beginning (Index 0)

Every element must shift one position right.
This is the least efficient case for large arrays as it affects all elements.

2. Insertion at a Specific Index

Elements after the index shift right.
If the index is in the middle, half of the array moves.
3. Insertion at the End

The simplest case since no shifting is required.
Used in dynamic arrays where size increases automatically 

### Deletion
Removing an element from a specific position while meintaining the order of remaining elements

#### How deletion works
1. Identify the Position: Find the index of the element to be deleted.
2. Shift Elements: Move the elements after the deleted element one position to the left.
3. Update the Size (if applicable): If using a dynamic array, the size might be reduced.

#### Types of Deletion

1. Deletion at the Beginning (Index 0)

Every element shifts left by one position.
This is the most expensive case as it affects all elements.
2. Deletion at a Specific Index

Only elements after the index shift left.
If the index is in the middle, half of the array moves.
3. Deletion at the End

The simplest case since no shifting is required.
The size of the array is reduced (in dynamic arrays).

### Searching
Searching in an array refers to the process of finding a specific element in a given list of elements. The goal is to determine whether the element exists in the array and, if so, find its index (position).

Searching is a fundamental operation in programming, as it is used in data retrieval, filtering, and processing.

#### Types of Searching in an Array
1. Linear Search (Sequential Search)

This is the simplest search algorithm.
It traverses the array one element at a time and compares each element with the target value.
If a match is found, it returns the index of the element.
If the element is not found, the search continues until the end of the array.

2. Binary Search (Efficient Search for Sorted Arrays)
Works only on sorted arrays (in increasing or decreasing order).
Uses a divide and conquer approach.
It repeatedly divides the search space in half until the target element is found.

#### How Binary Search Works?
1. Find the middle element of the array.
2. If the target is equal to the middle element, return its index.
3. If the target is less than the middle element, search the left half.
4. If the target is greater than the middle element, search the right half.
5. Repeat until the element is found or the search space is empty.

