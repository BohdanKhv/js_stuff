// Problem #: 141
// Title: Linked List Cycle
// Difficulty: Easy
var hasCycle = function(head) {
    if(!head) return false

    let slow = head;
    let fast = head.next;

    while(slow.next && fast.next && fast.next.next) {
        if(slow === fast) return true
        slow = slow.next;
        fast = fast.next.next;
    }

    return false;
};