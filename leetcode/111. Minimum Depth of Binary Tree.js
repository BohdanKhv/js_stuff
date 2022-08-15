// Problem #: 111
// Title: Minimum Depth of Binary Tree
// Difficulty: Easy
var minDepth = function(root) {
    if(!root) return 0
    
    const queue = [root];
    const res = [];
    
    while(queue.length) {
        let len = queue.length;

        // Add all elements in the queue to the result array
        res.push(queue.map(node => node.val));

        // Loop through the queue and add all the children of the current node to the queue
        while(len--) {
            const current = queue.shift();

            // If the leaf was reached, return the result
            if(!current.left && !current.right) return res.length;

            if(current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);
        }
    }
};