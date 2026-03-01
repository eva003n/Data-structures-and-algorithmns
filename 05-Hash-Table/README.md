## Hash Table
Used to insert and delete key value pairs quickly 
Operates on the hashing concept

### Hashing concept
Process of generating a small size output from a large input
Small output can be used as an index
Uses hash function to generate this transformations
This index determines where to store this item on the hash table

#### Overview 
Supports insert, delete and search in a time complexity of O(1)

used for frequency counting, quick access via a key and in dictionaries

Real world use case database indexes, cryptography and dictionaries

### Forms of hash
- Hash set - collection of unique keys
- hash map - collection of of key value pairs with keys being unique

### Situation weher hash set is not used
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

### Application of hash table
- Indexing and seraching large data volumes eg search engines might use a hash table to store web pages it has indexed
- caching data in memory especially frequently accessed information for faster retrieval
- Database indexing to enable fast access to data dased on key value pairs
 