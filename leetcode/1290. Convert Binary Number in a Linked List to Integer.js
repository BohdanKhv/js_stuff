// Problem #: 1290
// Title: Convert Binary Number in a Linked List to Integer
// Difficulty: Easy
var getDecimalValue = function(head) {
    let result = 0;
    while(head) {
        result = result * 2 + head.val;
        head = head.next;
    }
    return result;
}

// Other Solution
var getDecimalValue = function(head) {
    let str = '';
    
    while(head) {
        str += head.val;
        head = head.next;
    }
    
    return parseInt(str, 2)
};