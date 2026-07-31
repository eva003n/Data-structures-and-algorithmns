# Selection sort
- Splits the list of items into two parts, sorted and remaining unsorted part
- When it starts their is no data in the sorted part since no data has been sorted
- Finds the smallest element of the unsorted part and swaps it with the left most element in the sorted array
- Repeats itself by finding the smallest element in the unsorted list and swaps it with the leftmost element

### Pseudocode
```text
procedure selectionSort(A: list of unsorted items)  
    n := length(A)
    for i = 0 to n - 2
        minimumId := i
        temp := A[i]
        for j := i + 1 to n
            if(A[j] < A[minimumId]) 
                minimumId := j
            end if    
        end for        
    swap A[i] and A[minimumId]
    end for
end procedure

```