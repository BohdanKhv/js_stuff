// Problem #: 404
// Title: Sum of Left Leaves
// Difficulty: Easy
var sumOfLeftLeaves = function(root) {
    if(!root) return 0

    const stack = [root];
    let counter = 0;

    while(stack.length > 0) {
        const current = stack.pop();

        if(current.left) {
            stack.push(current.left);

            // If left is a leaf, add to counter
            if(!current.left.left && !current.left.right) counter += current.left.val;
        }
        if(current.right) stack.push(current.right);
    }

    return counter;
};

// Traverse solution
var sumOfLeftLeaves = function(root) {
    if(!root) return 0

    let counter = 0;

    const traverse = (node) => {
        if(node.left) {
            if(!node.left.left && !node.left.right) counter += node.left.val;
            traverse(node.left);
        }
        
        if(node.right) traverse(node.right)
    }

    traverse(root);

    return counter;
};

// Recursive solution
var sumOfLeftLeaves = function(root) {
    if(!root) return 0;
    if(!root.left && !root.right) return 0;
    if(root.left && !root.left.left && !root.left.right) return root.left.val + sumOfLeftLeaves(root.right);
    return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}