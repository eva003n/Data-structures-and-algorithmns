## Linked list
Enable efficient insertion and deletion operations

Used to implement other data structures such as queues, stack and dequeue

Items are not stored at contigious memory locations

Individual items are called nodes and are lined to each other

The first node is called head node, we can traverse the linked list as long as their is a next

![Diagram representing structure of a linked list](/assets/images/Linked-list.webp)

### Comparison btw linked list and array
#### Linked list
- Memory allocation - one by one to individual elements
- Access - sequential
- Insertion and deletion - efficient
- Non-contiguous - elements are not stored consecutively in memory
#### Array
- Memory allocation - allocated to the whole array
- Access - random
- Insertion and deletion - inefficient
- contiguous - elements are stored consecutively in memory

### Singly linked list
Each node has a data(actual data stored) and next portion(next element in the chain)
Nodes are dynamically linked to form a chain like sequence

![Diagram representing a singly linked list](/assets/images/singly-linked-list.webp)

### Advantages of linked list
- Dynamic size (no fixed limit like arrays)
- Efficient insertion and deletion at beginning and end. We also have insertion at the middle efficient if we have reference or pointer to the node after which we need to insert.
- Can implement complex data structures like stack, queue, graph

### Disadvantages
- Extra memory required for storing pointers
- No direct/random access (need traversal)
- Cache unfriendly (not stored in contiguous memory)

### Doubly linked list
Allows efficient traversal in both directions bacause each node contains a pointer to the previous and next node
Allows quick and easy insertion and deletion from list

![Diagram representing a doubly linked list](/assets/images/doubly-linked-list.webp)

####cAdvantages of Doubly Linked List
- Bidirectional Traversal - You can traverse forward (using next) as well as backward (using prev).
Efficient Deletion - Given a pointer to a node, you can delete it in O(1) time (no need to traverse from the head), since you can update both prev and next.
- Insertion at Both Ends - Insertion at head or tail is efficient because you can update both directions easily.
- Easy to Implement Deque / Navigation Features - Useful for undo/redo, browser history, and music playlist navigation, where both forward and backward movement is needed.
#### Disadvantages of Doubly Linked List
- Extra Memory Per Node - Each node requires an additional pointer (prev), making DLL more memory-consuming than singly linked list.
- More Complex Implementation - Both prev and next must be handled carefully during insertion and deletion, which increases chances of errors (broken links, null pointer issues)
- Slower Operations Due to Overhead - Extra pointer manipulations during insertion/deletion cause slightly more overhead compared to singly linked list.
- Not Cache-Friendly - Like singly linked list, nodes are scattered in memory, so traversals may be slower compared to arrays due to poor locality of reference.
### Circular linked list
The last node points to the first node forming closed node
#### Circular singly linked list
We move in one direction through the list because of next pointer

![Diagram representing circular signly linked list](/assets/images/circular-singly-linked-list.webp)

#### Circular doubly linked list
Here, in addition to the last node storing the address of the first node, the first node will also store the address of the last node.

![Diagram representing circular doubly linked list](/assets/images/circular-doubly-linked-list.webp)

##### Advantage of Circular Linked List
- Efficient Traversal
- No Null Pointers / References
- Useful for Repetitive Tasks
- Insertion at Beginning or End is O(1)
- Uniform Traversal
- Efficient Memory Utilization
##### Disadvantage of Circular Linked List
- Complex Implementation
- Infinite Loop Risk
- Harder to Debug
- Deletion Complexity
- Memory Overhead (for Doubly Circular LL)
- Not Cache Friendly