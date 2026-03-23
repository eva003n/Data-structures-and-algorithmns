## Hash Table
Used to insert and delete key value pairs quickly 
Involves mapping data to a specific index in hash table using the hash function
Hashing achieves all three operations insert, delete and search in O(i) time in average
Hashing is mainly used to implement a set of distinct items (only keys) and dictionaries (key value pairs). 
Operates on the hashing concept

![Diagram showing representation of a hashing](/assets/images/hashing-dsa.webp)

### Hashing concept
Process of generating a small size output from a large input
Small output can be used as an index
Uses mathematical formula known as hash functions
Uses hash function to generate this transformations
This index determines where to store this item on the hash table

#### Overview 
Supports insert, delete and search in a time complexity of O(1)

used for dictionaries, frequency counting, and maintaining data for quick access via a key

Real world use case database indexes, cryptography and dictionaries, symbol table and caches

### Forms of hash table
- Hash set - collection of unique keys
- hash map - collection of of key value pairs with keys being unique

### Situation where hash set is not used
- need to maintain a sorted data along with insert, delete and search we use a BST for that
- We nead operations like floor, ceiling, insert, delete, search we use self balancing BST
- When keys are strings we need operations such a prefix search along with insert delete, search we use trie in this case

### Components of hashing
- Key - anything a string or integer that is passed to hash function to generate index for storage
- Hash function - comprises a mathematical formula that computes the index in hash table
- Hash table - an array of lists that stores the values mapped to a key

![Diagram representing components of hashing](/assets/images/Components-of-Hashing.webp)

### How hashing works
Suppose we have a set of strings {“ab”, “cd”, “efg”} and we would like to store it in a table.

- Step 1: We know that hash functions (which is some mathematical formula) are used to calculate the hash value which acts as the index of the data structure where the value will be stored.
- Step 2: So, let's assign
    ```hash
    “a” = 1,
    “b”=2, .. etc, to all alphabetical characters.
    ```
- Step 3: Therefore, the numerical value by summation of all characters of the string:
      ```hash
      “ab” = 1 + 2 = 3, 
      “cd” = 3 + 4 = 7 , 
      “efg” = 5 + 6 + 7 = 18 
      ```
- Step 4: Now, assume that we have a table of size 7 to store these strings. The hash function that is used here is the sum of the characters in key mod Table size . We can compute the location of the string in the array by taking the sum(string) mod 7 .
- Step 5: So we will then store
      ```hash
      “ab” in 3 mod 7 = 3,
      “cd” in 7 mod 7 = 0, and
      “efg” in 18 mod 7 = 4.
      ```
![Diagram representigng mapping keys with indexes](/assets/images/Mapping-Key-with-indices-of-Array.webp)

### Load factor
Refers to the number of items in hash table divided by the size of hash table
Load factor is the parameter used to rehash the pervious hash function or to add more elements to existing hash table

When load factor is high, it leads to high search times or collusion

Helps determine the efficiency of the hash function whether is distributing keys uniformly
Ideal load factor can be maintained using a good hash function and proper resizing of hash table

#### Hash function
Cocept in computer science that plays an critical role in applications such as data storage, retrieval and cryptography
Creates a mapping from an input key to an index

##### Properties of a hash function
- Deterministic- should consistently produce the same output for the same input
- Fized output size - should produce a fixed size output regardless of input size
- Efficient - should produce output faster and optimized
- Uniformity - should evenly distribute hash values across output space
- Pre-image Resistance: It should be computationally infeasible to reverse the hash function, i.e., to find the original input given a hash value.
- Collision Resistance: It should be difficult to find two different inputs that produce the same hash value.
- Avalanche Effect: A small change in the input should produce a significantly different hash value.
Evenly distributes keys to avoid collusion and improve search speed

##### Applications of Hash Functions
- Hash Tables: The most common use of hash functions in DSA is in hash tables, which provide an efficient way to store and retrieve data.
- Data Integrity: Hash functions are used to ensure the integrity of data by generating checksums.
- Cryptography: In cryptographic applications, hash functions are used to create secure hash algorithms like SHA-256.
- Data Structures: Hash functions are utilized in various data structures such as Bloom filters and hash sets.
##### Hashing techniques
###### Integer universe assumptions
Keys are assumed to be integers with the range of the universe integer assumptions
###### Hashing by division
Used the remainder after division with a prime number as the index(hash value)
- Advantahes
  - Simple to implement
  - Works well when the denominator is a prime number
