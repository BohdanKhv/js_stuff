// Problem #: 206
// Title: Reverse Linked List
// Difficulty: Easy
var reverseList = function(head) {
    let prev = null;
    let next = null;
    
    while(head) {
        // Save next, because we will lose it after reversing
        next = head.next;
        // Reverse the link
        head.next = prev;
        // Move prev and head forward
        prev = head;
        // Move head to next
        head = next;
    }

    // Return the new head
    return prev;
}