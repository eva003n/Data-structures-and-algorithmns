## Data structures and algorithms
Data structures is the organization and storage of data so that it can be retrived efficiantly for processing
Algorithms are a set of step by step instructions performed in order to process this data effectively and produce the intended results

#### Need for data structures
1. Data Search − Consider an inventory of 1 million(106) items of a store. If the application is to search an item, it has to search an item in 1 million(106) items every time slowing down the search. As data grows, search will become slower.

2. Processor speed − Processor speed although being very high, falls limited if the data grows to billion records.

3. Multiple requests − As thousands of users can search data simultaneously on a web server, even the fast server fails while searching the data.

#### Applications of Data Structures & Algorithms (DSA)
Search − Algorithm to search an item in a data structure.

Sort − Algorithm to sort items in a certain order.

Insert − Algorithm to insert item in a data structure.

Update − Algorithm to update an existing item in a data structure.

Delete − Algorithm to delete an existing item from a data structures

Problems that can be dolved using data strucres are
- Fibonacci number series
- Knapsack problem
- Tower of Hanoi
- All pair shortest path by Floyd-Warshall
- Shortest path by Dijkstra
- Project scheduling

Foundational terms of a data structures

- Interface − Each data structure has an interface. Interface represents the set of operations that a data structure supports. An interface only provides the list of supported operations, type of parameters they can accept and return type of these operations.

- Implementation − Implementation provides the internal representation of a data structure. Implementation also provides the definition of the algorithms used in the operations of the data structure.

#### Characteristics of a Data Structure
1. Correctness - the data structure implementation should implement its interface correctly
2. Time complexity - the execution time of operation of a data structure must be as small as possible
3. Space complexity - the memory usage of a data structure operation should be as little as possible

#### Execution Time Cases
here are three cases which are usually used to compare various data structure's execution time in a relative manner.

- Worst Case − This is the scenario where a particular data structure operation takes maximum time it can take. If an operation's worst case time is ƒ(n) then this operation will not take more than ƒ(n) time where ƒ(n) represents function of n.

- Average Case − This is the scenario depicting the average execution time of an operation of a data structure. If an operation takes ƒ(n) time in execution, then m operations will take mƒ(n) time.

- Best Case − This is the scenario depicting the least possible execution time of an operation of a data structure. If an operation takes ƒ(n) time in execution, then the actual operation may take time as the random number which would be maximum as ƒ(n).

#### Basic DSA Terminologies
- Data − Data are values or set of values.

- Data Item − Data item refers to single unit of values.

- Group Items − Data items that are divided into sub items are called as Group Items.

- Elementary Items − Data items that cannot be divided are called as Elementary Items.

- Attribute and Entity − An entity is that which contains certain attributes or properties, which may be assigned values.

- Entity Set − Entities of similar attributes form an entity set.

- Field − Field is a single elementary unit of information representing an attribute of an entity.

- Record − Record is a collection of field values of a given entity.

- File − File is a collection of records of the entities in a given entity set.
### Algorithmn basics
Algorithm is a step by step procedure which defines a set of instructions to be executed in a certain order to produce desired results

Data structures have the following category of algorithms
- Search − Algorithm to search an item in a data structure.

- Sort − Algorithm to sort items in a certain order.

- Insert − Algorithm to insert item in a data structure.

- Update − Algorithm to update an existing item in a data structure.

- Delete − Algorithm to delete an existing item from a data structure.

#### Characteristic of an algorithm
1. Unambiguous  each of the steps should be clear and their inputs/outputs should be clear and lead to only one meaning
2. Input - an algorithm should have 0 or more inputs
3. Output - an algorithm should have 1 or more outputs
4. Finite an algorithm should terminate at some point
5. Feasible - algorithm should be implemented with available resources
6. Independent - the algorithm should be programming language agnostic

In order to design an algorith we must understand the problem domain with which we a creating a solution for
###### Example of an algoriyhm
```algo
Step 1 − START ADD
Step 2 − get values of a & b
Step 3 − c ← a &plus; b
Step 4 − display c
Step 5 − STOP
```
#### Algorithm analysis
Efficiency of an algorithm can be analyzed at two different stages, before implementation and after implementation
- Priori analysis - involves theoretical analysis, effieciency is measured by assuming that all other factors eg processor speed are constant and have no effect on the implementation
- Posterior analysis - empirical analysis of an algorithm. Algorithm is implemented using a programming language and executed on the target computer machine.Statistics like running time and memory usage are collected

The running time of an operation can be defined as the number of computer instructions executed per operation.
#### Algorithm complexity.
Efficiency is measured by the time and space taken by an algorithm
- Time factor - time is measured by counting the number of key operations eg comparison operations in a sorting algorithm
- Space factor - space is measured by counting the maximum memory space required by algorithm
##### Space complexity
The space required by an algorithm is equal to the sum of the following two components −
- A fixed part that is a space required to store certain data and variables, that are independent of the size of the problem. For example, simple variables and constants used, program size, etc.

- A variable part is a space required by variables, whose size depends on the size of the problem. For example, dynamic memory allocation, recursion stack space, etc.

Space complexity S(P) of any algorithm P is S(P) = C &plus; SP(I), where C is the fixed part and S(I) is the variable part of the algorithm, which depends on instance characteristic I.

```algo
Algorithm: SUM(A, B)
Step 1 − START
Step 2 − C ← A &plus; B &plus; 10
Step 3 − Stop
```
Here we have three variables A, B, and C and one constant. Hence S(P) = 1 \&plus; 3. Now, space depends on data types of given variables and constant types and it will be multiplied accordingly.

##### Time Complexity
For example, addition of two n-bit integers takes n steps. Consequently, the total computational time is T(n) = c ∗ n, where c is the time taken for the addition of two bits. Here, we observe that T(n) grows linearly as the input size increases.

Time required by an algorithm to run to completion
Represented by f(n)
Measured by the number of steps provided each step takes constant time
```algo
f(n) = c * n
```
whare c is the time taken(no of steps) and n is the input size
Meaning the time taken increses linearly as input grows

### Asymptotic analysis

