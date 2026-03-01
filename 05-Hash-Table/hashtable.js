class Hash {
  constructor(n) {
    this.BUCKET = n; //no of buckets
    this.table = new Array(n); // create table based of no of buckets

    // each table element is an array
    for (let i = 0; i < n; i++) {
      this.table[i] = new Array();
    }
  }

  // operations

  insert(key) {
    // calculate index from hash function based on key
    const index = this.hashFunction(key);
    this.table[index].push(key);
  }

  delete(key) {
    const index = this.hashFunction(key);

    const keyIndex = this.table[index].indexOf(key);
    // if key exists remove it
    if (keyIndex != -1) {
      this.table[index].splice(keyIndex, 1);
    }
  }

  //maps values to a an index/key
  hashFunction(value) {
    // remained after divition
    return value % this.BUCKET;
  }

  displayHashTable() {
    for (let i = 0; i < this.BUCKET; i++) {
      let str = `${i}`;
      for (let j = 0; j < this.table[i].length; j++) {
        str += `---> ${this.table[i][j]}`;
      }
      console.log(str);
    }
  }
}

// Driver program
const a = [15, 11, 27, 8, 12];
const n = a.length;

const hash = new Hash(n);

// insert the key into hash table
for (let i = 0; i < n; i++) {
  hash.insert(a[i]);
}

// delete element 12
hash.delete(12);

// display hash
hash.displayHashTable();
