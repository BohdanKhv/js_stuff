// Problem #: 876
// Problem Name: Middle of the Linked List
// Difficulty: Easy
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

// Other Solution
var middleNode = function(head) {
    let count = 0;
    let curr = head;

    while(head) {
        head = head.next;
        count++;
    }
    
    let a = Math.floor(count/2);
    while (a > 0) {
        curr = curr.next;
        a--;
    }
    
    return curr
};