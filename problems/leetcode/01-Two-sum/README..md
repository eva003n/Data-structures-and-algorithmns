## Two sum
### Constraints
- Return indices whose elements add upto target
- One input only one solution
- Must Two elements
- Solution can be in any order
- List length 2 - 1billion
- Element range(-1 billion to 1 billion)
- Target range(-1 billion to 1 billion)
- Time complexity of less than O(n^2)

### Ideas
1. Brute force - Traverse the array accessign each element and adding that element with precceding elements to see if it adds upto target per iteration
```math
Time complexity  -> O(n^2)
Space complexity  -> O(1)
```
2. Binary search - where we sort the elements first, then fin the middle element, subtract middle elemnt from the target id the result is less than middle element move left otherwise move right and repeat this until u find and elementt that matches
```math
Time complexity  -> O(n log n)
Space complexity  -> O(n)
```
3. Hash 
