## Stack
A linear data structure that follows a particular order in which operations are performed
The order may be LIFO(Last in first out) means element inserted last comes out first or FILO(First in last out) means an element inserted first comes out last

Rhus insertion and deletion operations happen at one end only

![Diagram representing a stack data structure](/assets/images/stack-dsa.jpg)

### LIFO(Last In First Out) Principle
The LIFO principle means that the last element added to a stack is the first one to be removed.

- New elements are always pushed on top.
- Removal (pop) also happens only from the top.
- This ensures a strict order: last in → first out.

### Terminology
Insertions push while deletion pops
Size is the no of elements in the stack
### Types of stacks
#### Fixed size stack
- Has a predefined capacity
- Once full no more elements can be added(this causes overflow)
- When the stack is empty and we try to remove an element it causes underflow
- Implemented using static array
#### Dynamic stack
Can grow and shrink automatically as needed 
When full it expands to accommodate new elements
As elements are removes memory shrinks 
Ca be implemented by a alinked list or a dynamic array
***NB:*** **We generally use dynamic stacks in practice, as they can grow or shrink as needed without overflow issues.**

### Operations on a stack
- Push - insert element into the stack
- Pop - remove an element out of stack
- Top - returns the top element of a stack
- Size - returns the size of stack

### Fixed Size Stack Vs Dynamic Size Stack

![Diagram representing Fixed Size Stack Vs Dynamic Size Stack](/assets/images/Comparison_-Fixed-Size-Stack-vs-Dynamic-Size-Stack.webp)

### Stack can be implemented through
- [Array Implementation](/03-Stack/fixed-stack.js)
- [Linked List Implementation](/03-Stack/linked-list-stack.js)
- [Implementation using Deque](/03-Stack/deque.js)