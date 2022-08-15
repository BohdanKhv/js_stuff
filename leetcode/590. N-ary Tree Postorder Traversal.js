// Problem #: 590
// Title: N-ary Tree Postorder Traversal
// Difficulty: Easy
var postorder = function(root) {
    if(!root) return [];

    const result = [];

    const traverse = (node) => {
        if(node.children) {
            for(let i = 0; i < node.children.length; i++) {
                traverse(node.children[i]);
            }

            result.push(node.val);
        }
    }

    traverse(root);

    return result;
};