- Disadvantages
  - Poor distribution when the denominator is not choosen wisely
###### Hashing by multiplication
Multiplies key with a constant 1 or 0 and uses the fraction portion of this outcome to multiples it by the table size and the output is used as index

- Advantages
  - Less sensitive to the choice of the prime number
- Disadvantages
- Complex to implement
###### Mid square method
In the mid-square method, the key is squared, and the middle digits of the result are taken as the hash value.

Steps:

Square the key.
Extract the middle digits of the squared value.
- Advantages:
  - Produces a good distribution of hash values.
- Disadvantages:
   - May require more computational effort.
###### Folding method
Dividing the key into equal parts , summing them and the modulus of this sum with respect to table size
- Advantages:
  - Simple and easy to implement.
- Disadvantages:
  - Depends on the choice of partitioning scheme.

###### Cryptographic Hash Functions
Designed to be secure and used in cryptography
Examples include MD5, SHA-1, and SHA-256.

- Characteristics
  - Pre image resistant
  - Second pre image resistant
  - Collusion resistant
- Advantages
  - High security
- Disadvantages
  - Computationally intensive

###### Universal hashing
Universal hashing uses a family of hash functions to minimize the chance of collision for any given set of inputs.
```hs
h(k)=((a⋅k+b)modp)modm
Where a and b are randomly chosen constants, p is a prime number greater than m, and k is the key.
```
- Advantages:
  - Reduces the probability of collisions.
- Disadvantages:
  - Requires more computation and storage.

###### Perfect hashing
Perfect hashing aims to create a collision-free hash function for a static set of keys. It guarantees that no two keys will hash to the same value.

- Types:
  - Minimal Perfect Hashing: Ensures that the range of the hash function is equal to the number of keys.
  - Non-minimal Perfect Hashing: The range may be larger than the number of keys.
- Advantages:
   - No collisions.
- Disadvantages:
  - Complex to construct.
##### Criteria for choosing hash functions
- Minimizes collusion
- Computationaly efficient to enable speedy hashing an key retrieval
- Difficult to deduce key from hash thus attempt to guess are less likely to succeed
- Flexible -adapts to the changes of data being hashed  eg performs properly as keys being hashed change in size and format

Hash functions are very important tools that help store and find data quickly. Knowing the different types of hash functions and how to use them correctly is key to making software work better and more securely. By choosing the right hash function for the job, developers can greatly improve the efficiency and reliability of their systems.
### Collusion in hashing
Two or more keys map to the same hash value(index)

![Diagram showing collision in hashing](/assets/images/collision-in-hashing.webp)

#### Collision resolution techniques
#### Open addressing
Looking for the following empty space in table. If first slot is occupied the hash function is applied to subsequent slots until one is left empty
All the elements are stored in the hash table so the size of the hash table will be equal to or greater than the total no of keys
Also known as closed hashing


- Insert(k): Keep probing until an empty slot is found. Once an empty slot is found, insert k. 
- Search(k): Keep probing until the slot's key doesn't become equal to k or an empty slot is reached. 
- Delete(k): Delete operation is interesting. If we simply delete a key, then the search may fail. So slots of deleted keys are marked specially as "deleted". 
- The insert can insert an item in a deleted slot, but the search doesn't stop at a deleted slot. 
##### Done using
- Double hashing
- Linear probing
- Quadratic probing 

##### Linear probing
Involves searching sequentially starting from the original location of the hash table. If a slot is qccupied look for the next location 

The function used for rehashing is as follows
```
rehash(key) = (n + 1) % tablesize
```
The algorithm simply looks for the next available slot in the hash table and places the collided key there. If that slot is also occupied, the algorithm continues searching for the next available slot until an empty slot is found. This process is repeated until all collided keys have been stored. Linear probing has the best cache performance but suffers from clustering. One more advantage of Linear probing is easy to compute. 

- [Linear probing implementation](/05-Hash-Table/Open-addressing/linearprobing.js)

##### Quadratic probing
The algorithm searches for slots in a more spaced-out manner. When a collision occurs, the algorithm looks for the next slot using an equation that involves the original hash value and a quadratic function. If that slot is also occupied, the algorithm increments the value of the quadratic function and tries again. This process is repeated until an empty slot is found. Quadratic probing lies between the two in terms of cache performance and clustering. 

