// Problem #: 83
// Title: Remove Duplicates from Sorted List
// Difficulty: Easy
var deleteDuplicates = function(head) {
    if(!head) return null;

    // create a new node to store the result
    let curr = head;

    // loop through the list
    while(curr.next){
        // if the current node's value is equal to the next node's value
        if (curr.val === curr.next.val)
            // delete the next node
            curr.next = curr.next.next;
        else
            // otherwise, move to the next node
            curr = curr.next;
    }

    // return the result node (the first node)
    return head;
}