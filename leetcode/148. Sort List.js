// Problem #: 148
// Title: Sort List
// Difficulty: Medium
var sortList = function(head) {
    if(!head || !head.next) return head

    // divide the list into two halves
    // where slow is the first node of the second half
    // and head is the first node of the first half
    let curr = head;
    let slow = head;
    let fast = head;

    // find the middle node
    while(fast && fast.next) {
        curr = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // split the list into two halves
    curr.next = null;

    let left = sortList(head);
    let right = sortList(slow);

    // merge the two halves
    let dummy = new ListNode(0);
    let list = dummy;

    while(left && right) {
        if(left.val < right.val) {
            list.next = left;
            left = left.next;
        } else {
            list.next = right;
            right = right.next;
        }
        list = list.next;
    }

    if(left) list.next = left;
    if(right) list.next = right;

    // return the merged list
    return dummy.next;
};