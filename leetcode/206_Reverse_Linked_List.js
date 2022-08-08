// Problem #: 206
// Title: Reverse Linked List
// Difficulty: Easy
var reverseList = function(head) {
    let prev = null;
    let next = null;
    
    while(head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}