- [Quadratic probing implementation](/05-Hash-Table/Open-addressing/quadratic.js)

##### Double probing(Double hashing)
The algorithm uses a second hash function to determine the next slot to check when a collision occurs. The algorithm calculates a hash value using the original hash function, then uses the second hash function to calculate an offset. The algorithm then checks the slot that is the sum of the original hash value and the offset. If that slot is occupied, the algorithm increments the offset and tries again. This process is repeated until an empty slot is found.  Double hashing has poor cache performance but no clustering. Double hashing requires more computation time as two hash functions need to be computed. 

The choice of collision handling technique can have a significant impact on the performance of a hash table. Linear probing is simple and fast, but it can lead to clustering (i.e., a situation where keys are stored in long contiguous runs) and can degrade performance. Quadratic probing is more spaced out, but it can also lead to clustering and can result in a situation where some slots are never checked. Double hashing is more complex, but it can lead to more even distribution of keys and can provide better performance in some cases.

- [Double probing implementation](/05-Hash-Table/Open-addressing/doubleprobing.js)

##### Performance of Open Addressing
Like Chaining, the performance of hashing can be evaluated under the assumption that each key is equally likely to be hashed to any slot of the table (simple uniform hashing) 
```bash
m = Number of slots in the hash table

n = Number of keys to be inserted in the hash table

 Load factor α = n/m  ( < 1 )

Expected time to search/insert/delete < 1/(1 - α) 

So Search, Insert and Delete take (1/(1 - α)) time
```
#### Separate chaining
A linked list or dynamic array is used
When multiple keys are hashed to the same slot they are inserted into a chain which is a singly linked list

Each cell of a hash table points to a linked list of  record that have the same hash function value
Chaining is simple but requires additional memory outside the table

Two keys are included in linked list if they map to same slot

Simple and manages several collisions

####  Hashing with Chaining Implementation
Prevents collisions, by making each cell in hash table to point to a linked list of records that have the same hash function value
##### Simple chaining
Has no concept of rehashing
Uses a fixed size array
Leads to collisions when load factor increases
###### Time Complexity:
- Search : O(1+(n/m))
- Delete : O(1+(n/m))
where n =  Total elements in hash table
             m = Size of hash table
- Here n/m is the Load Factor.
- Load Factor (∝) must be as small as possible.
- If load factor increases, then possibility of collision increases.
- Load factor is trade of space and time .
- Assume , uniform distribution of keys,
- Expected chain length : O(∝)
- Expected time to search : O( 1 + ∝ )
- Expected time to insert/ delete :  O( 1 + ∝ )

- Auxiliary Space: O(1), since no extra space has been taken.

[Simple chaining with rehashing](/05-Hash-Table/Chaining/simple.js)
##### Chaining With rehashing
Complexity analysis of Insert:

- Time Complexity: O(n), as we are checking the load factor each time and when it is greater than 0.5 we call rehashing function which takes O(n) time. 
- Auxiliary Space: O(n)

Complexity analysis of Search:
- Time Complexity: O(n) 
- Auxiliary Space: O(1)
[Simple chaining with rehashing](/05-Hash-Table/Chaining/chaining-rehashing.js)

##### Advantages
- Simple to implement 
- Hash table never fills up, we can always add more elements in the chain
- Less sensitive to hash function or load factor
- Mostly used when its unknown how many or how frequest keys are going to be inserted or deleted
##### Disadvantages
- Uses extra space for links
- Wastage of space since the hash table never gets filled
- When chain becomes long the search time becomes O(n) in worst case
- Cache performance not good since keys are stored in a linked list but open addressing solves this problem since evrything is stored in the same hash table
##### Performance of chaining
Performance of hashing can be evaluated under the assumption that each key is equally likely to be hashed to any slot of the table (simple uniform hashing).  
```hash
m = Number of slots in hash table
n = Number of keys to be inserted in hash table

Load factor α = n/m
Expected time to search = O(1 + α)
Expected time to delete = O(1 + α)

Time to insert = O(1)
Time complexity of search insert and delete is O(1) if  α is O(1)
```
##### Data Structures For Storing Chains: 
Below are different options to create chains.

