// Problem #: 235
// Title: Lowest Common Ancestor of a Binary Search Tree
// Difficulty: Easy

// Time Complexity: O(n), Space Complexity: O(n) where n is the number of nodes in the tree
var lowestCommonAncestor = function(root, p, q) {
    if(!root) return null;

    // If either of the nodes is the root, return the root
    if(root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
    if(root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);

    // If the root is between the two nodes, return the root
    return root;
}

// Other solutions:
// Time Complexity: O(n), Space Complexity: O(n) where n is the number of nodes in the tree
var lowestCommonAncestor = function(root, p, q) {
    let result = null;

    const dfs = (node) => {
        if(!node) return false;

        // recurse left
        let left = dfs(node.left);
        // recurse right
        let right = dfs(node.right);

        // if the node is one of the two nodes, return true
        let current = node === p || node === q;

        // True = 1, False = 0
        // If 2 out of 3 is true, update result
        if(left + right + current >= 2) result = node;

        // return true if one of the 2 nodes is true
        return left || right || current;
    }

    dfs(root);

    return result;
};