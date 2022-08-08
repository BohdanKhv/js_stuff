// Problem #: 142
// Title: Linked List Cycle II
// Difficulty: Medium
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    let pointer = null;
    
    while(fast && fast.next && !pointer) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow) pointer = head
    }
    
    while(pointer) {
        if ( pointer === slow ) return slow
        pointer = pointer.next;
        slow = slow.next;
    }
    
    return null
};

// Other solution
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            let temp = head;
            while (temp !== slow) {
                temp = temp.next;
                slow = slow.next;
            }
            return temp;
        }
    }
    return null;
}