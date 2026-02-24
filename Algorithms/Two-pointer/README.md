## Two pointer Algorithm
Introduces new possibility when we add a second pointer instead of the usual single pointer to linear data structures eg we can perform comparisons

With pointers at two different positions, we can compare the elements at those positions and make decisions based on the comparison:

The pointer here is a variable that represent an index in a linear data structure

The problem that this algorithm solves it that it prevent usage of nested loops which have a time complexity of O(n^2) and don't take advantage of predictive dynamics

### Two pointer strategies
Take a time complexity of O(n)

#### 1. Inward traversal
This approach has pointers starting at opposite ends of the data structure and moving inward toward each other:

![Diagram representing inward traversal](/assets/images/inward-traversal.svg)

The pointers move toward the center, adjusting their positions based on comparisons, until a certain condition is met, or they meet/cross each other. This is ideal for problems where we need to compare elements from different ends of a data structure.

#### Unidirectional traversal
In this approach, both pointers start at the same end of the data structure (usually the beginning) and move in the same direction:

![Diagram representing inward traversal](/assets/images/unidirectional-traversal.svg)

These pointers generally serve two different but supplementary purposes. A common application of this is when we want one pointer to find information (usually the right pointer) and another to keep track of information (usually the left pointer).

#### Staged traversal
In this approach, we traverse with one pointer, and when it lands on an element that meets a certain condition, we traverse with the second pointer:

![Diagram representing inward traversal](/assets/images/staged-traversal.svg)

Similar to unidirectional traversal, both pointers serve different purposes. Here, the first pointer is used to search for something, and once found, a second pointer finds additional information concerning the value at the first pointer.

#### Use cases
- Used in linear data structures
- Input follows predictive dynamics
- When the problem asks for pair values or result that can be generated from two values

#### Real world use case
##### Garbage collection
We have two pointers scan pointer and free pointer(next available memory to relocate live objects), scan pointer traverse while skipping dead objects shifting live objects to the location pointed to by the free pointer


#### Outline

![Diagram representing two pointer outline](/assets/images/two-pointer-outline.svg)

The two-pointer pattern is very versatile and, consequently, quite broad. As such, we want to cover more specialized variants of this algorithm in separate chapters, such as Fast and Slow Pointers and Sliding Windows.