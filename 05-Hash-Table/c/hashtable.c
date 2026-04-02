#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "hash_table.h"

// initialize the key value pair
static ht_item *ht_new_item(const char *, const char *);
// initialize the hash table
ht_hash_table *ht_new();
// delte and free memory(avoid memory leaks)
static void ht_del_item(ht_item *);
// delete hash table
void ht_del_hash_table(ht_hash_table *);
int main()
{
    ht_hash_table *ht = ht_new();

    // free memory
    ht_del_hash_table(ht);

    return 0;
}
static ht_item *ht_new_item(const char *k, const char *v)
{
    // stores a single key value pair
    ht_item *item = malloc(sizeof(ht_item));
    item->key = strdup(k);
    item->value = strdup(v);
    return item;
}
// initialize new hash table
ht_hash_table *ht_new()
{
    ht_hash_table *ht = malloc(sizeof(ht_hash_table));

    ht->size = 0;
    ht->capacity = 53; // no of items
    ht->items = calloc((size_t)ht->capacity, sizeof(ht_item*));
    return ht;
}
// delete an item from hash table
static void ht_del_item(ht_item *i)
{
    free(i->key);
    free(i->value);
    free(i);
}
// delete the entire hash table
void ht_del_hash_table(ht_hash_table *ht)
{
    for (int i = 0; i < ht->size; i++)
    {
        ht_item* item = ht->items[i];
        if (item != NULL)
        {
            ht_del_item(item);
        }
    }
    free(ht->items);
    free(ht);
}