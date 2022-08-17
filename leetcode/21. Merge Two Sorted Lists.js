// Problem #: 21
// Title: Merge Two Sorted Lists
// Difficulty: Easy
var mergeTwoLists = function(l1, l2) {
    // Create a dummy node
    let newList = new ListNode(0);
    // Create a pointer to the dummy node
    let current = newList;

    while(l1 && l2) {
        if(l1.val < l2.val) {
            // Add l1 to new list
            current.next = l1;
            // Move l1 to next
            l1 = l1.next;
        } else {
            // Add l2 to new list
            current.next = l2;
            // Move l2 to next
            l2 = l2.next;
        }
        // Move current to next
        current = current.next;
    }

    // Add the remaining nodes to the new list
    current.next = l1 ? l1 : l2;
    return newList.next;
}

// Same solution
var mergeTwoLists = function(list1, list2) {
    const list = new ListNode(-Infinity);
    let dummy = list;
    
    while(list1 && list2) {
        if(list1.val <= list2.val) {
            dummy.next = list1;
            dummy = list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            dummy = list2;
            list2 = list2.next;
        }
    }
    
    if(!list1) dummy.next = list2;
    if(!list2) dummy.next = list1;
    
    return list.next;
};