// Problem #: 21
// Title: Merge Two Sorted Lists
// Difficulty: Easy
var mergeTwoLists = function(l1, l2) {
    let newList = new ListNode(0);
    let current = newList;

    while(l1 && l2) {
        if(l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

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