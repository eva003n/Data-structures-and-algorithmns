# Insertion sort
- Builds the final sorted list one element at a time
- Consumes the input list with repetion while growing a sorted output list
- Each iteration it removes an element from the input list and inserts it in the correct position of the sorted output list until no elements remain in the input list
- Sorting is done in place by iterating up the array and growing the sorted list behind it
- At each array position, it checks the value their against the largest element in the sorted list(which happens to be next to it on the left)
- If larger if leaves the element in place and move to the next, if smaller it move the element to the correct position in the sorted array by shifting elements in sorted array
- The resulting array after k iterations, `k + 1`(because first entry is skipped) is fully sorted
- Each iteration removes the first remaining entry in the input list and inserts it to the correct position in the output list(fully sorted) thus extending it
- Performed from left to right

### Real world scenario
- Insertion sort works the way people sort a hand of playing cards
- We start with an empty left hand and a pile of cards face down on the table 
- We pick a card from the table and place it in the correct position on the left hand
- Yo find the correct position to place a card on the left hand we compare it with existing cards of the left hand
- Cards on the left hand are always sorted and these cards were at the top of the cards pile on the table



### Pseudocode(Iterative)
```text
INSERTIONSORT(A)

for i < A.length
    key = A[i]
    while j > 0 and A[j - 1] > key
        A[j] = A[j - 1]
        j = j - 1
    A[j] = key

```
The outer loop runs over all the elements dxcept the first which is considered to be sorted

Inner loop moves `A[i]` to its correct so that after the loop `i + 1` elements are sorted

Note that the and-operator in the test must use short-circuit evaluation, otherwise the test might result in an array bounds error, when j=0 and it tries to evaluate A[j-1] > A[j] (i.e. accessing A[-1] fails).

The new inner loop shifts elements to the write to clear a spot for `z = A[i]`

### Pseudocode(Recursive)
```text
function insertionSortR(array A, int n)
    if n > 0
        insertionSortR(A, n-1)
        x ← A[n]
        j ← n-1
        while j >= 0 and A[j] > x
            A[j+1] ← A[j]
            j ← j-1
        end while
        A[j+1] ← x
    end if
end function

```
It does not make the code any shorter, it also does not reduce the execution time, but it increases the additional memory consumption from O(1) to O(N) (at the deepest level of recursion the stack contains N references to the A array, each with accompanying value of variable n from N down to 1).