The advantage of linked list implementation is insert is O(1) in the worst case.
The advantage of array is cache friendliness, but the insert operation can be O(1) in cases when we have to resize the array.
The advantage of Self Balancing BST is the worst case is bounded by O(Log (len)) for all operations
###### 1. Linked lists
Search: O(len) where len = length of chain
Delete: O(len)
Insert: O(1)
Not cache friendly
###### 2. Dynamic Sized Arrays ( Vectors in C++, ArrayList in Java, list in Python)
Search: O(len) where len = length of chain
Delete: O(len)
Insert: O(1)
Cache friendly
###### 3. Self Balancing BST ( AVL Trees, Red-Black Trees)
Search: O(log(len)) where len = length of chain
Delete: O(log(len))
Insert: O(log(len))
Not cache friendly
Java 8 onward versions use this for HashMap
#### Robin hood hashing
To reduce the length of the chains  collusions are addressed by switching off keys
Compares the distance btw the slot  and the occupies slot of the two keys, if a new key hashes to an occupied the existing key gets swapped out with new one if ts closer to the ideal slot
Brings existing slot closer to ideal slot
Cuts down collisions and average chain length

Size expands or contracts based on the number of elements in table making the load factor becomes ideal for quick lookup and search times

Hash table worst time complexity is O(n)
### Creating hash table


### Application of hash table
1. Data Integrity & Security
Hashing acts as a digital seal and lock, focusing on the verification and privacy of sensitive data.

- Password Storage: Stores non-reversible "fingerprints" instead of plain text, allowing secure verification while keeping passwords hidden from attackers.[reference](https://www.geeksforgeeks.org/dbms/store-password-database/)
- File Comparison and Message Digest: Generates unique signatures to verify file integrity, allowing users to instantly detect any corruption or malicious tampering.[reference](https://www.geeksforgeeks.org/computer-networks/message-digest-in-information-security/)
- Blockchain & Consensus: Links blocks via hashes to ensure permanent immutability, where any alteration breaks the chain and alerts the network.
Fraud Detection & Cybersecurity: Matches data patterns against known threat databases to identify and block malicious files the moment their hashes are detected.
#### 2. Database & Search Optimization
This category leverages hashing to eliminate slow searches, jumping directly to the required data for high-performance computing.

- Database Indexing: Enables near-instant record retrieval by using hashes as direct indices, bypassing slow sorting to speed up massive database queries.[reference](https://www.geeksforgeeks.org/dbms/indexing-in-databases-set-1/)
- Distinct Elements & Counting Frequencies: Tracks unique items and occurrences by using hash values as keys, providing a massive speed advantage over comparison methods. [reference](https://www.geeksforgeeks.org/dsa/counting-frequencies-of-array-elements/)
Dictionaries & Associative Arrays: Facilitates immediate access to data via high-speed key mapping, ensuring lookups remain fast regardless of dataset size.[reference](https://www.geeksforgeeks.org/cpp/associative-arrays-in-cpp/)
Rabin-Karp Algorithm: Optimizes string-searching by hashing text segments to quickly filter out non-matches and focus only on potential pattern hits.[reference](https://www.geeksforgeeks.org/dsa/rabin-karp-algorithm-for-pattern-searching/)
#### 3. Network & System Infrastructure
Hashing optimizes traffic movement and resource usage to ensure minimal lag and disruption across complex systems.

- Load Balancing: Uses consistent hashing to distribute traffic evenly across servers, ensuring stability and minimal data remapping during server changes.[reference](https://www.geeksforgeeks.org/system-design/load-balancing-algorithms/)
- Bloom Filters: A memory-efficient structure that trades a tiny margin of error for extreme speed when testing membership in massive data sets.[reference](https://www.geeksforgeeks.org/python/bloom-filters-introduction-and-python-implementation/)
- Network Routing: Hashes destination attributes to determine optimal data paths, minimizing latency and ensuring smooth transmission across global infrastructure.
- Caching Mechanisms: Stores frequently accessed data under hash-based keys to reduce retrieval times and decrease server load by bypassing slow lookups.
#### 4. Specialized Processing
These applications apply hashing to complex pattern recognition and low-level system organization.

- Image Processing: Employs perceptual hashing to find duplicate images by comparing structural features, identifying matches even after resizing or compression.[reference](https://www.geeksforgeeks.org/computer-graphics/digital-image-processing-basics/)
- Symbol Tables: Maps code identifiers to memory locations during compilation, which is essential for accurate variable management and program execution.
- Graphics & Grid Storage: Organizes graphical objects into spatial grids via hash functions to enable accelerated rendering and object management in 3D environments.
 