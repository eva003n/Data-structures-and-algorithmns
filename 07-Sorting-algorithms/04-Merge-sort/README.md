# Merge Sort


## Why merge sort matters

Selection sort, bubble sort, and insertion sort all share a weakness: they're O(n²), meaning their running time grows quadratically with input size. Merge sort is the first step into a faster class of sorting algorithms, and it's a classic example of the **divide and conquer** design pattern (the same paradigm behind binary search).

## The core idea

> It's much easier to sort two small, already-sorted lists than one large, unsorted one.

Merge sort works by:
1. Splitting an unsorted collection in half.
2. Recursively sorting each half.
3. Merging the two sorted halves back into one sorted collection.

## Divide and conquer, in three steps

1. **Divide** — break the problem down into the smallest possible subproblem of the same type.
2. **Conquer** — solve the smallest subproblems first, then apply that same solution recursively to larger ones.
3. **Combine** — merge the solved subproblems back together until you've rebuilt the original (now solved) problem.

## Walking through it

Given an unsorted list of 8 items:

- **Divide:** split repeatedly — 8 items → two lists of 4 → four lists of 2 → eight lists of 1.
- **Base case:** a list with a single element is *already sorted* by definition — there's nothing to compare it against. This is the recursion's stopping point.
- **Conquer/Combine:** merge neighboring lists back together in sorted order — 8 lists of 1 → 4 sorted lists of 2 → 2 sorted lists of 4 → 1 fully sorted list of 8.

Each merge step only has to combine two *already-sorted* lists, which is a much simpler operation than sorting one large unsorted list from scratch.

## Why recursion fits so well

- The base case (a one-element list) is easy to detect — same idea as reaching a leaf node when recursing over a tree.
- Once you've written the logic to merge two sorted lists, that exact same logic works whether the lists have 1 element or 100 — no special-casing needed as the sublists grow.
- This is why merge sort is almost always implemented recursively: a `mergeSort` function that splits the array and calls itself on each half, paired with a `merge` function that does the actual combining.

## Basic shape of the algorithm (pseudocode)

```
function mergeSort(array):
    if length(array) <= 1:
        return array                     // base case: already sorted

    midpoint = length(array) / 2
    left = mergeSort(array[0:midpoint])  // recursively sort left half
    right = mergeSort(array[midpoint:])  // recursively sort right half

    return merge(left, right)            // combine two sorted halves

function merge(left, right):
    result = []
    while left and right are both non-empty:
        if left[0] <= right[0]:
            move left[0] into result
        else:
            move right[0] into result
    append any remaining elements from left or right
    return result
```

Two functions do all the work:
- `mergeSort` — recursively splits the array and hands off to itself, then calls `merge`.
- `merge` — combines two sorted lists into one sorted list.

## Key takeaways

- Merge sort is a **divide and conquer** algorithm — same family as binary search.
- Invented by John von Neumann in 1945.
- Relies on recursion, with the base case being a single-element (trivially sorted) list.
- Splits the problem down to its smallest form, then merges sorted pieces back up.
- Faster than O(n²) algorithms like selection/bubble/insertion sort — see Part 2 of the original series for the runtime complexity breakdown (O(n log n)).

