## Array Data structures
Used to store a collection of elements of similar or different data types
### Need for arrays
They provide random access lookup time

They provide time complexity of O(i) to randomly access any elements at any position. Yhis is possible because each array comes with a a pointer(memory location given by array name) and an offset(how far ro go in that memory blovk)

Time it takes to access an element in 1st position is the sma e as accessing an element in 1000th position
```c
                           array_name[index]
                              |       |
                           Pointer   Offset
```
The pointer points to the right location of the memory and the offset value shows how far to look in the said memory.

### Array representation
Think of an arraym as a collection of buckets where each bucket holds a single value

This buckets range from 0 to (n - 1)

When it comes to multidimensional arrays lije a 2D array this are just a collection of buckets where each bucket has sub buckets

![Diagram showing array representation](/assets/images/array_representation.jpg)

### basic array operations
- Traverse − print all the array elements one by one.
   - [Traversal in arrays](/01-Arrays/Traversal/Readme.md)

- Insertion − Adds an element at the given index.

- Deletion − Deletes an element at the given index.

- Search − Searches an element using the given index or by the value.

- Update − Updates an element at the given index.

- Display − Displays the contents of the array.

### Applications of Array Data Structure:
- Storing and accessing data: Arrays store elements in a specific order and allow constant-time O(1) access to any element.
- Searching: If data in array is sorted, we can search an item in O(log n) time. We can also find floor(), ceiling(), kth smallest, kth largest, etc efficiently.
- Matrices: Two-dimensional arrays are used for matrices in computations like graph algorithms and image processing.
- Implementing other data structures: Arrays are used as the underlying data structure for implementing stacks and queues.
- Dynamic programming: Dynamic programming algorithms often use arrays to store intermediate results of subproblems in order to solve a larger problem.
- Data Buffers: Arrays serve as data buffers and queues, temporarily storing incoming data like network packets, file streams, and database results before processing.

### Advantages
- Efficient and Fast Access: Arrays allow direct and efficient access to any element in the collection with constant access time, as the data is stored in contiguous memory locations.
- Memory Efficiency: Arrays store elements in contiguous memory, allowing efficient allocation in a single block and does not require extra storage for linking different blocks.
- Versatility: Arrays can be used to store a wide range of data types, including integers, floating-point numbers, characters, and even complex data structures such as objects and pointers.
- Compatibility with hardware: The array data structure is compatible with most hardware architectures, making it a versatile tool for programming in a wide range of environments.

### Disadvantages
- Fixed Size: Arrays have a fixed size set at creation. Expanding an array requires creating a new one and copying elements, which is time-consuming and memory-intensive. Even dynamic sized arrays internally use fixed sized memory allocation and de-allocation.
- Memory Allocation Issues: Allocating large arrays can cause memory exhaustion, leading to crashes, especially on systems with limited resources.
- Insertion and Deletion Challenges: Adding or removing elements requires shifting subsequent elements, making these operations inefficient.
