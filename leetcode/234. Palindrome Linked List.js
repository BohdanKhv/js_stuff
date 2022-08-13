// Problem #: 234
// Title: Palindrome Linked List
// Difficulty: Easy
var isPalindrome = function(head) {
    if( !head.next ) return true;

    const arr = [];

    while(head) {
        arr.push(head.val);
        head = head.next;
    }

    return _.isEqual( arr.slice( 0, arr.length / 2 ), arr.slice( Math.ceil( arr.length / 2 ), arr.length ).reverse() )
};