## Queue
Used to store and manage data in a specific order

Uses the FIFO (first in first out) principle to perform operations

Used as a buffer in computer systems where we have speed mismatch btw two devices that communicate with each other

Used in operating system algorithms like CPU scheduling, memory management, and many standard algorithms like Breadth First Search of Graph, Level Order Traversal of a Tree.

Ordered list where insertions are done at one end which is known as rear and deletions are done on the other end known as front

A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. 

The difference between stack and queue is in removing an element. In a stack we remove the item that is most recently added while in a queue, we remove the item that is least recently added.

![Diagram representing a queue](/assets/images/queue-dsa.webp)

### Terminology
- Front - the first entry that will be removed from the queue(Deletion point)
- Rear - the last entry to be inserted in the queue(Insertion point)
- Size - no if items in the queue
- Capacity - maximum size of a queue

### Types of queue
![Diagram representing queue types](/assets/images/Types-of-Queue.webp)

#### Simple queue
Uses the FIFO principle thus insertion happens only as the rear(back) and deletion only happens at the front
Can be implemented using linked list or circular array

When an array is used, we often prefer a circular queue, which is mainly an efficient array implementation of a simple queue. It efficiently utilizes memory by reusing the empty spaces left after deletion, avoiding wastage that occurs in a normal linear array implementation..

####  Double-Ended Queue (Deque)
Insertion can happen on both ends
#### Priority Queue
Each element is assigned a priority and deletion occurs based on priority not by position

### Queue Operations
- Enqueue - inserts an element at the back(rear of queue) if queue is full an overflow error occurs
- Dequeue - Deletes an element at the front of the queue if queue is empty underflow error occurs
- Peek - returns the first element in queue without removing it
- Size - returns no of elements in queue
- isEmpty: Returns true if the queue is empty, otherwise false.
- isFull: Returns true if the queue is full, otherwise false. 

### Implementation of queue
- [Simple Array implementation of Queue](/04-Queue/simple-array.js)
- [Efficient Array Implementation of Queue](/04-Queue/efficient-array.js)
- [Implementation of Queue using Linked List](/04-Queue/linked-list.js)

### Applications of queue
- Network: In a network, a queue is used in devices such as a router or a switch. another application of a queue is a mail queue which is a directory that stores data and controls files for mail messages.
- Job Scheduling: The computer has a task to execute a particular number of jobs that are scheduled to be executed one after another. These jobs are assigned to the processor one by one which is organized using a queue.
- Shared resources: Queues are used as waiting lists for a single shared resource.

![Diagram showing application of queues](/assets/images/Applications-of-Queue.webp)

Real-time application of Queue:
- Working as a buffer between a slow and a fast device. For example keyboard and CPU, and two devices on network.
- ATM Booth Line
- Ticket Counter Line
- CPU task scheduling
- Waiting time of each customer at call centers.
### Advantages of Queue:
- Queues are useful when a particular service is used by multiple consumers.
- Queues are fast in speed for data inter-process communication.
- Queues can be used for the implementation of other data structures.

![Diagram representing advantages of queue](/assets/images/Advantages-of-Queue.webp)

### Disadvantages of Queue:
- The operations such as insertion and deletion of elements from the middle are time consuming.
- In a classical queue, a new element can only be inserted when the existing elements are deleted from the queue.
- Searching an element takes O(N) time.
- Maximum size of a queue must be defined prior in case of array implementation.