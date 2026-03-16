/**
 * Loads to collisions when load factor increases(Total items greater than no of buckets)
 */

class Hash {
    #bucketsCount;
    #table;
  constructor(buckets) {
    // initialize table with a given no of buckets
    this.#bucketsCount = buckets;
    // array of arrays to store chains
    this.#table = new Array(buckets).fill(null).map(() => []);
  }

  // insert a key
  insertKey(key) {
    const index = this.getHashIndex(key);
    this.#table[index].push(key);
  }

  // remove key
  removeKey(key) {
    const index = this.getHashIndex(key);
    const position = this.#table[index].indexOf(key);
    let removeItem;
    // if key exists remove
    if (position !== -1) {
      removeItem = this.#table[index].splice(position, 1);
    }
    return removeItem[0]
  }

  // display hash table
  display() {
    let output = ""
    for(let i = 0; i < this.#bucketsCount; i++) {
        output += i.toString()
    for(let key of this.#table[i]){
        output += "->" + key
    }
    output += "\n"
    }
    return output

  }
  // map a key to index
  getHashIndex(key) {
    return key % this.#bucketsCount;
  }

  getTable() {
    console.log(this.#table)
  }
}
const hash = new Hash(7);
const list = [10, 20, 30, 40, 50]
list.forEach(element => hash.insertKey(element))

console.log("____ Hash table ____")
console.log(hash.display())
console.log("Removed: " + hash.removeKey(40))
console.log("____ Hash table ____");
console.log(hash.display());
