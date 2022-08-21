// Problem #: 203
// Title: Remove Linked List Elements
// Difficulty: Easy
var removeElements = function(head, val) {
    if(!head) return null

    // create a dummy node to store the head
    let dummy = new ListNode(0);
    // set the dummy node's next to the head
    dummy.next = head;
    // set the current node to the dummy node
    let curr = dummy;

    // loop through the linked list
    while(curr.next) {
        // if the current node's next's value is equal to the val
        // set the current node's next to the current node's next's next
        if(curr.next.val === val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    
    return dummy.next;
}