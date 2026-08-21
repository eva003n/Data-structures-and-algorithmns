class Node {
    constructor(item) {
        this.data = item;
        this.left = this.right = null;
    }
}

/*
                1
              /  \
            2     3
          /  \      \
         4    5      6


*/
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

root.right.right = new Node(6)

function inorderTraverse(node, res) {
    // until leaf node per sub tree
    if(node === null) return;
    inorderTraverse(node.left, res);

    res.push(node.data)
    inorderTraverse(node.right, res)


}

let res = [];
inorderTraverse(root, res);

console.log(res.join(" "));