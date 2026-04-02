// user defined data structure to represent single item in hash table(key value pair)
typedef struct {
    char* key;
    char* value;
} ht_item;

// hahs table DSA
typedef struct {
    // size of hash table
    int size;
    int capacity; // max size
    ht_item* items; // flexible member

} ht_hash_table;




