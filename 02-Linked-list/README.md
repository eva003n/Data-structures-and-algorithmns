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