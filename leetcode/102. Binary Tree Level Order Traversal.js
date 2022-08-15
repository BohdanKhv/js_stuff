// Problem #: 102
// Title: Binary Tree Level Order Traversal
// Difficulty: Medium
var levelOrder = function(root) {
    if(!root) return []

    const result = [];
    const queue = [root];

    while(queue.length) {
        // Capture current level by getting the length of the queue
        let len = queue.length;

        // Create an array to hold the values of the current level
        result.push(queue.map(node => node.val));

        // Iterate through current level and add children to queue
        while(len--) {
            const current = queue.shift();

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }

    return result;
};