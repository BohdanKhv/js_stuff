class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Inserts a new node at the front of the list
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Inserts a new node at the end of the list
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, make a head
        if(!this.head) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.size++;
    }

    // Inserts a new node at the given index
    insertAtIndex(index, data) {
        // If index is out of range
        if(index > 0 && index > this.size) return

        // If index is 0 set it to head
        if(index === 0) 
            return this.insertFirst(data);

        const node = new Node(data);
        let current, prev;

        current = this.head;
        let count = 0;

        while(count < index) {
            prev = current;
            current = current.next;
            count++;
        }

        prev.next = node;
        node.next = current;
        this.size++;
    }

    // Removes the node at the front of the list
    removeFirst() {
        this.head = this.head.next;
        this.size--;

        return
    }

    // Removes the node at the end of the list
    removeLast() {
        if(this.size === 0) return

        let current = this.head;
        let prev;

        while(current) {
            if(!current.next) {
                prev.next = null;
                this.size--;

                return
            } else {
                prev = current;
                current = current.next;
            }
        }

        return
    }

    // Removes the node at the given index
    removeAtIndex(index) {
        if(index > 0 && index > this.size) return
        if(index === 0) {
            this.head = this.head.next;
            this.size--;

            return
        }

        let current = this.head;
        let count = 0;
        let prev;

        while(count < index) {
            prev = current;
            current = current.next;
            count++;
        }

        prev.next = current.next;
        this.size--;

        return
    }

    // Returns the node at the front of the list
    getFirst() {
        let head = this.head;
        console.log(head.val);

        return head;
    }

    // Returns the node at the end of the list
    getLast() {
        let prev;
        let tail = this.head;

        while(tail) {
            prev = tail;
            tail = tail.next;
        }
        console.log(prev.val);

        return prev;
    }

    // Returns the node at the given index
    getAtIndex(index) {
        // If index is out of range
        if(index > 0 && index >= this.size) return

        let current = this.head;
        let count = 0;
        while(count < index) {
            current = current.next;
            count++;
        }

        console.log(current.val)

        return current.next;
    }

    // Returns the length of the list
    getLength() {
        console.log(this.size);

        return this.size;
    }

    // Clears the list
    clearList() {
        this.head = null;
        this.size = 0;
        return
    }

    // Prints the list
    printList() {
        let current = this.head;
        let print = '';
        while(current) {
            print += `${current.val}${current.next ? ' => ' : '' }`;
            current = current.next;
        }
        console.log(print);

        return print;
    }

    // Reverse the list
    reverse() {
        let head = this.head;
        let prev;
        let next;

        while(head) {
            // save next before we overwrite node.next!
            next = head.next;

            // reverse pointer
            head.next = prev;

            // step forward in the list
            prev = head;
            head = next;
        }

        this.head = prev;

        return
    }
}


module.exports = LinkedList;