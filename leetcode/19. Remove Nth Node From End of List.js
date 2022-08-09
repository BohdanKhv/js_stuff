// Problem #: 19
// Title: Remove Nth Node From End of List
// Difficulty: Medium
var removeNthFromEnd = function(head, n) {
    let count = 0;
    let pos = 0;
    let temp = head;
    let curr = head;

    // Count the number of nodes in the list
    while(temp) {
        temp = temp.next;
        count++;
    }

    // Get the position of the node to be removed from the front of the list
    pos = count - n;
    // reset count to 1
    count = 1;

    // If the node is the first node in the list, remove it
    if(pos === 0) return head = head.next;

    // Get the node at the position
    while(count <= pos) {
        if(count === pos) {
            // Set the previous node's next to the current node's next
            curr.next = curr.next.next; 
            curr = curr.next
        } else {
            // Move to the next node
            curr = curr.next
        }
        count++;
    }
    
    return head;
};

// Faster solution
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let first = dummy;
    let second = dummy;

    // Move first n nodes
    for(let i = 0; i < n + 1; i++) {
        // Move first pointer to the next node
        first = first.next;
    }

    // Move first and second until first hits the end of the list
    while(first) {
        // Move first and second pointers forward
        first = first.next;
        // Move second pointer to the next node
        second = second.next;
    }

    // Remove the node at the end of the list
    second.next = second.next.next;

    // Return the dummy node's next node
    return dummy.next;
}