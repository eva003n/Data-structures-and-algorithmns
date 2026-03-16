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
![Diagram representing mapping keys with indexes](/assets/images/Mapping-Key-with-indices-of-Array.webp)

### Load factor
Refers to how many element are kept in relation to how big the hash table is

When load factor is high, it leads to high search times or collusion

Ideal load factor can be maintained using a good hash function and proper resizing of hash table

#### Hash function
Evenly distributes keys to avoid collusion and improve search speed

##### Hashing techniques
###### Integer universe assumptions
Keys are assumed to be integers with the range of the universe integer assumptions
###### Hashing by division
Used the remainder after division as the index

###### Hashing by multiplication
Multiplies key with a constant 1 or 0 and uses the fraction portion of this outcome to multiples it by the table size and the output is used as index

##### Criteria for choosing hash functions
- Minimizes collusion
- Computationaly efficient to enable speedy hashing an key retrieval
- Difficult to deduce key from hash thus attempt to guess are less likely to succeed
- Flexible -adapts to the changes of data being hashed  eg performs properly as keys being hashed change in size and format

### Collusion in hashing
Two or more keys map to the same array index

Include:
#### Open addressing
Looking for the following empty space in table. If first slot is occupies the hash function is applied to subsequent slots until one is left empty
##### Done using
- Double hashing
- Linear probing
- Quadratic probing 

#### Separate chaining
Linked list of objects that hash to a slot in the hash table
two keys are included in linked list if they map to same slot

Simple and manages several collusions

#### Robin hood hashing
To reduce the length of the chains  collusions are addressed by switching off keys
Compares the distance btw the slot  and the occupies slot of the two keys, if a new key hashes to an occupied the existing key gets swapped out with new one if ts closer to the ideal slot
Brings existing slot closer to ideal slot
Cuts down collusions and average chain length

Size expands or contracts based on the number of elements in table making the load factor becomes ideal for quick lookup and search times

Hash table worst time complexity is O(n)
### Creating hash table
####  Hashing with Chaining Implementation
Prevents collisions, by making each cell in hash table to point to a linked list of records that have the same hash function value
##### Simple chaining
Has no concept of rehashing
Uses a fixed size array
Leads to cllusions when load factor increases
##### Without rehashing
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
##### With rehashing
Complexity analysis of Insert:

- Time Complexity: O(n), as we are checking the load factor each time and when it is greater than 0.5 we call rehashing function which takes O(n) time. 
- Auxiliary Space: O(n)

Complexity analysis of Search:
- Time Complexity: O(n) 
- Auxiliary Space: O(1)
[Simple chaining with rehashing](/05-Hash-Table/Chaining/simple-rehashing.js)


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
 