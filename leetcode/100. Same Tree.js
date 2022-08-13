// Problem #: 100
// Title: Same Tree
// Difficulty: Easy
var isSameTree = function(p, q) {
    if(!p && !q) return true
    else if((!p && !q) || (!q && p) || !p && q) return false

    const stack1 = [p];
    const stack2 = [q];
    
    while(stack1.length > 0) {
        const current1 = stack1.pop();
        const current2 = stack2.pop();

        // Check if both trees are the same
        if(current1.val != current2.val) return false
        if((current1.left && current1.left.val) != ( current2.left && current2.left.val)) return false
        if((current1.right && current1.right.val) != ( current2.right && current2.right.val)) return false
        
        // Push left children onto the stack
        if(current1.left) {
            stack1.push(current1.left);
            stack2.push(current2.left);
        }
        
        // Push right children onto the stack
        if(current1.right) {
            stack1.push(current1.right);
            stack2.push(current2.right);
        }
    }
    
    return true;
};