// Problem #: 83
// Title: Remove Duplicates from Sorted List
// Difficulty: Easy
var deleteDuplicates = function(head) {
    if(!head) return null;
    
    let curr = head;
    
    while(curr.next){
        if (curr.val === curr.next.val)
            curr.next = curr.next.next;
        else
            curr = curr.next;
    }
    
    return head;
}