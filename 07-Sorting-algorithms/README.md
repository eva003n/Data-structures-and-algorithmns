## Sorting algorithms

Involves rearranging the elements of an array or list by applying a comparison operator on the elements

For sorting a numerical or lexicographical order is commonly used

### Bubble sort

It works by repeatedly swapping adjacent elements when their in the wrong order until eventually the largest element it in the correct position(bubble the largest element to its right position)

Its simple but its worst case and average case time complexity is O(n^2)

#### How it works

Involves traversing the list of elements from left to right, this each pass we swap adjacent elements if needed thus the next largest elements is moved into its final position

##### Steps

1. Traverse the list(left to right)
2. Compare adjacent elements
3. Swap if needed
4. When done with a pass the last element to be processed is in its final position

### Merge sort

Uses the divide and conquer paradigm
Works by dividing an unsorted list into n partition each containing one element(one element is considered sorted) then repeatedly merging the partitions to produce a new sorted list until there is only one sorted list remaining, the resulting list is fully sorted
Dividing the list is done recursively until it hits the base of the list with one item
Has a time complexity of O(n log n) for all cases (best, average and worst) which makes it efficient for large data sets
