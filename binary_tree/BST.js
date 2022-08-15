class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Binary search tree
class BST {
    constructor(value) {
        this.root = new Node(value);
        this.count = 0;
    }

    size() {
        return this.count;
    }

    insert(value) {

        this.count++;
        let newNode = new Node(value);

        const searchTree = (node) => {
            // If value < node.val, go left
            if(value < node.val) {
                // If no left child, append new node
                // If left child, go left again
                if(!node.left)
                    node.left = newNode;
                else
                    searchTree(node.left);
            }
            // If value > node.val, go right
            else if(value > node.val) {
                // If no right child, append new node
                // If right child, go right again
                if(!node.right)
                    node.right = newNode;
                else
                    searchTree(node.right);
            }
        }

        searchTree(this.root);

    }

    min() {
        // Base case
        if(!this.root) return "Tree is empty";

        let current = this.root;

        // Continue traversing left until no more child
        while(current.left) {
            current = current.left;
        }

        return current.val;
    }

    max() {
        // Base case
        if(!this.root) return "Tree is empty";

        let current = this.root;

        // Continue traversing right until no more child
        while(current.right) {
            current = current.right;
        }

        return current.val;
    }

    contains(target) {
        // Base case
        if(!this.root) return "Tree is empty";

        let current = this.root;

        while(current) {
            if(target === current.val) return true;

            if(target < current.val)
                current = current.left;
            else
                current = current.right;
        }

        return false;
    }

    // Depth first search - Branch by branch

    // in-order
    // | left => middle => right |
    // 2, 3, 12, 15, 28, 36, 39
    dfsInOrder() {
        // Base case
        if(!this.root) return "Tree is empty";

        const result = [];

        const traverse = (node) => {
            // If left child exists, go left agin
            if(node.left) traverse(node.left);
            // Capture root node value
            result.push(node.val);
            // If right child exists, go right again
            if(node.right) traverse(node.right);
        }

        traverse(this.root);

        return result;

    }

    // pre-order
    // | left => right => middle |
    // 15, 3, 2, 12, 36, 28, 39
    dfsPreOrder() {
        // Base case
        if(!this.root) return "Tree is empty";

        const result = [];

        const traverse = (node) => {
            // Capture root node value
            result.push(node.val);
            // If left child exists, go left agin
            if(node.left) traverse(node.left);
            // If right child exists, go right again
            if(node.right) traverse(node.right);
        }

        traverse(this.root);

        return result;

    }

    // post-order
    // 2, 12, 3, 28, 39, 36, 15
    dfsPostOrder() {
        // Base case
        if(!this.root) return "Tree is empty";

        const result = [];

        const traverse = (node) => {
            // If left child exists, go left agin
            if(node.left) traverse(node.left);
            // If right child exists, go right again
            if(node.right) traverse(node.right);
            // Capture root node value
            result.push(node.val);
        }

        traverse(this.root);

        return result;

    }

    // Breadth first search - level by level
    // 15, 3, 36, 2, 12, 28, 39
    bfs() {
        // Base case
        if(!this.root) return "Tree is empty";

        const queue = [this.root];
        const result = [];

        while(queue.length > 0) {
            const current = queue.shift();

            result.push(current.val);

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }

        return result

    }
}

module.exports = BST;