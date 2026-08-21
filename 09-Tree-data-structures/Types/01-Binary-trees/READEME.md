# Binary tree
- NOn linear and hierarchical  data structure where each node as at most two children(left and right child)
- Top most node is referred to as root node while the bottom most nodes with no children are referred to as leaves

[Binary tree](/assets/images/binary-tree-structure.webp)
## Representation of Binary tree
Wach node has three parts:
- Data
- Pointer to the left child
- Pointer to the right child


[Representation of Binary tree](/assets/images/representation-of-a-tree-data-strucutre.webp)
## Terminology
- **Parent node** - direct ancestor of a node(its child node)
- **Child node** - direct descendant of another node(its parent node)
- **Ancestors of a node** - all nodes on a path from the root to that node(including the node itself)
- **Descendants of a node** - all nodes that lie in a subtree rooted at that node(including the node itsslf)
- **Descendants of a node** - a tree containing that node as root and all of its descendants
- **Edge** - link/connection between the parent node and the child node
- **Path in a binary tree** - a sequence of nodes connected by an edge from one node to another
- **Leaf Node** - a node that does not have any children or both are null
- **Internal node** - a node that has at least one child
- **Depth/Level of a Node** - the number of edges in a path from root to that node. Root node has a depth/level of 0
- **Height of a Binary Tree** - number of edges on the longest path from root to a leaf

## Properties of Binary Tree
- The maximum number of nodes at level L of a binary tree is 2L.
- The maximum number of nodes in a binary tree of height H is 2H+1 – 1.
- Total number of leaf nodes in a binary tree = total number of nodes with 2 children + 1.
- In a Binary Tree with N nodes, the minimum possible height or the minimum number of levels is ⌊log2N⌋.
- A Binary Tree with L leaves has at least ⌈log2L⌉+ 1 levels.

## Advantages
- Memory efficiency
- Effienct search - binary search are easier to search compared to arrays and linked list
- Easy to implement
## Disadvantages
- Limited structure - can only contain at mode two child nodes
- Space inefficiency - each node requires two child references or pointers which takes up more space in large structures
## Applications
- Represent hierarchical data
- Huffman coding trees are used in data compression algorithms
- Implementation of decision trees a machine learning algorithm for classification and regression analysis
- DOM in HTML - help manage the hierarchical structure of web pages
- File explorer - organize file system for efficient navigation
- Expression Evaluation: Used in calculators and compilers to evaluate arithmetic expressions.
- Routing Algorithms: Support decision-making in network routing.
### Hierarchical Data Representation
- File Systems & Folder Structures: Organize files and directories.
- Organizational Charts: Represent corporate or institutional hierarchies.
- XML/HTML Parsing: Process structured data in documents.

## Types of binary tree
### 1. Based on the number of children
#### Full/proper binary tree
- Every node has 0 or 2 children
- All nodes have exactly 2 children except the leaves
[Full binary tree](/assets/images/full-binary-tree.webp)
#### Degenerate/pathological binary tree
- Every internal node has one child
- Have a single child either on the left or the right
- Performance wise same as linked list
[Degenerate binary tree](/assets/images/degenerate-binary-tree.webp)
#### Skewed binary tree
- Degenerate binary tree in which the tree is dominated on either the right or left nodes
- two types of skew binary tree, Left skewed binary tree and right skewed binary tree

[Skewed binary tree](/assets/images/skewed-binary-tree.webp)
### 2. Based of level completion
#### Complete binary tree
- All the levels are filled except the lest level, last level is filled from the left side
- Similar to a full binary tree except: 
  - All levels are completely filled, except the last
  - The last elements must lean towards the left
[Complete binary tree](/assets/images/complete-binary-tree.webp)
#### Perfect Binary Tree
- All the internal nodes have two children and all leaf nodes are at the same level
- The number of leaf node is the number of internal nodes plus 1
#### Balanced Binary Tree
- height is O(log n), n being the number of nodes
- Ensures that the difference btw the left and right subtree is at most 1 eg AVL tree
- Following is an example of balanced binary tree. Here, d = depth of node = |Height of Left child - Height of Right child|.
[Balanced Binary Tree](/assets/images/balanced-binary-tree.webp)
### 3. Basis of node values
- Include:
- Binary Search Tree
- AVL Tree
- Red Black Tree
- B Tree
- B+ Tree
[Special types binary trees](/assets/images/special-type-binary-tree.webp)
#### Binary search tree
- The left subtree contains only nodes with keys lesser than the node's key 
- The right subtree contains only nodes with keys greater than node's key
- Left and right subtree must also be an binary search tree
- Rnable fast search, insertion and deletions in O(log n) time

#### AVL tree
- Self balanced binary search tree(BST)
- Difference btw left and right subtrees of all nodes is at most 1
[AVL tree](/assets/images/AVL-tree.webp)
#### Red black tree
- Self balancing binary search tree
- Each node has an extra bit interpreted as a color(red or black)
- Color ensures that the tree remains balanced during insertions and deletions
- Athough the tree is not perfectly balanced the its good enough to reduce search time and maintain it at O(log n) time , n is the number of items in the tree
[Red blavk tree](/assets/images/red-black-tree.webp)
#### B- tree
- Selft balancing search tree designed for efficient insertions, deletion and search operations in disk based systems
- Each node can have multiple keys and children 
- keys within a node are sorted
- Subtrees btw keys hold values within that key range
- This structure maintains balance and minimizes height for fast access even with large datasets
#### B+ tree
- Extension of B tree where all the data is stored only in the leaf nodes
- While internal nodes store keys only for indexing
- Leaf nodes are linked sequentially allowing efficient range queries and ordered traversal

## Enumerations
## Basic operations
### Inorder traversal(Left ->Root -> Right)
- First traverse the left subtree, the visit the node its self and finally the right subtree




