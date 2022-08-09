// Problem #: 237
// Title: Delete Node in a Linked List
// Difficulty: Easy
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};