# Linear search
Using a loop invariant, the index(variable i) will always represent the index of the element we are searching for after each iteration
So initialization property is satisfied by 
```test
i = 0
```
The maintanace (after each iteration), the variable i will always hold the index of the element we assume matches the element we are searching for
The terminiation property is dictated by when we reach the end of the list we are searching through which results in the index of the element that match what we were searching for or nil
```text
LINEARSEARCH(A, B)
i = 0;
for i < A.length
    if A[i] = B
    return i
return nil
```
