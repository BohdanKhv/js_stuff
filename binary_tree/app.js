const BST = require('./BST');

// 15 is a root
const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

//         15
//        /  \
//       3    36
//     /  \  /   \
//    2   12 28  39

const size = bst.size();

const contains3 = bst.contains(3);
const contains5 = bst.contains(5);

const min = bst.min();
const max = bst.max();

const dfsInOrder = bst.dfsInOrder();
const dfsPreOrder = bst.dfsPreOrder();
const dfsPostOrder = bst.dfsPostOrder();
const bfs = bst.bfs();

console.log("Size: " + size);
console.log("Contains 3: " + contains3, ", Contains 5: " + contains5);
console.log('Min: ' + min, 'Max: ' + max);

console.log("Depth first search in-order: " + dfsInOrder);
console.log("Depth first search pre-order: " + dfsPreOrder);
console.log("Depth first search post-order: " + dfsPostOrder);
console.log("Breadth first search: " + bfs);