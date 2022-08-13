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